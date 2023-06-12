<template>
  <div>
    <h1>Aulas</h1>
    <ul>
      <li v-for="aula in aulasLista" :key="aula.nome">
        <h3>{{ aula.nome }}</h3>
        <p>{{ aula.duracao }} minutos</p>
        <button @click="handleClick(aula)">Concluir Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Aulas",
  computed: {
    ...mapState(["aulasLista", "listaDeConcluidas", "listaIndex"]),
  },
  methods: {
    ...mapMutations(["AULA_CONCLUIDA"]),
    handleClick(aula) {
      this.$store.dispatch("completarAula", aula);
      this.aulasLista.splice(aula, 1);
    },
    // concluirAula(index) {
    //   // Chama a mutação AULA_CONCLUIDA para adicionar o item em listaDeConcluidas
    //   this.AULA_CONCLUIDA(this.aulasLista[index]);
    //   // Remove o item da array inicial
    // this.aulasLista.splice(index, 1);
    // },
  },
};
</script>

<style>
</style>
