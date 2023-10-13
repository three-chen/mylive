import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/webrtc/home'
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          component: () => import('@/views/auth/LoginRegister.vue'),
        },
      ],
    },
    {
      path: '/webrtc',
      name: 'webrtc',
      redirect: '/webrtc/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/LiveHome.vue'),
        },
      ],
    },
  ]
})

export default router
