<!-- 
    @description gsap库的进一步使用
    @author zhangcj
    @date 2022-06-14 14:14:09 
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
      // 获取three渲染的容器
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.offsetWidth
      const height = threeDOM.offsetHeight
      // 创建three渲染器，设置渲染器尺寸，追加到容器中
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      // 创建scene场景
      const scene = new THREE.Scene()
      // 创建相机，设置相机位置
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.z = 5
      // 创建轨道控制器
      const orbitControls = new OrbitControls(camera, renderer.domElement)
      // 创建坐标轴辅助器，添加到场景中
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      // 创建一个立方体，添加到场景中
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x1890ff })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      // 渲染器渲染
      const render = () => {
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
      }
      render()
      // 动画相关的操作
      const animate = gsap.to(cube.position, {
        x: 5,
        duration: 5,
        // 重复次数，无限循环 -1
        repeat:2,
        // 往返运动
        yoyo: true,
        ease: "power2.inOut",
        onStart: () => {
          console.log("动画开始")
        },
        onComplete: () => {
          console.log("动画结束")
        },
      })

      window.addEventListener("dblclick", () => {
        if (animate.isActive()) {
          // 动画暂停
          animate.pause()
        } else {
          // 动画开始
          animate.resume()
        }
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
