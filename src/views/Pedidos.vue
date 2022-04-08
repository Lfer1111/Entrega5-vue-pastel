<template>
  <Background/>
  <div class="home"> 
      <ImgLogo2/>
    <hr>
    <br>
    <section>
      <p class="contacto">PEDIDOS</p>
      <br>
      <section>
        <p class="pedidos">Facil y rapido, haznos llegar tu pedido!</p>
        <form action="pedido.js" id="form1" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required size="35" placeholder="un nombre y un apellido"><br><br>
            <label for="telefono">Telefono:</label>
            <input type="number" id="telefono" name="telefono" maxlength="10" required placeholder="celular a 10 digitos"><br><br>
            <label for="correo">Email:</label>
            <input type="mail" id="correo" name="correo" required size="44" placeholder="escribe tu cuenta de correo electronico"><br><br>
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required size="35" placeholder="direccion"><br><br>

            <p class="pedidos">¿Que pastel vas a conquistar hoy?</p>
            <input type="radio" id="choco" name="seleccion-pastel" placeholder="Nombre">
            <label for="Nombre">Pastel Chocolactico</label><br>
            <input type="radio" id="fresa" name="seleccion-pastel" placeholder="Nombre">
            <label for="Nombre">Pastel Fresa Espacial</label><br>
            <input type="radio" id="vainilla" name="seleccion-pastel" placeholder="Nombre">
            <label for="Nombre">Pastel Vainilla Estelar</label><br>
            <input type="radio" id="red" name="seleccion-pastel" placeholder="Nombre">
            <label for="Nombre">Pastel Estrella Red Velvet</label><br>
            <input type="radio" id="zanahoria" name="seleccion-pastel" placeholder="Nombre">
            <label for="Nombre">Pastel Cometa Zanahoria</label><br>
            <br>

            <p class="pedidos">¿Tamaño del pastel?</p>
            <select name="tamaño" id="tamaño">
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
            <br>
            <br>
    
            <p class="pedidos">¿Adornos/Topins? Personalizalo como mas te guste!!</p>
            <input type="checkbox" id="3-leches" name="3-leches" value="3-leches">
            <label for="3-leches">3 leches</label><br>
    
            <input type="checkbox" id="extra-betun" name="extra-betun" value="extra-betun">
            <label for="extra-betun">Extra Betun</label><br>
    
            <input type="checkbox" id="hershey" name="hershey" value="hershey">
            <label for="hershey">Chispas Hershys</label><br>
    
            <input type="checkbox" id="M&M" name="M&M" value="M&M">
            <label for="M&M">M&M</label><br>
    
            <input type="checkbox" id="Nueces" name="Nueces" value="Nueces">
            <label for="Nueces">Nueces</label><br>
                
            <input type="checkbox" id="Fruta-temporada" name="Fruta-temporada" value="Fruta-temporada">
            <label for="Fruta-temporada">Fruta de temporada</label><br>
                
            <input type="checkbox" id="fruta-almibar" name="fruta-almibar" value="fruta-almibar">
            <label for="fruta-almibar">Fruta en almibar</label><br>
                
            <input type="checkbox" id="mensaje" name="mensaje" value="mensaje">
            <label for="mensaje">Mensaje de Felicitación</label><br>
            <label for="nombre">Escribe tu dedicatoria:</label>
            <input type="text" id="mensaje-felicitacion" name="mensaje-felicitacion" required size="35" placeholder="mensaje-felicitacion">
            <br>
            <br>
            <br>

            <label for="entrega">Fecha y hora de entrega</label>
            <input type="datetime-local" name="entreda" id="entrega" required><br><br>

            <label for="comentarios">Detalles o comentarios:</label>
            <textarea id="comentarios" name="comentarios" rows="4" cols="50" maxlength="200" placeholder="escribe tu mensaje"></textarea><br><br>
            <br>
            <input type="reset">
            <input type="submit">
        </form>
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

  .pedidos {
    font-size: 22px;
  }
</style>
