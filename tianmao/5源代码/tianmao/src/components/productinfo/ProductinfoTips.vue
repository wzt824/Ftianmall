<template>
  <div class="tipBox1">
    添加成功
  </div>
</template>

<script>
  export default {
    name: "ProductinfoTips"
  }
</script>

<style scoped lang="stylus">
  .tipBox1
    font-size: .18rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background: rgba(0, 0, 0, .5);
    border-radius: .1rem;
    position: fixed;
    z-index: 100;
    top: 40%;
    left: 40%;
    color: #ffffff;
    opacity: 0;
    /*display: none;*/
    transition: all .5s;

</style>
