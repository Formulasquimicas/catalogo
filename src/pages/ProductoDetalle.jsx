import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import productos from "../data/productos";

function ProductoDetalle() {
  const { id } = useParams();
  const [imagenCargada, setImagenCargada] = useState(false);
  const [tabActiva, setTabActiva] = useState("info");
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Producto no encontrado</h2>
          <p className="text-gray-600 mb-6">Este producto no existe o fue eliminado</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-all shadow-lg"
          >
            ← Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <Link to="/" className="hover:text-blue-700 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-400">{producto.categoria}</span>
            <span>/</span>
            <span className="text-blue-700 font-semibold truncate max-w-[150px] sm:max-w-none">{producto.nombre}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          
          {/* Columna Izquierda - Imagen */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8">
              {/* Skeleton */}
              {!imagenCargada && (
                <div className="w-full aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl" />
              )}
              
              <img
                src={producto.imagen}
                alt={producto.nombre}
                loading="eager"
                onLoad={() => setImagenCargada(true)}
                className={`w-full max-h-[500px] object-contain transition-opacity duration-500 ${
                  imagenCargada ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              />
              
              {/* Badge */}
              <div className="mt-6 flex justify-center">
                <span className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  {producto.categoria}
                </span>
              </div>
            </div>

            {/* Botón flotante WhatsApp - Solo móvil */}
            <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
              <a
                href={`https://wa.me/50432370262?text=Hola, necesito información sobre: ${producto.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-2xl w-full transition-all active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Consultar Precio
              </a>
            </div>
          </div>

          {/* Columna Derecha - Info */}
          <div className="space-y-6 pb-24 lg:pb-0">
            
            {/* Título y presentación */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {producto.nombre}
              </h1>
              
              {producto.presentacion && (
                <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Presentación</p>
                    <p className="text-base sm:text-lg font-bold text-blue-700">{producto.presentacion}</p>
                  </div>
                </div>
              )}

              {/* CTAs principales - Desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-3 mt-6">
                <a
                  href={`https://wa.me/50432370262?text=Hola, necesito cotización para empresa: ${producto.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <span>💼</span>
                  Cotizar 
                </a>
                <a
                  href={`https://wa.me/50432370262?text=Hola, me interesa: ${producto.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <span>🛒</span>
                  Comprar Ahora
                </a>
              </div>
            </div>

            {/* Tabs de navegación */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex border-b">
                <button
                  onClick={() => setTabActiva("info")}
                  className={`flex-1 py-4 px-4 font-bold text-sm sm:text-base transition-all ${
                    tabActiva === "info"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  📋 Información
                </button>
                <button
                  onClick={() => setTabActiva("uso")}
                  className={`flex-1 py-4 px-4 font-bold text-sm sm:text-base transition-all ${
                    tabActiva === "uso"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  ✅ Cómo Usar
                </button>
              </div>

              {/* Contenido de tabs */}
              <div className="p-6 sm:p-8">
                
                {/* Tab Información */}
                {tabActiva === "info" && (
                  <div className="space-y-6">
                    {/* Descripción */}
                    {producto.descripcion && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-blue-700">📝</span>
                          Descripción
                        </h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {producto.descripcion}
                        </p>
                      </div>
                    )}

                    {/* Usos */}
                    {producto.usos && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-blue-700">✨</span>
                          Usos y Aplicaciones
                        </h3>
                        <ul className="space-y-3">
                          {producto.usos.map((uso, i) => (
                            <li key={i} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {i + 1}
                              </span>
                              <span className="text-gray-700">{uso}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Tab Cómo Usar */}
                {tabActiva === "uso" && (
                  <div className="space-y-6">
                    {/* Modo de uso */}
                    {producto.modoDeUso && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="text-green-600">📖</span>
                          Instrucciones de Uso
                        </h3>
                        <ul className="space-y-3">
                          {producto.modoDeUso.map((modo, i) => (
                            <li key={i} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                              <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                              <span className="text-gray-700">{modo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Almacenamiento */}
                    {producto.almacenamiento && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span>📦</span>
                          Almacenamiento
                        </h3>
                        <ul className="space-y-3">
                          {producto.almacenamiento.map((alm, i) => (
                            <li key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                              <span className="text-xl flex-shrink-0">🔒</span>
                              <span className="text-gray-700">{alm}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Advertencias */}
                    {producto.advertencias && (
                      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">⚠️</span>
                          Advertencias Importantes
                        </h3>
                        <p className="text-red-800 font-medium leading-relaxed">
                          {producto.advertencias}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sección de contacto - Desktop */}
            <div className="hidden lg:block bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">¿Tienes preguntas?</h3>
              <p className="mb-6 text-orange-100">Nuestro equipo está listo para ayudarte</p>
              <div className="flex gap-3">
                <a
                  href="tel:+50422370937"
                  className="flex-1 bg-white text-orange-600 font-bold py-3 px-4 rounded-xl hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
                >
                  📞 Llamar
                </a>
                <a
                  href={`https://wa.me/50432370262?text=Consulta sobre: ${producto.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;