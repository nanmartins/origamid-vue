<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <h4>{{ api.descricao }}</h4>
        <ul>
          <li>
            <b>Email: </b>
            {{ api.contato.email }}
          </li>
          <li>
            <b>Telefone: </b>
            {{ api.contato.telefone }}
          </li>
          <li>
            <b>Endereço: </b>
            {{ api.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>

import fetchData from '@/mixins/fetchData'

export default {
  name: 'Contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato')
  }
}
</script>

<style scoped>

ul li {
  gap: 10px;
  margin-top: 5px;
}
</style>
