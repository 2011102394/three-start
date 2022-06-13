<!-- 
    @description 快速入门
    @author zhangcj
    @date 2022-06-13 08:59:34 
 -->
<template>
  <div class="quick-start-container">
    <div class="three-container" ref="threeDom"></div>
  </div>
</template>
<script>
import * as THREE from "three"
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDom = this.$refs.threeDom
      const width = threeDom.offsetWidth
      const height = threeDom.offsetHeight
      //   1、创建场景
      const scene = new THREE.Scene()
      //   2、创建相机
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      //   3、创建渲染器
      const renderer = new THREE.WebGLRenderer()
      //   4、设置渲染器的大小
      renderer.setSize(width, height)
      //   5、将渲染器添加到页面中
      threeDom.appendChild(renderer.domElement)
      //   6、创建一个立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      //  7、将立方体添加到场景中
      scene.add(cube)
      //   8、设置相机的位置
      camera.position.z = 5
      //   9、渲染
      renderer.render(scene, camera)
    },
  },
}
</script>
<style lang="scss" scoped>
.quick-start-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .three-container {
    width: 400px;
    height: 400px;
  }
}
</style>
