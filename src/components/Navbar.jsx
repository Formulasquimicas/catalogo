import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import productos from "../data/productos";
import { Link } from "react-router-dom";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate(); 

  const handleBuscar = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    const filtrados = productos.filter((p) =>
      p.nombre.toLowerCase().includes(texto.toLowerCase())
    );

    setResultados(texto ? filtrados : []);
  };

  const limpiarBusqueda = () => {
    setBusqueda("");
    setResultados([]);
  };

  const irADetalle = (slug) => {
    limpiarBusqueda();
navigate(`/producto/${slug}`);  };

  return (
    <nav className="bg-blue-900 text-white px-4 py-4 shadow-md w-full z-50 relative">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
  <img src="/logo.png" alt="Logo" className="h-14 w-14" />
  <h1 className="text-xl md:text-2xl font-bold">Fórmulas Químicas</h1>
</Link>

        {/* Buscador */}
        <div className="w-full md:w-auto flex justify-center flex-grow">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={busqueda}
              onChange={handleBuscar}
              placeholder="Buscar producto..."
              className="w-full px-6 py-3 rounded-xl text-black text-lg shadow focus:outline-none"
            />

            {/* Botón limpiar */}
            {busqueda && (
              <button
                onClick={limpiarBusqueda}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 text-xl"
              >
                ✕
              </button>
            )}

            {/* Resultados */}
            {resultados.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white text-black rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {resultados.map((producto) => (
                  <div
                    key={producto.slug}
                    onClick={() => irADetalle(producto.slug)} // 👈 AGREGAR ESTO
                    className="flex items-center gap-3 px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm font-medium">
                      {producto.nombre}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
