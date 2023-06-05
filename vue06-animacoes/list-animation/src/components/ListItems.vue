<template>
  <div>
    <!-- <ul> -->
      <transition-group tag="ul">
        <li v-for="(item, index) in carrinho" :key="item.nome">
          <p>{{ item.nome }}</p>
          <p>{{ item.preco }}</p>
          <button @click="remover(index)">Remover</button>
        </li>
      </transition-group>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  name: 'ListItems',
  data() {
    return {
      carrinho: [
        {
          nome: 'Notebook',
          preco: 2399
        },
        {
          nome: 'Smartphone',
          preco: 899
        }
      ]
    }
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1)
    }
  }
}
</script>

<style>

.v-enter-active, .v-leave-active {
  transition: all 0.3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

</style>
