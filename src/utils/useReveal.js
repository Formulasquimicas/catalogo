import { useRef, useState, useEffect } from "react";

/**
 * Hook de "aparición al hacer scroll".
 * Devuelve [ref, visible]. Cuando el elemento entra al viewport, `visible` pasa a
 * true (una sola vez). Respeta prefers-reduced-motion: si el usuario prefiere
 * menos movimiento, aparece de inmediato sin animar.
 */
export function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin animación si el usuario prefiere menos movimiento.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Fallback: si el navegador no soporta IntersectionObserver, mostrar ya
    // (nunca dejar contenido invisible).
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px", ...(options || {}) }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible];
}

/** Clases de transición fade-up según el estado visible. */
export function revealClass(visible) {
  return `transition-all duration-700 ease-out motion-reduce:transition-none ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;
}
