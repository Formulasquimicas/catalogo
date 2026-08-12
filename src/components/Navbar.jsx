import { useState } from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Navbar() {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

  const irAUbicacion = () => {
    const el = document.getElementById("ubicacion");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0 border-b-2 border-blue-100">
      {/* Barra superior con info */}
      <div className="bg-blue-700 text-white text-xs sm:text-sm py-2 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-1 sm:gap-4">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span className="hidden sm:inline">+(504) 2237-0937</span>
              <span className="sm:hidden">2237-0937</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-2">
                <span>📧</span>
                <span className="hidden sm:inline">formulas_quimicas@yahoo.com</span>
                <span className="sm:hidden">Contáctanos</span>
              </span>
              <button
                type="button"
                onClick={irAUbicacion}
                aria-label="Cómo llegar: ver ubicación y mapa"
                className="flex items-center gap-1 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded"
              >
                <span aria-hidden="true">📍</span>
                <span>Cómo llegar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo y título */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
            <img
              src="/logonuevo.png"
              alt="Logo Fórmulas Químicas"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-blue-700">Fórmulas Químicas</h1>
              <p className="text-xs text-gray-500">N° 1 EN SERVICIO Y CALIDAD</p>
            </div>
            <h1 className="sm:hidden text-base font-bold text-blue-700">F. Químicas</h1>
          </Link>

          {/* Búsqueda - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl">
            <Buscador />
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Búsqueda móvil */}
            <button
              onClick={() => setMostrarBusqueda((v) => !v)}
              className="md:hidden bg-blue-100 text-blue-700 p-2.5 rounded-lg hover:bg-blue-200 transition-colors"
              aria-label="Buscar"
              aria-expanded={mostrarBusqueda}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/50432370262"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg active:scale-95"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
        </div>

        {/* Búsqueda móvil expandible */}
        {mostrarBusqueda && (
          <div className="md:hidden mt-3">
            <Buscador autoFocus onNavegar={() => setMostrarBusqueda(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
