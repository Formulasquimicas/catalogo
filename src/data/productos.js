const productos = [
  // ===================== Alcoholes =====================
  {
    id: 4,
    nombre: "Alcohol al 70%",
    imagen: "/alcoholc.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
     descripcion: `Alcohol clínico formulado para la limpieza y desinfección de superficies, objetos y áreas de uso frecuente. Su acción rápida ayuda a eliminar bacterias y microorganismos, dejando una sensación de higiene y frescura inmediata. Ideal para uso en hogares, oficinas, clínicas y espacios donde la limpieza es una prioridad.`,
    advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
    almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
     modoDeUso: [
      "Aplicar el alcohol directamente sobre la superficie o en un paño limpio.",
"Distribuir sobre el área que se desea desinfectar.",

"Dejar actuar unos segundos para permitir su acción limpiadora.",

"Dejar secar naturalmente; no es necesario enjuagar."
    ],
     usos: [
      "Desinfección de mesas, escritorios y superficies de trabajo.",

"Limpieza de objetos de uso frecuente (teléfonos, manijas, herramientas)",

"Apoyo en la higiene de espacios en el hogar, oficina o negocio",

"Limpieza rápida gracias a su evaporación inmediata",
    ],
  },
  {
    id: 5,
    nombre: "Alcohol al 95%",
    imagen: "/alcoholpuro.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
         descripcion: `Alcohol etílico al 95% de alta pureza, utilizado como materia prima en la fabricación de productos de limpieza, desinfección y soluciones industriales.`,
    advertencias:[
      "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
      "Producto Inflamable"
    ],
    almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
     usos: [
      "Materia prima.",
    ],
  },
  {
    id: 8,
    nombre: "COMBUSTOL",
    imagen: "/combustol.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Alcoholes",
       descripcion: `Alcohol para mechero de combustión estable, utilizado para mantener alimentos calientes en buffets y estaciones de servicio.`,
      advertencias:[
      "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
      "Producto Inflamble"
    ],
      modoDeUso: [
      "Verter el alcohol en el recipiente metálico destinado para mechero.",

"Colocar el mechero debajo del equipo para mantener la comida caliente.",

"Encender cuidadosamente para generar una llama estable.",
    ],
  },
  {
    id: 2,
    nombre: "MAXI-GEL",
    imagen: "/gel.webp",
    presentacion: "Galón de 3.78 Litros",
    descripcion: `MAXI GEL es un gel antibacterial para manos formulado con un 70% de alcohol, ideal para eliminar el 99.9% de virus, bacterias y gérmenes en segundos. Su poderosa fórmula ha sido desarrollada para combatir agentes como el H1N1 y el coronavirus, ofreciendo una higiene efectiva sin necesidad de enjuague.
Su textura ligera permite una fácil aplicación y secado rápido, dejando tus manos limpias y seguras en todo momento. Perfecto para oficinas, comercios, escuelas, clínicas, hogares y cualquier entorno que requiera altos estándares de desinfección.`,
advertencias:[
      "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
      "Producto Inflamble"
    ],
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
           descripcion: `Bolsa negra para barril en rollo 36x57, resistente y de gran capacidad, ideal para el manejo de desechos.`,

  },
  {
    id: 109,
    nombre: "BOLSA PARA BASURA ROLLO NEGRA 23X32",
    imagen: "/HOGAR.webp",
    presentacion: "Rollo 23x32",
    categoria: "Bolsas para Basura",
     descripcion: `Bolsa negra para basura 23x32 en rollo, resistente y práctica para uso diario en el hogar y negocio.`,

  },
  {
    id: 111,
    nombre: "BOLSA PARA PAPELERA ROLLO BLANCA 18X24",
    imagen: "/PAPELERA.webp",
    presentacion: "Rollo 18x24",
    categoria: "Bolsas para Basura",
     descripcion: `Bolsa blanca para papelera 18x24 en rollo, práctica, resistente y con fragancia para uso diario.`,
  },

  // ===================== Car Wash =====================
  {
    id: 6,
    nombre: "ALUM, LIMPIADOR DE ALUMINIO",
    imagen: "/alum.webp",
    presentacion: "Galón de 3.78 Litros",
        descripcion: `Producto formulado para la limpieza profunda de superficies de aluminio y acero inoxidable. Actúa eficazmente contra residuos de grasa, polvo y manchas, ayudando a mantener el aspecto original del material sin dañarlo.`,
    categoria: "Car Wash",
   advertencias:[
      "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
      "Material Corrosivo"
    ],
       almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
     modoDeUso: [
      "Aplicar el producto directamente sobre la superficie de aluminio con un rociador o con una brocha, cubriendo bien el área a limpiar.", "Aplicar el producto directamente sobre la superficie de aluminio con un rociador o con una brocha, cubriendo bien el área a limpiar.",
       "Dejar actuar el producto durante unos segundos para que afloje la grasa, la suciedad y las manchas.",
        "Frotar suavemente la superficie con una esponja suave, un paño de microfibra o un cepillo de cerdas plásticas.",
         "Enjuagar con abundante agua para retirar el producto y la suciedad desprendida.",
          "Si es necesario, repetir el proceso en las áreas con suciedad más difícil.",
             "Dejar secar o pasar un paño limpio y suave para mejorar el brillo final.",
                
    ],
  
  },
  {
    id: 21,
    nombre: "BRILLANT, BRILLO PARA LLANTAS",
    imagen: "/brillant.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
     descripcion: `Producto diseñado exclusivamente para dar un brillo espectacular a sus llantas`,
      advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
       advertencias:[
      "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",  
    ],
    modoDeUso: [
      "Lavar las llantas.",
       "Dejar secar muy bien las llantas.",
        "Vierta una pequeña cantidad de BRILLANT en una esponja.",
         "Apliquelo a la llanta.",          
    ],
        usos: [
      "Darle brillo a la llanta"
    ],
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
      advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
    categoria: "Car Wash",
  },
  {
    id: 10,
    nombre: "KRAM, DESENGRASANTE INDUSTRIAL",
    imagen: "/kram.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
      almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
     descripcion: `Desengrasante industrial potente para remover grasa, aceite y suciedad pesada en equipos y superficies metálicas.`,
      usos: [
      "Limpieza de motores y piezas mecánicas",

"Talleres automotrices",

"Maquinaria industrial",


"Herramientas y equipos de trabajo",
    ],

    modoDeUso: [
      "Aplicar el desengrasante directamente sobre la superficie con brocha o rociador.",

"Dejar actuar unos segundos para que afloje la grasa y la suciedad.",

"Frotar con cepillo de cerdas plásticas en las áreas más sucias.",
"Enjuagar con agua para retirar los residuos.",
"Repetir el proceso si la suciedad es muy pesada.",
    ],
  },
  {
    id: 45,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (8 LIBRAS)",
    imagen: "/tarro.webp",
    presentacion: "8 Libras",
     descripcion: `Crema desengrasante para manos especialmente formulada para remover grasa, aceite y suciedad pesada después de trabajos mecánicos e industriales. Ideal para talleres, mecánicos, técnicos y personas que trabajan con maquinaria.`,
    categoria: "Car Wash",
      almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
     usos: [
      "Talleres mecánicos",

"Personal que trabaja con motores y maquinaria",

    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de crema en las manos.",

"Frotar bien, especialmente en las áreas con grasa o suciedad.",

"Continuar frotando hasta que la suciedad se desprenda.",
"Quitar crema con papel o paño limpio.",

    ],
  },
    {
    id: 63,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (1 LIBRA)",
    imagen: "/una.webp",
    presentacion: "1 Libras",
         descripcion: `Crema desengrasante para manos especialmente formulada para remover grasa, aceite y suciedad pesada después de trabajos mecánicos e industriales. Ideal para talleres, mecánicos, técnicos y personas que trabajan con maquinaria.`,
  almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
    categoria: "Car Wash",
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
       usos: [
      "Talleres mecánicos",

"Personal que trabaja con motores y maquinaria",

    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de crema en las manos.",

"Frotar bien, especialmente en las áreas con grasa o suciedad.",

"Continuar frotando hasta que la suciedad se desprenda.",
"Quitar crema con papel o paño limpio.",

    ],
  },
    {
    id: 65,
    nombre: "MANIX, CREMA DESENGRASANTE PARA MANOS (2 LIBRA)",
    imagen: "/dos.webp",
    presentacion: "2 Libras",
    categoria: "Car Wash",
         descripcion: `Crema desengrasante para manos especialmente formulada para remover grasa, aceite y suciedad pesada después de trabajos mecánicos e industriales. Ideal para talleres, mecánicos, técnicos y personas que trabajan con maquinaria.`,

     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
      usos: [
      "Talleres mecánicos",

"Personal que trabaja con motores y maquinaria",

    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de crema en las manos.",

"Frotar bien, especialmente en las áreas con grasa o suciedad.",

"Continuar frotando hasta que la suciedad se desprenda.",
"Quitar crema con papel o paño limpio.",

    ],
  },
  {
    id: 12,
    nombre: "MASTER FOAM, SHAMPOO ALFOMBRA",
    imagen: "/foam.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
     descripcion: `Shampoo para alfombras y telas ideal para limpiar asientos, interiores de vehículos y superficies textiles sin necesidad de usar agua.`,

       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños. Utilice mascarilla, guantes y lentes de protección.",
         usos: [
      "Asientos de carro",

"Sillones y muebles de tela",
"Interiores de vehículos",

    ],
      almacenamiento: [
      "Mantenga debidamente cerrado después de su uso. Cerrar con su tapa original. Nunca debe de tapar utilizando cubiertas de metal, algodón, gasa, corcho o papel",
      "Debe de almacenarse en áreas limpias, secas, ventiladas y protegida de la luz"
    ],
        modoDeUso: [
      "Aplicar el producto directamente sobre la tela.",

"Frotar bien, especialmente en las áreas con grasa o suciedad.",

"Continuar frotando hasta que la suciedad se desprenda.",
"Retirar el exceso con un paño limpio y seco.",

    ],
  },
  {
    id: 18,
    nombre: "Ribbon, Shampoo Carro",
    imagen: "/carro.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
     descripcion: `Shampoo para carro que elimina suciedad y polvo, dejando la carrocería limpia, brillante y con agradable aroma.`,
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
         usos: [
      "Lavado de carrocería",
    ],
           modoDeUso: [
      "Diluir una pequeña cantidad de shampoo en un balde con agua y mover hasta que haga espuma.",

"Aplicar sobre el vehículo con esponja o paño suave.",

"Frotar para remover la suciedad.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 20,
    nombre: "SILICONA, BRILLO PARA TABLERO",
    imagen: "/silicona.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Car Wash",
     descripcion: `Silicona para tableros que da brillo y protección a plásticos, cuero y cuerina, con fragancia a cherry.`,
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
             usos: [
      "Tablero del carro",
        "Puertas y paneles interiores",
          "Superficies plásticas",
            "Asientos de cuero o cuerina",
    ],
            modoDeUso: [
      "Aplicar una pequeña cantidad en un paño limpio o esponja.",

"Distribuir sobre la superficie del tablero, plástico, cuero o cuerina.",

"Esparcir de manera uniforme hasta cubrir el área.",

    ],
  },

  // ===================== Cera liquida =====================
  {
    id: 7,
    nombre: "CLASS CERA LIQUIDA",
    imagen: "/class.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Cera liquida",
    advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
     descripcion: `Cera líquida para pisos que protege, da brillo y mejora la apariencia de las superficies, dejando un acabado limpio y uniforme.`,
               usos: [
      "Pisos de cerámica",
        "Mosaico y superficies similares",
          "Hogares y oficinas",
          
    ],

        modoDeUso: [
      "Limpiar el piso previamente para retirar polvo y suciedad.",

"Aplicar una pequeña cantidad de cera líquida con un trapeador o paño limpio.",

"Distribuir de forma uniforme sobre la superficie.",
"Dejar secar para que se forme el brillo protector.",

    ],
  },

  // ===================== Desinfectantes para pisos =====================
  {
    id: 13,
    nombre: "PINE-GLID, PINO CONCENTRADO",
    imagen: "/pino.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
     descripcion: `Desinfectante concentrado con aroma a pino que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 31,
    nombre: "SANILIZ AYLEN",
    imagen: "/aylen.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma Aylen que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 42,
    nombre: "SANILIZ BAMBÚ",
    imagen: "/bambu.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Bambú que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 32,
    nombre: "SANILIZ BLUE",
    imagen: "/blue.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Blue que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 33,
    nombre: "SANILIZ BOSQUES",
    imagen: "/bosques.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Bosques que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 34,
    nombre: "SANILIZ CANELA",
    imagen: "/canela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Canela que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 17,
    nombre: "SANILIZ CHERRY",
    imagen: "/cherry.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Cherry que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 36,
    nombre: "SANILIZ CITRONELA",
    imagen: "/citronela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Citronela que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 35,
    nombre: "SANILIZ FRUTAL",
    imagen: "/frutal.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Frutal que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 41,
    nombre: "SANILIZ LAVANDA",
    imagen: "/lavanda.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Lavanda que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 37,
    nombre: "SANILIZ LIMÓN",
    imagen: "/limon.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Limón que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 38,
    nombre: "SANILIZ MANZANA",
    imagen: "/manzana.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Manzana que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 39,
    nombre: "SANILIZ MANZANA CANELA",
    imagen: "/mcanela.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Manzana Canela que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 40,
    nombre: "SANILIZ MORA",
    imagen: "/mora.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Mora que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },
  {
    id: 16,
    nombre: "SANILIZ VIDA",
    imagen: "/vida.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desinfectantes para pisos",
      descripcion: `Desinfectante concentrado con aroma a Vida que desinfecta, limpia y deja un ambiente fresco y agradable.`,
       advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
                usos: [
      "Pisos de cerámica y cemento",
        "Baños y sanitarios",
          "Hogares, oficinas y negocios",  
    ],
          modoDeUso: [
      "Diluir una pequeña cantidad del producto en agua.",

"Aplicar con trapeador, paño o esponja sobre la superficie.",

"Aplicar de forma uniforme toda el área.",
"Dejar secar para que el aroma a pino permanezca en el ambiente.",

    ],
  },

  // ===================== Desmanchadores y limpiadores =====================
  {
    id: 44,
    nombre: "BACTERIN",
    imagen: "/bacterin.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desmanchadores y limpiadores",
     descripcion: `Desinfectante antibacterial que elimina bacterias y controla los malos olores en distintas superficies.`,
        advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
          usos: [
      "Pisos y superficies lavables",
      "Baños y sanitarios",
      "Áreas de alto tráfico",
      "Superficies donde se requiere mayor higiene"
    ],
          modoDeUso: [
      "Diluir el producto en agua según el nivel de limpieza deseado.",

"Cubrir bien toda la superficie a desinfectar.",

"Dejar actuar unos minutos para mejor efecto antibacterial.",
"Enjuagar con agua para quitar el producto.",

    ],

  },
  {
    id: 9,
    nombre: "FAST MULTILIMPIADOR, DESENGRASANTE COCINA",
    imagen: "/cocina.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Desmanchadores y limpiadores",
     descripcion: `Desengrasante para cocina ideal para eliminar grasa y suciedad en estufas, campanas, azulejos y superficies lavables.`,
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
          usos: [
      "Estufas y hornos",
      "Campanas extractoras",
      "Mesones y superficies de cocina",
      "Equipos de cocina en hogares y negocios"
    ],
       modoDeUso: [
      "Aplicar el producto directamente sobre la superficie con grasa.",

"Dejar actuar unos segundos para que afloje la suciedad.",

"Frotar con esponja, paño o cepillo si es necesario.",
"Enjuagar con agua para quitar el producto.",

    ],
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
     descripcion: `Desmanchador para cerámica blanca ideal para sanitarios, pisos y superficies de baño.`,
        usos: [
      "Inodoros",
      "Lavamanos",
      "Azulejos de baño",
      "Superficies con sarro o manchas de humedad"
    ],
    modoDeUso: [
      "Aplicar el producto directamente sobre la zona manchada.",

"Dejar actuar unos minutos para que afloje la suciedad.",

"Frotar con esponja, cepillo suave o fibra.",
"Enjuagar con abundante agua.",

    ],
     advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",

  },

  // ===================== Jabones =====================
  {
    id: 28,
    nombre: "CANINOS, SHAMPOO PARA PERRO",
    imagen: "/caninos.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Shampoo para perro con aroma a cherry, ideal para mantener el pelaje limpio, suave y fresco.`,
 advertencias: "Dañino si es ingerido. Manténgase fuera del alcance de los niños.",
    usos: [
      "Ayuda a eliminar suciedad y malos olores",
    ],
      modoDeUso: [
      "Mojar completamente el pelaje del perro con agua.",

"Aplicar una pequeña cantidad de shampoo sobre el cuerpo.",

"Masajear suavemente hasta formar espuma.",
"Enjuagar con abundante agua hasta retirar todo el producto.",

    ],
      

  },
  {
    id: 43,
    nombre: "MASTER CLEANER ALOE FRESH, JABÓN PARA MANOS",
    imagen: "/cleaneraf.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Master Cleaner Aloe Fresh es un jabón líquido para manos que limpia eficazmente mientras deja una sensación de frescura y suavidad en la piel.`,
   usos: [
      "Limpieza diaria de manos",
      "Ayuda a eliminar suciedad e impurezas",
      "Ideal para baños, cocinas, oficinas y comercios"
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de jabón en las manos.",

"Frotar entre las palmas, dedos y uñas durante unos segundos.",

"Frotar suavemente hasta formar espuma.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 11,
    nombre: "MASTER CLEANER CHERRY, JABÓN PARA MANOS",
    imagen: "/cleanerc.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Master Cleaner Cherry es un jabón líquido para manos que limpia eficazmente mientras deja una sensación de frescura y suavidad en la piel.`,
   usos: [
      "Limpieza diaria de manos",
      "Ayuda a eliminar suciedad e impurezas",
      "Ideal para baños, cocinas, oficinas y comercios"
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de jabón en las manos.",

"Frotar entre las palmas, dedos y uñas durante unos segundos.",

"Frotar suavemente hasta formar espuma.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 26,
    nombre: "MASTER CLEANER LIMÓN, JABÓN PARA MANOS",
    imagen: "/cleanerl.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Master Cleaner Limón es un jabón líquido para manos que limpia eficazmente mientras deja una sensación de frescura y suavidad en la piel.`,
   usos: [
      "Limpieza diaria de manos",
      "Ayuda a eliminar suciedad e impurezas",
      "Ideal para baños, cocinas, oficinas y comercios"
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de jabón en las manos.",

"Frotar entre las palmas, dedos y uñas durante unos segundos.",

"Frotar suavemente hasta formar espuma.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 25,
    nombre: "MASTER CLEANER MANGO, JABÓN PARA MANOS",
    imagen: "/cleanermgo.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Master Cleaner Mango es un jabón líquido para manos que limpia eficazmente mientras deja una sensación de frescura y suavidad en la piel.`,
   usos: [
      "Limpieza diaria de manos",
      "Ayuda a eliminar suciedad e impurezas",
      "Ideal para baños, cocinas, oficinas y comercios"
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de jabón en las manos.",

"Frotar entre las palmas, dedos y uñas durante unos segundos.",

"Frotar suavemente hasta formar espuma.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 27,
    nombre: "MASTER CLEANER MANZANA, JABÓN PARA MANOS",
    imagen: "/cleanerm.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Master Cleaner Manzana es un jabón líquido para manos que limpia eficazmente mientras deja una sensación de frescura y suavidad en la piel.`,
   usos: [
      "Limpieza diaria de manos",
      "Ayuda a eliminar suciedad e impurezas",
      "Ideal para baños, cocinas, oficinas y comercios"
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad de jabón en las manos.",

"Frotar entre las palmas, dedos y uñas durante unos segundos.",

"Frotar suavemente hasta formar espuma.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 14,
    nombre: "PLATOX, JABÓN PARA LOSA",
    imagen: "/platox.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
 descripcion: `Platox es un jabón líquido para loza con aroma a limón, diseñado para eliminar grasa, restos de comida y suciedad en platos, vasos y utensilios de cocina.`,
 usos: [
      "Lavado de platos, vasos y cubiertos",
    ],
       modoDeUso: [
      "Aplicar una pequeña cantidad en la esponja húmeda.",

"Frotar los utensilios hasta formar espuma.",

"Lavar platos, vasos y cubiertos normalmente.",
"Enjuagar con abundante agua.",

    ],
  },
  {
    id: 23,
    nombre: "TENAZ ALOE FRESH, JABÓN PARA ROPA",
    imagen: "/tenaza.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Tenaz Aloe Fresh es un jabón líquido para ropa diseñado para limpiar profundamente las prendas, ayudando a remover manchas, suciedad y malos olores.`,
 usos: [
      "Limpieza profunda de prendas de vestir",
       "Ideal para uso en el hogar o lavanderías",
    ],
       modoDeUso: [
      "Agregar una cantidad adecuada de jabón directamente en la lavadora.",

"Dejar que la lavadora realice el proceso normal.",


    ],
  },
  {
    id: 49,
    nombre: "TENAZ FLORAL, JABÓN PARA ROPA",
    imagen: "/tenazf.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Tenaz Floral es un jabón líquido para ropa diseñado para limpiar profundamente las prendas, ayudando a remover manchas, suciedad y malos olores.`,
 usos: [
      "Limpieza profunda de prendas de vestir",
       "Ideal para uso en el hogar o lavanderías",
    ],
       modoDeUso: [
      "Agregar una cantidad adecuada de jabón directamente en la lavadora.",

"Dejar que la lavadora realice el proceso normal.",


    ],
  },
  {
    id: 22,
    nombre: "TENAZ LAVANDA, JABÓN PARA ROPA",
    imagen: "/tenazl.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Tenaz Lavanda es un jabón líquido para ropa diseñado para limpiar profundamente las prendas, ayudando a remover manchas, suciedad y malos olores.`,
 usos: [
      "Limpieza profunda de prendas de vestir",
       "Ideal para uso en el hogar o lavanderías",
    ],
       modoDeUso: [
      "Agregar una cantidad adecuada de jabón directamente en la lavadora.",

"Dejar que la lavadora realice el proceso normal.",


    ],
  },
  {
    id: 24,
    nombre: "TENAZ MANZANA, JABÓN PARA ROPA",
    imagen: "/tenazm.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Jabones",
     descripcion: `Tenaz Manzana es un jabón líquido para ropa diseñado para limpiar profundamente las prendas, ayudando a remover manchas, suciedad y malos olores.`,
 usos: [
      "Limpieza profunda de prendas de vestir",
       "Ideal para uso en el hogar o lavanderías",
    ],
       modoDeUso: [
      "Agregar una cantidad adecuada de jabón directamente en la lavadora.",

"Dejar que la lavadora realice el proceso normal.",


    ],
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
     descripcion: `Shampoo Aloe Vera para cabello, formulado para limpiar suavemente mientras aporta frescura y cuidado al cuero cabelludo.`,
      usos: [
      "Limpieza suave del cabello y cuero cabelludo",
       "Apto para uso en hogares, hoteles o salones",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Aplicar una pequeña cantidad de shampoo en la mano.",
"Masajear suavemente el cuero cabelludo hasta formar espuma.",
"Distribuir el producto por todo el cabello.",
"Enjuagar con abundante agua.",
    ],
  },
  {
    id: 46,
    nombre: "SHAMPOO PARA CABELLO MENTA",
    imagen: "/menta.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Shampoo y acondicionadores",
    descripcion: `Shampoo Menta para cabello, formulado para limpiar suavemente mientras aporta frescura y cuidado al cuero cabelludo.`,
      usos: [
      "Limpieza suave del cabello y cuero cabelludo",
       "Apto para uso en hogares, hoteles o salones",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Aplicar una pequeña cantidad de shampoo en la mano.",
"Masajear suavemente el cuero cabelludo hasta formar espuma.",
"Distribuir el producto por todo el cabello.",
"Enjuagar con abundante agua.",
    ],
  },
  {
    id: 47,
    nombre: "SHAMPOO PARA CABELLO PAPAYA",
    imagen: "/papaya.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Shampoo y acondicionadores",
    descripcion: `Shampoo Papaya para cabello, formulado para limpiar suavemente mientras aporta frescura y cuidado al cuero cabelludo.`,
      usos: [
      "Limpieza suave del cabello y cuero cabelludo",
       "Apto para uso en hogares, hoteles o salones",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Aplicar una pequeña cantidad de shampoo en la mano.",
"Masajear suavemente el cuero cabelludo hasta formar espuma.",
"Distribuir el producto por todo el cabello.",
"Enjuagar con abundante agua.",
    ],
  },

  // ===================== Suavizantes =====================
  {
    id: 30,
    nombre: "Suaviking FLOR DE LUNA, Suavizante",
    imagen: "/flor.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
     descripcion: `Suaviking Flor de Luna es un suavizante para ropa diseñado para dejar las prendas suaves, frescas y con un aroma delicado y duradero.`,
   usos: [
      "Suaviza las fibras de la ropa",
       "Apto para todo tipo de ropa lavable",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Agregar una pequeña cantidad de suavizante.",
"Distribuir en el compartimiento del suavizante o directamente en el agua.",
"No aplicar directamente sobre la ropa seca.",
"Dejar actuar durante el enjuague final y escurrir normalmente.",
    ],
  },
  {
    id: 19,
    nombre: "Suaviking Girasol, Suavizante",
    imagen: "/girasol.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
      descripcion: `Suaviking Girasol es un suavizante para ropa diseñado para dejar las prendas suaves, frescas y con un aroma delicado y duradero.`,
   usos: [
      "Suaviza las fibras de la ropa",
       "Apto para todo tipo de ropa lavable",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Agregar una pequeña cantidad de suavizante.",
"Distribuir en el compartimiento del suavizante o directamente en el agua.",
"No aplicar directamente sobre la ropa seca.",
"Dejar actuar durante el enjuague final y escurrir normalmente.",
    ],
  },
  {
    id: 29,
    nombre: "Suaviking TROPICAL, Suavizante",
    imagen: "/tropical.webp",
    presentacion: "Galón de 3.78 Litros",
    categoria: "Suavizantes",
      descripcion: `Suaviking Tropical es un suavizante para ropa diseñado para dejar las prendas suaves, frescas y con un aroma delicado y duradero.`,
   usos: [
      "Suaviza las fibras de la ropa",
       "Apto para todo tipo de ropa lavable",
    ],
       modoDeUso: [
      "Mojar completamente el cabello con agua.",

"Agregar una pequeña cantidad de suavizante.",
"Distribuir en el compartimiento del suavizante o directamente en el agua.",
"No aplicar directamente sobre la ropa seca.",
"Dejar actuar durante el enjuague final y escurrir normalmente.",
    ],
  },


   // ===================== ambientadores =====================
 {
    id: 130,
    nombre: "AMBIENTADOR EN SPRAY GLADE",
    imagen: "/glade.webp",
    presentacion: "Lata de 400ml",
    categoria: "Ambientadores",
     descripcion: `Desodorante en spray varios aromas`,
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