<template>
  <div>
    <h1 class="curso-title">{{ curso }}</h1>
    <ul>
      <li>Aula 01</li>
      <li>Aula 02</li>
      <li>Aula 03</li>
      <li>Aula 04</li>
      <li>Aula 05</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Curso',
  props: ['curso']
}
</script>

<style>

  .curso-title {
    color: rgb(159, 159, 159);
  }


  li {
    color: rgb(159, 159, 159);
  }
</style>
