import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import productos from "../data/productos";
import { nombreCategoria } from "../utils/categorias";

// Si ningún producto tiene `destacado: true`, se usan estos ids como respaldo.
const IDS_RESPALDO = [10, 1, 22, 21, 17];
const INTERVALO_MS = 5000;

function obtenerDestacados() {
  const marcados = productos.filter((p) => p.destacado);
  if (marcados.length > 0) return marcados;
  return IDS_RESPALDO.map((id) => productos.find((p) => p.id === id)).filter(Boolean);
}

/**
 * Carrusel de productos destacados con autoplay.
 * - Autoplay cada 5s; se pausa al pasar el mouse o al enfocar dentro.
 * - Respeta prefers-reduced-motion (sin autoplay ni animación).
 * - Flechas y puntos accesibles; solo la diapositiva activa es enfocable.
 */
function CarruselDestacados() {
  const destacados = obtenerDestacados();
  const total = destacados.length;
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  const irA = (i) => setIndice(((i % total) + total) % total);

  useEffect(() => {
    if (total <= 1 || pausado) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setIndice((i) => (i + 1) % total), INTERVALO_MS);
    return () => clearInterval(t);
  }, [pausado, total]);

  if (total === 0) return null;

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Productos destacados"
      className="relative"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      {/* Viewport */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-white">
        <div
          className="flex motion-safe:transition-transform motion-safe:duration-500 ease-out"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {destacados.map((prod, i) => {
            const activa = i === indice;
            const tab = activa ? 0 : -1;
            return (
              <div
                key={prod.id}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${total}: ${prod.nombre}`}
                aria-hidden={!activa}
                className="w-full flex-none"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 items-center p-4 sm:p-8">
                  {/* Imagen */}
                  <Link
                    to={`/producto/${prod.id}`}
                    tabIndex={tab}
                    className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
                      <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                        <Star className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                        Destacado
                      </span>
                      <img
                        src={prod.imagen}
                        alt={prod.nombre}
                        loading={i <= 1 ? "eager" : "lazy"}
                        className="w-full h-full object-contain p-4 sm:p-6"
                      />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="text-center sm:text-left">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-lg mb-2">
                      {nombreCategoria(prod.categoria)}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {prod.nombre}
                    </h3>
                    {prod.presentacion && (
                      <p className="text-sm text-gray-500 mb-4">📦 {prod.presentacion}</p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link
                        to={`/producto/${prod.id}`}
                        tabIndex={tab}
                        className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Ver Detalles
                      </Link>
                      <a
                        href={`https://wa.me/50432370262?text=Hola, me interesa: ${prod.nombre}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={tab}
                        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        💬 Consultar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flechas */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => irA(indice - 1)}
            aria-label="Producto destacado anterior"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-blue-700 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => irA(indice + 1)}
            aria-label="Producto destacado siguiente"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-blue-700 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Puntos indicadores */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {destacados.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irA(i)}
              aria-label={`Ir al destacado ${i + 1} de ${total}`}
              aria-current={i === indice}
              className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                i === indice ? "w-6 bg-blue-700" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CarruselDestacados;
