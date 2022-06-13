<!-- 
    @description 物体旋转示例 通过设置cube.rotate实现
    @author zhangcj
    @date 2022-06-13 14:13:39 
 -->
<template>
  <div class="mesh-rotate-container" ref="threeDom"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
export default {
  mounted() {
    this.threeInit()
  },
  methods: {
    threeInit() {
      const threeDom = this.$refs.threeDom
      const width = threeDom.offsetWidth
      const height = threeDom.offsetHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDom.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const axesHelper = new THREE.AxesHelper(10)
      scene.add(axesHelper)
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.set(0, 0, 10)
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.update()
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        cube.position.x += 0.01
        // 绕x轴旋转
        cube.rotation.x += 0.01
        if (cube.position.x > 10) {
          cube.position.x = 0
        }
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.mesh-rotate-container {
  height: 100vh;
  width: 100%;
}
</style>
