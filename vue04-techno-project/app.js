

const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: 'Item adicionado',
    alertaAtivo: false,
    carrinhoAtivo: false
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
    clickForaCarrinho({ target, currentTarget }) {
      if (target === currentTarget) this.carrinhoAtivo = false
    },
    adicionarItem() {
        this.produto.estoque--
        const { id, nome,  preco } = this.produto
        this.carrinho.push({id, nome, preco})
        this.alerta(`${nome} adicionado`)
    },
    removerItem(index) {
      this.carrinho.splice(index, 1)
      this.alerta('Removido do carrinho')
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) {
        // returnando o valor em string alterado, para array e salvando em carrinho
        this.carrinho = JSON.parse(window.localStorage.carrinho)
      }
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem
      this.alertaAtivo = true
      setTimeout(() => {
        this.alertaAtivo = false
      }, 1500 );
    },
    compararEstoque() {
      const items = this.carrinho.filter(({ id }) => {
        if (id === this.produto.id){
          return true
        }
      })
      this.produto.estoque -= items.length
    },
    router() {
      const hash = document.location.hash
      if (hash) {
        this.fetchProduto(hash.replace('#', ''))
      }
    }
  },
  watch: {
    // Routes
    produto() {
      document.title = this.produto.nome || "Techno"
      const hash = this.produto.id || ""
      history.pushState(null, null, `#${hash}`)
      if (this.produto) {
        this.compararEstoque()
      }
    },
    carrinho() {
      // transformando em string para salvar em localStorage o valor de carrinho
      window.localStorage.carrinho =JSON.stringify(this.carrinho)
    }
  },
  created() {
    this.fetchProdutos()
    this.router()
    this.checarLocalStorage()
  }
})
