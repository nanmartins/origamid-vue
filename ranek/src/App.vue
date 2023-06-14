<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: 'Teko', sans-serif, monospace, Helvetica, Arial;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: #345;
  list-style: none;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: 'Teko', sans-serif, monospace, Helvetica, Arial;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

</style>
