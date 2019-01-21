<template>
  <div class="productinfoHeader">
    <i class="iconfont icon-jiantou4" @click="back()"></i>
    <div class="tabs"><span>商品</span><span>详情</span><span>评价</span></div>
    <i class="iconfont icon-gouwuche" @click="gotoCart()"></i>
    <i class="iconfont icon-gengduozhanshi"></i>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "ProductinfoHeader",
    mounted() {
      $.ready(
        $('.main').on('scroll', function () {
          console.info(123)
          if ($('.main')[0].scrollTop > 5) {
            $('.productinfoHeader').css({background: '#fff'})
            $('.productinfoHeader .tabs').css({opacity: 1})
            $('.productinfoHeader i').css({background: '#fff', color: '#aaa'})
          } else {
            $('.productinfoHeader').css({background: 'transparent'})
            $('.productinfoHeader .tabs').css({opacity: 0})
            $('.productinfoHeader i').css({background: 'rgba(0,0,0,.35)', color: '#fff'})
          }
        })
      )
    },
    methods: {
      back() {
        window.history.back()
      },
      gotoCart() {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .productinfoHeader
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    position: fixed;
    z-index: 10;
    transition: all 1s;


  .productinfoHeader i
    font-size: .16rem;
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    background: rgba(0, 0, 0, .35);
    color: #ffffff;
    border-radius: .16rem;


  .productinfoHeader i:nth-of-type(1)
    margin: .1rem;


  .productinfoHeader i:nth-of-type(3)
    margin: .1rem;


  .productinfoHeader .tabs
    opacity: 0;
    width: 2rem;
    display: flex;
    justify-content: space-around;


  .productinfoHeader .tabs span
    font-size: .16rem;

</style>
