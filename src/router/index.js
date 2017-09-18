import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Btn from '@/components/Button'
import Todolist from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: Todolist
    }
  ]
})
