import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import quiz from './views/quiz.vue'
import inst from './views/inst.vue'
import final from './views/final.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/inst',
      name: 'inst',
      component: inst
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: quiz
    },
    {
        path: '/final',
        name: 'final',
        component: final
    }

  ]
})