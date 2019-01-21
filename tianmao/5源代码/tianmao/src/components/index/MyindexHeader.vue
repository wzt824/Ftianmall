<template>
  <div class="header">
    <i class="iconfont icon-richscan_icon"></i>
    <span class="headerName">天猫 TMALL</span>
    <i class="iconfont icon-erweima"></i>
    <i class="iconfont icon-buoumaotubiao14"></i>
    <div class="selectBox">
      <i class="iconfont icon-magnifier"></i>
      <span>{{selectvalue}}</span>
      <i class="iconfont icon-xiangji"></i>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "MyindexHeader",
    props: ["selectvalue"],
    mounted() {
      $.ready(
        $('.pull-down-container').on('scroll', function () {
          if ($('.pull-down-container')[0].scrollTop > 160) {
            $('.header').css({height: '.45rem'})
            $('.header .headerName').css({opacity: 0})
            $('.selectBox').css({top: '.05rem', left: '.5rem', width: '2.3rem'})
            $('.main').css({paddingTop:'.45rem'})
          } else {
            $('.header').css({height: '.82rem'})
            $('.header .headerName').css({opacity: 1})
            $('.selectBox').css({top: '.42rem', width: '3.55rem', left: '.1rem'})
            $('.main').css({paddingTop:'.7rem'})
          }
        })
      )


    }
  }
</script>

<style scoped lang="stylus">
  .header
    height: .82rem;
    background: red;
    display: flex;
    padding: 0 .1rem;
    /*position: relative;*/
    transition: all 1s;
    position: fixed;
    z-index: 10;


  .header .iconfont
    font-size: .2rem;
    color: #ffffff;
    margin: .1rem;


  .header .headerName
    width: 2.5rem;
    font-size: .22rem;
    color: #ffffff;
    text-align: center;
    line-height: .42rem;
    transition: all 1s;


  .selectBox
    width: 3.55rem;
    height: .35rem;
    background: #F7F7F7;
    position: absolute;
    top: .42rem;
    left: .1rem;
    color: #a6a6a6;
    font-size: .15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1s;


  .selectBox .iconfont
    color: #9e9e9e;


  .selectBox span
    flex: 1;

</style>
