<template>
  <div>
    <h1 class="curso-title">{{ curso }}</h1>
    <div class="curso-nav-link">
      <router-link :to="`/cursos/${curso}/aulas`">Aulas</router-link>
      <router-link :to="{name: 'descricao'}">Descricao</router-link>
    </div>

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
  methods: {
    puxarDados() {
      console.log('puxei api')
    }
  },
  beforeRouteEnter(to, from, next) {
    // this.puxarDados()
    next((vm) => {
      vm.puxarDados()
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados()
    next()
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm('Voce deseja sair?')
    if (confirmar) {
      next()
    }
  }
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
