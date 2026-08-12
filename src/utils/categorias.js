// Mapa nombre_ORIGINAL (interno, el que filtra) → nombre_VISIBLE (solo display).
// IMPORTANTE: las claves deben ser EXACTAMENTE el string interno de `p.categoria`.
// El filtrado sigue usando el valor original; esto es solo para mostrar.
export const NOMBRES_VISIBLES = {
  "Cera liquida": "Protector de pisos",
  "Utensilios de limpieza": "Utensilios",
  "Desinfectantes para pisos": "Desinfectantes",
  "Shampoo y acondicionadores": "Shampoo",
  // Las categorías no listadas se muestran igual que su nombre interno
  // (Todos, Alcoholes, Car Wash, Suavizantes, Ambientadores, Insecticidas,
  //  "Detergentes y jabones", "Bolsas y plásticos", "Papel y desechables",
  //  "Cloros y blanqueadores", "Desengrasantes y desmanchadores", "Control de olores").
};

/** Devuelve el nombre a mostrar para una categoría (o el original si no hay mapeo). */
export function nombreCategoria(original) {
  return NOMBRES_VISIBLES[original] || original;
}
