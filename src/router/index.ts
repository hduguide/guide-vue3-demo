import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Vuex from '@/views/Vuex.vue'
import About from '@/views/About.vue'
import Articles from '@/views/Articles.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: {
      referrer: 'no-referrer'
    }
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: () => import('@/views/Changelog.vue') // 懒加载 Changelog 组件
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
