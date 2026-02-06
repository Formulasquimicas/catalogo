import { useState } from "react";
import productos from "./data/productos";
import { Link } from "react-router-dom";

function Galeria() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [imagenesLoaded, setImagenesLoaded] = useState({});

  const categorias = ["Todos", ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaSeleccionada);

  const handleImageLoad = (id) => {
    setImagenesLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      {/* Hero Section - Mensaje para todos */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Productos Químicos de Calidad
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Para empresas, hogares y comercios. Más de 30 años de experiencia.
          </p>
          
          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://wa.me/50432370262?text=Hola, necesito cotización para mi empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              Cotizar para Empresas
            </a>
            
            <a
              href="https://wa.me/50432370262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Comprar para el Hogar
            </a>
          </div>
        </div>
      </div>

      {/* Banner de beneficios */}
      <div className="bg-orange-500 text-white py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold">
           
        
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <span>Calidad garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <span>Atención personalizada</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Sección de categorías */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
            Explora Nuestros Productos
          </h2>
          
          {/* Filtros - Scroll horizontal en móvil, múltiples filas en desktop */}
          <div className="overflow-x-auto md:overflow-x-visible pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
            <div className="flex gap-2 sm:gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`
                    flex-shrink-0 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full 
                    transition-all duration-300 text-sm sm:text-base whitespace-nowrap
                    ${categoriaSeleccionada === cat
                      ? "bg-blue-700 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg active:scale-95"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contador */}
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Mostrando <span className="font-bold text-blue-700">{productosFiltrados.length}</span> productos
          </p>
        </div>

        {/* Grid de productos - Estilo E-Commerce */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productosFiltrados.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Badge superior */}
              <div className="relative">
                {/* Imagen */}
                <Link to={`/producto/${prod.id}`} className="block">
                  <div className="relative bg-gray-100 aspect-square overflow-hidden">
                    {/* Skeleton */}
                    {!imagenesLoaded[prod.id] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                    )}
                    
                    <img
                      src={prod.imagen}
                      alt={prod.nombre}
                      loading="lazy"
                      onLoad={() => handleImageLoad(prod.id)}
                      className={`
                        w-full h-full object-contain p-3 sm:p-4 transition-all duration-500
                        group-hover:scale-110
                        ${imagenesLoaded[prod.id] ? 'opacity-100' : 'opacity-0'}
                      `}
                    />
                  </div>
                </Link>

                {/* Badge de categoría */}
                <div className="absolute top-2 left-2 bg-blue-700 text-white px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold shadow-lg">
                  {prod.categoria}
                </div>
              </div>

              {/* Info del producto */}
              <div className="p-3 sm:p-4">
                <Link to={`/producto/${prod.id}`}>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2 line-clamp-2 min-h-[40px] sm:min-h-[48px] group-hover:text-blue-700 transition-colors">
                    {prod.nombre}
                  </h3>
                </Link>
                
                {prod.presentacion && (
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">
                    📦 {prod.presentacion}
                  </p>
                )}

                {/* Botones de acción */}
                <div className="space-y-2">
                  <Link
                    to={`/producto/${prod.id}`}
                    className="block w-full bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold py-2 sm:py-2.5 px-3 rounded-lg text-center transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    Ver Detalles
                  </Link>
                  
                  <a
                    href={`https://wa.me/50432370262?text=Hola, me interesa: ${prod.nombre}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold py-2 sm:py-2.5 px-3 rounded-lg text-center transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    💬 Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sin productos */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-500 text-lg">No hay productos en esta categoría</p>
          </div>
        )}
      </div>

      {/* CSS para scroll sin barra */}
      <style >{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Galeria;