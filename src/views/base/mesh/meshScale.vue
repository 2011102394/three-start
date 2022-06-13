<!-- 
    @description 物体缩放示例  目的: 立方体放大缩小，通过设置cube.scale
    @author zhangcj
    @date 2022-06-13 13:55:33 
 -->
<template>
  <div class="mesh-scale-container" ref="threeDom"></div>
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
      //   获取dom
      const threeDom = this.$refs.threeDom
      const width = threeDom.offsetWidth
      const height = threeDom.offsetHeight
      //   创建渲染器
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDom.appendChild(renderer.domElement)
      //   创建场景
      const scene = new THREE.Scene()
      //   创建相机
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.z = 10
      //   创建物体并添加到场景中
      const geomtry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geomtry, material)
      scene.add(cube)
      //   添加轨道控制器
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.update()
      //   添加坐标轴辅助器
      const axemHelper = new THREE.AxesHelper(5)
      scene.add(axemHelper)
      // 动态渲染
      const render = () => {
        cube.position.x += 0.01
        if (cube.position.x > 5) {
          cube.position.x = 0
        }
        cube.scale.y += 0.01
        cube.scale.z += 0.01
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.mesh-scale-container {
  height: 100vh;
  width: 100%;
}
</style>
