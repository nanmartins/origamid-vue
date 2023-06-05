<template>
  <div id="app">
    <ListItems />
    <hr>
    <ListaFilmes />
  </div>
</template>

<script>
import ListItems from './components/ListItems.vue'
import ListaFilmes from './components/ListaFilmes.vue'

export default {
  name: 'App',
  components: {
    ListItems,
    ListaFilmes
  }
}
</script>

<style>

</style>
