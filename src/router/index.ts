import { createRouter, createWebHistory } from 'vue-router'

import LiveHome from '@/views/LiveHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LiveHome
    }
  ]
})

export default router
