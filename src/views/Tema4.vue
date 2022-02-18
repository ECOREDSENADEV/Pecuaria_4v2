<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Legislación laboral

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        p.mb-4 La legislación laboral en Colombia es supervisada por el Ministerio del Trabajo que imparte las normas y ejerce la supervisión de su cumplimiento; en la actualidad las organizaciones están en la obligación de capacitar a los trabajadores de forma periódica en aspectos relacionados con la seguridad y prevención de accidentes laborales. Del mismo modo, los empleados deben cumplir con los lineamientos de prevención de riesgos y su capacitación.
      .col-md-4
        img(src="@/assets/curso/tema4/img01.png")
         
    <br/><br/>
    <br/><br/>

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Recurso humano


    p.mb-5 La disposición del personal para trabajar es una de las bases de la buena producción pecuaria, tal como se evidencia en el siguiente video:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Normativa

    .row.mb-5
      .col-md-2
        figure.p-lg-5
          img(src="@/assets/curso/tema4/img02.png")
      .col-md-10
        .tarjeta.color-secundario.p-5.mb-5.justify-content-center.align-items-center
          p.mb-0 El derecho al trabajo es considerado un derecho fundamental, consagrado en la Constitución Política de Colombia, que goza en todas sus modalidades, de la especial protección del Estado. De aquí se desprenden otras políticas como las enunciadas en la siguiente tabla:
        
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Normativa laboral más importante en Colombia  

    .tabla.color-acento-contenido
      table
        thead
          tr.color-acento-contenido
            th.text-center.table--new-row Temática
            th.text-center.table--new-row Fuente
            th.text-center.table--new-row Obligaciones
            th.text-center.table--new-row Derechos
        tbody
          tr.color-acento-contenido
            td Derecho al trabajo
            td Constitución política de Colombia.<br><br>Convenios y tratados internacionales.<br><br>Legislación para el sector público y privado.
            td Obligación social
            td Derecho fundamental
          tr.color-acento-contenido
            td Principios y derechos fundamentales en el trabajo
            td Constitución política de Colombia.<br><br>Declaraciones de la OIT<br><br>Código Sustantivo del Trabajo.
            td Obligación del Estado, empleados y trabajadores, sociedad civil en general.
            td Derecho de asociación
          tr.color-acento-contenido
            td Derecho a la seguridad social
            td Constitución Política de Colombia.<br><br>Ley 100 de 1993 y demás normas legales
            td Obligación del Estado.<br><br>Empleadores
            td Salud, Pensión y riesgos laborales
          tr.color-acento-contenido
            td Mínimo de derechos del trabajador
            td Convenios de la Organización Internacional del Trabajo<br><br>Código Sustantivo del Trabajo (1era parte)
            td Empleadores
            td Salario<br><br>Prestaciones sociales<br><br>Seguridad social
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
}
</script>

<style lang="sass"></style>
