<template>
    <div class="form-group">
    <input type="text"
      class="form-control" 
      placeholder="Buscar Personaje por nombre"
      v-model="nombre"
      @keyup="filtro()"
      >
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const nombre = ref('')
        const filtro = () => {
            return store.dispatch('filtroxNombre',nombre.value)
        }
        return { filtro, nombre }
    }
}
</script>

<style>

</style>