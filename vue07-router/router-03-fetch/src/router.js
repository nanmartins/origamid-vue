import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Acoes from './views/Acoes'
import AcaoDados from './views/AcaoDados'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/acoes',
      name: 'acoes',
      component: Acoes,
      children: [
        {
          path: ':simbolo',
          component: AcaoDados,
          props: true
        }
      ]
    }
  ]
})
