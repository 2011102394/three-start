import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quickStart',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "quickStart" */ '@/views/base/quickStart/index.vue')
  },
  {
    path: '/orbitControls',
    name: 'OrbitControls',
    component: () => import(/* webpackChunkName: "orbitControl" */ '@/views/base/orbitControls/index.vue')
  },
  {
    path: '/axesHelper',
    name: 'axesHelper',
    component: () => import(/* webpackChunkName: "axesHelper" */ '@/views/base/axesHelper/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
