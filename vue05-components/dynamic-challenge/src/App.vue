

<template>
  <div id="app">
    <component :is="abaAtiva"></component>
  </div>
</template>


<script>
import ContatoEmpresa from './components/ContatoEmpresa.vue'
import ServicosEmpresa from './components/ServicosEmpresa.vue'
import SobreEmpresa from './components/SobreEmpresa.vue'


export default {
  name: 'App',
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa
  },
  data() {
    return {
      abaAtiva: 'SobreEmpresa'
    }
  }
}
</script>


<style>

</style>


<!--
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->
