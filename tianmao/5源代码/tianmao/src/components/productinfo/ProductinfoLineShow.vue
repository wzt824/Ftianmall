<template>
  <div class="productinfoLineShow">
    <div class="priceBox">￥{{productinfo.price}}</div>
    <div class="tmAPP"><span>天猫APP精选</span></div>
    <div class="proName"><span>{{productinfo.name}}</span><i class="iconfont icon-fenxiang"></i></div>
    <div class="expressage linepublic"><span>快递:{{productinfo.runprice}}</span><span>{{productinfo.place}}</span></div>
    <div class="discounts linepublic"><span>优惠</span>
      <p><b class="redSign">促销</b> 满199元,享部分地区包邮</p><span>查看</span></div>
    <div class="active linepublic"><span>活动</span>
      <p><b class="redSign">下单有礼</b> 此商品下单可赢取红包好礼</p><i class="iconfont icon-gengduo"></i></div>
    <div class="serve linepublic"><span>服务</span>
      <p><span>正品保证</span><span>急速退款</span><span>七天退换</span></p><i class="iconfont icon-gengduo"></i></div>
    <div class="choice linepublic"><span>选择</span>
      <p>请选择颜色/尺码</p><i class="iconfont icon-gengduo"></i></div>
    <div class="choice linepublic"><span>参数</span>
      <p>品牌 尺码</p><i class="iconfont icon-gengduo"></i></div>
    <div class="evaluate linepublic"><span>商品评价</span><span>查看全部 <i class="iconfont icon-z043"></i></span></div>
  </div>
</template>

<script>
  export default {
    name: "ProductinfoLineShow",
    props: ["productinfo"]
  }
</script>

<style scoped lang="stylus">
  .productinfoLineShow
    width: 100%;


  .priceBox
    height: .5rem;
    line-height: .5rem;
    font-size: .17rem;
    color: #ea011f;
    font-weight: 900;
    padding: 0 .1rem;
    background: #ffffff;


  .tmAPP
    height: .15rem;
    padding: 0 .1rem;
    background: #ffffff;


  .tmAPP span
    width: .73rem;
    height: .15rem;
    line-height: .15rem;
    font-size: .08rem;
    display: flex;
    background: #fd0036;
    color: #ffffff;


  .proName
    padding: 0 .1rem;
    font-size: .15rem;
    color: #070707;
    line-height: .3rem;
    display: flex;
    background: #ffffff;


  .proName i
    font-size: .18rem;


  .expressage
    height: .35rem;
    line-height: .35rem;
    color: #848484;


  .discounts
    margin-top: .1rem;
    height: .41rem;
    color: #838383;


  .active
    height: .41rem;


  .linepublic
    height: .41rem;
    color: #838383;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    padding: 0 .1rem;
    font-size: .12rem;
    text-align: left;


  .linepublic p
    padding: 0 .1rem;
    flex: 1;
    color: #070707;


  .redSign
    color: red;
    margin: 0 .05rem;
    /*font-weight: normal;*/


  .serve
    margin-top: .1rem;
    margin-bottom: .1rem;


  .serve p span
    margin-right: .24rem;
    color: #070707;


  .evaluate
    margin: .1rem 0 0;
    height: .5rem;


  .evaluate span
    font-size: .16rem;

</style>
