<template>
  <div>
    <h1 class="page-title">Curso <span>{{ curso }}</span></h1>
      <div class="cursos-list">
        <router-link to="/cursos/html">HTML</router-link>
        <router-link to="/cursos/css">CSS</router-link>
        <router-link to="/cursos/javascript">JavaScript</router-link>
        <router-link to="/cursos/vue.js">Vue.JS</router-link>
      </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Cursos',
  props: ['curso'],
  // usando props para registrar no lugar do computed()
  // computed: {
  //   curso() {
  //     return this.$route.params.curso
  //   }
  // },
  // novo hook de vue-routers
  beforeRouteUpdate(to, from, next) {
    // console.log(to.params.curso, from)
    next()
  }
}
</script>

<style>

.cursos-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  max-width: 150px;
  border-right: 1px solid white;
  gap: 10px;
}

span {
  text-transform: capitalize;
}
</style>
