<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="(curso) in api.cursos" :key="curso.id">
            <router-link :to="{ name: 'curso', params: {curso: curso.id }}">
              <h2>
                {{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }} horas
              </h2>
            </router-link>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'
export default {
  name: 'Cursos',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>

<style scoped>

li h2 {
  cursor: pointer;
}

.cursos-lista li {
  margin-bottom: 30px;
  padding: 5px 20px;
  background: whitesmoke;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

}

</style>
