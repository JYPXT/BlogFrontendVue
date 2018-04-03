<template>
  <div v-set-height class="nofound"></div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  directives: {
    setHeight (el, binding, vnode) {
      setTimeout( () => {
        const height = window.innerHeight - document.querySelector('header').offsetHeight - document.querySelector('footer').offsetHeight;
        el.style.height = `${height}px`;
      }, 0)
    }
  }
}
</script>
<style scoped>
  .nofound {
    text-align: center;
    background: url('~@/assets/404.png') center 30px no-repeat;
    background-size: contain;
  }
</style>



