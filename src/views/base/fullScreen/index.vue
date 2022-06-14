<!-- 
    @description 全屏示例
    @author zhangcj
    @date 2022-06-14 16:20:52 
 -->
<template>
  <div class="three-container" ref="threeDOM"></div>
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
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.offsetWidth
      const height = threeDOM.offsetHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 5
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
      // 双击全屏或退出全屏
      window.addEventListener("dblclick", () => {
        const fullScreenElement = document.fullscreenElement
        if (!fullScreenElement) {
          // 请求全屏
          renderer.domElement?.requestFullscreen()
        } else {
          // 退出全屏
          document.exitFullscreen()
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100vh;
}
</style>
