<template>
  <div class="header">
    <i class="iconfont icon-jiantou4" @click="backfn()"></i>
  </div>
</template>

<script>
  export default {
    name: "LoginHeader",
    methods: {
      backfn() {
        window.history.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    height: .45rem;
    background: #ffffff;
    display: flex;
    padding: 0 .1rem;
    align-items: center;


  .header i
    font-size: .16rem;
    color: #030303;

</style>
