<template>
  <div>
    <h1>Curso</h1>
    <Aulas />
  </div>
</template>

<script>
import Aulas from '@/components/Aulas.vue'

export default {
  name: 'Curso',
  components: {
    Aulas
  }
}
</script>

<style scoped>

div {
  padding: 20px;
}
</style>
