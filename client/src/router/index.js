import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ExamHall from '@/components/ExamHall'
import instruction from '@/components/instruction'
import admin from '@/components/admin'
import Thank from '@/components/Thank'
import result from '@/components/result'

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
    },
    {
      path: '/efsdkjfsjdfkjsdkjfhfmnnjdnklsdmn',
      name: 'admin',
      component: admin
    },
    {
      path: '/Thank',
      name: 'Thank',
      component: Thank
    },
    {
      path: '/theresult',
      name: 'result',
      component: result
    }
  ]
})
