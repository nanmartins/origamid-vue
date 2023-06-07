<template>
  <div id="app">
    <h1 @click="mostrarRouter">Logo</h1>
    <nav class="nav-link">
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    mostrarRouter() {
      console.log(this.$route)
    }
  }
}
</script>

<style>

.nav-link {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.router-link-exact-active {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
