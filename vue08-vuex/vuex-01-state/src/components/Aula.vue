<template>
  <div>
    <p>Aulas: {{ totalAulas }}, esse eh o usuario: {{ user }}</p>
    <p>Aulas concluidas: {{ aulasCompletas }}</p>

    <button @click="mostrarConsole">Mostar Console</button>
    <br>
    <button @click="handleClick">Mudar usuario</button>
    <br>
    <button @click="completar">Completar Aula</button>

    <hr>

    <input type="text" v-model="novoUser">
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'


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
    ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
    handleClick() {
      // this.$store.commit('changeUser', {
      //   user: this.novoUser,
      //   totalAulas: this.totalAulas
      // })
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas
      })
    },
    completar() {
      if (this.totalAulas > 0) {
        this.totalAulas--
        this.COMPLETAR_AULA('COMPLETAR_AULA')
      }
    },
    mostrarConsole() {
      console.log(this.user, this.aulasCompletas)
    },
  }
}
</script>

<style>

</style>
