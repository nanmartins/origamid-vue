import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home'
const Home = () => import('./views/Home')
// import Acoes from './views/Acoes'
const Acoes = () => import(/* webpackChunkName: "acoes" */ './views/Acoes')
// import AcaoDados from './views/AcaoDados'
const AcaoDados = () => import(/* webpackChunkName: "acoes" */ './views/AcaoDados')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        sidebar: Acoes
      }
    },
    // {
    //   path: '/origamid',
    //   redirect: '/'
    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/acoes',
      name: 'acoes',
      components: {
        default: Acoes,
        sidebar: Home,
      },
      children: [
        {
          path: ':simbolo',
          component: AcaoDados,
          props: true
        }
      ]
    }
  ],
  scrollBehavior() {
    // return {
    //   x: 0,
    //   y: 0
    // }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
