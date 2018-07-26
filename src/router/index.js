import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Btn from '@/components/Button'
import Todolist from '@/components/TodoList'
import Shop from '@/components/Shop'
import Ani from '@/components/Ani'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Component from '@/components/Component'
import Movie from '@/components/Movie'
import Detail from '@/components/Detail'
import ProviceSelect from '@/components/ProviceSelect'
import LifeCycle from '@/components/LifeCycle'
import Parent from '@/components/Parent'
import Brother from '@/components/Brother'
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
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/ani',
      name: 'Ani',
      component: Ani
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/component',
      name: 'Component',
      component: Component
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movie/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/provice',
      name: 'ProviceSelect',
      component: ProviceSelect
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/brother',
      name: 'Brother',
      component: Brother
    }
  ]
})
