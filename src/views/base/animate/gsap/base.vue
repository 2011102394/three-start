<!-- 
    @description gsap补间动画库基本使用
    @author zhangcj
    @date 2022-06-14 12:15:27 
 -->
<template>
  <div class="three-container" ref="threeDom"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDom = this.$refs.threeDom
      const width = threeDom.clientWidth
      const height = threeDom.clientHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDom.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 10
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      new OrbitControls(camera, renderer.domElement)
      // 设置动画 沿x轴平移5个单位，平移时间5秒，速率 说明参考：https://greensock.com/get-started/#easing
      gsap.to(cube.position, { x: 5, duration: 5, ease: "power2.inOut" })
      // 绕x轴旋转360度,时间5秒，速率 说明参考：https://greensock.com/get-started/#easing
      gsap.to(cube.rotation, {
        x: Math.PI * 2,
        duration: 5,
        ease: "power2.inOut",
      })
      const render = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
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
