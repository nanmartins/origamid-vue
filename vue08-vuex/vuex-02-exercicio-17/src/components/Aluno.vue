<template>
  <div>
    <h1>Aluno</h1>
    <ul>
      <div v-if="this.listaDeConcluidas.length">
        <h3>Aulas Concluidas</h3>
      </div>
      <li v-for="(aula) in this.listaDeConcluidas" :key="aula.nome">
        <h3>{{ aula.nome }}</h3>
        <p>{{ aula.duracao }} minutos</p>
        <p>{{ aula.nome }} concluido!</p>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Aluno',
  computed: {
    ...mapState(['listaDeConcluidas'])
  }
}
</script>

<style scoped>

h1 {
  padding: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0 10px;
  padding: 0;
}

li {
  background: rgb(68, 187, 135);
  padding: 5px 20px;
  color: rgb(255, 255, 255);
}

</style>
