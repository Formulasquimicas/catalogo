import { useState, useRef, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import productos from "../data/productos";
import { filtrarProductos, obtenerTerminos, normalizar } from "../utils/buscar";
import { nombreCategoria } from "../utils/categorias";

const MAX_VISIBLES = 8;

/** Resalta las palabras que coinciden con algún término (sin acentos). */
function resaltar(texto, terminos) {
  if (terminos.length === 0) return texto;
  return texto.split(/(\s+)/).map((parte, i) => {
    if (/^\s+$/.test(parte)) return parte;
    const n = normalizar(parte);
    const coincide = terminos.some((t) => n.includes(t));
    return coincide ? (
      <mark key={i} className="bg-yellow-100 text-inherit rounded px-0.5">
        {parte}
      </mark>
    ) : (
      parte
    );
  });
}

/**
 * Buscador accesible (patrón combobox + listbox).
 * - Filtra sin acentos, por nombre/categoría/presentación y multi-palabra.
 * - Teclado: ↑/↓ mueven, Enter abre el resaltado o va a resultados, Esc cierra.
 * - Enter sin selección → navega a /?q=... (grid de resultados en Galeria).
 * - onNavegar(): callback opcional (para cerrar el buscador móvil).
 */
function Buscador({ autoFocus = false, onNavegar }) {
  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState(-1);
  const contenedorRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const idBase = useId();
  const listboxId = `${idBase}-listbox`;

  const consulta = busqueda.trim();
  const resultados = consulta ? filtrarProductos(productos, busqueda) : [];
  const visibles = resultados.slice(0, MAX_VISIBLES);
  const hayMas = resultados.length > MAX_VISIBLES;
  const terminos = obtenerTerminos(busqueda);
  const panelAbierto = abierto && consulta.length > 0;

  // Cerrar al hacer clic fuera del buscador.
  useEffect(() => {
    function alClickFuera(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setAbierto(false);
      }
    }
    document.addEventListener("mousedown", alClickFuera);
    return () => document.removeEventListener("mousedown", alClickFuera);
  }, []);

  const cambiar = (e) => {
    setBusqueda(e.target.value);
    setAbierto(true);
    setActivo(-1);
  };

  const limpiar = () => {
    setBusqueda("");
    setActivo(-1);
    setAbierto(false);
  };

  const irADetalle = (prod) => {
    limpiar();
    onNavegar?.();
    navigate(`/producto/${prod.id}`);
  };

  const verTodosLosResultados = () => {
    if (!consulta) return;
    limpiar();
    onNavegar?.();
    navigate(`/?q=${encodeURIComponent(consulta)}`);
  };

  const alTeclado = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAbierto(true);
      setActivo((i) => Math.min(i + 1, visibles.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActivo((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activo >= 0 && visibles[activo]) irADetalle(visibles[activo]);
      else verTodosLosResultados();
    } else if (e.key === "Escape") {
      limpiar();
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative" ref={contenedorRef}>
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={panelAbierto}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={activo >= 0 ? `${listboxId}-op-${activo}` : undefined}
        aria-label="Buscar productos"
        value={busqueda}
        onChange={cambiar}
        onFocus={() => consulta && setAbierto(true)}
        onKeyDown={alTeclado}
        autoFocus={autoFocus}
        placeholder="¿Qué producto buscas?"
        className="w-full px-4 py-3 pl-12 pr-12 rounded-xl text-gray-800 border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
      />

      {/* Ícono de búsqueda */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      {/* Botón limpiar */}
      {busqueda && (
        <button
          type="button"
          onClick={limpiar}
          aria-label="Limpiar búsqueda"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          ✕
        </button>
      )}

      {/* Anuncio para lectores de pantalla */}
      <span className="sr-only" role="status" aria-live="polite">
        {panelAbierto
          ? `${resultados.length} resultado${resultados.length === 1 ? "" : "s"} para ${consulta}`
          : ""}
      </span>

      {/* Panel de resultados */}
      {panelAbierto && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl max-h-[70vh] overflow-y-auto z-50 border-2 border-gray-100">
          {resultados.length === 0 ? (
            <p className="p-6 text-center text-gray-600">No se encontraron productos</p>
          ) : (
            <>
              <ul id={listboxId} role="listbox" aria-label="Resultados de búsqueda">
                {visibles.map((prod, idx) => (
                  <li
                    key={prod.id}
                    id={`${listboxId}-op-${idx}`}
                    role="option"
                    aria-selected={activo === idx}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      irADetalle(prod);
                    }}
                    onMouseEnter={() => setActivo(idx)}
                    className={`flex items-center gap-3 px-4 py-3 border-b cursor-pointer transition-colors ${
                      activo === idx ? "bg-blue-50" : "hover:bg-blue-50"
                    }`}
                  >
                    <img
                      src={prod.imagen}
                      alt=""
                      className="w-12 h-12 object-contain bg-gray-50 rounded-lg shadow-sm flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 line-clamp-1">
                        {resaltar(prod.nombre, terminos)}
                      </p>
                      <p className="text-sm text-gray-500">{nombreCategoria(prod.categoria)}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                ))}
              </ul>

              {/* Ver todos los resultados en cuadrícula */}
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  verTodosLosResultados();
                }}
                className="block w-full text-center px-4 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {hayMas
                  ? `Ver los ${resultados.length} resultados →`
                  : "Ver resultados en la página →"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Buscador;
