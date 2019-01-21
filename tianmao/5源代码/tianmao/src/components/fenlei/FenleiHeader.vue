<template>
  <div class="header">
    <i class="iconfont icon-jiantou4" @click="goBack()"></i>
    <div class="select">
      <i class="iconfont icon-magnifier"></i>
      <span>搜索商品/品牌</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FenleiHeader",
    methods: {
      goBack() {
        window.history.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    height: .45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .13rem;


  .header i
    margin: 0;
    color: #3e414a;
    font-size: .16rem;


  .header .select
    height: .3rem;
    width: 3.15rem;
    background: #f3f3f3;
    border-radius: .12rem;
    display: flex;
    align-items: center;


  .header .select i
    margin: 0 .08rem;
    font-size: .16rem;
    color: #848484;


  .header .select span
    font-size: .16rem;
    color: #848484;

</style>
