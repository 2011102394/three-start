<!-- 
    @description 纹理采样学习demo 参考：https://juejin.cn/post/7053621679762702343
    @author zhangcj
    @date 2022-06-20 10:28:05 
 -->
<template>
  <div class="three-container" ref="threeDOM"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
let raf
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.clientWidth
      const height = threeDOM.clientHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      camera.position.set(0, 0, 5)
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const textureImg = require(`@/assets/mesh/minecraft.png`)
      const texture = new THREE.TextureLoader().load(textureImg)
      //   texture.minFilter = THREE.NearestFilter
      // 一张小纹理贴到一个大空间（例如16X16的纹理映射到32X32的像素空间），相当于纹理拉大
      //   参考：https://juejin.cn/post/7053621679762702343#comment
      texture.magFilter = THREE.NearestFilter
      const material = new THREE.MeshBasicMaterial({
        color: "#ffff00",
        map: texture,
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
      }
      render()
    },
  },
  beforeRouteLeave(to, from, next) {
    cancelAnimationFrame(raf)
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
