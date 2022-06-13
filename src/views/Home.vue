<template>
  <div id="nav">
    <router-link to="/" class="router-item">Home</router-link>
    <router-link to="/quickStart" class="router-item">QuickStart</router-link>
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
