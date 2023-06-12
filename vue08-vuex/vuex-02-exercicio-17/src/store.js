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
    AULA_CONCLUIDA(state, index) {
      // Remove o item da aulasLista
      state.aulasLista.splice(index, 0)
    },
    CONCLUSAO_LOGICA(state, index) {
      // Adiciona o item em listaDeConcluidas
      state.listaDeConcluidas.push(index)
    }
  }
})
