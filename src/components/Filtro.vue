<template>

<div class="d-flex justify-content-center mt-3 mb-5">
  <div class="btn-group btn-group-lg mr-2" role="group">
    <button @click="filtro('')" type="button" class="btn btn-secondary">Todos</button>
    <button @click="filtro('Alive')" type="button" class="btn btn-secondary">Vivos</button>
    <button @click="filtro('Dead')" type="button" class="btn btn-secondary">Muertos</button>
    <button @click="filtro('unknown')" type="button" class="btn btn-secondary">Desconocido</button>
  </div>
</div>

</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const filtro = ((estado) => {
            store.dispatch('filtroEstado',estado)
        })
        return { filtro }
    }
}
</script>

<style>

</style>