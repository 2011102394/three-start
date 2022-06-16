<!-- 
    @description 基础材质示例
    @author zhangcj
    @date 2022-06-16 11:03:34 
 -->
<template>
  <div class="three-container" ref="threeDOM"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
let raf
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.offsetWidth
      const height = threeDOM.offsetHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 5
      scene.add(camera)
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true
      // 导入纹理
      const textureLoader = new THREE.TextureLoader()
      const img = require("@/assets/mesh/door/color.jpg")
      const texture = textureLoader.load(img)
      const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({
        color: "#ffff00",
        map: texture,
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
    },
  },
  beforeRouteLeave(to, from, next) {
    if (raf) {
      cancelAnimationFrame(raf)
    }
    next()
  },
}
</script>
<style lang="scss" scoped>
.three-container {
  height: 100vh;
  width: 100vw;
}
</style>
