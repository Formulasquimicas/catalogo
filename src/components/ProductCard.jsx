import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { nombreCategoria } from "../utils/categorias";

/**
 * Etiquetas de estado que se muestran en la esquina de la tarjeta.
 * Para etiquetar un producto, agregale `etiqueta: "nuevo"` o
 * `etiqueta: "mas_vendido"` en src/data/productos.js.
 */
const ETIQUETAS = {
  nuevo: { texto: "Nuevo", clase: "bg-green-600 text-white", icono: false },
  mas_vendido: { texto: "Más vendido", clase: "bg-amber-500 text-white", icono: true },
};

/**
 * Tarjeta de producto reutilizable.
 * Es el MISMO markup/clases que ya usaba el grid de Galeria (imagen con skeleton,
 * badge de categoría, nombre, presentación, "Ver Detalles" y "Consultar").
 * Solo se le dio estado propio de carga de imagen para que sea autónoma.
 */
function ProductCard({ prod }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
      {/* Imagen + badge */}
      <div className="relative">
        <Link to={`/producto/${prod.id}`} className="block">
          <div className="relative bg-gray-100 aspect-square overflow-hidden">
            {/* Skeleton */}
            {!loaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}

            <img
              src={prod.imagen}
              alt={prod.nombre}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className={`
                w-full h-full object-contain p-3 sm:p-4 transition-all duration-500
                group-hover:scale-110
                ${loaded ? "opacity-100" : "opacity-0"}
              `}
            />
          </div>
        </Link>

        {/* Badge de categoría */}
        <div className="absolute top-2 left-2 bg-blue-700 text-white px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold shadow-lg">
          {nombreCategoria(prod.categoria)}
        </div>

        {/* Etiqueta de estado (Nuevo / Más vendido) */}
        {prod.etiqueta && ETIQUETAS[prod.etiqueta] && (
          <div
            className={`absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold shadow-lg ${ETIQUETAS[prod.etiqueta].clase}`}
          >
            {ETIQUETAS[prod.etiqueta].icono && (
              <Star className="w-3 h-3" fill="currentColor" strokeWidth={0} aria-hidden="true" />
            )}
            {ETIQUETAS[prod.etiqueta].texto}
          </div>
        )}
      </div>

      {/* Info del producto */}
      <div className="p-3 sm:p-4">
        <Link to={`/producto/${prod.id}`}>
          <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2 line-clamp-2 min-h-[40px] sm:min-h-[48px] group-hover:text-blue-700 transition-colors">
            {prod.nombre}
          </h3>
        </Link>

        {prod.presentacion && (
          <p className="text-xs sm:text-sm text-gray-500 mb-3">📦 {prod.presentacion}</p>
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
  );
}

export default ProductCard;
