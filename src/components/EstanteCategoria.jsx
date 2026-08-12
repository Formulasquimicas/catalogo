import { useRef, useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { nombreCategoria } from "../utils/categorias";
import { useReveal, revealClass } from "../utils/useReveal";

/**
 * Estante (shelf) de una categoría:
 * - Encabezado: nombre + cantidad + "Ver todos ›" (reusa el filtro por categoría).
 * - Fila horizontal desplazable con scroll-snap nativo (sin librerías).
 * - Flechas izq/der y degradados que aparecen SOLO si la fila se puede desplazar
 *   y según la posición del scroll. Pista "Desliza" en móvil.
 * - Divisor superior entre categorías.
 * - Respeta prefers-reduced-motion.
 */
function EstanteCategoria({ categoria, productos, onVerTodos }) {
  const scrollRef = useRef(null);
  const [puedeIzq, setPuedeIzq] = useState(false);
  const [puedeDer, setPuedeDer] = useState(false);

  const actualizarFlechas = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPuedeIzq(el.scrollLeft > 4);
    setPuedeDer(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    actualizarFlechas();

    el.addEventListener("scroll", actualizarFlechas, { passive: true });
    // Recalcula cuando la fila cambia de tamaño (incluye cuando content-visibility
    // la renderiza al entrar en pantalla) o al redimensionar la ventana.
    const ro = new ResizeObserver(actualizarFlechas);
    ro.observe(el);
    window.addEventListener("resize", actualizarFlechas);

    return () => {
      el.removeEventListener("scroll", actualizarFlechas);
      ro.disconnect();
      window.removeEventListener("resize", actualizarFlechas);
    };
  }, [actualizarFlechas, productos]);

  const desplazar = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: reduce ? "auto" : "smooth" });
  };

  const esDesplazable = puedeIzq || puedeDer;

  const etiqueta = nombreCategoria(categoria); // solo para mostrar
  const [revealRef, revealVisible] = useReveal();

  return (
    <section
      ref={revealRef}
      className={`mb-8 sm:mb-10 pt-6 sm:pt-8 border-t border-gray-200 first:border-t-0 first:pt-0 [content-visibility:auto] [contain-intrinsic-size:auto_460px] ${revealClass(revealVisible)}`}
    >
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {etiqueta}
          <span className="ml-2 text-sm font-semibold text-gray-400">
            ({productos.length})
          </span>
        </h3>

        <div className="flex items-center gap-3">
          {/* Pista de scroll (desktop) */}
          {esDesplazable && (
            <span className="hidden sm:inline text-xs font-medium text-gray-400">
              Desliza →
            </span>
          )}
          <button
            onClick={() => onVerTodos(categoria)}
            aria-label={`Ver todos los productos de ${etiqueta}`}
            className="flex-shrink-0 text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            Ver todos ›
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 hide-scrollbar motion-safe:scroll-smooth"
        >
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="snap-start flex-none w-[65%] sm:w-[45%] md:w-[31%] lg:w-[23%]"
            >
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>

        {/* Degradado izquierdo (solo si hay algo a la izquierda) */}
        {puedeIzq && (
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent" />
        )}
        {/* Degradado derecho (solo si hay algo a la derecha) */}
        {puedeDer && (
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent" />
        )}

        {/* Flecha izquierda (desktop, solo si se puede) */}
        {puedeIzq && (
          <button
            onClick={() => desplazar(-1)}
            aria-label={`Desplazar la fila de ${etiqueta} hacia la izquierda`}
            className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-blue-700 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Flecha derecha (desktop, solo si se puede) */}
        {puedeDer && (
          <button
            onClick={() => desplazar(1)}
            aria-label={`Desplazar la fila de ${etiqueta} hacia la derecha`}
            className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-blue-700 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Pista de scroll (móvil, donde no hay flechas) */}
      {esDesplazable && (
        <p className="sm:hidden text-xs text-gray-400 mt-1.5 text-center">
          Desliza para ver más →
        </p>
      )}
    </section>
  );
}

export default EstanteCategoria;
