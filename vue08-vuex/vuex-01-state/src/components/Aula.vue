<template>
  <div>
    <p>Aulas: {{ totalAulas }}, esse eh o usuario: {{ user }}</p>
    <p>Aulas concluidas: {{ aulasCompletas }}</p>

    <button @click="mostrarConsole">Mostar Console</button>
    <br>
    <button @click="handleClick">Mudar usuario</button>
    <br>
    <button @click="completarAula">Completar Aula</button>

    <hr>

    <input type="text" v-model="novoUser">
  </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'Aula',
  data() {
    return {
      totalAulas: 25,
      novoUser: '',
    }
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
  },
  methods: {
    mostrarConsole() {
      console.log(this.user, this.aulasCompletas)
    },
    handleClick() {
      this.$store.commit('changeUser', {
        user: this.novoUser,
        totalAulas: this.totalAulas
      })
    },
    completarAula() {
      if (this.totalAulas > 0) {
        this.totalAulas--
        this.$store.commit('completarAula')
      }
    }
  }
}
</script>

<style>

</style>
