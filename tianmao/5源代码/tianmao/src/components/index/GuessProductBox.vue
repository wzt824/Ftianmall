<template>
  <div class="box">
    <div class="pimgWrap">
      <img class="pimg" :src="pdata.src" alt="">
    </div>
    <div class="pname">{{pdata.pname}}</div>
    <div class="priceBox"><span class="price">￥{{pdata.price}}</span><span class="similarity">看相似</span></div>
    <div class="recommend">{{pdata.recommend}}</div>
  </div>
</template>

<script>
  export default {
    name: "GuessProductBox",
    props: ["pdata"]
  }
</script>

<style scoped lang="stylus">
  .box
    width: 48%;
    height: 3rem;
    background: #ffffff;


  .box .pimgWrap
    width: 100%;
    height: 1.72rem;
    display: flex;
    justify-content: center;


  .box .pimg
    width: 80%;


  .box .pname
    padding: 0 .1rem;
    font-size: .15rem;
    height: .5rem;
    line-height: .25rem;
    text-indent: .1rem;
    overflow: hidden;


  .box .priceBox
    /*width: 100%;*/
    padding: 0.04rem .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


  .box .priceBox .price
    color: red;
    font-size: .15rem;


  .box .priceBox .similarity
    font-size: .1rem;
    color: red;
    background: #ffe6ea;
    padding: .05rem;
    border-radius: .1rem;


  .box .recommend
    font-size: .11rem;
    height: .3rem;
    line-height: .3rem;
    color: #727272;
    text-indent: .16rem;
    border-top: 1px solid #e8e8e8;

</style>
