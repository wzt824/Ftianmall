<template>
  <transition>
    <router-view/>
  </transition>
</template>

<script>
  export default {
    name: 'App',
    created() {
      /**
       * 确保组件重新渲染之后登录状态置为0
       */
      localStorage.setItem("islogin", 0)
      this.$store.dispatch({type: 'userlogin', data: ''})
    },
    // beforeDestroy() {
    //   localStorage.setItem("islogin",0)
    // }
  }
</script>

<style lang="stylus">
  .v-enter
    transform: translateX(-3.75rem);


  .v-enter-to
    transform: translateX(0);


  .v-enter-active
    transition: .5s;

</style>
