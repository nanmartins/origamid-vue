<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>

          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="(avaliacao) in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>

        <img src="../assets/aprender.png" alt="Aprenda WebDesign">
      </div>
    </transition>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'

export default {
  name: 'Home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home')
  }
}
</script>

<style>

.btn-cursos {
  font-family: sans-serif;
  border: none;
  padding: 15px 40px;
  margin: 20px 0 40px 0;
  background: #4b8;
  color: white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
