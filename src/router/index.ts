import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Articles from '@/views/Articles.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '主页',
    component: Home
  },
  {
    path: '/articles',
    alias: '/articles/:slug',
    name: '文章',
    component: Articles,
    meta: {
      referrer: 'no-referrer'
    }
  },
  {
    path: '/changelog',
    name: '更新日志',
    component: () => import('@/views/Changelog.vue') // 懒加载 Changelog 组件
  },
  {
    path: '/about',
    name: '关于',
    component: About
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
