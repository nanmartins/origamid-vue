<template>
  <div id="app">
    <button @click="ativo = !ativo">Mostrar</button>
    <transition appear name="fade" enter-active-class="animar" @enter="enter" @leave="leave">
      <!-- <h1 v-if="ativo">Servicos</h1> -->
      <!-- usando appear, a animacao so ocorre quando o elemento estiver visivel -->
      <h1>Servicos</h1>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      ativo: false
    }
  },
  methods: {
    enter(elemento) {
      console.log('Elemento entrou', elemento)
    },
    leave(elemento) {
      console.log('Elementou saiu', elemento)
    }
  }
}
</script>

<style>

/* .fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
} */

.animar, .fade-leave-active {
  transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
