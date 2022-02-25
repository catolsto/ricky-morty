import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [],
    personajesFiltro: []
  },
  mutations: {
    setPersonajes(state,payload) {
      state.personajes = payload
    },
    setPersonajesFiltro(state,payload) {
      state.personajesFiltro = payload
    }
  },
  actions: {
    async getPersonajes({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setPersonajes',data.results)
        commit('setPersonajesFiltro',data.results)

      } catch (error) {
          console.log('Error: ',error)
      }
    },
    filtroEstado({commit,state}, estado) {
      const results = state.personajes.filter( (personaje) => {
        return personaje.status.includes(estado)
      } )
      commit('setPersonajesFiltro',results)
    },
    filtroxNombre({commit,state}, nombre) {
      const results = state.personajes.filter( (personaje) => {
        let nombreApi = personaje.name.toLowerCase();
        let nombreInput  = nombre.toLowerCase();
        if (nombreApi.includes(nombreInput)) {
          return personaje;
        }
      })
      commit('setPersonajesFiltro',results)
    },
  },
  modules: {
  }
})
