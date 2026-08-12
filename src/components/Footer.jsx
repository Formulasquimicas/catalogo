function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-700 mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo + descripción */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <img
            src="/logotipo.png"
            alt="Fórmulas Químicas"
            className="w-36 sm:w-40 h-auto"
          />
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mt-1">
            Calidad y confianza en productos químicos desde hace más de 30 años.
          </p>
        </div>

        {/* Secciones de información */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">

          {/* Contacto */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4 border-b-2 border-blue-600 pb-1.5 text-blue-800">
              CONTACTO
            </h3>
            <div className="space-y-3 text-gray-700 text-sm w-full flex flex-col items-center sm:items-start">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+(504) 2237-0937</span>
              </p>

              <p className="flex items-center gap-2 break-all">
                <svg className="w-5 h-5 flex-shrink-0 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>formulas_quimicas@yahoo.com</span>
              </p>

              <a
                href="https://wa.me/50432370262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm font-semibold w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 flex-shrink-0">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4 border-b-2 border-blue-600 pb-1.5 text-blue-800">
              HORARIO
            </h3>
            <div className="space-y-2 text-gray-700 text-sm w-full max-w-[240px]">
              <div className="flex justify-between gap-3">
                <span>Lunes a Viernes</span>
                <span className="font-semibold text-gray-900">7:30 – 4:00</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Sábado</span>
                <span className="font-semibold text-gray-900">8:00 – 12:00</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Domingo</span>
                <span className="font-semibold text-red-600">Cerrado</span>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div id="ubicacion" className="scroll-mt-28 flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4 border-b-2 border-blue-600 pb-1.5 text-blue-800">
              UBICACIÓN
            </h3>
            <div className="flex items-start gap-2 text-gray-700 text-sm max-w-xs">
              <svg className="w-5 h-5 flex-shrink-0 text-blue-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">
                Avenida Lempira, casa 411, atrás de Los Dolores, frente al antiguo María Auxiliadora.
              </span>
            </div>
            <a
              href="https://maps.app.goo.gl/WhDWRes8aHADNqKZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 hover:underline text-sm font-semibold mt-3 inline-flex items-center gap-1"
            >
              Cómo llegar <span aria-hidden="true">→</span>
            </a>

            {/* Redes */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Síguenos</p>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.facebook.com/share/1CbFDc9KNs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Facebook"
                >
                  <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Ubicación Fórmulas Químicas"
            src="https://maps.google.com/maps?q=14.1094474,-87.2069302&z=17&output=embed"
            className="w-full h-56 sm:h-64 lg:h-72 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 my-4 sm:my-6"></div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-500">
          <p className="mb-1 sm:mb-2">Derechos Reservados © {new Date().getFullYear()} | FÓRMULAS QUÍMICAS</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Hecho con ❤️ en Honduras</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;