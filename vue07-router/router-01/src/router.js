import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Sobre from './views/Sobre'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base app para caso as rotas estejam dentro de alguma pasta do app
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sobre',
      component: Sobre
    }
  ]
})
