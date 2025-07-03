import { useState } from "react";
import productos from "./data/productos";
import { Link } from "react-router-dom";

function Galeria() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-white">
      {/* Categorías */}
      {window.innerWidth < 768 ? (
        <>
          <label
            htmlFor="filtro-categoria"
            className="block mb-2 font-semibold text-blue-900"
          >
            Buscar por Categoríaa
          </label>
          <select
            id="filtro-categoria"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="w-full p-2 rounded border border-blue-900 text-blue-900 mb-6"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 mt-4 mb-6">
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

      {/* Productos en grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {productosFiltrados.map((prod, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <Link to={`/producto/${prod.slug}`}>
              <img
                src={prod.imagen}
                alt={prod.nombre}
                loading="lazy"
                className="h-60 w-full object-contain p-3"
              />
              <h2 className="text-center text-blue-900 font-semibold py-2">
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