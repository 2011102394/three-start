<!-- 
    @description 环境光遮挡
    @author zhangcj
    @date 2022-07-06 16:33:59 
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
    this.init()
  },
  methods: {
    init() {
      const threeDOM = this.$refs["threeDOM"]
      const width = threeDOM.clientWidth
      const height = threeDOM.clientHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
      camera.position.set(0, 0, 5)
      const controls = new OrbitControls(camera, renderer.domElement)
      //   开启重力阻尼
      controls.enableDamping = true
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      // 创建物体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      //  创建材质
      const textureLoader = new THREE.TextureLoader()
      const doorImg = require("@/assets/mesh/door/color.jpg")
      const doorTexture = textureLoader.load(doorImg)
      const alphaImg = require("@/assets/mesh/door/alpha.jpg")
      const alphaTexture = textureLoader.load(alphaImg)
      // 环境遮挡贴图
      const ambientOcclusionImg = require("@/assets/mesh/door/ambientOcclusion.jpg")
      const ambientOcclusionTexture = textureLoader.load(ambientOcclusionImg)
      const material = new THREE.MeshBasicMaterial({
        color: "#ffff00",
        alphaMap: alphaTexture,
        map: doorTexture,
        transparent: true,
        aoMap: ambientOcclusionTexture,
        side: THREE.DoubleSide,
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      // 添加物体到场景中
      //   再创建一个平面
      const planeGeometry = new THREE.PlaneBufferGeometry(1, 1)
      const plane = new THREE.Mesh(planeGeometry, material)
      const uv = planeGeometry.getAttribute("uv")
      planeGeometry.setAttribute("uv2", planeGeometry.getAttribute("uv"))
      plane.position.set(3, 0, 0)
      scene.add(plane)

      const render = () => {
        renderer.render(scene, camera)
        raf = requestAnimationFrame(render)
      }
      render()
    },
  },
}
</script>
<style lang="scss" scoped>
.three-container {
  height: 100vh;
  width: 100vw;
}
</style>
