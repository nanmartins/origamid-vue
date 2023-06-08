import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Cursos from './views/Cursos'
import Curso from './views/Curso'
import CursoAulas from './views/CursoAulas'
import CursoDescricao from './views/CursoDescricao'

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
      path: '/cursos',
      name: 'cursos',
      component: Cursos,
      //props sempre precisa ser registrado no elemento pai
      props: true,
      // beforeEnter: (from, to, next) => {
      //   console.log('Foi para cursos')
      //   next()
      // },
      children: [
        {
          path: ':curso',
          name: 'curso',
          props: true,
          component: Curso,
          children: [
            {
              path: 'aulas',
              name: 'aulas',
              props: true,
              component: CursoAulas
            },
            {
              path: 'descricao',
              name: 'descricao',
              component: CursoDescricao
            }
          ]
        }
      ]
    }
    //Usando nested routes para cada curso em cursos
    // {
    //   path: '/cursos/:curso',
    //   name: 'curso',
    //   props: true,
    //   component: Cursos
    // }
  ]
})
