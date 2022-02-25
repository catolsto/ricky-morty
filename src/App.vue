<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
       <h1 class="text-center">Ricky & Morty</h1>
        <filtro />
        <buscador />
       <lista-personajes />
    </div>
  </div>

</template>

<script>
import Buscador from './components/Buscador.vue'
import Filtro from './components/Filtro.vue'
import ListaPersonajes from './components/ListaPersonajes.vue'

export default {
  name: 'App',
  components: {
    ListaPersonajes,
    Filtro,
    Buscador
  }
}
</script>

<style>
#app {

}
</style>
