import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// router.beforeEach((from, to, next) => {
//   console.log('from: ', from)
//   console.log('to: ', to)
//   next()
// })

// router.afterEach((from, to) => {
//   console.log('from: ', from)
//   console.log('to: ', to)
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
