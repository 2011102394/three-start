<template>
  <div id="nav">
    <router-link to="/" class="router-item">Home</router-link>
    <router-link to="/quickStart" class="router-item">QuickStart</router-link>
    <router-link to="/orbitControls" class="router-item"
      >轨道控制器示例</router-link
    >
    <router-link to="/axesHelper" class="router-item"
      >坐标轴辅助器示例</router-link
    >
    <router-link to="/mesh/move" class="router-item">物体移动示例</router-link>
    <router-link to="/mesh/scale" class="router-item">物体缩放示例</router-link>
    <router-link to="/mesh/rotate" class="router-item"
      >物体旋转示例</router-link
    >
    <router-link to="/animate/requestAnimationFrame" class="router-item"
      >请求动画帧</router-link
    >
    <router-link to="/animate/clock" class="router-item">Clock示例</router-link>
    <router-link to="/animate/gsap/base" class="router-item"
      >Gsap基本使用</router-link
    >
    <router-link to="/animate/gsap/advance" class="router-item"
      >Gsap进阶使用</router-link
    >
    <router-link to="/resize" class="router-item">自适应画面</router-link>
    <router-link to="/fullScreen" class="router-item">全屏</router-link>
    <router-link to="/gui" class="router-item">gui测试</router-link>
    <router-link to="/geometry/bufferGeometry/line" class="router-item"
      >线</router-link
    >
    <router-link to="/geometry/bufferGeometry/cube" class="router-item"
      >BufferGeometry设置顶点绘制矩形</router-link
    >
    <router-link to="/geometry/bufferGeometry/triangle" class="router-item"
      >绘制多姿多彩的三角面</router-link
    >
    <router-link to="/material/texture/root/base" class="router-item"
      >基础纹理</router-link
    >
    <router-link to="/material/texture/root/advance" class="router-item"
      >基础纹理属性</router-link
    >
    <router-link to="/material/texture/root/mapFilter" class="router-item"
      >纹理采样方式</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  .router-item {
    margin: 10px;
    width: 20%;
  }
}
</style>
