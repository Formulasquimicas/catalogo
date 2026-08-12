import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import productos from "./data/productos";
import ProductCard from "./components/ProductCard";
import EstanteCategoria from "./components/EstanteCategoria";
import CuadriculaCategorias from "./components/CuadriculaCategorias";
import CarruselDestacados from "./components/CarruselDestacados";
import Reveal from "./components/Reveal";
import { Droplets, Sparkles } from "lucide-react";
import { filtrarProductos } from "./utils/buscar";

function Galeria() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [searchParams] = useSearchParams();
  const consulta = (searchParams.get("q") || "").trim();
  const resultadosBusqueda = consulta ? filtrarProductos(productos, consulta) : [];
  const seccionResultadosRef = useRef(null);
  const cuadriculaRef = useRef(null);

  const categorias = ["Todos", ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaSeleccionada);

  // Al iniciar/actualizar una búsqueda, llevar la vista a los resultados.
  useEffect(() => {
    if (!consulta || !seccionResultadosRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    seccionResultadosRef.current.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [consulta]);

  // Al elegir una categoría ("Ver todos ›" o la cuadrícula de categorías),
  // llevar la vista a la cuadrícula de productos. Si no, al colapsar los
  // estantes la página queda más corta y el scroll se queda en el footer.
  useEffect(() => {
    if (categoriaSeleccionada === "Todos" || !cuadriculaRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cuadriculaRef.current.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [categoriaSeleccionada]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      {/* Hero Section - Mensaje para todos */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        {/* Fondo decorativo (sin imágenes, hecho con CSS) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute top-8 right-0 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          ></div>
          <Droplets className="absolute top-6 left-4 sm:left-10 w-20 h-20 sm:w-28 sm:h-28 text-white/[0.07]" strokeWidth={1.5} />
          <Sparkles className="absolute bottom-6 right-4 sm:right-12 w-24 h-24 sm:w-32 sm:h-32 text-white/[0.07]" strokeWidth={1.5} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 sm:py-20 text-center">
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

      <div ref={seccionResultadosRef} className="max-w-7xl mx-auto px-4 py-8 sm:py-12 scroll-mt-24">

        {consulta ? (
          /* Vista de resultados de búsqueda (Enter en el buscador) */
          <>
            <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Resultados para «{consulta}»{" "}
                <span className="text-blue-700">({resultadosBusqueda.length})</span>
              </h2>
              <Link
                to="/"
                className="text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                ✕ Quitar búsqueda
              </Link>
            </div>

            {resultadosBusqueda.length > 0 ? (
              <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {resultadosBusqueda.map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
              </Reveal>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">
                  No se encontraron productos para «{consulta}»
                </p>
                <Link
                  to="/"
                  className="inline-block mt-4 text-blue-700 font-bold hover:underline"
                >
                  Ver todos los productos
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Carrusel de productos destacados */}
            <Reveal className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                Productos Destacados
              </h2>
              <CarruselDestacados />
            </Reveal>

            {/* Sección de categorías */}
            <Reveal className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
                Explora Nuestros Productos
              </h2>

              {/* Selector de categorías en cuadrícula (usa el mismo estado de filtro) */}
              <CuadriculaCategorias
                categorias={categorias}
                productos={productos}
                seleccionada={categoriaSeleccionada}
                onSeleccionar={setCategoriaSeleccionada}
              />
            </Reveal>

            {categoriaSeleccionada === "Todos" ? (
              /* Vista por defecto: un estante (carrusel) por cada categoría */
              <div>
                {categorias
                  .filter((cat) => cat !== "Todos")
                  .map((cat) => (
                    <EstanteCategoria
                      key={cat}
                      categoria={cat}
                      productos={productos.filter((p) => p.categoria === cat)}
                      onVerTodos={setCategoriaSeleccionada}
                    />
                  ))}
              </div>
            ) : (
              /* Categoría seleccionada: cuadrícula clásica de 2 columnas */
              <>
                {/* Contador */}
                <div ref={cuadriculaRef} className="text-center mb-6 scroll-mt-24">
                  <p className="text-sm sm:text-base text-gray-600">
                    Mostrando{" "}
                    <span className="font-bold text-blue-700">{productosFiltrados.length}</span>{" "}
                    productos
                  </p>
                </div>

                {/* Grid de productos - Estilo E-Commerce */}
                <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {productosFiltrados.map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                  ))}
                </Reveal>

                {/* Sin productos */}
                {productosFiltrados.length === 0 && (
                  <div className="text-center py-20">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-gray-500 text-lg">No hay productos en esta categoría</p>
                  </div>
                )}
              </>
            )}
          </>
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