import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      children:[
        {
          path: '/prototype-link',
          name: 'prototype-link',
          component:() => import('@/views/js/PrototypeLink.vue'),
        },
        {
          path: '/css/center-css',
          name: 'center-css',
          component:() => import('@/views/Css/Center-css.vue'),
        },
        {
          path: '/text',
          name: 'text',
          component:() => import('@/views/js/Text-file.vue'),
        },
      ],
    },
  ]
})

export default router