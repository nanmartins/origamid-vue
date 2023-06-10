<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div>
      <h1>Contato</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'

export default {
  name: 'Contato',
  mixins: [fetchData],
  // data() {
  //   return {
  //     api: null
  //   }
  // },
  // methods: {
  //   fetchData() {
  //     fetch('http://localhost:3000/contato')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.api = data
  //     })
  //   }
  // },
  created() {
    this.fetchData('/contato')
  }
}
</script>

<style>

</style>
