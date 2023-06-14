
export default {
  namespaced: true,
  state: {
    acao: null
  },
  mutations: {
    ATUALIZAR_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions : {
    puxarAcao(context) {
      fetch('https://api.origamid.dev/stock/aapl/quote')
      .then(response => response.json())
      .then(data => {
        context.commit('ATUALIZAR_ACAO', data)
      })
    }
  }
}
