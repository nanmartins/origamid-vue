import Vue from 'vue'
import Vuex from 'vuex'

import acao from '@/store/acao.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    acao
  },
  state: {
    aulaConcluida: false,
    // acao: null,
    listaDeConcluidas: [

    ],
    listaIndex: null,
    livros: [
      {
        nome: 'O Senhor dos Aneis',
        lido: true
      },
      {
        nome: 'Harry Potter',
        lido: true
      },
      {
        nome: 'As Cronicas de Gelo e Fogo',
        lido: false
      }
    ],
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
  getters: {
    // livrosLidos(state) {
    //   return function(lido) {
    //     return state.livros.filter((livro) => livro.lido === lido)
    //   }
    // }
    livrosLidos: (state) => (lido) => state.livros.filter(livro => livro.lido === lido)
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
