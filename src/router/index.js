import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quickStart",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "quickStart" */ "@/views/base/quickStart/index.vue"
      ),
  },
  {
    path: "/orbitControls",
    name: "OrbitControls",
    component: () =>
      import(
        /* webpackChunkName: "orbitControl" */ "@/views/base/orbitControls/index.vue"
      ),
  },
  {
    path: "/axesHelper",
    name: "axesHelper",
    component: () =>
      import(
        /* webpackChunkName: "axesHelper" */ "@/views/base/axesHelper/index.vue"
      ),
  },
  {
    path: "/mesh/move",
    name: "MeshMove",
    component: () =>
      import(
        /* webpackChunkName: "MeshMove" */ "@/views/base/mesh/meshMove.vue"
      ),
  },
  {
    path: "/mesh/scale",
    name: "MeshScale",
    component: () =>
      import(
        /* webpackChunkName: "MeshScale" */ "@/views/base/mesh/meshScale.vue"
      ),
  },
  {
    path: "/mesh/rotate",
    name: "MeshRotate",
    component: () =>
      import(
        /* webpackChunkName: "MeshRotate" */ "@/views/base/mesh/meshRotate.vue"
      ),
  },
  {
    path: "/animate/requestAnimationFrame",
    name: "RequestAnimationFrame",
    component: () =>
      import(
        /* webpackChunkName: "RequestAnimationFrame" */ "@/views/base/animate/requestAnimationFrame/index.vue"
      ),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
