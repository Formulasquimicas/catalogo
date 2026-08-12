// Utilidades de búsqueda de productos.
// Compartidas por el Buscador (dropdown del Navbar) y por la vista de
// resultados en Galeria, para no duplicar la lógica.

// Rango de marcas diacríticas combinantes (acentos) en Unicode.
const DIACRITICOS = new RegExp("[\\u0300-\\u036f]", "g");

/**
 * Normaliza texto para comparar: minúsculas y SIN acentos/diacríticos.
 * Así "quimico" coincide con "químico", "jabon" con "jabón", etc.
 */
export function normalizar(texto) {
  return (texto ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICOS, "");
}

/** Divide la consulta en términos normalizados (por palabras). */
export function obtenerTerminos(consulta) {
  return normalizar(consulta).trim().split(/\s+/).filter(Boolean);
}

/**
 * Filtra productos por nombre + categoría + presentación.
 * Multi-palabra: cada término debe aparecer (en cualquier orden).
 * Devuelve [] si la consulta está vacía.
 */
export function filtrarProductos(productos, consulta) {
  const terminos = obtenerTerminos(consulta);
  if (terminos.length === 0) return [];

  return productos.filter((p) => {
    const heno = normalizar(`${p.nombre} ${p.categoria} ${p.presentacion || ""}`);
    return terminos.every((t) => heno.includes(t));
  });
}
