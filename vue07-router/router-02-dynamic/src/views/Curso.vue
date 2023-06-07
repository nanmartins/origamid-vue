<template>
  <div>
    <h1 class="curso-title">{{ curso }}</h1>
    <router-view></router-view>
    <!-- <ul>
      <li>{{ curso }} - Aula 01</li>
      <li>{{ curso }} - Aula 02</li>
      <li>{{ curso }} - Aula 03</li>
      <li>{{ curso }} - Aula 04</li>
      <li>{{ curso }} - Aula 05</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"],
};
</script>

<style>
.curso-title {
  color: coral;
  text-transform: uppercase;
}

li {
  color: rgb(159, 159, 159);
  text-transform: capitalize;
}
</style>
