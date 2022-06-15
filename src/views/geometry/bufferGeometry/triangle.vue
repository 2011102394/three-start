<!-- 
    @description 生成绚丽多彩的三角面
    @author zhangcj
    @date 2022-06-15 16:58:11 
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
      const axesHelper = new THREE.AxesHelper(15)
      scene.add(axesHelper)
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 15
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true

      // 绘制三角面
      for (let i = 0; i < 50; i++) {
        const geometry = new THREE.BufferGeometry()
        const color = new THREE.Color(
          Math.random(),
          Math.random(),
          Math.random()
        )
        const material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.5,
        })
        const vertices = new Float32Array(9)
        for (let j = 0; j < 9; j++) {
          vertices[j] = Math.random() * 10 - 5
        }
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(vertices, 3)
        )
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
      }

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
  width: 100vw;
}
</style>
