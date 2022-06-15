<!-- 
    @description BufferGeometry示例测试
    @author zhangcj
    @date 2022-06-15 13:50:29 
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
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 15
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true

      const geometry = new THREE.BufferGeometry()
      //   webgl 中规定 逆时针为正面，顺时针为反面
      //    详情参考：https://zhuanlan.zhihu.com/p/438756529
      const vertices = new Float32Array([
        -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

        1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
      ])
      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff99 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      gsap.to(cube.rotation, {
        z: 2 * Math.PI,
        duration: 5,
        repeat: -1,
        ease: "power2.inOut",
      })
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
