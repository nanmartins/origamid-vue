<template>
  <div id="app">
    <nav>
      <h1>Logo</h1>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/acoes">Açoes</router-link>
      </div>
    </nav>
    <!-- <transition mode="out-in"> -->
      <router-view></router-view>
      <router-view name="sidebar"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: silver;
}

a {
  text-decoration: none;
  /* font-weight: bold; */
  color: black;
  font-size: 20px;
}

.router-link-exact-active {
  color: rgb(0, 182, 100);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.components-main-body {
  display: grid;
  place-items: center;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-30px, 0 , 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
