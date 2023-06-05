<template>
<div>
  <button @click="filtroAZ">A - Z</button>
  <button @click="filtroZA">Z - A</button>

  <transition-group tag="ul">
    <li v-for="(filme) in filmes" :key="filme">
      {{ filme }}
    </li>
  </transition-group>
</div>

</template>

<script>
export default {
  name: 'ListaFilmes',
  data() {
    return {
      filmes: [
        "The Pick of Destiny",
        "Lord of Rings",
        "Scarface",
        "Harry Potter",
      ]
    }
  },
  methods: {
    filtroAZ() {
      this.filmes.sort()
    },
    filtroZA() {
      this.filmes.sort().reverse()
    }
  }
}
</script>

<style>

.v-move {
  transition: transform 0.3s;
}

ul {
  list-style: none;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  background: whitesmoke;
  padding: 15px;
  max-width: 200px;
  margin-bottom: 10px;
}


</style>
