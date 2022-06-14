<!-- 
    @description requestAnimationFrame示例
    关于requestAnimationFrame的详细介绍可以参考：https://juejin.cn/post/6844903649366245384
    @author zhangcj
    @date 2022-06-14 09:24:01 
 -->
<template>
  <div class="request-animation-frame-container" ref="threeDom"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDom = this.$refs.threeDom
      const width = threeDom.offsetWidth
      const height = threeDom.offsetHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDom.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      camera.position.z = 5
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const controls = new OrbitControls(camera, renderer.domElement)
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const render = (time) => {
        // 匀速运动
        let t = (time / 1000) % 5
        cube.position.x = t * 1
        requestAnimationFrame(render)
        renderer.render(scene, camera)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.request-animation-frame-container {
  height: 100vh;
  width: 100%;
}
</style>
