<!-- 
    @description clock示例
    @author zhangcj
    @date 2022-06-14 10:40:12 
 -->
<template>
  <div class="clock-container" ref="threeDom"></div>
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
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      new OrbitControls(camera, renderer.domElement)
      const clock = new THREE.Clock()
      const render = (time) => {
        // 时间间隔
        const delta = clock.getDelta()
        console.log("时钟运行间隔时长：",delta)
        // clock 运行总时间
        const elapsedTime = clock.getElapsedTime()
        console.log("时钟运行总时长：",elapsedTime)
        // 匀速运动
        let t = (time / 1000) % 5
        cube.position.x = t * 1
        raf = requestAnimationFrame(render)
        renderer.render(scene, camera)
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
.clock-container {
  height: 100vh;
  width: 100%;
}
</style>
