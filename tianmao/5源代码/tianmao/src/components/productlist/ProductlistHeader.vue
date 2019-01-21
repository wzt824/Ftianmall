<template>
  <div class="header">
    <i class="iconfont icon-jiantou4" @click="back()"></i>
    <div class="selectBox"><span>{{this.$route.query.menuValue}} <i class="iconfont icon-plus-add"></i></span><i
      class="iconfont icon-xiangji"></i></div>
  </div>
</template>

<script>
  export default {
    name: "ProductlistHeader",
    methods: {
      back() {
        window.history.back()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    height: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;


  .header .icon-jiantou4
    color: #5e656f;
    font-size: .22rem;
    margin: 0 .1rem;


  .selectBox
    width: 3rem;
    height: .39rem;
    border: 1px solid #f1f1f1;
    border-radius: .19rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


  .selectBox span
    font-size: .15rem;
    display: flex;
    align-items: center;
    color: #2b2b2b;
    padding: .06rem .06rem;
    margin: .05rem;
    border-radius: .15rem;
    background: #f1f1f1;


  .selectBox span .iconfont
    font-size: .1rem;
    transform: rotate(45deg);


  .selectBox .iconfont
    font-size: .2rem;
    margin: 0 .1rem;

</style>
