<template>
  <Background/>
  <div class="home"> 
      <ImgLogo2/>
    <hr>
    <br>
    <section>
      <p class="contacto">CONTACTO</p>
      <br>
       <section>
        <p class="contacto2"> Escribenos, queremos escucharte!</p>
            <form action="/accion.js" id="form1" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required size="35" placeholder="un nombre y un apellido"><br><br>
                <label for="telefono">Telefono:</label>
                <input type="number" id="telefono" name="telefono" maxlength="10" required placeholder="celular a 10 digitos"><br><br>
                <label for="correo">Email:</label>
                <input type="mail" id="correo" name="correo" required size="44" placeholder="escribe tu cuenta de correo electronico"><br><br>
                <textarea id="mensaje" name="mensaje" rows="4" cols="50" maxlength="200" placeholder="escribe tu mensaje" required></textarea><br><br>
                <input type="submit" value="Submit">
                <input type="reset">
            </form>
        <br>
        <hr>
        <br>
        <section>
          <h2  class="contacto">Bolsa de trabajo</h2>
          <h3  class="contacto2">Bienvenid@s proxim@s Soci@s</h3>
          <p>Únete tu talento al nuestro, tenemos las siguientes vacantes para ti:</p>
          <ul>
              <li>Pastelero</li>
              <li>Cajero</li>
              <li>Supervisor</li>
              <li>Chofer repartidor</li>
              <li>Botarga / Volantero</li>
          </ul>
          <form action="/accion.js" id="form1" method="post">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required size="35" placeholder="un nombre y un apellido"><br><br>
              <label for="telefono">Telefono:</label>
              <input type="number" id="telefono" name="telefono" maxlength="10" required placeholder="celular a 10 digitos"><br><br>
              <label for="correo">Email:</label>
              <input type="mail" id="correo" name="correo" required size="44" placeholder="escribe tu cuenta de correo electronico"><br><br>
              <textarea id="mensaje" name="mensaje" rows="4" cols="50" maxlength="200" placeholder="escribe tu mensaje" required></textarea><br><br>
              <label for="cv">Adjunta tu curriculum:</label>
              <input type="file" id="cv" name="cv" required><br><br>
              <input type="submit" value="Submit">
              <input type="reset">
          </form>
        </section>
      </section>
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

  .contacto2 {
    font-size: 22px;
  }
</style>
