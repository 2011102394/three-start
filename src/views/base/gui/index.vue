<!-- 
    @description gui 示例
    @author zhangcj
    @date 2022-06-15 08:51:19 
 -->
<template>
  <div class="three-container" ref="threeDOM"></div>
</template>
<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as dat from "dat.gui"
let raf
let gui
export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      // 容器
      const threeDOM = this.$refs.threeDOM
      let width = threeDOM.offsetWidth
      let height = threeDOM.offsetHeight
      // 渲染器
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      // 场景
      const scene = new THREE.Scene()
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      // 相机
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 5
      // 轨道控制器
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      orbitControls.enableDamping = true
      // 立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff98 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      // gui测试
      gui = new dat.GUI({ name: "控制面板" })
      // 平移
      const moveFolder = gui.addFolder("物体移动")
      moveFolder
        .add(cube.position, "x")
        .min(0)
        .max(5)
        .step(0.01)
        .name("沿x轴移动")
      moveFolder
        .add(cube.position, "y")
        .min(0)
        .max(5)
        .step(0.01)
        .name("沿y轴移动")
      moveFolder
        .add(cube.position, "z")
        .min(0)
        .max(5)
        .step(0.01)
        .name("沿z轴移动")
      // 颜色
      const colorFolder = gui.addFolder("物体颜色")
      const colorParam = {
        color: "#00ff98",
      }
      colorFolder.addColor(colorParam, "color").onChange((color) => {
        cube.material.color.set(color)
      })
      // 显隐控制
      const visibilityFolder = gui.addFolder("显隐控制")
      visibilityFolder.add(cube, "visible").name("显隐")
      // 渲染
      const render = () => {
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
      }
      render()
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
    if (gui) {
      gui.destroy()
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
