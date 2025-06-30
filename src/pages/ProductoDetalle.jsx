import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";

function ProductoDetalle() {
  const { slug } = useParams();
  const producto = productos.find(p => p.slug.toLowerCase() === slug.toLowerCase());

  if (!producto) {
    return <div className="p-10 text-center text-red-600">Producto no encontrado</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-gray-100 text-blue-900 font-semibold hover:bg-blue-100 transition"
        >
          ← Volver al catálogo
        </Link>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-100 text-blue-900 p-6 rounded-xl shadow-xl">
 <img
  src={producto.imagen}
  alt={producto.nombre}
   loading="lazy"
  className="w-full max-h-[800px] object-contain rounded-lg"
/>


  <div>
    <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
    <p className="whitespace-pre-line text-lg text-gray-700 mb-4">{producto.descripcion}</p>
    
     {producto.presentacion && (
    <p className="text-md text-gray-700 mb-2">
      <span className="font-semibold">Presentación:</span> {producto.presentacion}
    </p>
  )}

  {producto.usos && (
    <div className="mb-3">
      <h2 className="text-md font-semibold text-gray-800 mb-1">Usos:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {producto.usos.map((uso, i) => (
          <li key={i}>{uso}</li>
        ))}
      </ul>
    </div>
  )}

    {producto.modoDeUso && (
      <div className="mb-3">
      <h2 className="text-md font-semibold text-gray-800 mb-1">Modos de usos:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {producto.modoDeUso.map((uso, i) => (
          <li key={i}>{uso}</li>
        ))}
      </ul>
    </div>
  )}

  {producto.almacenamiento && (
      <div className="mb-3">
      <h2 className="text-md font-semibold text-gray-800 mb-1">Almacenamiento:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {producto.almacenamiento.map((uso, i) => (
          <li key={i}>{uso}</li>
        ))}
      </ul>
    </div>
  )}



   {producto.advertencias && (
    <p className="whitespace-pre-line text-sm text-red-700 mt-3">
      ⚠️ <span className=" font-semibold">Advertencia:</span> {producto.advertencias}
    </p>
  )}

  

  <p className="text-sm text-gray-600">Categoría: {producto.categoria}</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default ProductoDetalle;
