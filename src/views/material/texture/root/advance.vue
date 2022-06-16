<!-- 
    @description 材质详情学习demo   
    @author zhangcj
    @date 2022-06-16 15:51:16 
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
  components: {},
  methods: {
    initThree() {
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.clientWidth
      const height = threeDOM.clientHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.set(0, 0, 5)
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      //添加纹理
      const textureImg = require("@/assets/mesh/door/color.jpg")
      const texture = new THREE.TextureLoader().load(textureImg)
      const material = new THREE.MeshBasicMaterial({
        // color: 0x00ff00,
        map: texture,
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        raf = renderer.render(scene, camera)
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
  width: 100%;
  height: 100vh;
}
</style>
