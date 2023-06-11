<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <div v-if="api">
      <!-- <h1>{{ curso }}</h1> -->
      <h1>{{ api.nome }}</h1>
      <p>{{ api.descricao }}</p>

      <h2>Aulas</h2>
      <ul class="aulas">
        <li v-for="(aula) in api.aulas" :key="aula.id">
          <p>{{ aula.nome }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'

export default {
  name: 'Curso',
  props: ['curso'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`)
  }
}
</script>

<style>

</style>
