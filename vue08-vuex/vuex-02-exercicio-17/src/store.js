import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulaConcluida: false,
    listaDeConcluidas: [

    ],
    listaIndex: null,
    aulasLista: [
      {
        nome: "HTML e CSS",
        duracao: 15
      },
      {
        nome: "JavaScript",
        duracao: 30
      },
      {
        nome: "UX Design",
        duracao: 20
      }
    ]
  },
  mutations: {
    AULA_CONCLUIDA(state, payload) {
      // Adiciona o item em listaDeConcluidas
      state.listaDeConcluidas.push(payload)
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit("AULA_CONCLUIDA", payload)
    }
  }
})
