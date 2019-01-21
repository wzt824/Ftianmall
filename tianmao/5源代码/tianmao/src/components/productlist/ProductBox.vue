<template>
  <div class="productBox" @click="goto(singleInfo.id)">
    <img :src="singleInfo.pic" alt="">
    <h3 class="name">{{singleInfo.name}}</h3>
    <p class="priceBox">￥{{singleInfo.price}}</p>
    <p class="otherDir"><span v-for="(m,idx) in singleInfo.otherDir">{{m}}</span></p>
    <p class="saleBox"><span class="sale">月销{{singleInfo.sale}}笔</span><span class="moreBox"><i
      class="iconfont icon-gengduo"></i></span></p>
  </div>
</template>

<script>
  export default {
    name: "ProductBox",
    props: ["singleInfo"],
    methods: {
      goto(k) {
        this.$router.push(`/productinfo?productid=${k}`)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .productBox
    margin: .05rem 0;
    width: 1.83rem;
    /*height: 3.8rem;*/
    background: #ffffff;


  .productBox img
    width: 1.83rem;
    /*height: 2.75rem;*/
    /*height: 1.83rem;*/


  .productBox .name
    padding: 0 .1rem;
    height: .33rem;
    font-size: .14rem;
    color: #2a2a2a;
    text-align: center;
    line-height: .33rem;
    overflow: hidden;


  .priceBox
    padding: 0 .1rem;
    font-size: .13rem;
    height: .25rem;
    color: #fe0036;
    font-weight: 900;


  .otherDir
    height: .25rem;
    padding: 0 .1rem;


  .otherDir span
    float: left;
    font-size: .08rem;
    color: #e22e58;
    display: flex;
    padding: .02rem;
    border-radius: .06rem;
    border: 1px solid #e22e58;


  .saleBox
    padding: 0 .1rem;
    height: .26rem;
    font-size: .12rem;
    color: #8f8f8f;
    display: flex;
    justify-content: space-between;


  .saleBox .moreBox
    width: .19rem;
    height: .18rem;
    text-align: center;
    border: 1px solid #ededed;
    border-radius: 50%;

</style>
