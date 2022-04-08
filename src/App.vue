<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/historia">Historia</router-link> |
    <router-link to="/pasteles">Pasteles</router-link> |
    <router-link to="/pedidos">Pedidos</router-link> |
    <router-link to="/contacto">Contacto</router-link> |
    <router-link to="/pastelero">AdminPastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 35px;
}

nav a.router-link-exact-active {
  color: #316cc5;
}
</style>

