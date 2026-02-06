function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src="/logo-footer.png" 
              alt="Fórmulas Químicas" 
              className="w-44 sm:w-52 lg:w-56 h-auto mb-3 sm:mb-4"
            />
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed max-w-xs">
              Calidad y confianza en productos químicos desde hace más de 30 años.
            </p>
          </div>

          {/* Contacto */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 border-b-2 border-blue-700 pb-2 inline-block">
              CONTACTO
            </h3>
            <div className="space-y-2 sm:space-y-3 text-blue-100 text-sm sm:text-base">
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs sm:text-sm">+(504) 2237-0937</span>
              </p>
              
              <p className="flex items-center justify-center sm:justify-start gap-2 break-all">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs sm:text-sm">formulas_quimicas@yahoo.com</span>
              </p>

              <a
                href="https://wa.me/50432370262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 sm:mt-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base font-semibold w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Información */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 border-b-2 border-blue-700 pb-2 inline-block">
              INFORMACIÓN
            </h3>
            <div className="space-y-1.5 sm:space-y-2 text-blue-100 text-xs sm:text-sm">
              <p>✓ Dudas y cotizaciones</p>
              <p>✓ Atención personalizada</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 border-b-2 border-blue-700 pb-2 inline-block">
              SÍGUENOS
            </h3>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.facebook.com/share/1CbFDc9KNs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 p-2.5 sm:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                aria-label="Facebook"
              >
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-blue-800 my-4 sm:my-6"></div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-blue-300">
          <p className="mb-1 sm:mb-2">Derechos Reservados © {new Date().getFullYear()} | FÓRMULAS QUÍMICAS</p>
          <p className="text-[10px] sm:text-xs text-blue-400">Hecho con ❤️ en Honduras</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;