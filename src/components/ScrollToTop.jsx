import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // SIEMPRE que cambie la ruta, hacemos esto:
    
    if (pathname === '/') {
      // Caso 1: Estamos en la GALERÍA
      const pos = sessionStorage.getItem('homeScroll');
      
      if (pos) {
        // Si hay una posición guardada, restauramos
        const scrollPos = parseInt(pos);
        
        // Lo intentamos varias veces para asegurar
        setTimeout(() => window.scrollTo(0, scrollPos), 0);
        setTimeout(() => window.scrollTo(0, scrollPos), 50);
        setTimeout(() => window.scrollTo(0, scrollPos), 150);
        setTimeout(() => window.scrollTo(0, scrollPos), 300);
        
        // Limpiamos
        sessionStorage.removeItem('homeScroll');
      }
    } else {
      // Caso 2: Estamos en DETALLE (o cualquier otra página)
      // Vamos al top
      window.scrollTo(0, 0);
    }

    // Al desmontar (cuando sales de esta ruta), guardamos posición
    return () => {
      if (pathname === '/') {
        // Solo guardamos si estamos saliendo de la galería
        const currentScroll = window.scrollY;
        if (currentScroll > 0) {
          sessionStorage.setItem('homeScroll', currentScroll.toString());
        }
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;