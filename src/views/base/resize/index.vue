<!-- 
    @description 
    @author zhangcj
    @date 2022-06-14 15:10:57 
 -->
<template>
  <div class="three-container" ref="threeDOM"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
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
      threeDOM.append(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 10
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      //   开启控制器阻尼
      orbitControls.enableDamping = true
      const axesHelper = new THREE.AxesHelper(10)
      scene.add(axesHelper)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        orbitControls.update()
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
      }
      render()
      gsap.to(cube.position, { x: 10, duration: 10, repeat: 2, yoyo: true })
      window.addEventListener("resize", () => {
        width = threeDOM.offsetWidth
        height = threeDOM.offsetHeight
        // 更新相机宽高比
        camera.aspect = width / height
        // 更新相机投影矩阵
        camera.updateProjectionMatrix()
        // 更新渲染器
        renderer.setSize(width, height)
        // 更新渲染器像素比
        renderer.setPixelRatio(window.devicePixelRatio)
      })
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
  width: 100%;
}
</style>
