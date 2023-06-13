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
    }
  }
};
</script>

<style>
</style>
