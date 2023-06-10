<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <h1>Cursos</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'
export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>

<style>

</style>
