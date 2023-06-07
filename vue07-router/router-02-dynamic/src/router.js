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
      children: [
        {
          path: ':curso',
          name: 'curso',
          props: true,
          component: Curso,
          children: [
            {
              path: 'aulas',
              component: CursoAulas
            },
            {
              path: 'descricao',
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
