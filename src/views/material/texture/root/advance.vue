<!-- 
    @description 材质详情学习demo   
    @author zhangcj
    @date 2022-06-16 15:51:16 
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
  components: {},
  methods: {
    initThree() {
      const threeDOM = this.$refs.threeDOM
      const width = threeDOM.clientWidth
      const height = threeDOM.clientHeight
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(width, height)
      threeDOM.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      camera.position.set(0, 0, 5)
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      //添加颜色纹理
      const textureImg = require("@/assets/mesh/door/color.jpg")
      const texture = new THREE.TextureLoader().load(textureImg)
      // 设置纹理偏移
      // texture.offset.setX(0.5)
      // texture.offset.setY(0.5)
      // 设置纹理旋转 纹理将围绕中心点旋转多少度，单位为弧度（rad）。正值为逆时针方向旋转，默认值为0
      //  旋转中心点。(0.5, 0.5)对应纹理的正中心。默认值为(0,0)，即左下角。
      // texture.center.set(0.5, 0.5)
      // texture.rotation = Math.PI / 4
      // 设置纹理重复
      // 水平方向镜像重复
      texture.wrapS = THREE.MirroredRepeatWrapping
      // 垂直方向无限重复
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(2, 3)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      const render = () => {
        raf = renderer.render(scene, camera)
        requestAnimationFrame(render)
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
  width: 100%;
  height: 100vh;
}
</style>
