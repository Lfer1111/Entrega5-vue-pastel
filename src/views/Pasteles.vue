<template>
  <Background/>
  <div class="home"> 
      <ImgLogo2/>
    <hr>
    <br>
    <section>
      <p class="contacto">NUESTROS PASTELES</p>
      <br>
      <section>
        <p>
            <table>
                <tr>
                    <th>Nombre Pastel</th>
                    <th>Sabores</th>
                    <th>Precio Mediano</th>
                    <th>Precio Grande</th>
                </tr>
                <tr>
                    <td>Pastel Chocolactico</td>
                    <td>Pan y cobertura de chocolate</td>
                    <td>$200</td>
                    <td>$350</td>
                </tr>
                <tr>
                    <td>Pastel Fresa Espacial</td>
                    <td>Pan y cobertura de fresa</td>
                    <td>$200</td>
                    <td>$350</td>
                </tr>
                <tr>
                    <td>Pastel Vainilla Estelar</td>
                    <td>Pan y cobertura de vainilla</td>
                    <td>$200</td>
                    <td>$350</td>
                </tr>
                <tr>
                    <td>Pastel Estrella Red Velvet</td>
                    <td>Pan Red Velvet especial</td>
                    <td>$300</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td>Pastel Cometa Zanahoria</td>
                    <td>Pan de Zanahoria, nuez, canela</td>
                    <td>$300</td>
                    <td>$500</td>
                </tr>

            </table>
        </p><br>

        <ul>
            <li> <h3 class="pasteles">Pasteles Clasicos de la Galaxia</h3>
                <ul>
                    <li>
                        <span>Pastel Chocolactico</span><br>
                        <img src="../assets/pastel-choco.png" alt="pastel-chocolate" width="700px">
                    </li><br>
                    <li>
                        <span>Pastel Fresa Espacial</span><br>
                        <img src="../assets/pastel-fresa.png" alt="pastel-fresa" width="700px">
                    </li><br>
                    <li>
                        <span>Pastel Vainilla Estelar</span><br>
                        <img src="../assets/pastel-vainilla.png" alt="pastel-vainilla" width="700px">
                    </li><br>
                </ul>
            </li><br>
            <li> <h3 class="pasteles">Pasteles Especiales del Universo</h3>
                <ul>
                    <li>
                        <span>Pastel Estrella Red Velvet</span><br>
                        <img src="../assets/pastel-red.png" alt="pastel-redvelvet" width="700px">
                    </li><br>
                    <li>
                        <span>Pastel Cometa Zanahoria</span><br>
                        <img src="../assets/pastel-zanahoria.png" alt="pastel-zanahoria" width="700px">
                    </li><br>
                </ul>
            </li>
            
        </ul>
        <br>

        <h3 class="pasteles">Tenemos adornos y topings extra, para los pasteles clásicos principalmente, personalizalos a tu gusto!!</h3>
        <p>    
            <table>
                <tr>
                    <th>Nombre Adorno/Toping</th>
                    <th>Precio</th>                    
                </tr>
                <tr>
                    <td>Convierte el pan en 3 leches</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Extra descoracion capa betun</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Chispas Hershys / M&M / Nueces</td>
                    <td>$30</td>
                </tr>                
                <tr>
                    <td>Fruta de temporada / almibar</td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td>Mensaje felicitación</td>
                    <td>$20</td>
                </tr>

            </table>
        </p><br>
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

  .pasteles {
    font-size: 25px;
    color: black;
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
