// src/data/productos.js
const productos = [
  {
    id: 1,
    slug: "maxi-cloro",
    nombre: "MAXI-CLORO",
    imagen: "/cloro.webp",
    categoria: "Desmanchadores y limpiadores",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`Potencia, limpieza y protección en cada gota
MAXI-CLORO es un cloro líquido de alta concentración(6%) diseñado para brindar una limpieza profunda y una desinfección eficaz en todo tipo de espacios.
 Su fórmula poderosa elimina bacterias, hongos y malos olores, dejando una sensación de frescura y seguridad en cada aplicación.
Ideal para hogares, negocios y entornos industriales.`,
usos: [
  "Limpieza de pisos y baños",
  "Desinfección de ropa blanca",
  "Eliminación de hongos y bacterias",
   "Desinfectar frutas y verduras"
],
modoDeUso:[
  "Blanquear Ropa: Diluya 1/4 litro de MAXI-CLORO por galon de agua",
  "Desinfectar frutas y verduras: Diluya 1 cuchara de MAXI-CLORO por galon de agua  ",
],
advertencias:"Dañino si es ingerido. Mantengase fuera del alcance de los niños.",

  },
  {
    id: 2,
    slug: "maxi-gel",
    nombre: "MAXI-GEL",
    imagen: "/gel.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`MAXI GEL es un gel antibacterial para manos formulado con un 70% de alcohol, ideal para eliminar el 99.9% de virus, bacterias y gérmenes en segundos. Su poderosa fórmula ha sido desarrollada para combatir agentes como el H1N1 y el coronavirus, ofreciendo una higiene efectiva sin necesidad de enjuague.
Su textura ligera permite una fácil aplicación y secado rápido, dejando tus manos limpias y seguras en todo momento. Perfecto para oficinas, comercios, escuelas, clínicas, hogares y cualquier entorno que requiera altos estándares de desinfección.`,
    advertencias:"Dañino si es ingerido. Mantengase fuera del alcance de los niños.",
    almacenamiento: [
  "Mantenga debidamente cerrado despues de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de meta, algodoón, gasa, corcho o papel",
  "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz ",
],
modoDeUso:[
  "Aplique una pequeña cantidad de MAXI-GEL en las manos y frote hasta que seque",
],
    categoria: "Alcoholes",
    
  },
  {
    id: 3,
     slug:"cleaner1",
    nombre: "CLEANER 1, LIMPIADOR DE VIDRIOS",
    imagen: "/cleaner1.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`CLEANER 1 es un limpiador especializado con fórmula mejorada que deja tus superficies de vidrio completamente limpias y sin marcas. Su acción rápida elimina polvo, grasa, huellas y suciedad en segundos, dejando un acabado brillante y sin residuos.`,
    modoDeUso:[
  "Rocíe la superficie a limpiar con CLEANER 1.",
   "Deje que la solución permanezca de 10 a 15 segundos.",
    "Frote con un paño limpio y fresco",
],
usos: [
  "Limpieza de vidrios, espejos y cristales",
],
advertencias:"Dañino si es ingerido. Mantengase fuera del alcance de los niños.",
    categoria: "Car Wash",
  },
 {
    id: 4,
      slug:"alcohol70",
    nombre: "ALCOHOL CLÍNICO 70%",
    imagen: "/alcohol70.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`El Alcohol Clínico 70° es un antiséptico de alta pureza formulado especialmente para uso externo. Ideal para la desinfección de la piel, previa a inyecciones quirurgicas pequeñas.

Su concentración óptima de 70° permite eliminar eficazmente virus, bacterias y microorganismos al 99.9% sin causar irritaciones, convirtiéndolo en un aliado indispensable para la higiene diaria y la atención médica segura.`,
    
    categoria: "Alcoholes",
     almacenamiento: [
  "Guardar en frascos bien cerrados, protegidos de la luz solar y el calor",
],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    Inflamable.`,
  },
   {
    id: 5,
    slug: "alcohol95",
    nombre: "ALCOHOL ETÍLICO 95%",
    imagen: "/alcohol95.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`El Alcohol Etílico 95° es una materia prima de alta concentración, ideal para procesos industriales, elaboración de productos cosméticos, farmacéuticos, de limpieza y sanitizantes. Su pureza garantiza un excelente desempeño en formulaciones que requieren un solvente eficiente y de rápida evaporación.`,
    almacenamiento: [
  "Guardar en frascos bien cerrados, protegidos de la luz solar y el calor",
],
    categoria: "Alcoholes",
     advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    Inflamable.`,
  },
   {
    id: 6,
    slug: "alum",
    nombre: "ALUM, LIMPIADOR DE ALUMINIO",
    imagen: "/alum.webp",
     descripcion:`ALUM es un limpiador profesional formulado exclusivamente para materiales y equipos de aluminio y acero inoxidable. Su acción poderosa elimina grasa Y residuos industriales, restaurando el brillo natural del metal sin dañarlo.
     
     ⚠️Importante: Este producto no debe aplicarse en otros materiales que no sean de aluminio, ya que puede causar manchas o daños irreversibles. Ideal para cocinas industriales, talleres, fábricas, y cualquier entorno donde se requiera el mantenimiento de piezas de aluminio o acero inoxidable.`,
  
     
       modoDeUso:[
 "Diluir si es necesario: para limpieza muy pesada, puede usarse más concentrado. Si es una limpieza ligera 1 parte de ALUM por 3 a 5 partes de agua (ajustar según suciedad).",
  "Aplicar sobre la superficie",
  "Dejar actuar brevemente: Espera de 30 segundos a 2 minutos dependiendo del nivel de suciedad. No exceder el tiempo para evitar daño o decoloración. "
],
     almacenamiento: [
  "Mantener debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca se debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho papel.",
  "Debe de almacenarse en áreas limpias, secas ventiladas y protegidas de la luz."
],
    presentacion: "Galón de 3.78 Litros",

    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Usar Guantes y lentes de protección.
    ⚠️Material Corrosivo.`,
    categoria: "Car Wash",
  },
   {
    id: 7,
    slug: "class",
    nombre: "CLASS CERA LIQUIDA",
    imagen: "/class.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion:"Class es una cera liquida que al ser aplicada a los pisos les proporciona un brillo transparente, uniforme y resistente, dejando sus pisos con una capa protectora, la cual permanece por varias semanas",
    modoDeUso:["El piso deberá ser limpiado completamente.",
"Aplique una capa delgada y uniforme de GLASS sobre el área y dejala secar durante cinco minutos, después aplique una segunda capa para obtener un mejor acabado y aumentar su durabilidad.",
 "Una vez seco frótelo con máquina pulidora o con un paño limpio y seco y obtendrá una superficie resplandeciente."
    ],
    advertencias:"Dañino si es ingerido. Mantengase fuera del alcance de los niños.",
    categoria: "Abrillantadores para casa",
  },
   {
    id: 8,
    slug:"combustol",
    nombre: "COMBUSTOL",
    imagen: "/combustol.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`COMBUSTOL es un líquido especialmente formulado para el encendido de quemadores, estufas industriales, parrillas y hornillas de cocina. Gracias a su composición controlada, permite un encendido rápido, uniforme y seguro, facilitando el arranque eficiente de equipos que utilizan flama abierta.
Es ideal para uso en comedores, restaurantes, ferias y entornos industriales, donde se requiere un producto confiable para mantener la operación continua y segura de los quemadores.`,
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Material inflamable.`,
    usos: [
  "Mecheros",
  "Calentadores",
],
    categoria: "Alcoholes",
  },
   {
    id: 9,
    slug:"fast-multilimpiador",
    nombre: "FAST MULTILIMPIADOR, DESENGRASANTE COCINA",
    imagen: "/multilimpiador.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`FAST MULTILIMPIADOR es un potente desengrasante y limpiador multiusos diseñado para enfrentar las tareas más exigentes en cocinas, comercios, oficinas e industrias. Su fórmula concentrada remueve con facilidad grasa acumulada, suciedad pesada y residuos difíciles, dejando las superficies limpias y frescas.

Es ideal para la limpieza profunda de pisos, viniles, estufas, refrigeradoras, zócalos, freidoras, traperos, ropa de aseo y mucho más. Su versatilidad lo convierte en una excelente opción para quienes buscan un solo producto que resuelva múltiples necesidades de limpieza.`,
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Usar Guantes y lentes de protección.`,
    categoria: "Desmanchadores y limpiadores",
  },
   {
    id: 10,
    slug:"kram",
    nombre: "KRAM DESENGRASANTE",
    imagen: "/kram.webp",
     descripcion:`KRAM es un desengrasante industrial formulado especialmente para eliminar grasa pesada, aceite quemado, residuos de combustibles y suciedad adherida en equipos mecánicos y superficies metálicas. Su fórmula concentrada actúa con gran efectividad incluso en las condiciones más exigentes del sector automotriz e industrial.

Ideal para la limpieza profunda de motores de carros, maquinaria pesada, piezas metálicas, talleres y áreas de mantenimiento, KRAM garantiza resultados profesionales en poco tiempo.`,
    presentacion: "Galón de 3.78 Litros",
    usos: [
  "Limpieza de equipo pesado",
  "Limpieza de motores de carro y piezas",
  "Limpieza de motores de maquinaria industrial",
  
],
 advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Usar Guantes y lentes de protección.`,
    categoria: "Car Wash",
  },
   {
    id: 11,
     slug:"master-cleaner-cherry",
    nombre: "MASTER CLEANER CHERRY, JABÓN PARA MANOS",
    imagen: "/jaboncherry.webp",
   descripcion:`MASTER CLEANER es un jabón líquido concentrado formulado especialmente para eliminar grasa, suciedad y bacterias sin maltratar la piel. Su fórmula antibacterial brinda una limpieza profunda y segura, ideal para el uso diario en ambientes que requieren altos estándares de higiene.

Gracias a su poder desengrasante y suavidad, es perfecto para cocinas industriales, talleres, oficinas, escuelas, baños públicos y hogares. Deja las manos limpias, frescas y protegidas.`,
     modoDeUso:["Moje sus manos.",
"Vierta una pequeña cantidad en su mano.",
 "Frote sus manos hasta producir abundante espuma.",
 "Enjuague con agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
   {
    id: 12,
    slug: "master-foam",
    nombre: "MASTER FOAM, SHAMPOO ALFOMBRA",
    imagen: "/masterfoam.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`MASTER FOAM es un shampoo especializado diseñado para la limpieza profunda de tapicería, asientos, alfombras y superficies textiles. Su fórmula espumosa elimina eficazmente manchas, grasa, suciedad y malos olores sin dañar los tejidos ni alterar los colores originales.`,
    modoDeUso:["Combine una parte de agua.",
"Si la superficie esta muy sucica aplicar sin combinar agua.",
 "Restregar con cepillo o trapo hasta que la suciedad salga.",
    ],
    almacenamiento: [
  "Mantener debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca se debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho papel.",
  "Debe de almacenarse en áreas limpias, secas ventiladas y protegidas de la luz."
],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Usar Guantes y lentes de protección.`,
    categoria: "Car Wash",
  },
   {
    id: 13,
    slug: "pine-glid",
    nombre: "PINE-GLID, PINO CONCENTRADO",
    imagen: "/pino.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`PINE-GLID es un limpiador y desinfectante concentrado a base de aceite de pino, ideal para la limpieza de pisos, baños, paredes y superficies lavables. Su fórmula elimina suciedad, bacterias y malos olores, dejando un agradable y duradero aroma a pino.

Puede usarse en hogares, escuelas, oficinas, industrias y cualquier espacio que requiera higiene con frescura natural. Su concentración permite una dilución adaptable, lo que lo convierte en una opción económica y muy rendidora.`,
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 14,
    slug:"platox",
    nombre: "PLATOX, JABON PARA LOSA",
    imagen: "/platox.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`PLATOX es un jabón líquido concentrado especialmente formulado para eliminar grasa, restos de comida y suciedad en platos, vasos, cubiertos y utensilios de cocina. Su fórmula espumosa rinde más, limpia a profundidad y deja un acabado reluciente sin residuos.

Perfecto para cocinas domésticas, restaurantes, cafeterías, comedores industriales y cualquier entorno donde se requiera higiene impecable en utensilios de cocina.`,
    modoDeUso:["Vierta una pequeña cantidad de PLATOX en la fibra limpiadora o paste.",
 "Luego restregue hasta que la superficie quede limpia.",
 "Enjuague con agua.",
  "Para uso en lavaplatos vierta 4 onzas por cada ciclo completo."
    ],
categoria: "Jabones",
  },
   {
    id: 15,
    slug:"star",
    nombre: "STAR, DESMANCHADOR",
    imagen: "/star.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`STAR es un poderoso limpiador líquido formulado especialmente para remover manchas difíciles, residuos de sarro y suciedad incrustada en servicios sanitarios, lavabos, pisos blancos y cerámica. Su fórmula avanzada penetra en profundidad, dejando las superficies brillantes, desinfectadas y con un aroma fresco.

Perfecto para uso en hogares, restaurantes, hospitales, oficinas y todo tipo de ambientes que requieren una limpieza a fondo en áreas de baño y pisos de alto tráfico.`,

  almacenamiento: [
  "Mantener debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca se debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho papel.",
  "Debe de almacenarse en áreas limpias, secas ventiladas y protegidas de la luz."
],
usos: [
  "Limpieza de ceramica blanca y azulejos",
  "Limpieza de inodoros",
  "Eliminación de sarro",
],     
 advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.
    ⚠️Usar Guantes y lentes de protección.`,

categoria: "Desmanchadores y limpiadores",
  },
  {
    id: 16,
      slug:"saniliz-vida",
    nombre: "SANILIZ VIDA",
    imagen: "/cherry.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,    
categoria: "Desinfectantes para pisos",
  },
{
    id: 17,
    slug:"saniliz-cherry",
    nombre: "SANILIZ CHERRY",
    imagen: "/cherry.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
  {
    id: 18,
      slug:"ribbon",
    nombre: "RIBBON, SHAMPOO CARRO",
    imagen: "/ribbon.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`RIBBON es un shampoo automotriz concentrado diseñado para limpiar eficazmente la carrocería de vehículos sin afectar su brillo ni dañar la pintura. Su fórmula especializada remueve suciedad, polvo, grasa ligera y residuos del camino dejando el auto reluciente y protegido.

Ideal para lavados manuales, su fórmula espumosa rinde mucho y es perfecta tanto para uso doméstico como profesional en autolavados y talleres.`,
     modoDeUso:["Mezcle 10 onzas de RIBBON por 5 galones de agua ",
"Agite la solucion",
 "Use la solución con paño o esponja limpia.",
 "Enjuague el automóvil con agua limpia."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
categoria: "Car Wash",
  },
  {
    id: 19,
     slug:"suaviking-girasol",
    nombre: "SUAVIKING GIRASOL, SUAVIZANTE",
    imagen: "/suavizantegirasol.png",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SUAVIKING es un suavizante líquido concentrado diseñado para dejar todo tipo de ropa suave, esponjosa y con un aroma agradable. Su fórmula especial protege las fibras textiles, reduce la estática y facilita el planchado, brindando una sensación fresca y confortable en cada uso.

Perfecto para lavanderías, hogares, hoteles y centros de lavado que buscan resultados consistentes y profesionales.`,
 modoDeUso:["Lave la ropa con jabón de su preferencia",
"Cuando la ropa ya esta lavada, haga una solución de 3 galones de agua por taza de suavizante, sumerja la ropa por 10 minutos.",
 "Saque la ropa y pongala a secar.",
    ],   
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
categoria: "Suavizantes",
  },
  {
    id: 20,
    slug:"silicona",
    nombre: "SILICONA, BRILLO PARA TABLERO",
    imagen: "/silicona.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SILICONA es un abrillantador líquido de alto rendimiento diseñado para pulir, proteger y resaltar el brillo natural de superficies como tableros, tapicería de vinil, cuero sintético y plásticos interiores. Su fórmula crea una capa protectora que repele el polvo y la humedad, prolongando la vida útil de los materiales tratados.`,
     usos: [
  "Plásticos",
  "Cueros",
  "Viniles",
], 
 advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Car Wash",
  },
   {
    id: 21,
     slug:"brillant",
    nombre: "BRILLANT, BRILLO PARA LLANTAS",
    imagen: "/brillo.webp",
    descripcion:`BRILLANT es un producto especialmente formulado para devolver el brillo, color y apariencia renovada a las llantas de tu vehículo. Su fórmula crea una capa protectora que repele el polvo, el agua y la suciedad, dejando un acabado limpio, oscuro y con efecto húmedo que resalta el estilo del auto.

Ideal para uso en talleres, autolavados, detallado automotriz y usuarios particulares que desean mantener sus llantas como nuevas.`,
 modoDeUso:["Lave y deje de sacar bien las llantas",
"Vierta una pequeña cantidad de BRILLANT en una esponja.",
 "Apliquelo a  la llanta.",
    ],    
presentacion: "Galón de 3.78 Litros",
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Car Wash",
  },
   {
    id: 22,
    slug:"TENAZ-LAVANDA",
    nombre: "TENAZ LAVANDA, JABON PARA ROPA",
    imagen: "/Tenaz-Lavanda.jpg",
    descripcion:`TENAZ es un jabón líquido concentrado especialmente formulado para lavadoras industriales y domésticas, ideal para remover la suciedad, manchas y grasa en todo tipo de ropa. Su poderosa acción limpiadora actúa incluso en ciclos cortos, dejando las prendas limpias y con aroma fresco.

Perfecto para hoteles, lavanderías, hospitales, hogares y centros de lavado, TENAZ rinde más y ofrece resultados impecables en cada carga.`,
 modoDeUso:["Por cada 20 libras de ropa utilice 8 onzas de TENAZ.",

    ],        
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
   {
    id: 23,
    slug:"tenaz-aloe-fresh",
    nombre: "TENAZ ALOE FRESH, JABON PARA ROPA",
    imagen: "/tenazaloe.webp",
    descripcion:`TENAZ es un jabón líquido concentrado especialmente formulado para lavadoras industriales y domésticas, ideal para remover la suciedad, manchas y grasa en todo tipo de ropa. Su poderosa acción limpiadora actúa incluso en ciclos cortos, dejando las prendas limpias y con aroma fresco.

Perfecto para hoteles, lavanderías, hospitales, hogares y centros de lavado, TENAZ rinde más y ofrece resultados impecables en cada carga.`,
 modoDeUso:["Por cada 20 libras de ropa utilice 8 onzas de TENAZ.",

    ],        
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
  {
    id: 24,
    slug:"tenaz-manzana",
    nombre: "TENAZ MANZANA, JABON PARA ROPA",
    imagen: "/tenazmanzana.webp",
   descripcion:`TENAZ es un jabón líquido concentrado especialmente formulado para lavadoras industriales y domésticas, ideal para remover la suciedad, manchas y grasa en todo tipo de ropa. Su poderosa acción limpiadora actúa incluso en ciclos cortos, dejando las prendas limpias y con aroma fresco.

Perfecto para hoteles, lavanderías, hospitales, hogares y centros de lavado, TENAZ rinde más y ofrece resultados impecables en cada carga.`,
 modoDeUso:["Por cada 20 libras de ropa utilice 8 onzas de TENAZ.",

    ],        
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
  {
    id: 25,
    slug:"master-cleaner-mango",
    nombre: "MASTER CLEANER MANGO, JABON PARA MANOS",
    imagen: "/jabonmango.webp",
    descripcion:`MASTER CLEANER es un jabón líquido concentrado formulado especialmente para eliminar grasa, suciedad y bacterias sin maltratar la piel. Su fórmula antibacterial brinda una limpieza profunda y segura, ideal para el uso diario en ambientes que requieren altos estándares de higiene.

Gracias a su poder desengrasante y suavidad, es perfecto para cocinas industriales, talleres, oficinas, escuelas, baños públicos y hogares. Deja las manos limpias, frescas y protegidas.`,
     modoDeUso:["Moje sus manos.",
"Vierta una pequeña cantidad en su mano.",
 "Frote sus manos hasta producir abundante espuma.",
 "Enjuague con agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
  {
    id: 26,
    slug:"master-cleaner-limon",
    nombre: "MASTER CLEANER LIMON, JABON PARA MANOS",
    imagen: "/jabonlimon.webp",
    descripcion:`MASTER CLEANER es un jabón líquido concentrado formulado especialmente para eliminar grasa, suciedad y bacterias sin maltratar la piel. Su fórmula antibacterial brinda una limpieza profunda y segura, ideal para el uso diario en ambientes que requieren altos estándares de higiene.

Gracias a su poder desengrasante y suavidad, es perfecto para cocinas industriales, talleres, oficinas, escuelas, baños públicos y hogares. Deja las manos limpias, frescas y protegidas.`,
     modoDeUso:["Moje sus manos.",
"Vierta una pequeña cantidad en su mano.",
 "Frote sus manos hasta producir abundante espuma.",
 "Enjuague con agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
  {
    id: 27,
      slug:"master-cleaner-manzana",
    nombre: "MASTER CLEANER MANZANA, JABON PARA MANOS",
    imagen: "/jabonlimon.webp",
    descripcion:`MASTER CLEANER es un jabón líquido concentrado formulado especialmente para eliminar grasa, suciedad y bacterias sin maltratar la piel. Su fórmula antibacterial brinda una limpieza profunda y segura, ideal para el uso diario en ambientes que requieren altos estándares de higiene.

Gracias a su poder desengrasante y suavidad, es perfecto para cocinas industriales, talleres, oficinas, escuelas, baños públicos y hogares. Deja las manos limpias, frescas y protegidas.`,
     modoDeUso:["Moje sus manos.",
"Vierta una pequeña cantidad en su mano.",
 "Frote sus manos hasta producir abundante espuma.",
 "Enjuague con agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
  {
    id: 28,
      slug:"caninos",
    nombre: "CANINOS, SHAMPOO PARA PERRO",
    imagen: "/caninos.webp",
    descripcion:`CANINOS está diseñado especificamente para que su mascota al ser bañado logre que su pelaje quede suave, terso y con brillo dejando agradable aroma a cereza.`,
     modoDeUso:["Moje completamente el CAN.",
"Vierta una pequeña cantidad de CANINOS en el cuerpo del CAN.",
 "Frote el cuerpo del CAN, hasta producir una espuma abundante.",
 "Deje que la espuma permanezca en el cuerpo del CAN durante 2 minutos.",
  "Enjuague con el cuerpo del CAN con abundante agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
   {
    id: 29,
      slug:"suaviking-tropical",
    nombre: "SUAVIKING TROPICAL, SUAVIZANTE",
    imagen: "/suavizantetropical.png",
     descripcion:`SUAVIKING es un suavizante líquido concentrado diseñado para dejar todo tipo de ropa suave, esponjosa y con un aroma agradable. Su fórmula especial protege las fibras textiles, reduce la estática y facilita el planchado, brindando una sensación fresca y confortable en cada uso.

Perfecto para lavanderías, hogares, hoteles y centros de lavado que buscan resultados consistentes y profesionales.`,
 modoDeUso:["Lave la ropa con jabón de su preferencia",
"Cuando la ropa ya esta lavada, haga una solución de 3 galones de agua por taza de suavizante, sumerja la ropa por 10 minutos.",
 "Saque la ropa y pongala a secar.",
    ],   
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Suavizantes",
  },
   {
    id: 30,
     slug:"suavizante-flor",
    nombre: "SUAVIKING FLOR DE LUNA, SUAVIZANTE",
    imagen: "/suavizanteflor.webp",
     descripcion:`SUAVIKING es un suavizante líquido concentrado diseñado para dejar todo tipo de ropa suave, esponjosa y con un aroma agradable. Su fórmula especial protege las fibras textiles, reduce la estática y facilita el planchado, brindando una sensación fresca y confortable en cada uso.

Perfecto para lavanderías, hogares, hoteles y centros de lavado que buscan resultados consistentes y profesionales.`,
 modoDeUso:["Lave la ropa con jabón de su preferencia",
"Cuando la ropa ya esta lavada, haga una solución de 3 galones de agua por taza de suavizante, sumerja la ropa por 10 minutos.",
 "Saque la ropa y pongala a secar.",
    ],   
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Suavizantes",
  },
  {
    id: 310,
     slug:"saniliz-aylen",
    nombre: "SANILIZ AYLEN",
    imagen: "/aylen.webp",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
 {
    id: 31,
    slug:"saniliz-blue",
    nombre: "SANILIZ BLUE",
    imagen: "/blue.webp",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 32,
    slug:"saniliz-bosques",
    nombre: "SANILIZ BOSQUES",
    imagen: "/SANILIZ-BOSQUES.jpg",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 33,
    slug:"saniliz-canela",
    nombre: "SANILIZ CANELA",
    imagen: "/SANILIZ-CANELA.jpg",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
     {
    id: 34,
    slug:"saniliz-frutal",
    nombre: "SANILIZ FRUTAL",
    imagen: "/frutal.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
      {
    id: 35,
    slug:"saniliz-citronela",
    nombre: "SANILIZ CITRONELA",
    imagen: "/manzanacanela.webp",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
       {
    id: 36,
    slug:"saniliz-limon",
    nombre: "SANILIZ LIMON",
    imagen: "/SANILIZ-LIMON.jpg",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 37,
    slug:"saniliz-manzana",
    nombre: "SANILIZ MANZANA",
    imagen: "/SANILIZ-LIMON.jpg",
    presentacion: "Galón de 3.78 Litros",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 38,
    slug:"saniliz-manzana-canela",
    nombre: "SANILIZ MANZANA CANELA",
    imagen: "/manzanacanela.webp",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 39,
    slug:"saniliz-mora",
    nombre: "SANILIZ MORA",
    imagen: "/SANILIZ-MORA.jpg",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
    {
    id: 40,
    slug:"saniliz-lavanda",
    nombre: "SANILIZ LAVANDA",
    imagen: "/lavanda.webp",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
  {
    id: 41,
    slug:"saniliz-bambu",
    nombre: "SANILIZ BAMBU",
    imagen: "/bambu.webp",
     descripcion:`SANILIZ es un poderoso desinfectante concentrado con efecto aromatizante y acción bactericida, ideal para limpiar y desodorizar ambientes con un solo producto. Su fórmula está diseñada para eliminar gérmenes, neutralizar malos olores y dejar una fragancia agradable y duradera en pisos, baños, sanitarios, lavabos, áreas comunes y superficies lavables.

Perfecto para hogares, oficinas, escuelas, hoteles y todo lugar que requiera limpieza profunda con toque perfumado.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Desinfectantes para pisos",
  },
   {
    id: 42,
    slug:"master-cleaner-aloe-fresh",
    nombre: "MASTER CLEANER ALOE FRESH, JABON PARA MANOS",
    imagen: "/JABON-ALOE-FRESH.jpg",
    descripcion:`MASTER CLEANER es un jabón líquido concentrado formulado especialmente para eliminar grasa, suciedad y bacterias sin maltratar la piel. Su fórmula antibacterial brinda una limpieza profunda y segura, ideal para el uso diario en ambientes que requieren altos estándares de higiene.

Gracias a su poder desengrasante y suavidad, es perfecto para cocinas industriales, talleres, oficinas, escuelas, baños públicos y hogares. Deja las manos limpias, frescas y protegidas.`,
     modoDeUso:["Moje sus manos.",
"Vierta una peque;a cantidad en su mano.",
 "Frote sus manos hasta producir abundante espuma.",
 "Enjuague con agua."
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
    presentacion: "Galón de 3.78 Litros",
     categoria: "Jabones",
  },
    {
    id: 43,
    slug:"bacterin",
    nombre: "BACTERIN",
    imagen: "/bacterin.webp",
    descripcion:`Bactericida a base de amonio cuaternario , agente germicida, fungicida, virucida y sanitizador.

    Producto ideal para limpieza y desinfección de áreas de alto de trafico como ser escritorios, pasamanos, llavines, cocina, sala de espera, llantas, tuneles de desinfección, etc`,
    presentacion: "Galón de 3.78 Litros",
     modoDeUso:["Diluir a partes iguales con agua.",
"Luego aplicar o rociar la superficei a desinfectar.",
 "Después limpiar con un paño limpio hasta secar la superficie.",
    ],
    advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
     categoria: "Desmanchadores y limpiadores",
  },
     {
    id: 44,
    slug:"manix",
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS(8 LIBRAS)",
    imagen: "/CREMA-8.jpg",
    descripcion:`MANIX es una crema limpiadora especialmente formulada para eliminar grasa pesada, aceites y suciedad industrial de las manos. Ideal para mecánicos, operarios, talleres, industrias y todo tipo de trabajo manual que exponga las manos a suciedad extrema.`,
     categoria: "Car Wash",
      presentacion: "Tarro de 8 libras",
       advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,
        almacenamiento: [
  "Mantener debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca se debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho papel.",
  "Debe de almacenarse en áreas limpias, secas ventiladas y protegidas de la luz."
],
  },
     {
    id: 45,
    slug:"shampoo-menta",
    nombre: "SHAMPOO PARA CABELLO MENTA",
    imagen: "/SHAMPOO-MENTA.jpg",
    presentacion: "Galón de 3.78 Litros",
    descripcion:`Este shampoo para cabello normal ha sido formulado para brindar una limpieza efectiva sin resecar ni dejar residuos. Su fórmula balanceada elimina impurezas del cuero cabelludo y del cabello, dejando una sensación de frescura, suavidad y ligereza desde la primera aplicación.

Ideal para el uso diario, ayuda a mantener el equilibrio natural del cabello, conservando su brillo, fuerza y manejabilidad.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`,     
categoria: "Shampoo y acondicionadores",
  },
      {
    id: 46,
     slug:"shampoo-papaya",
    nombre: "SHAMPOO PARA CABELLO PAPAYA",
    imagen: "/papaya.webp",
    descripcion:`Este shampoo para cabello normal ha sido formulado para brindar una limpieza efectiva sin resecar ni dejar residuos. Su fórmula balanceada elimina impurezas del cuero cabelludo y del cabello, dejando una sensación de frescura, suavidad y ligereza desde la primera aplicación.

Ideal para el uso diario, ayuda a mantener el equilibrio natural del cabello, conservando su brillo, fuerza y manejabilidad.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
    presentacion: "Galón de 3.78 Litros",
     categoria: "Shampoo y acondicionadores",
  },
    {
    id: 47,
     slug:"shampoo-aloe-vera",
    nombre: "SHAMPOO PARA CABELLO ALOE VERA",
    imagen: "/SHAMPOO-ALOE.jpg",
    presentacion: "Galón de 3.78 Litros",
  descripcion:`Este shampoo para cabello normal ha sido formulado para brindar una limpieza efectiva sin resecar ni dejar residuos. Su fórmula balanceada elimina impurezas del cuero cabelludo y del cabello, dejando una sensación de frescura, suavidad y ligereza desde la primera aplicación.

Ideal para el uso diario, ayuda a mantener el equilibrio natural del cabello, conservando su brillo, fuerza y manejabilidad.`,
advertencias:`Dañino si es ingerido. Mantengase fuera del alcance de los niños.`, 
     categoria: "Shampoo y acondicionadores",
  },

    {
    id: 48,
    slug: "aceite-rojo",
    nombre: "ACEITE ROJO",
    imagen: "/aceiterojo.png",
    presentacion: "Galón de 3.78 Litros",
    descripcion:"Producto especializado en dar brillop a muebles dejando un aroma agradable y un acabado de limpieza y brillo",
    modoDeUso:["Limpie el polvo o cualquier suceidad de la superficie.",
"Aplique una pequeña cantidaden una franela.",
 "Frote la superficie hasta obterner un brillo uniforme."
    ],
    advertencias:"Dañino si es ingerido. Mantengase fuera del alcance de los niños.",
    categoria: "Abrillantadores para casa",
  },

    {
    id: 100,
    slug:"papel-higienico-encanto-250",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 250 METROS ENCANTO",
    imagen: "/ENCANTO250.webp",
     presentacion: "Fardo de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
   {
    id: 101,
    slug:"papel-higienico-encanto-400",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 400 METROS ENCANTO",
    imagen: "/ENCANTO400.jpg",
    presentacion: "Fardo de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
  {
    id: 102,
    slug:"PAPEL HIGIENICO 400 METROS TISU CLASICO",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 400 METROS TISU CLASICO",
    imagen: "/CLASICO400.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
   {
    id: 103,
    slug:"PAPEL HIGIENICO 500 METROS TISU CLASICO",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 500 METROS TISU CLASICO",
    imagen: "/CLASICO500.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
   {
    id: 104,
    slug:"PAPEL HIGIENICO 250 METROS TISU CLASICO",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 250 METROS TISU CLASICO",
    imagen: "/CLASICO250.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
   {
    id: 105,
    slug:"PAPEL HIGIENICO 250 METROS TISU BASICO",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 250 METROS TISU BASICO",
    imagen: "/BASICO250.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
    {
    id: 106,
        slug:"PAPEL HIGIENICO 400 METROS TISU BASICO",
    nombre: "PAPEL HIGIENICO JUMBO ROLL 400 METROS TISU BASICO",
    imagen: "/BASICO400.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Jumbo Roll",
  },
    {
    id: 107,
     slug:"papel-toalla-tisu",
    nombre: "PAPEL TOALLA ROLL TISU",
    imagen: "/TOALLATISU.jpg",
    presentacion: "Caja de 6 rollos",
     categoria: "Papel Toalla",
  },
    {
    id: 108,
    slug:"papel toalla encanto",
    nombre: "PAPEL TOALLA ROLL ENCANTO",
   
    imagen: "/ENCANTO-TOALLA.webp",
    presentacion: "Fardo de 2 rollos",
     categoria: "Papel Toalla",
  },
   {
    id: 109,
    slug:"papel-interfoleada",
    nombre: "PAPEL TOALLA INTERFOLEADO TISU",
    imagen: "/INTERFOLEADA.jpg",
     presentacion: "Caja de 12 paquetes",
     categoria: "Papel Toalla",
  },
   {
    id: 110,
    slug:"bolsa-hogar",
    nombre: "BOLSA PARA BASURA ROLLO NEGRA  23X32",
    imagen: "/HOGAR.webp",
    presentacion: "Rollo de 50 bolsas",
     categoria: "Bolsas para Basura",
  },
   {
    id: 111,
    slug:"bolsa-jardin",
    nombre: "BOLSA PARA BARRIL ROLLO NEGRA 36X57",
    imagen: "/JARDIN.jpg",
    presentacion: "Rollo de 10 bolsas",
     categoria: "Bolsas para Basura",
  },
  {
    id: 112,
    slug:"bolsa-papelera",
    nombre: "BOLSA PARA PAPELERA ROLLO BLANCA 18X24",
    imagen: "/PAPELERA.webp",
    presentacion: "Rollo de 50 bolsas",
     categoria: "Bolsas para Basura",
  },
   {
    id: 113,
    slug:"trapeador-kika",
    nombre: "TRAPEADOR KIKA",
    imagen: "/trapeadorkika.webp",
    presentacion: "Palo y gancho incluido",
     categoria: "Accesorios para limpieza",
  },
   {
    id: 114,
    slug:"paste-scotchbrite",
    nombre: "PASTE SCOTCH BRITE",
    imagen: "/scotchbrite.webp",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
    {
    id: 115,
    slug:"escoba-barremas",
    nombre: "ESCOBA BARREMAS",
    imagen: "/barremas.jpg",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
     {
    id: 116,
    slug:"cepillo-sin-base",
    nombre: "CEPILLO SIN BASE",
    imagen: "/cepillosinbase.webp",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
   {
    id: 117,
    slug:"mecha-campanita",
    nombre: "MECHA #20 CAMPANITA",
    imagen: "/mechacampanita.webp",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
   {
    id: 118,
    slug:"guante-latex",
    nombre: "GUANTE TRUPER",
    imagen: "/guante.jpg",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
     {
    id: 119,
    slug:"ultra-klin",
    nombre: "DETERGENTE ULTRA KLIN 2.5 KILOS",
    imagen: "/ultraklin.jpg",
    presentacion: "Bolsa de 2.5 kilos",
     categoria: "Detergente en polvo",
  },
     {
    id: 120,
    slug:"paste-scotchbrite-esponja",
    nombre: "PASTE SCOTCH BRITE CON ESPONJA",
    imagen: "/esponja.jpg",
    presentacion: "unidad",
     categoria: "Accesorios para limpieza",
  },
  {
    id: 121,
    slug:"pastilla-emer",
    nombre: "PASTILLA EMER",
    imagen: "/emer.png",
    presentacion: "unidad",
     categoria: "Pastillas para sanitarios",
  },
  {
    id: 122,
    slug:"glade",
    nombre: "DESODORANTE EN AEROSOL GLADE",
    imagen: "/glade.webp",
    presentacion: "unidad",
     categoria: "Desodorante en Aerosol",
  },
  // Agrega más productos...
];

export default productos;
