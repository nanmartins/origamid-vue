<template>
  <div id="app">
    <nav>
      <h1 @click="mostrarRouter">Logo</h1>
      <div class="nav-link">
        <router-link to="/">Home</router-link>
        <router-link to="/cursos">Cursos</router-link>
        <!-- <router-link to="/cursos/javascript">JavaScript</router-link> -->
      </div>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    mostrarRouter() {
      console.log(this.$router);
    },
  },
};
</script>

<style>
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #000306;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #0c1b2b; */
  /* margin-top: 60px; */
}

nav {
  display: flex;
  background: #0e1217;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  /* border: 1px solid rgba(224, 224, 224, 0.962); */
  box-shadow: 0 2px 0 0 rgba(113, 113, 113, 0.1);
}

.nav-link {
  display: flex;
  gap: 20px;
}

.curso-nav-link {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

a {
  text-decoration: none;
  color: rgb(159, 159, 159);
}

h1 {
  color: rgb(159, 159, 159);
}

p {
  color: rgb(159, 159, 159);
}

.router-link-exact-active {
  color: coral;
}

.v-enter, .v-leave-to {
  transform: translate3d(-30px, 0, 0);
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 0.3s;
}

</style>
