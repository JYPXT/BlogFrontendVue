<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" @click="goBackEventHandler">
      </div>
      <nav>
        <router-link to="/home" class="a">Home</router-link>
        <router-link to="/article" class="a">Archives</router-link>
        <!-- <router-link to="/links" class="a">Links</router-link>
        <router-link to="/about" class="a">About</router-link> -->
        <router-link to="/search" class="a search">search</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    // 返回首页
    goBackEventHandler () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
  .container {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 50px;
      img {
        width: 100%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    nav {
      .a {
        display: inline-block;
        line-height: 1;
        padding: 5px;
        margin: 0 10px;
      }
      .search {
        position: relative;
        width: 30px;
        overflow: hidden;
        text-indent: 9999px;
        vertical-align: middle;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 13px;
          height: 13px;
          border: 2px solid currentColor;
          border-radius:  50%;
        }
        &::after {
          content: "";
          position: absolute;
          top: 15px;
          left: 15px;
          display: block;
          transform: rotate(50deg);
          transform-origin: left top;
          width: 6px;
          height: 3px;
          background-color: currentColor;
        }
      }
    }
  }
}
</style>