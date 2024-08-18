import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'home-pages-text',
          component: () => import('@/views/home-pages/home-pages.vue')
        },
        {
          path: '/prototype-link',
          name: 'prototype-link',
          component: () => import('@/views/js/prototype-link.vue')
        },
        {
          path: '/center-css',
          name: 'center-css',
          component: () => import('@/views/css/center-css.vue')
        },
        {
          path: '/text',
          name: 'text',
          component: () => import('@/views/text-file.vue')
        },
        {
          path: '/github-pages',
          name: 'github-pages',
          component: () => import('@/views/github/github-pages.vue')
        },
        {
          path: '/front-end-dev',
          name: 'front-end-dev',
          component: () => import('@/views/curriculum-vitae/front-end-dev.vue')
        },
        {
          path: '/static-web',
          name: 'static-web',
          component: () => import('@/views/github/static-web.vue')
        },
        {
          path: '/execution-context',
          name: 'execution-context',
          component: () => import('@/views/js/execution-context.vue')
        },
        {
          path: '/execution-context-stack',
          name: 'execution-context-stack',
          component: () => import('@/views/js/execution-context-stack.vue')
        }
      ]
    }
  ]
})

export default router
