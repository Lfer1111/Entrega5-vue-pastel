<template>
  <Background/>
  <div class="home"> 
      <ImgLogo2/>
    <hr>
    <br>
    <section>
      <p class="contacto">ADMINISTRACION PASTELERO</p>
      <br>
       <section>
        <h2>Pedidos recibidos</h2>
        <table>
            <tr>
                <th>Nombre cliente</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Domicilio</th>
                <th>Fecha entrega</th>
                <th>Sabor Pastel</th>
                <th>Tamaño</th>
                <th>Adornos</th>
            </tr>
            <tr>
                <td>Sergio Marquina</td>
                <td>1111111111</td>
                <td>sergio@gmail.com</td>
                <td>juarez 200 col centro</td>
                <td>10/03/22 12pm</td>
                <td>Pastel vainilla estelar</td>
                <td>grande</td>
                <td>3 leches, chispas hershys</td>
            </tr>
            <tr>
                <td>Alicia Sierra</td>
                <td>2222222222</td>
                <td>alicia@gmail.com</td>
                <td>madero 300 col centro</td>
                <td>10/03/22 3pm</td>
                <td>Pastel Chocolactico</td>
                <td>mediano</td>
                <td>extra betun</td>
            </tr>
            <tr>
                <td>Raquel Murillo</td>
                <td>3333333333</td>
                <td>alicia@gmail.com</td>
                <td>carranza 400 col centro</td>
                <td>10/03/22 10am</td>
                <td>cometa zanahoria</td>
                <td>mediano</td>
                <td>Null</td>
            </tr>
        </table>
        <br>
        <br>
        <h2>Inventario</h2>
        <h3>Sabores Pasteles</h3>
        <table>
            <tr>
                <th>Chocolate</th>
                <th>Fresa</th>
                <th>Vainilla</th>
                <th>Red Velvet</th>
                <th>Zanahoria</th>
            </tr>
            <tr>
                <td>6</td>
                <td>16</td>
                <td>9</td>
                <td>15</td>
                <td>9</td>
            </tr>
        </table>
        <h3>Adornos/Topings Pasteles</h3>
        <table>
            <tr>
                <th>3 leches</th>
                <th>extra betun</th>
                <th>Hershys</th>
                <th>M&M</th>
                <th>Nueces</th>
                <th>fruta temporada</th>
                <th>fruta almibar</th>
            </tr>
            <tr>
                <td>7</td>
                <td>10</td>
                <td>13</td>
                <td>20</td>
                <td>5</td>
                <td>3</td>
                <td>10</td>
            </tr>
        </table>

      </section>
      <br>
      <br>
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

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid black;
    color: black;
  }

  th, td {
    padding: 20px;
    border: 2px solid black;
    text-align: center;
    font-size: 20px;
    color: black;
  }
</style>
