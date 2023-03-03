import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/Home.vue"),
      props: true,
    },
    {
      path: '/:name',
      name: 'countryPage',
      component: () => import("../views/SinglePage.vue"),
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import("../views/NotFound"),
      props: true,
    }
  ]
})



export default router
