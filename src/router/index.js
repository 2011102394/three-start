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
  {
    path: "/animate/clock",
    name: "Clock",
    component: () =>
      import(
        /* webpackChunkName: "Clock" */ "@/views/base/animate/clock/index.vue"
      ),
  },
  {
    path: "/animate/gsap/base",
    name: "GsapBase",
    component: () =>
      import(
        /* webpackChunkName: "GsapBase" */ "@/views/base/animate/gsap/base.vue"
      ),
  },
  {
    path: "/animate/gsap/advance",
    name: "GsapAdvance",
    component: () =>
      import(
        /* webpackChunkName: "GsapAdvance" */ "@/views/base/animate/gsap/advance.vue"
      ),
  },
  {
    path: "/resize",
    name: "Resize",
    component: () =>
      import(/* webpackChunkName: "Resize" */ "@/views/base/resize/index.vue"),
  },
  {
    path: "/fullScreen",
    name: "fullScreen",
    component: () =>
      import(
        /* webpackChunkName: "fullScreen" */ "@/views/base/fullScreen/index.vue"
      ),
  },
  {
    path: "/gui",
    name: "gui",
    component: () =>
      import(/* webpackChunkName: "gui" */ "@/views/base/gui/index.vue"),
  },
  {
    path: "/geometry/bufferGeometry/line",
    name: "Line",
    component: () =>
      import(
        /* webpackChunkName: "Line" */ "@/views/geometry/bufferGeometry/line.vue"
      ),
  },
  {
    path: "/geometry/bufferGeometry/cube",
    name: "Cube",
    component: () =>
      import(
        /* webpackChunkName: "Cube" */ "@/views/geometry/bufferGeometry/cube.vue"
      ),
  },
  {
    path: "/geometry/bufferGeometry/triangle",
    name: "Triangle",
    component: () =>
      import(
        /* webpackChunkName: "Triangle" */ "@/views/geometry/bufferGeometry/triangle.vue"
      ),
  },
  {
    path: "/material/texture/root/base",
    name: "TextureBase",
    component: () =>
      import(
        /* webpackChunkName: "TextureBase" */ "@/views/material/texture/root/index.vue"
      ),
  },
  {
    path: "/material/texture/root/advance",
    name: "TextureAdvance",
    component: () =>
      import(
        /* webpackChunkName: "TextureAdvance" */ "@/views/material/texture/root/advance.vue"
      ),
  },
  {
    path: "/material/texture/root/mapFilter",
    name: "mapFilter",
    component: () =>
      import(
        /* webpackChunkName: "mapFilter" */ "@/views/material/texture/root/mapFilter.vue"
      ),
  },
  {
    path: "/material/texture/root/alphaTexture",
    name: "alphaTexture",
    component: () =>
      import(
        /* webpackChunkName: "alphaTexture" */ "@/views/material/texture/root/alpha.vue"
      ),
  },
  {
    path: "/material/texture/root/ambientOcclusion",
    name: "aoMap",
    component: () =>
      import(
        /* webpackChunkName:"aoMap" */ "@/views/material/texture/root/ambientOcclusion.vue"
      ),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
