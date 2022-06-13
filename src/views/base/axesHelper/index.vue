<!-- 
    @description 坐标轴辅助器示例
    @author zhangcj
    @date 2022-06-13 10:34:36 
 -->
<template>
  <div class="axes-helper-container" ref="threeDom"></div>
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
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.set(0, 0, 10)
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const controls = new OrbitControls(camera, renderer.domElement)
      const geomtry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geomtry, material)
      scene.add(cube)
      controls.update()
      const render = () => {
        requestAnimationFrame(render)
        renderer.render(scene, camera)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.axes-helper-container {
  height: 100vh;
  width: 100%;
}
</style>
