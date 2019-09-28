import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamHall from '@/components/ExamHall'
import instruction from '@/components/instruction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/exam/:email',
      name: 'ExamHall',
      component: ExamHall
    },
    {
      path: '/',
      name: 'instruction',
      component: instruction
    }
  ]
})
