<template>
  <div id="app">
    <button @click="abaAtiva = 'ServicosEmpresa'">Servicos</button>
    <button @click="abaAtiva = 'ContatoEmpresa'">Contato</button>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // ServicosEmpresa: () => import('./components/ServicosEmpresa.vue'),
    ContatoEmpresa: () => import('./components/ContatoEmpresa.vue')
  },
  data() {
    return {
      abaAtiva: 'ServicosEmpresa'
    }
  }
}
</script>

<style>

</style>
