<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Legislación laboral

    .row.mb-4
      .col-md-7
        p.mb-4 La legislación laboral en Colombia es supervisada por el Ministerio del Trabajo que imparte las normas y ejerce la supervisión de su cumplimiento; en la actualidad las organizaciones están en la obligación de capacitar a los trabajadores de forma periódica en aspectos relacionados con la seguridad y prevención de accidentes laborales. Del mismo modo, los empleados deben cumplir con los lineamientos de prevención de riesgos y su capacitación.
      .col-md-5
        img(src="@/assets/curso/tema4/img01.png")
         
    figure.mb-4
      img(src="@/assets/curso/tema1/img02.png")

    p.mb-4 Entonces, se puede decir que las actividades más destacables y populares dentro de este sector son las producciones, bovinas, porcinas, ovinas y avícolas.  
    p.mb-4 Actividades destacadas de la producción pecuaria: 

    .row
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            .text-black.p-4
              p.text-bold Bovina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            .text-black.p-4
              p.text-bold Porcina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            .text-black.p-4
              p.text-bold Ovina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            .text-black.p-4
              p.text-bold Avícola 


      
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
