const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
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
    }
  },
  created() {
    this.fetchProdutos()
  }
})
