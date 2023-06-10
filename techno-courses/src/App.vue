<template>
  <div id="app">
    <HeaderBody />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBody from "@/components/HeaderBody.vue";

export default {
  name: "App",
  components: {
    HeaderBody,
  },
};
</script>

<style>
*,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  color: #234;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
  font-size: 16px;
}
</style>
