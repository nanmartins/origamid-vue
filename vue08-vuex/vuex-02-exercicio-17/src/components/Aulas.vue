<template>
  <div>
    <h1>Aulas</h1>
    <ul>
      <li v-for="(aula, index) in aulasLista" :key="aula.nome">
        <h3>{{ aula.nome }}</h3>
        <p>{{ aula.duracao }} minutos</p>
        <button @click="concluirAula(index)">Concluir Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Aulas',
  computed: {
    ...mapState(['aulasLista', 'listaDeConcluidas', 'listaIndex'])
  },
  methods: {
    ...mapMutations(['AULA_CONCLUIDA', 'CONCLUSAO_LOGICA']),
    concluirAula(index) {
      // Chama a mutação AULA_CONCLUIDA para remover o item de aulasLista
      this.AULA_CONCLUIDA(index)
      // Chama a mutação CONCLUSAO_LOGICA para adicionar o item em listaDeConcluidas
      this.CONCLUSAO_LOGICA(this.aulasLista[index])
      // Remove o item da array inicial
      this.aulasLista.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
