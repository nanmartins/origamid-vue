
<template>
  <div id="app">

    <!-- SLOTS -->
    <div class="slots">
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

    <hr>
    <!-- DINAMICOS -->
    <div class="dinamicos">
      <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
      <button @click="componenteAtivo = 'AulaDownload'">Download</button>
      <!-- para manter o componente e nao destruir, usar o keep alive -->
      <keep-alive>
        <component :is="componenteAtivo"></component>
      </keep-alive>
      <!-- <aula-descricao></aula-descricao> -->
      <!-- <aula-download></aula-download> -->
    </div>
  </div>
</template>

<script>

import ModalPrincipal from './components/ModalPrincipal.vue'

import AulaDescricao from './components/AulaDescricao.vue'
import AulaDownload from './components/AulaDownload.vue'

export default {
  name: 'App',
  components: {
    ModalPrincipal,
    AulaDescricao,
    AulaDownload
  },
  data() {
    return {
      componenteAtivo: 'AulaDescricao'
    }
  }
}
</script>

<style>

</style>
