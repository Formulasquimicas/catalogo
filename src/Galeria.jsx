import { useState } from "react";
import productos from "./data/productos";
import { Link } from "react-router-dom";

function Galeria() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const categorias = ["Todos", ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaSeleccionada);

  return (
    <div className="w-full min-h-screen px-10 py-12">
      {/* Botones */}
     {window.innerWidth < 768 ? (
  <select
    value={categoriaSeleccionada}
    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
    className="w-full p-2 rounded text-blue-900 mb-6"
  >
    {categorias.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
) : (
  <div className="flex flex-wrap gap-3 justify-center mt-4 mb-6">
    {categorias.map((cat) => (
      <button
        key={cat}
        onClick={() => setCategoriaSeleccionada(cat)}
        className={`font-semibold px-4 py-2 rounded-full transition ${
          categoriaSeleccionada === cat
            ? "bg-blue-900 text-white"
            : "bg-white text-blue-900 hover:bg-blue-200"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
)}

      {/* Galería */}
      <div className="flex flex-wrap justify-center gap-6">
        {productosFiltrados.map((prod, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform w-[230px] sm:w-[260px] md:w-[280px]"
          >
            <Link to={`/producto/${prod.slug}`} className="block w-full h-full">
              <img
                src={prod.imagen}
                alt={prod.nombre}
                loading="lazy"
                className="h-72 w-full object-contain bg-white p-3"
              />
              <h2 className="text-center text-blue-900 text-base md:text-lg font-semibold tracking-wide py-2 px-2">
                {prod.nombre}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
