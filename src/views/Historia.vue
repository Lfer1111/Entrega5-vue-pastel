<template>
  <Background/>
  <div class="home"> 
      <ImgLogo2/>
    <hr>
    <br>
    <section>
      <p class="contacto">NUESTRA HISTORIA</p>
      <br>
      <p>Erase una vez, en una Galaxia muy lejana.....</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam laborum velit enim cupiditate eveniet, corporis accusamus ipsam excepturi. Dolore iusto impedit repellat magni incidunt harum quibusdam quidem minus ducimus.</p>
      <br>
    </section>
    <br>
    <hr>
    <Footer/>
  </div>

</template>

<script>
import Footer from "../components/Footer.vue"
import ImgLogo2 from "../components/ImgLogo2.vue"
import Background from "../components/Background.vue"


export default {
  name: 'HomeView',
  components: {
    Footer,
    ImgLogo2,
    Background
  }
}
</script>

<style>
  div {
    margin-bottom: 10px;
  }

  .contacto {
    font-size: 33px;
  }
</style>

