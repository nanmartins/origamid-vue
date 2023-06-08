<template>
  <div>
    <p>Descricao do curso de {{ $route.params.curso }}</p>
  </div>
</template>

<script>
export default {
  name: "CursoDescricao",
  props: ["curso"],
};
</script>

<style>
</style>
