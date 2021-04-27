import { createRouter, createWebHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import(/* webpackChunkName: "about" */ '@/views/about')
      }
    ]
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout
    // component: () => import(/* webpackChunkName: "about" */ '@/views/contacts')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
