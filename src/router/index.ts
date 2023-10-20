import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/auth/login'
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
      path: '/webrtc/:room',
      name: 'webrtcRoom',
      component: () => import('@/views/LiveHome.vue'),
    },
  ]
})

export default router
