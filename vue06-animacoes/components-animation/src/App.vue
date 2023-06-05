<template>
  <div id="app">
    <div>
      <button @click="estoque++">Adicionar estoque</button>
      <button @click="estoque  = 0">Remover estoque</button>
      {{ estoque }}
      <transition mode="out-in">
        <p v-if="estoque >= 6" key="estoque">{{ estoque }} Itens em estoque.</p>
        <p v-else-if="estoque >=1 && estoque <= 5" key="ultimas">Corra, falta apenas {{ estoque }} itens.</p>
        <p v-else key="esgotado">Produto esgotado!</p>
      </transition>
    </div>

    <hr>

    <div>
      <ul>
        <li @click="componenteAtivo = 'PaginaSobre'" class="links">Sobre</li>
        <li @click="componenteAtivo = 'PaginaServicos'" class="links">Servicos</li>
      </ul>
      <transition name="componente" mode="out-in">
        <component :is="componenteAtivo"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import PaginaSobre from './components/PaginaSobre.vue'
import PaginaServicos from './components/PaginaServicos.vue'

export default {
  name: 'App',
  data() {
    return {
      estoque: 0,
      componenteAtivo: ''
    }
  },
  components: {
    PaginaSobre,
    PaginaServicos
  }
}
</script>


<style>

.links {
  font-size: 22px;
  cursor: pointer;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.componente-enter-active, .componente-leave-active {
  transition: all 0.3s;
}

.componente-enter, .componente-leave-to {
  opacity: 0;
  transform: translate3d(0, -30px, 0);
}

</style>
