
<template>
  <div id="app">
    <modal-principal>

      <template v-slot:header="logo">
        {{ logo.logo }}
        Esse é o header
      </template>

      <template v-slot:default="{ user }">
        <!-- {{ user.user.nome }} -->
        <p>{{ user.nome }}</p>
        <p>Esse é o paragrafo dentro do slot sem nome</p>
        <button>Comprar</button>
      </template>

      <template v-slot:footer>
        <p>Esse é o footer</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue'

export default {
  name: 'App',
  components: {
    ModalPrincipal
  }
}
</script>

<style>

</style>
