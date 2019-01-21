<template>
  <div class="myHeader">
    <i class="iconfont icon-shezhi"></i>
    <i class="iconfont icon-buoumaotubiao14"></i>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "MyHeader",
    mounted() {
      $.ready(
        $('.main').on('scroll', function () {
          if ($('.main')[0].scrollTop > 5) {
            $('.myHeader').css({background: 'red'})
          } else {
            $('.myHeader').css({background: 'transparent'})
          }
        })
      )
    }
  }
</script>

<style scoped lang="stylus">
  .myHeader
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background: red;*/
    position: fixed;
    transition: all 1s;


  .myHeader .iconfont
    color: #ffffff;
    margin: 0 .1rem;
    font-size: .25rem;

</style>
