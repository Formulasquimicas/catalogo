const productos = [
  // ===================== Alcoholes =====================
  {
    id: 4,
    nombre: "Alcohol al 70%",
    imagen: "/alcoholc.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
  },
  {
    id: 5,
    nombre: "Alcohol al 95%",
    imagen: "/alcoholpuro.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
  },
  {
    id: 8,
    nombre: "COMBUSTOL",
    imagen: "/combustol.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
  },
  {
    id: 2,
    nombre: "MAXI-GEL",
    imagen: "/gel.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion: `MAXI GEL es un gel antibacterial para manos formulado con un 70% de alcohol, ideal para eliminar el 99.9% de virus, bacterias y gérmenes en segundos. Su poderosa fórmula ha sido desarrollada para combatir agentes como el H1N1 y el coronavirus, ofreciendo una higiene efectiva sin necesidad de enjuague.
Su textura ligera permite una fácil aplicación y secado rápido, dejando tus manos limpias y seguras en todo momento. Perfecto para oficinas, comercios, escuelas, clínicas, hogares y cualquier entorno que requiera altos estándares de desinfección.`,
    advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
    almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
    modoDeUso: [
      "Aplique una pequeña cantidad de MAXI-GEL en las manos y frote hasta que seque"
    ],
    categoria: "Alcoholes",
  },

  // ===================== Bolsas para Basura =====================
  {
    id: 110,
    nombre: "BOLSA PARA BARRIL ROLLO NEGRA 36X57",
    imagen: "/JARDIN.jpg",
    presentacion: "Rollo 36x57",
    categoria: "Bolsas para Basura",
  },
  {
    id: 109,
    nombre: "BOLSA PARA BASURA ROLLO NEGRA 23X32",
    imagen: "/HOGAR.webp",
    presentacion: "Rollo 23x32",
    categoria: "Bolsas para Basura",
  },
  {
    id: 111,
    nombre: "BOLSA PARA PAPELERA ROLLO BLANCA 18X24",
    imagen: "/PAPELERA.webp",
    presentacion: "Rollo 18x24",
    categoria: "Bolsas para Basura",
  },

  // ===================== Car Wash =====================
  {
    id: 6,
    nombre: "ALUM, LIMPIADOR DE ALUMINIO",
    imagen: "/alum.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },
  {
    id: 21,
    nombre: "BRILLANT, BRILLO PARA LLANTAS",
    imagen: "/brillant.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },
  {
    id: 3,
    nombre: "CLEANER 1, LIMPIADOR DE VIDRIOS",
    imagen: "/cleaner.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion: `CLEANER 1 es un limpiador especializado con fórmula mejorada que deja tus superficies de vidrio completamente limpias y sin marcas. Su acción rápida elimina polvo, grasa, huellas y suciedad en segundos, dejando un acabado brillante y sin residuos.`,
    modoDeUso: [
      "Rocíe la superficie a limpiar con CLEANER 1.",
      "Deje que la solución permanezca de 10 a 15 segundos.",
      "Frote con un paño limpio y fresco"
    ],
    usos: [
      "Limpieza de vidrios, espejos y cristales"
    ],
    categoria: "Car Wash",
  },
  {
    id: 10,
    nombre: "KRAM DESENGRASANTE",
    imagen: "/kram.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },
  {
    id: 45,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (8 LIBRAS)",
    imagen: "/tarro.webp",
    presentacion: "8 Libras",
    categoria: "Car Wash",
  },
    {
    id: 63,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (1 LIBRA)",
    imagen: "/una.webp",
    presentacion: "1 Libras",
    categoria: "Car Wash",
  },
    {
    id: 65,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (2 LIBRA)",
    imagen: "/dos.webp",
    presentacion: "2 Libras",
    categoria: "Car Wash",
  },
  {
    id: 12,
    nombre: "MASTER FOAM, SHAMPOO ALFOMBRA",
    imagen: "/foam.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },
  {
    id: 18,
    nombre: "Ribbon, Shampoo Carro",
    imagen: "/carro.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },
  {
    id: 20,
    nombre: "SILICONA, BRILLO PARA TABLERO",
    imagen: "/silicona.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
  },

  // ===================== Cera liquida =====================
  {
    id: 7,
    nombre: "CLASS CERA LIQUIDA",
    imagen: "/class.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Cera liquida",
  },

  // ===================== Desinfectantes para pisos =====================
  {
    id: 13,
    nombre: "PINE-GLID, PINO CONCENTRADO",
    imagen: "/pino.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 31,
    nombre: "SANILIZ AYLEN",
    imagen: "/aylen.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 42,
    nombre: "SANILIZ BAMBÚ",
    imagen: "/bambu.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 32,
    nombre: "SANILIZ BLUE",
    imagen: "/blue.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 33,
    nombre: "SANILIZ BOSQUES",
    imagen: "/bosques.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 34,
    nombre: "SANILIZ CANELA",
    imagen: "/canela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 17,
    nombre: "SANILIZ CHERRY",
    imagen: "/cherry.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 36,
    nombre: "SANILIZ CITRONELA",
    imagen: "/citronela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 35,
    nombre: "SANILIZ FRUTAL",
    imagen: "/frutal.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 41,
    nombre: "SANILIZ LAVANDA",
    imagen: "/lavanda.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 37,
    nombre: "SANILIZ LIMÓN",
    imagen: "/limon.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 38,
    nombre: "SANILIZ MANZANA",
    imagen: "/manzana.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 39,
    nombre: "SANILIZ MANZANA CANELA",
    imagen: "/mcanela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 40,
    nombre: "SANILIZ MORA",
    imagen: "/mora.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },
  {
    id: 16,
    nombre: "SANILIZ VIDA",
    imagen: "/vida.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
  },

  // ===================== Desmanchadores y limpiadores =====================
  {
    id: 44,
    nombre: "BACTERIN",
    imagen: "/bacterin.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desmanchadores y limpiadores",
  },
  {
    id: 9,
    nombre: "FAST MULTILIMPIADOR, DESENGRASANTE COCINA",
    imagen: "/cocina.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desmanchadores y limpiadores",
  },
  {
    id: 1,
    nombre: "MAXI-CLORO",
    imagen: "/cloro.webp",
    categoria: "Desmanchadores y limpiadores",
    presentacion: "Galón de 3.78 Litros",
    descripcion: `Potencia, limpieza y protección en cada gota
MAXI-CLORO es un cloro líquido de alta concentración(6%) diseñado para brindar una limpieza profunda y una desinfección eficaz en todo tipo de espacios.
 Su fórmula poderosa elimina bacterias, hongos y malos olores, dejando una sensación de frescura y seguridad en cada aplicación.
Ideal para hogares, negocios y entornos industriales.`,
    usos: [
      "Limpieza de pisos y baños",
      "Desinfección de ropa blanca",
      "Eliminación de hongos y bacterias",
      "Desinfectar frutas y verduras"
    ],
    modoDeUso: [
      "Blanquear Ropa: Diluya 1/4 litro de MAXI-CLORO por galón de agua",
      "Desinfectar frutas y verduras: Diluya 1 cuchara de MAXI-CLORO por galón de agua"
    ],
    advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
  },
  {
    id: 15,
    nombre: "STAR, DESMANCHADOR",
    imagen: "/star.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desmanchadores y limpiadores",
  },

  // ===================== Jabones =====================
  {
    id: 28,
    nombre: "CANINOS, SHAMPOO PARA PERRO",
    imagen: "/caninos.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 43,
    nombre: "MASTER CLEANER ALOE FRESH, JABÓN PARA MANOS",
    imagen: "/cleaneraf.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 11,
    nombre: "MASTER CLEANER CHERRY, JABÓN PARA MANOS",
    imagen: "/cleanerc.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 26,
    nombre: "MASTER CLEANER LIMÓN, JABÓN PARA MANOS",
    imagen: "/cleanerl.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 25,
    nombre: "MASTER CLEANER MANGO, JABÓN PARA MANOS",
    imagen: "/cleanermgo.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 27,
    nombre: "MASTER CLEANER MANZANA, JABÓN PARA MANOS",
    imagen: "/cleanerm.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 14,
    nombre: "PLATOX, JABÓN PARA LOSA",
    imagen: "/platox.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 23,
    nombre: "TENAZ ALOE FRESH, JABÓN PARA ROPA",
    imagen: "/tenaza.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 49,
    nombre: "TENAZ FLORAL, JABÓN PARA ROPA",
    imagen: "/tenazf.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 22,
    nombre: "TENAZ LAVANDA, JABÓN PARA ROPA",
    imagen: "/tenazl.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
  {
    id: 24,
    nombre: "TENAZ MANZANA, JABÓN PARA ROPA",
    imagen: "/tenazm.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
  },
    {
    id: 200,
    nombre: "JABON PARA LOZA EN PANA, ZAGAZ 400 GRAMOS",
    imagen: "/zagazm.webp",
    presentacion: "Pana de 400gr",
    categoria: "Jabones",
  },
    {
    id: 201,
    nombre: "JABON PARA LOZA EN PANA, ZAGAZ 800 GRAMOS",
    imagen: "/zagazgl.webp",
    presentacion: "Pana de 800gr",
    categoria: "Jabones",
  }, {
    id: 202,
    nombre: "JABON EN BARRA XTRA",
    imagen: "/xtra.webp",
    presentacion: "Barra de 400gr",
    categoria: "Jabones",
  },

  // ===================== Papel Jumbo Roll =====================
  {
    id: 100,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 250 METROS ENCANTO",
    imagen: "/ENCANTO250.webp",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 105,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 250 METROS TISU BÁSICO",
    imagen: "/BASICO250.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 104,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 250 METROS TISU CLÁSICO",
    imagen: "/CLASICO250.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 101,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 400 METROS ENCANTO",
    imagen: "/ENCANTO400.jpg",
    presentacion:"Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 106,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 400 METROS TISU BÁSICO",
    imagen: "/BASICO400.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 102,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 400 METROS TISU CLÁSICO",
    imagen: "/CLASICO400.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },
  {
    id: 103,
    nombre: "PAPEL HIGIÉNICO JUMBO ROLL 500 METROS TISU CLÁSICO",
    imagen: "/CLASICO500.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Jumbo Roll",
  },

  // ===================== Papel Toalla =====================
  {
    id: 108,
    nombre: "PAPEL TOALLA ROLL ENCANTO",
    imagen: "/ENCANTO-TOALLA.webp",
    presentacion:"Caja de  6 Rollos",
    categoria: "Papel Toalla",
  },
  {
    id: 107,
    nombre: "PAPEL TOALLA ROLL TISU",
    imagen: "/TOALLATISU.jpg",
    presentacion: "Caja de  6 Rollos",
    categoria: "Papel Toalla",
  },
  {
    id: 56,
    nombre: "PAPEL TOALLA NUBE BLANCA",
    imagen: "/nube.webp",
    presentacion: "Fardo de 24 rollos",
    categoria: "Papel Toalla",
  },
   {
    id: 300,
    nombre: "SERVILLETA",
    imagen: "/servilleta.webp",
    presentacion: "Fardo de 10 paquetes",
    categoria: "Servilletas",
  },

  // ===================== Shampoo y acondicionadores =====================
  {
    id: 48,
    nombre: "SHAMPOO PARA CABELLO ALOE VERA",
    imagen: "/aloe.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Shampoo y acondicionadores",
  },
  {
    id: 46,
    nombre: "SHAMPOO PARA CABELLO MENTA",
    imagen: "/menta.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Shampoo y acondicionadores",
  },
  {
    id: 47,
    nombre: "SHAMPOO PARA CABELLO PAPAYA",
    imagen: "/papaya.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Shampoo y acondicionadores",
  },

  // ===================== Suavizantes =====================
  {
    id: 30,
    nombre: "Suaviking FLOR DE LUNA, Suavizante",
    imagen: "/flor.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
  },
  {
    id: 19,
    nombre: "Suaviking Girasol, Suavizante",
    imagen: "/girasol.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
  },
  {
    id: 29,
    nombre: "Suaviking TROPICAL, Suavizante",
    imagen: "/tropical.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
  },


   // ===================== ambientadores =====================
 {
    id: 130,
    nombre: "AMBIENTADOR EN SPRAY GLADE",
    imagen: "/glade.webp",
    presentacion: "Lata de 400ml",
    categoria: "Ambientadores",
  },
 {
    id: 131,
    nombre: "PASTILLA PARA BAÑO TERROR",
    imagen: "/terror.webp",
    presentacion: "Pastilla de 50 gramos",
    categoria: "Ambientadores",
  },



 {
    id: 55,
    nombre: "PASTILLA PARA BAÑO EMER",
    imagen: "/emer.webp",
    presentacion: "Pastilla de 60 gramos",
    categoria: "Ambientadores",
  },

   // ===================== Utensilios de limpieza =====================
    {
    id:79,
    nombre: "PASTE PARA LAVAR LOZA, SCOTCH BRITE",
    imagen: "/scotch.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
  {
    id: 132,
    nombre: "PASTE CON ESPONJA PARA LAVAR LOZA, SCOTCH BRITE",
    imagen: "/pesponja.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },

      {
    id: 133,
    nombre: "CEPILLO PARA LAVAR INODORO",
    imagen: "/inodoro.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
      {
    id: 134,
    nombre: "CEPILLO PARA LAVAR INODORO CON BASE",
    imagen: "/inodorob.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
      {
    id: 135,
    nombre: "CEPILLO TIPO PLANCHITA CON MANGO",
    imagen: "/cepillom.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },

      {
    id: 137,
    nombre: "ESCOBA BARREMAS",
    imagen: "/barremas.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
        {
    id: 138,
    nombre: "ESCOBA KIKA",
    imagen: "/kika.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
  {
    id: 139,
    nombre: "RECOGEDOR",
    imagen: "/recogedor.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
  {
    id: 140,
    nombre: "DESTAPADOR DE BAÑO",
    imagen: "/destapador.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
   {
    id: 141,
    nombre: "PALO PARA TRAPEADOR CON CABEZAL",
    imagen: "/trapeador.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
  {
    id: 400,
    nombre: "TOALLA MICROFIBRA",
    imagen: "/microfibra.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
  {
    id: 70,
    nombre: "MECHA #20 CAMPANITA",
    imagen: "/campanita.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },
   {
    id: 71,
    nombre: "MECHA #20 BRISTO",
    imagen: "/bristo.webp",
    presentacion: "Unidad",
    categoria: "Utensilios de limpieza",
  },

   // ===================== Detergente en polvo =====================
       {
    id: 136,
    nombre: "DETERGENTE EN POLVO ULTRA KLIN 2.5 KILOS",
    imagen: "/klin.webp",
    presentacion: "Bolsa de 2.5 kilos",
    categoria: "Detergente en polvo",
  },
       {
    id: 50,
    nombre: "DETERGENTE EN POLVO INDUSTRIAL 2.5 KILOS",
    imagen: "/industrial.webp",
    presentacion: "Bolsa de 2.5 kilos",
    categoria: "Detergente en polvo",
  },
  

  // ===================== Botes y atomizador =====================
       {
    id: 180,
    nombre: "BOTE ATOMIZADOR PLASTICO USO GENERAL LANDSCAPERS 32-Onz(1 LITRO)",
    imagen: "/litrospray.webp",
    presentacion: "Unidad",
    categoria: "Botes y atomizador",
  },
     {
    id: 181,
    nombre: "BOTE ATOMIZADOR PLASTICO  TRIGGER USO GENERAL  8-Onz",
    imagen: "/trigger.webp",
    presentacion: "Unidad",
    categoria: "Botes y atomizador",
  },
     {
    id: 52,
    nombre: "BOTE PLASTICO 1 ONZA",
    imagen: "/onza.webp",
    presentacion: "Unidad",
    categoria: "Botes y atomizador",
  },
  {
    id: 53,
    nombre: "BOTE PLASTICO MEDIO LITRO(500 ml)",
    imagen: "/medio.webp",
    presentacion: "Unidad",
    categoria: "Botes y atomizador",
  },
    {
    id: 54,
    nombre: "BOTE PLASTICO 1 LITRO(1000 ml)",
    imagen: "/litro.webp",
    presentacion: "Unidad",
    categoria: "Botes y atomizador",
  },



 // ===================== Insecticida =====================

  {
    id: 59,
    nombre: "INSECTICIDA RAID ACCION TOTAL DE 400ml",
    imagen: "/raid.webp",
    presentacion: "Unidad",
    categoria: "Insecticidas",
  },
  {
    id: 60,
    nombre: "INSECTICIDA BYGON ULTRA VERDE DE 400ml",
    imagen: "/bygon.webp",
    presentacion: "Unidad",
    categoria: "Insecticidas",
  },


];

export default productos;