<template>
  <div id="app">
    <div class="container">

      <div>
        <Curso />
      </div>

      <div>
        <Aluno />
      </div>

    </div>

    <hr>

    <div>
      <div v-if="$store.state.acao.acao">
        <!-- {{ $store.state.acao.acao }} -->
        <h1>{{ $store.state.acao.acao.companyName }}</h1>
        <p>MarketCap: {{ $store.state.acao.acao.marketCap }}</p>
      </div>
      <!-- <h1>Company: {{ acao.companyName }}</h1>
      <h3>MarketCap: {{ acao.marketCap }}</h3> -->
    </div>

    <hr>

    <div>
      <ul>
        <li v-for="(livro) in $store.state.livros" :key="livro.nome">
          {{ livro.nome }}
        </li>
      </ul>

      <hr>

      <h2>Livros lidos</h2>
      <ul>
        <li v-for="(livro) in livrosLidos(true)" :key="livro.nome">
          {{ livro.nome }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

import Curso from '@/components/Curso.vue'
import Aluno from '@/components/Aluno.vue'

export default {
  name: 'App',
  components: {
    Curso,
    Aluno
  },
  computed: {
    // ...mapState(['acao'])
    ...mapGetters(['livrosLidos'])
  },
  created() {
    this.$store.dispatch('acao/puxarAcao')
  }
}
</script>

<style>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>



<!--
  Crie 3 componentes: Aluno, Curso e Aulas
  Aluno e Curso devem estar em App.vue

  Aulas deve ser um componente filho de Curso

  Aulas terá uma lista:
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

  Crie um botão para cada aula, onde será possível
  clicar em completar. As aulas completas deverão
  ser colocadas em uma Array dentro de Store.

  Utilize mutações para modificar a Array.

  A Array de aulas completas deverá ser mostrada no
  componente Aluno
 -->
