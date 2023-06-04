import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component("ModalTransition", () => import('./components/ModalTransition'))

new Vue({
  render: h => h(App),
}).$mount('#app')
