<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción pecuaria

    .row.mb-4
      .col-md-7
        p.mb-4 Este es el término que se la da a la vinculación de diversos factores relevantes para el proceso productivo pecuario, estos procesos son los sistemas de producción, las buenas prácticas ganaderas, el bienestar, el reconocimiento de los factores de riesgo sanitario, la enfermedades de notificación especial, la bioseguridad, el manejo de la alimentación, nutrición y el aprovechamiento de los datos que se generan en cada uno de los pasos del proceso productivo, entre otros; lo anterior hace necesario un punto de encuentro de todos estos procesos en un solo cronograma de trabajo y en una sola consecución de recursos que permitan realizar la misión de la empresa pecuaria en general buscando llevar organizadamente la producción logrando más eficiente y productividad, en ese orden de ideas trabaja la producción pecuaria.
        p Dentro de las características más reconocidas del sector pecuario se pueden citar las siguientes: 
      .col-md-5
        img(src="@/assets/curso/tema1/img01.png")
         
    figure.mb-4
      img(src="@/assets/curso/tema1/img02.png")

    p.mb-4 Entonces, se puede decir que las actividades más destacables y populares dentro de este sector son las producciones, bovinas, porcinas, ovinas y avícolas.  
    p.mb-4 Actividades destacadas de la producción pecuaria: 

    .row
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            p.text-bold Bovina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            p.text-bold Porcina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
            p.text-bold Ovina
      .col-md-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-5
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
