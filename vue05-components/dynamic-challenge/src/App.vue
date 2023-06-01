

<template>
  <div id="app">
    <ul>
      <li class='menu-links' @click="abaAtiva= 'SobreEmpresa'">Sobre</li>
      <li class='menu-links' @click="abaAtiva= 'ServicosEmpresa'">Servicos</li>
      <li class='menu-links' @click="abaAtiva= 'ContatoEmpresa'">Contato</li>
    </ul>
    <!-- <button @click="abaAtiva= 'SobreEmpresa'">Sobre</button>
    <button @click="abaAtiva= 'ServicosEmpresa'">Servicos</button>
    <button @click="abaAtiva= 'ContatoEmpresa'">Contato</button> -->
    <hr>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
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
  .menu-links {
    cursor: pointer;
  }
</style>


<!--
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->
