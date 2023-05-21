

const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false
  },
  filters: {
    numeroPreco(valor) {
      // Metodo para formatar o preco com virgula(,) e ponto(.) alem de adicionar o simbolo da moeda ao texto
      return valor.toLocaleString('en-US', { style: "currency", currency: "GBP"})
    }
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos.json')
      .then(response => response.json())
      .then(data => this.produtos = data)
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
      .then(response => response.json())
      .then(data => this.produto = data)
    },
    abrirModal(id) {
      this.fetchProduto(id)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false
    }
  },
  created() {
    this.fetchProdutos()
  }
})
