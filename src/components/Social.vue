<template>
  <div class="container">
    <div class="social">
      <a>WEIBO</a>
      <a>ZHIHU</a>
      <a>RSS</a>
      <a>GITHUB</a>
      <a>TWITTER</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Social'
}
</script>
<style lang="scss" scoped>
.container {
  background-color: $white;
  border-bottom:  1px solid $border-color;
  display: flex;
  justify-content: center;
  align-items: center;
  .social {
    display: flex;
    padding: 15px;
    a {
      color: $default * 2;
      margin: 0 20px;
      &:hover {
        color: $active;
      }
    }
  }
}
</style>

