export default {
  global: {
    componenteFormativo: 'Programación de la <br/> producción pecuaria',
    descripcionCurso:
      'La programación de la producción es un tema administrativo de gran <br/> importancia en donde se incluyen procesos y labores de toda la unidad productiva, tales como las buenas prácticas, el reconocimiento de las enfermedades de control oficial, los sistemas productivos, entre otras.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción pecuaria',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de producción pecuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clases y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Buenas prácticas pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Interpretación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Implementación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Recurso humano',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Normativa',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Programa de producción (concepto y características)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Plan de producción',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Programación de actividades pecuarias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Prevención de enfermedades de control oficial',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Área de cuarentena',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo:
              'Almacenamiento y transporte de productos biológicos y medicamentos veterinarios',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Técnicas para aplicación de medicamentos veterinarios',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Tiempo de retiro',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Notificación de efectos adversos',
            hash: 't_6_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.7',
            titulo: 'Guía sanitaria de movilización interna',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Plan de alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Buenas prácticas de alimentación animal ',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo:
              'Almacenamiento de alimentos, materia prima e insumos pecuarios',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: '<i>Softwares</i> pecuarios ',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'FAO. (2004). Código de prácticas sobre buena alimentación animal.',
      link:
        'http://www.lactodata.info/docs/lib/fao_codigo_alimentacion_animal.pdf',
    },
    {
      referencia: 'FAO. (2020). Programa de alimentación animal.',
      link: 'https://www.fao.org/3/a1564s/a1564s03.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2017). Inocuidad en las cadenas. ICA.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/GUIA-PARA-LA-ELABORACION-DEL-PLAN-SANITARIO-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Invima. (2020). Guía Técnica para la elaboración de programas sanitarios. Instituto Nacional de Vigilancia de Medicamentos y Alimentos – Invima.',
      link:
        'https://www.invima.gov.co/documents/20143/426805/GU%C3%8DA+T%C3%89CNICA+PARA+LA+ELABORACI%C3%93N+DE+PROGRAMAS+SANITARIOS.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2021). Buena prácticas ganaderas en la producción de ganado bovino y bufalino destinado al sacrificio para el consumo humano. ICA.',
      link:
        'https://www.ica.gov.co/getattachment/35f0d70e-b2dd-4bfc-ac1f-ba169b5ccdca/Publicacion-5.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (s.f.). Guía para la elaboración del plan sanitario. ICA.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/GUIA-PARA-LA-ELABORACION-DEL-PLAN-SANITARIO-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia: 'Medline. (2021). Aftas.',
      link: 'https://medlineplus.gov/spanish/ency/article/000998.htm ',
    },
    {
      referencia:
        'Ministerio de Salud de Colombia. (1997). Conductas básicas en bioseguridad: manejo integral. Protocolo básico para el equipo de salud. Ministerio de Salud de Colombia.',
      link:
        'https://www.minsalud.gov.co/salud/Documents/observatorio_vih/documentos/prevencion/promocion_prevencion/riesgo_biol%C3%B3gico-bioseguridad/b_bioseguridad/BIOSEGURIDAD.pdf ',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura – FAO. (2018). Codex Alimentarius. FAO',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXM%2B2%252FMRL2s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación – FAO. (2021). Directrices para reforzar los servicios de sanidad animal en los países en desarrollo, capítulo 5. Recursos Humanos. FAO.',
      link:
        'https://www.fao.org/3/u2200s/u2200s08.htm#cap%C3%ADtulo%205:%20recursos%20humanos',
    },
    {
      referencia:
        'Scott, C. L. (2009). Mayo Clinic Family Health Book, Libro de Salud Familiar de Mayo Clinic, 5.ª edición',
    },
  ],
  glosario: [
    {
      termino: 'Afta',
      significado:
        'úlcera o llaga abierta y dolorosa en la boca. Las aftas son de color blanco o amarillo y están rodeadas por un área roja y brillante. No son cancerosas (Medline Plus, 2021).',
    },
    {
      termino: 'Ataxia',
      significado:
        'falta de control muscular o de coordinación de los movimientos voluntarios, como caminar o recoger objetos. Como signo de una condición subyacente, la ataxia puede afectar a varios movimientos y crear dificultades en el habla, el movimiento de los ojos y la deglución (Scott, 2009).',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'o diversidad biológica es la variedad de la vida. Este reciente concepto incluye varios niveles de la organización biológica. Abarca a la diversidad de especies de plantas, animales, hongos y microorganismos que viven en un espacio determinado, a su variabilidad genética, a los ecosistemas de los cuales forman parte estas especies y a los paisajes o regiones en donde se ubican los ecosistemas. También incluye los procesos ecológicos y evolutivos que se dan a nivel de genes, especies, ecosistemas y paisajes.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas, destinadas a mantener el control de factores de riesgo laborales procedentes de agentes biológicos, físicos o químicos, logrando la prevención de impactos nocivos, asegurando que el desarrollo o producto final de dichos procedimientos no atenten contra la salud y seguridad de trabajadores de la salud, pacientes, visitantes y el medio ambiente (Ministerio de Salud Colombiano, 1997).',
    },
    {
      termino: 'BPG',
      significado:
        'Buenas Prácticas Ganaderas –BPG- son un sistema de aseguramiento de inocuidad enfocado a la producción primaria, su objetivo es la gestión de riesgos biológicos, físicos y químicos generados en el predio y que pudieran afectar la salud de los consumidores (Instituto colombiano Agropecuario, 2021).',
    },
    {
      termino: 'Cánula',
      significado:
        'tubo corto que se emplea para aplicar medicamentos intramamarios.',
    },
    {
      termino: 'CIPF:',
      significado:
        'Comisión de Medidas Fitosanitarias que gobierna la Convención Internacional de Protección Fitosanitaria (CIPF), y fue establecida a través del artículo XII del nuevo texto revisado de la CIPF, aprobado en 1997, y funciona como órgano mundial de gobierno de la Convención (Organización de las Naciones Unidas para la Alimentación y la Agricultura, 2019).',
    },
    {
      termino: 'Codex Alimentarius',
      significado:
        'también conocido como “Código Alimentario”, es un conjunto de normas, directrices y códigos de prácticas aprobados por la Comisión del Codex Alimentarius. La Comisión, conocida también como CAC, constituye el elemento central del Programa Conjunto FAO/OMS sobre Normas Alimentarias y fue establecida por la FAO y la Organización Mundial de la Salud (OMS) con la finalidad de proteger la salud de los consumidores y promover prácticas leales en el comercio alimentario (Organización de las Naciones Unidas para la Alimentación y la Agricultura, 2021).',
    },
    {
      termino: 'Émbolo',
      significado:
        'parte de la jeringa que se presiona para empujar el líquido cuando se inyecta.',
    },
  ],
  complementario: [
    {
      texto:
        'Hernández, A. (2020). [Video]. YouTube. <i>Sistemas de producción animal.</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5VDR_vtHRLQ',
    },
    {
      texto:
        'Coasgrop hijos del campo. (2021). <i>Buenas Prácticas Pecuarias (BPP).</i> [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cN6lFxETmr8',
    },
    {
      texto:
        'La Finca de Hoy. (2019). <i>Requerimientos para certificar una granja pequeña en buenas prácticas pecuarias.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HUmDzvLu-ho',
    },
    {
      texto:
        'López, R. (s.f.). <i>Programación anual de actividades de la finca -volumen 9.</i> ',
      tipo: 'Cartilla',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/438/vol9_programacion_actividades_finca_op.pdf;jsessionid=42911C9BD2E1FB730D0B8D2393714D8B?sequence=12',
    },
    {
      texto:
        'Instituto Colombiano Agropecuario. (2020). [Video]. YouTube. <i>Conozca cómo expedir su guía sanitaria de movilización interna de animales en línea.</i>  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pmsY9jC5fHU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
