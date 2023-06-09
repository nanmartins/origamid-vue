import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Cursos from './views/Cursos'
import Contato from './views/Contato'
import Curso from './views/Curso'
import Aula from './views/Aula'

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
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Cursos
    },
    {
      path: '/cursos/:curso',
      name: 'curso',
      props: true,
      component: Curso,
      children: [
        {
          path: ':aula',
          name: 'aula',
          component: Aula,
          props: true
        }
      ]
    }
  ]
})
