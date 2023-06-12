<template>
  <div id="app">
    <div class="container">

      <div>
        <Curso />
      </div>

      <div>
        <Aluno />
      </div>

    </div>
  </div>
</template>

<script>

import Curso from '@/components/Curso.vue'
import Aluno from '@/components/Aluno.vue'

export default {
  name: 'App',
  components: {
    Curso,
    Aluno
  }
}
</script>

<style>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>



<!--
  Crie 3 componentes: Aluno, Curso e Aulas
  Aluno e Curso devem estar em App.vue

  Aulas deve ser um componente filho de Curso

  Aulas terá uma lista:
  {
    nome: "HTML e CSS",
    duracao: 15
  },
  {
    nome: "JavaScript",
    duracao: 30
  },
  {
    nome: "UX Design",
    duracao: 20
  }

  Crie um botão para cada aula, onde será possível
  clicar em completar. As aulas completas deverão
  ser colocadas em uma Array dentro de Store.

  Utilize mutações para modificar a Array.

  A Array de aulas completas deverá ser mostrada no
  componente Aluno
 -->
