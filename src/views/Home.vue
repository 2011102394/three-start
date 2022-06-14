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
  flex-direction: column;
  .router-item {
    margin: 10px;
  }
}
</style>
