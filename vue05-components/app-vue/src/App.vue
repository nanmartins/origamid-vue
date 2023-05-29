

<template>
<div>
  <div id="app">{{ mensagem }}</div>
  <HeaderPrincipal></HeaderPrincipal>
</div>
</template>

<script>
// import HeaderPrincipal from './components/HeaderPrincipal.vue'


export default {
  data() {
    return {
      mensagem: 'Mensagem from App.vue data'
    }
  }
}
</script>

<style>

</style>
