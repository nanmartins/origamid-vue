import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import global do componente ServicosEmpresa
Vue.component("ServicosEmpresa", () => import('./components/ServicosEmpresa'))

new Vue({
  render: h => h(App),
}).$mount('#app')
