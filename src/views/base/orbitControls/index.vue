<!-- 
    @description 轨道控制器示例
    @author zhangcj
    @date 2022-06-13 10:05:03 
 -->
<template>
  <div class="oribit-controls-container" ref="threeDom"></div>
</template>
<script>
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const threeDom = this.$refs.threeDom
      const width = threeDom.offsetWidth
      const height = threeDom.offsetHeight
      //   1、创建渲染器
      const renderer = new THREE.WebGLRenderer()
      //  2、设置渲染器的大小
      renderer.setSize(width, height)
      //  3、将渲染器添加到页面中
      threeDom.appendChild(renderer.domElement)
      //  4、创建场景
      const scene = new THREE.Scene()
      //  5、创建相机
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      //  6、创建一个立方体
      //   几何体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      //   材质
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      //  7、将立方体添加到场景中
      scene.add(cube)
      //  8、设置相机的位置
      camera.position.z = 5
      //  9、渲染
      renderer.render(scene, camera)
      //  10、创建轨道控制器
      const controls = new OrbitControls(camera, renderer.domElement)
      //  11、动态渲染
      const render = ()=>{
        renderer.render(scene, camera)
        requestAnimationFrame(render)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.oribit-controls-container {
  height: 100vh;
  width: 100%;
}
</style>
