<!-- 
    @description : 物体移动示例 
    @author zhangcj
    @date 2022-06-13 11:03:38 
 -->
<template>
  <div class="mesh-move-container" ref="threeDom"></div>
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
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.z = 10
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.update()
      const geomtry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geomtry, material)
      scene.add(cube)

      const render = () => {
        cube.position.x += 0.01
        if (cube.position.x > 5) {
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
.mesh-move-container {
  height: 100vh;
  width: 100%;
}
</style>
