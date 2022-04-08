<template>
  <Background/>
  <div class="home"> 

    <div align="center"  class="item2">
      <ImgLogo/>
      <h4>de los creadores de Taconauta:</h4>
      <h1>Pasteleria LaunchX</h1>
    </div> 

    <hr>
    <br>
    <section align="center">
      <p class="saludo">Bienvenidos!! Descubre y conquista todos los sabores de otros mundos!!</p>
      <br>
      <ImgBienvenida/>
    </section>
    <br>
    <hr>
    <Footer/>
  </div>

</template>

<script>
import ImgBienvenida from "../components/ImgBienvenida.vue"
import Footer from "../components/Footer.vue"
import ImgLogo from "../components/ImgLogo.vue"
import Background from "../components/Background.vue"


export default {
  name: 'HomeView',
  components: {
    ImgBienvenida,
    Footer,
    ImgLogo,
    Background
  }
}
</script>

<style>
  div {
    margin-bottom: 10px;
  }

  .item2 {
    font-size: 30px;
  }

  .saludo {
    font-size: 33px;
  }

</style>
