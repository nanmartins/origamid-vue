<template>
  <div class="acoes-dados">

    <div v-if="loading">Carregando...</div>

    <div v-else>
      <h3>{{ simbolo }}</h3>
      <p>{{ acao }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcaoDados',
  props: ['simbolo'],
  data() {
    return {
      loading: true,
      acao: null
    }
  },
  methods: {
    puxarAcao() {
      this.loading = true
      this.acao = null
      fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`)
      .then(response => response.json())
      .then(dados => {
        this.acao = dados
        this.loading = false
      })
    }
  },
  created() {
    this.puxarAcao()
  },
  watch: {
    $route: 'puxarAcao'
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.puxarAcao(to.params.simbolo)
  //   // console.log(to.params.simbolo)
  //   next()
  // }
}
</script>

<style>

.acoes-dados {
  margin: 0 30px;
}
</style>
