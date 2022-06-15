<!-- 
    @description 绘制线示例
    @author zhangcj
    @date 2022-06-15 10:09:54 
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
      let width = threeDOM.offsetWidth
      let height = threeDOM.offsetHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const axesHelper = new THREE.AxesHelper(10)
      scene.add(axesHelper)
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 20
      camera.lookAt(0, 0, 0)
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true
      // 绘制线
      const points = []
      points.push(new THREE.Vector3(-10, 0, 0))
      points.push(new THREE.Vector3(0, 10, 0))
      points.push(new THREE.Vector3(10, 0, 0))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ color: 0x00ff98 })
      const line = new THREE.Line(geometry, material)
      scene.add(line)
      const render = () => {
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
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
  width: 100vm;
}
</style>
