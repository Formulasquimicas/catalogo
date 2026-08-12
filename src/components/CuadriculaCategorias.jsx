import { useMemo } from "react";
import {
  LayoutGrid,
  FlaskConical,
  SprayCan,
  Brush,
  Car,
  ScrollText,
  Sparkles,
  Eraser,
  Shirt,
  Bath,
  Wind,
  Bug,
  WashingMachine,
  Package,
  Droplet,
  AirVent,
} from "lucide-react";
import { nombreCategoria } from "../utils/categorias";

/**
 * Mapa nombre_de_categoría (INTERNO/original) → ícono de lucide-react.
 * Las claves son el string interno de `p.categoria` (no el nombre visible).
 * Toda categoría que no esté aquí usa ICONO_DEFECTO.
 */
const ICONOS_CATEGORIA = {
  "Todos": LayoutGrid,
  "Alcoholes": FlaskConical,
  "Desinfectantes para pisos": SprayCan,
  "Detergentes y jabones": WashingMachine,
  "Utensilios de limpieza": Brush,
  "Car Wash": Car,
  "Papel y desechables": ScrollText,
  "Bolsas y plásticos": Package,
  "Cloros y blanqueadores": Droplet,
  "Desengrasantes y desmanchadores": Eraser,
  "Control de olores": AirVent,
  "Suavizantes": Shirt,
  "Shampoo y acondicionadores": Bath,
  "Ambientadores": Wind,
  "Insecticidas": Bug,
  "Cera liquida": Sparkles,
};

const ICONO_DEFECTO = Package;

/**
 * Cuadrícula de categorías como selector de filtro.
 * NO duplica la lógica de filtrado: solo llama a `onSeleccionar` (el mismo
 * setter de estado que ya usa Galeria). El conteo se calcula desde los datos.
 */
function CuadriculaCategorias({ categorias, productos, seleccionada, onSeleccionar }) {
  // Conteo de productos por categoría (a partir de los datos).
  const conteos = useMemo(() => {
    const m = {};
    for (const p of productos) m[p.categoria] = (m[p.categoria] || 0) + 1;
    return m;
  }, [productos]);

  return (
    <div className="overflow-x-auto hide-scrollbar snap-x -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
      {/* Carril de 2 filas, desplazable en horizontal y centrado cuando cabe */}
      <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-2 sm:gap-3 w-max mx-auto">
        {categorias.map((cat) => {
          const seleccionado = seleccionada === cat;
          const cantidad = cat === "Todos" ? productos.length : conteos[cat] || 0;
          const Icono = ICONOS_CATEGORIA[cat] || ICONO_DEFECTO;
          const etiqueta = nombreCategoria(cat); // solo para mostrar
          const etiquetaCantidad = `${cantidad} producto${cantidad === 1 ? "" : "s"}`;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSeleccionar(cat)}
              aria-pressed={seleccionado}
              aria-label={
                cat === "Todos"
                  ? `Ver todos los productos, ${etiquetaCantidad}`
                  : `Filtrar por ${etiqueta}, ${etiquetaCantidad}`
              }
              className={`
                group snap-start flex flex-col items-center text-center gap-1 w-24 sm:w-28 p-2 sm:p-2.5
                rounded-xl border-2 transition-all motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                ${
                  seleccionado
                    ? "border-blue-700 bg-blue-50 shadow-md"
                    : "border-transparent bg-white shadow-sm hover:shadow-md hover:border-blue-200 active:scale-95"
                }
              `}
            >
              {/* Ícono dentro de un cuadrito redondeado */}
              <span
                aria-hidden="true"
                className={`
                  flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-colors
                  ${
                    seleccionado
                      ? "bg-blue-700 text-white"
                      : "bg-blue-50 text-blue-700 group-hover:bg-blue-100"
                  }
                `}
              >
                <Icono className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
              </span>

              {/* Nombre de la categoría */}
              <span
                className={`text-[11px] sm:text-xs font-bold leading-tight line-clamp-2 min-h-[2.4em] ${
                  seleccionado ? "text-blue-800" : "text-gray-800"
                }`}
              >
                {etiqueta}
              </span>

              {/* Cantidad de productos */}
              <span className="text-[10px] text-gray-500">{etiquetaCantidad}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CuadriculaCategorias;
