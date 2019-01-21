<template>
  <div class="header">
    <i class="iconfont icon-dingwei"></i>
    <i class="iconfont icon-qrcode-1-copy"></i>
    <i class="iconfont icon-wode1"></i>
  </div>
</template>

<script>
  export default {
    name: "BusinessareaHeader"
  }
</script>

<style scoped lang="stylus">
  .header
    padding: 0 .14rem;
    height: .45rem;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;


  .header i
    color: #ffffff;
    font-size: .2rem;


  .header i:nth-of-type(2)
    margin: 0 .2rem 0 2.6rem;

</style>
