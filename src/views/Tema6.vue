<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-border.bottom-left.bottom-right

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan sanitario

    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 El plan sanitario en las producciones pecuarias es de gran importancia, puesto que este garantiza que se disminuyan los problemas que puedan afectar el sistema de producción y afecten la capacidad productiva y reproductiva en las explotaciones.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Este plan debe estar enfocado en establecer actividades que contribuyan de manera sistemática, ordenada, integrada y práctica con la prevención, el control y la erradicación de enfermedades de control oficial y de gran incidencia en las producciones pecuarias. En síntesis, el plan sanitario debe establecer actividades que estén diseñadas en la mitigación de factores de riesgo que puedan afectar la sanidad de los animales.
        p.mb-4 Es de aclarar que, aunque se tienen actividades en común (manejo, vacunación, desparasitación), cada plan sanitario debe ser diseñado para las condiciones específicas de cada predio en singular y a su sistema de manejo, ya que las condiciones de varían entre una región y otra, inclusive entre predios.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema6/img01.jpg")

    p.mb-5 En la figura que se muestra a continuación, se puede observar la estructura general que se recomienda para establecer un plan sanitario y los pasos para su elaboración:

    .row.justify-content-center
      .col-lg-10
        .row.mb-5
          .col-lg-3
            figure
              img(src="@/assets/curso/tema6/img02.png")
          .col-lg-9
            TabsA.color-acento-botones.mb-5
              .tarjeta.color-acento-botones.p-4(titulo="<i class=\"fas fa-chevron-down\"><\/i> Alcance")
                p.py-5.mb-0 En esta fase se explica el contexto de aplicación del plan, el personal encargado de aplicarlo y a quien va dirigido.
              .tarjeta.color-acento-botones.p-4(titulo="<i class=\"fas fa-chevron-down\"><\/i> Objeto")
                p.py-5.mb-0 Aquí se debe mencionar la intención que se tiene al implementar el plan.
              .tarjeta.color-acento-botones.p-4(titulo="<i class=\"fas fa-chevron-down\"><\/i> Consideraciones")
                p.py-5.mb-0 Se deben mencionar las consideraciones a tener en cuenta en el momento de la implementación del plan sanitario, las palabras con mayor importancia para la comprensión del plan. Deben describirse las causas que pueden generar algunos peligros o enfermedades, como prevenirlas y los tratamientos.
              .tarjeta.color-acento-botones.p-4(titulo="<i class=\"fas fa-chevron-down\"><\/i> Desarrollo")
                p.py-5.mb-0 Se plasman todas las actividades y fechas para la implementación del plan.
              .tarjeta.color-acento-botones.p-4(titulo="<i class=\"fas fa-chevron-down\"><\/i> Registros")
                p.py-5.mb-0 La información de todas las actividades que se desarrollen en el marco del plan, se deben consignar en los registros.

        p.mb-5 En relación con la elaboración del plan sanitario se recomienda tener en cuenta la siguiente estructura:

        .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 6.
          span Estructura de un plan sanitario.

        figure.mb-5
          img(src="@/assets/curso/tema6/img03.png")

        Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1  Prevención de enfermedades de control oficial

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema6/img04.jpg")
      .col-lg-8
        figure.mb-4.text-right.w-auto
          img(src="@/assets/curso/tema6/img05.jpg" style="height: 40px; width: auto;")
        p.mb-0 Las enfermedades de control oficial son aquellas que, de acuerdo con lo establecido en las normas internacionales adoptadas por Colombia, se establecen como de interés en el ámbito nacional y se disponen programas de prevención, control y erradicación. De igual manera, se establece su notificación obligatoria y registro. A continuación, encuentra el listado de enfermedades y sus características principales:


  .container.tarjeta.tarjeta--naranja.p-4.p-md-5.no-border.top-left.top-right.bottom-left.bottom-right
    p.mb-5.px-5.color-texto-naranja.text-center Enfermedades de control oficial
    p.mb-5.px-5 Son las enfermedades que pueden sufrir las especies pecuarias y que se deben trabajar de inmediato por parte del predio y el ICA que es la entidad encargada de priorizar dichas enfermedades para evitar problemas mayores que impacten el proceso productivo, las enfermedades que han sido declaradas de control oficial en Colombia por el ICA y para las cuales se debe vacunar obligatoriamente son:


  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-border.top-left.top-right.bottom-left.bottom-right
    .row.justify-content-center
      .col-lg-9
        p.mb-5 Alerta temprana es la forma de llamar a las acciones que deben ser tenidas en cuenta con prioridad para el beneficio de las diferentes fincas evitando la propagación de alguna enfermedad o virus; por ello, a continuación, se comparte la imagen del ICA con estas alertas y se recomienda contactar de inmediato al Instituto para reportar la urgencia en caso de evidenciarla:
        figure
          img(src="@/assets/curso/tema6/img06.svg")

    Separador.mb-0

  .container.tarjeta.tarjeta--gris-especial.p-4.p-md-5.py-0.py-md-0.no-border.top-left.top-right.bottom-left.bottom-right

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2  Área de cuarentena

    p.mb-5 La cuarentena pecuaria comprende todas aquellas medidas encaminadas a regular, restringir o prohibir la producción o la importación de animales y sus productos y restringir el movimiento o existencia de estos, con la finalidad de prevenir la introducción, dispersión o diseminación de enfermedades u otros organismos que afectan o puedan afectar la sanidad animal del país.

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img13.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El área de cuarentena es un área física y específica de la producción en donde se deben cumplir unas condiciones de aislamiento de los animales que se van a ingresar nuevos al predio o que se sospecha que tienen alguna enfermedad o condición contagiosa.
              br
              br
              | En cuanto a los requisitos estructurales, esta área debe estar separada de otras zonas donde haya animales, y por supuesto, a una distancia prudente, dependiendo de la especie animal y la capacidad de difusión en el aire de posibles agentes patógenos.
        p.mb-5 Esta zona debe estar delimitada por muros, vallas o alambrados, con puerta y un aviso en la entrada que alerte sobre la prohibición del ingreso de personal no autorizado. Estas medidas son muy importantes ya que se pueden diseminar los agentes patógenos por toda la producción. Debe tener una zona de cargue y descargue de animales y en lo posible contar con un vestier donde el operario pueda realizar el cambio de vestuario y botas y si se requiere, ducharse.

    Separador

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.py-0.py-md-0.no-border.top-left.top-right.bottom-left.bottom-right

    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3  Almacenamiento y transporte de productos biológicos y medicamentos veterinarios

    p.mb-4 Los medicamentos son sustancias utilizadas para curar a los animales y su administración puede ser interna o externa. Por otra parte, los biológicos son sustancias utilizadas para la prevención de enfermedades, como por ejemplo las vacunas. Los medicamentos veterinarios que se utilizan y comercializan en Colombia, deben estar registrados ante el Instituto Colombiano Agropecuario (ICA) y deberán emplearse aplicando las buenas prácticas para el uso de medicamentos veterinarios.

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Pueden clasificarse de acuerdo con: su naturaleza (farmacológico o inmunológico); su vía de administración (oral, inyectable, ocular, por nebulización), sus propiedades (analgésico, antiparasitario, anestésico), su forma farmacéutica (polvo oral, premezcla medicamentosa, aerosol, comprimido, entre otros).

    p.mb-5.text-center Los medicamentos tienen varias formas de presentación, y se clasifican según su forma de elaboración así:

    .row.justify-content-center
      .col-lg-10
        figure
          img(src="@/assets/curso/tema6/img14.svg")
        .p-4.px-5.caja-texto-subrayado.mb-4
          p.mb-0 Las condiciones de almacenamiento, transporte y conservación deben ajustarse a las especificaciones que figuran en la etiqueta, en particular las relativas a la temperatura, luz y humedad.
        p.mb-0 Todos los productos veterinarios deben almacenarse en instalaciones seguras y mantenerse bajo llave fuera del alcance de los niños y los animales. Los medicamentos se almacenan separados de los plaguicidas, fertilizantes y alimentos.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4  Técnicas para aplicación de medicamentos veterinarios

    .row.mb-5
      .col-lg-8
        p.mb-0 Se debe tener muy en cuenta que, “con el uso de medicamentos en las especies pecuarias, se pueden generar algunos riesgos que están principalmente vinculados con su manipulación y administración” (Invima, 2020). Por lo anterior, las autoridades competentes deben establecer y aplicar la regulación sobre las buenas prácticas de uso de medicamentos veterinarios.
          br
          br
          | Para poder aplicar las técnicas de aplicación de medicamentos veterinarios se deben tener en cuenta factores como la seguridad, el costo, la efectividad, la especie que se vaya a tratar, el tipo de enfermedad (agudo o crónico), el manejo (dominancia sobre el animal), la vía de administración y la forma farmacéutica.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema6/img15.svg")

    .cajon.color-acento-contenido.p-4.mb-4.box-soft-green.py-2.px-5.mb-5
      p.mb-0 Las vías de aplicación de medicamentos varían dependiendo de la especie animal; sin embargo, las principales vías de aplicación de medicamentos son:

    .row.justify-content-center.mb-5
      .col-md-11.col-lg-7
        SlyderF(columnas="col-12").mb-5
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Intraalar:
              |   se realiza punzando la membrana del ala. Específicamente, en medio del triángulo formado por el pliegue que aparece al abrir el ala. Este método es el utilizado para realizar vacunaciones contra Viruela Aviar y se realiza con aplicador de doble estilete que previamente debe ser introducido en el frasco que contiene la vacuna.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Intramamaria:
              |   con la ayuda de un catéter de pezón, se aplica el medicamento en los pezones del animal. Esta técnica es muy utilizada para tratar casos de mastitis o secados de vacas productoras de leche.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong In ovo:
              |   se inyecta a los embriones en su último estado de incubación.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Intranasal:
              |   el medicamento se aplica por los orificios nasales. Las formas más utilizadas son en gotas, nebulizaciones o también se puede emplear el uso de una jeringa para medicamentos líquidos y se utilizan principalmente en especies pecuarias que presenten problemas respiratorios.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Oftálmica:
              |   este método de aplicación es muy utilizada en aves y consiste en la aplicación directa del medicamento sobre el ojo del animal, generalmente la presentación del medicamento viene en gotas y se utiliza mucho en vacunaciones e infecciones oculares. Se aplica el medicamento directamente sobre el ojo. Este método es de manejo individual de los animales y en las aves se utiliza principalmente para realizar vacunaciones contra enfermedades como Newcastle, Gumboro, bronquitis, entre otras.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Ótica:
              |   el medicamento es aplicado en el oído y suele utilizarse mayormente en infecciones de oído medio o externo.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Oral:
              |   el medicamento se aplica por la boca o pico, según sea el caso, y se emplean medicamentos en presentaciones de pastillas, polvos, jarabes, suspensiones. En las aves es la principal vía de administración.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Rectal:
              |   se aplica el medicamento por el recto y se utilizan en formas de supositorios o lavados.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Tópica:
              |   el medicamento se aplica sobre la piel del animal y su presentación puede ser en crema, líquido, aerosol, polvo. Esta vía de aplicación se utiliza principalmente en heridas.
          .tarjeta.tarjeta--naranja-2.p-5
            p.mb-0
              strong Intravaginal e Intrauterina:
              |   con la ayuda de un catéter, se aplica el medicamento directamente por la vagina del animal o en el caso de ser intrauterina, se continúa introduciendo el catéter pasando por el cuello uterino hasta llegar al útero y poder depositar el medicamento allí. Esta técnica se utiliza principalmente en casos de metritis o infecciones vaginales.


        p.mb-5 La siguiente vía es la <strong>parenteral</strong> y se compone de varios elementos que se deben tener en cuenta. Esta vía implica la ruptura de las barreras del organismo, la piel y las mucosas para depositar las sustancias en tejidos o cavidades internas del organismo inyectando el medicamento a través de una punción utilizando aguja y jeringa desechables. A continuación, se explican varias vías de aplicación de medicamentos parenteral:

        figure.mb-5
          img(src="@/assets/curso/tema6/img16.jpg")

        p.mb-5 Posterior a definir la técnica a trabajar se requiere definir la vía de administración y en la siguiente infografía se trabajan las más frecuentes:

        SlyderF(columnas="col-12")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img17.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img18.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img19.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img20.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img21.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img22.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img23.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img24.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img25.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img26.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img27.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img28.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img29.svg")
          .tarjeta.tarjeta--naranja-2
            figure
              img(src="@/assets/curso/tema6/img30.svg")

    Separador

    #t_6_5.titulo-segundo.color-acento-contenido
      h2 6.5  Tiempo de retiro

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Este tiempo que debe reposar aislado un animal desde la hora de aplicación del medicamento veterinario hasta la eliminación del medicamento del cuerpo su organismo logrando disminuir como mínimo hasta que la concentración del producto médico no infrinja el Límite Máximo de Residuos (LMR) en los tejidos del animal, esto tiene el fin de evitar que esa carne o esos productos dependientes de los animales no sean dañosos para la salud de los seres humanos o los animales con los que el animal intervenido tenga contacto. Este tiempo debe ser respetado tal como se enuncia a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  .container.tarjeta.tarjeta--gris-especial.p-4.p-md-5.py-0.py-md-0.no-border.top-left.top-right.bottom-left.bottom-right

    #t_6_6.titulo-segundo.color-acento-contenido
      h2 6.6  Notificación de efectos adversos

    p.mb-5 Las notificaciones o denuncias de casos que se presentan en los animales con sintomatología compatible o atribuible a enfermedades de notificación oficial según Resolución ICA 3714 del 2015, debe realizarse en las oficinas del Instituto Colombiano Agropecuario – ICA, las personas que se encuentran en la obligación de realizar esta acción son:

    .row
      .col-lg-3
        figure
          img(src="@/assets/curso/tema6/img31.svg")
      .col-lg-9
        ol.lista-ol--cuadro
          li.mb-2
            .lista-ol--cuadro__vineta
              span 1
            | Personas responsables, encargados o propietarios de los animales afectados, ya sea en grandes, medianas o pequeñas producciones.
          li.mb-2
            .lista-ol--cuadro__vineta
              span 2
            | Los médicos veterinarios, médicos veterinarios zootecnistas o profesionales en el área que atiendan producciones o presten asistencia técnica ya sea pública o privada.
          li.mb-2
            .lista-ol--cuadro__vineta
              span 3
            | Cualquier autoridad local, regional o nacional.
          li.mb-2
            .lista-ol--cuadro__vineta
              span 4
            | Responsables o encargados de los laboratorios diagnósticos veterinarios públicos o privados.
          li.mb-0
            .lista-ol--cuadro__vineta
              span 5
            | Cualquier persona con conocimiento de aves enfermas o aparentemente afectadas por enfermedades de notificación.

    Separador

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.py-0.py-md-0.no-border.top-left.top-right.bottom-left.bottom-right

    #t_6_7.titulo-segundo.color-acento-contenido
      h2 6.7  Guía sanitaria de movilización interna

    .row.mb-5
      .col-md-8.col-lg-9
        p.mb-5 Para garantizar las condiciones de salubridad y seguridad de los animales, el ICA diseñó un formato denominado Guía Sanitaria de Movilización Interna (GSMI). Este documento contiene información sobre el lugar de origen de los animales y las condiciones sanitarias en las que se entregan los animales; esto último con el fin de evitar propagación de enfermedades. En este formato se consignan datos como número de animales, género, predio de procedencia, destino final (transporte a otro predio o sacrificio), registro de vacunación, ruta de transporte, destino final.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Para que el ICA pueda emitir el aval para la guía de movilización, es necesario cumplir con los siguientes requisitos: que no haya presencia de focos de enfermedades en el predio, que este se encuentre registrado oficialmente ante el ICA, registro de vacunación vigente, inspecciones clínicas a los animales, registro de cuarentenas.

      .col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema6/img32.svg")

    p.mb-5 Es de aclarar que esta guía solamente es válida para un solo vehículo y para un solo trayecto y aplica para la fecha autorizada. Sin embargo, un solo vehículo podrá transportar animales con diferentes GSMI, de diferentes orígenes y con diferentes destinos y se debe cumplir con los siguientes requisitos:

    .row.justify-content-center.mb-5
      .col-md-10
        .row.mb-lg-5.gx-5
          .col-lg-6.mb-md-0.d-flex
            .row.align-items-center.border-especial.top.bottom.py-4
              .col-2
                figure
                  img(src="@/assets/curso/tema6/img33.svg")
              .col-9.offset-1
                p.mb-0 Que el origen y el destino cuenten con igual condición sanitaria en cuanto a las enfermedades de control oficial y se encuentre dentro de las mismas zonificaciones declaradas por el ICA.
          .col-lg-6.mb-md-0.d-flex
            .row.align-items-center.border-especial.top.bottom.py-4
              .col-2
                figure
                  img(src="@/assets/curso/tema6/img34.svg")
              .col-9.offset-1
                p.mb-0 Que se identifiquen los lugares de origen y de destino en la ruta para la movilización de animales.
        .row.gx-5.mb-5
          .col-lg-6.mb-4.mb-md-0.d-flex
            .row.align-items-center.border-especial.bottom.py-4
              .col-2
                figure
                  img(src="@/assets/curso/tema6/img35.svg")
              .col-9.offset-1
                p.mb-0  Que los lugares de origen y destino no tengan requisitos sanitarios especiales para autorizar la movilización o para obtener la GSMI.
          .col-lg-6.mb-4.mb-md-0.d-flex
            .row.align-items-center.border-especial.bottom.py-4
              .col-2
                figure
                  img(src="@/assets/curso/tema6/img36.svg")
              .col-9.offset-1
                p.mb-0 Que las GSMI expedidas se encuentren vigentes dentro del tiempo autorizado para la movilización de los animales.

        p.mb-5 La expedición de la GSMI se puede expedir de dos formas:

        .tabla-a.color-acento-contenido.table-especial-cuerpo.mb-5
          table
            thead
              tr
                th 1.Presencial en la oficina local del ICA o convenio:
                th 2.En línea, a través de su plataforma Sigma:
            tbody
              tr.color-acento-contenido
                td
                  p.mb-0.p-4 Paso 1: Tener registrado el predio ante el ICA.
                    br
                    br
                    | Paso 2: Presentar la cédula de ciudadanía del titular de los animales o del apoderado.
                    br
                    br
                    | Paso 3: Presentar soporte de pago de la GMSI.
                    br
                    br
                    | Paso 4: Informar el destino de la movilización, número de animales, edad y especie a movilizar.
                    br
                    br
                    | Paso 5: Informar el nombre del conductor y datos del vehículo.
                    br
                    br
                    | Paso 6: Firmar recibo de satisfacción de la GSMI.

                td
                  p.mb-0.p-4 Paso 1: Ingresar al enlace <a href="https://www.ica.gov.co/servicios_linea/sigma/manuales.aspx" target='_blank'>https://www.ica.gov.co/servicios_linea/sigma/manuales.aspx</a> para descargar el acta de confidencialidad de usuarios y obtener información adicional.
                    br
                    br
                    | Paso 2: Diligenciar el acta de confidencialidad.
                    br
                    br
                    | Paso 3: Enviar el acta escaneada y el documento de identificación al correo electrónico mesadeayuda.sigma@ica.gov.co.
                    br
                    br
                    | En un tiempo estimado de 24 horas, recibirá a vuelta de correo el usuario y contraseña para poder ingresar a Sigma en línea y continuar con el trámite para expedir la guía de movilización.

</template>

<script>
export default {
  name: 'Tema6',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    openImage(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style lang="sass"></style>
