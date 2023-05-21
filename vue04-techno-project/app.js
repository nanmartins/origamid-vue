

const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho: []
  },
  filters: {
    numeroPreco(valor) {
      // Metodo para formatar o preco com virgula(,) e ponto(.) alem de adicionar o simbolo da moeda ao texto
      return valor.toLocaleString('en-US', { style: "currency", currency: "GBP"})
    }
  },
  computed: {
    carrinhoTotal() {
      let total = 0
      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco
        })

      }
      return total
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
    },
    adicionarItem() {
        this.produto.estoque--
        const { id, nome,  preco } = this.produto
        this.carrinho.push({id, nome, preco})
    },
    removerItem(index) {
      this.carrinho.splice(index, 1)
    }
  },
  created() {
    this.fetchProdutos()
  }
})
