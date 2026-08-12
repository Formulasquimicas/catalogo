import { useReveal, revealClass } from "../utils/useReveal";

/**
 * Envuelve contenido con una animación de aparición (fade-up) al hacer scroll.
 * Respeta prefers-reduced-motion. `delay` (ms) permite escalonar apariciones.
 */
function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${revealClass(visible)} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
