<template>
      <div>
          <div class="row">
             <div class="card-columns">
                <div v-for="personaje in personajes" :key="personaje.id">
                    <card-personaje :personaje='personaje'></card-personaje>
                </div>
             </div>
          </div>
      </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import CardPersonaje from './CardPersonaje.vue';
export default {
  components: { CardPersonaje },
    setup(){
        const store = useStore()
        const personajes = computed(() => {
            return store.state.personajesFiltro
        })
        onMounted(() => {
            store.dispatch('getPersonajes')
        })
        return { personajes }
    }
}
</script>

<style>

</style>