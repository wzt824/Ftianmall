<template>
  <div class="totleCount">
    <label class="checkBox" @click="allShopCheckfun()"><input type="checkbox" :checked="allTotleCheck"/></label>
    <span class="inputDir">全选</span>
    <div class="totleBox">合计: <span class="totlePrice">￥{{total}}</span></div>
    <div class="totleBtn">结算</div>
  </div>
</template>

<script>
  export default {
    name: "TotleCount",
    props: ["total", "allTotleCheck", "allShopCheckfun"]
  }
</script>

<style scoped lang="stylus">
  .totleCount
    height: .55rem;
    background: #ffffff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;


  .inputDir
    font-size: .15rem;


  .totleBox
    font-size: .15rem;
    padding: 0 .05rem;
    flex: 1;
    display: flex;
    justify-content: flex-end;


  .totleBox .totlePrice
    color: #fe0036;


  .totleBtn
    font-size: .16rem;
    width: .94rem;
    height: .38rem;
    border-radius: .19rem;
    background: #fe0036;
    text-align: center;
    line-height: .38rem;
    color: #ffffff;


  .checkBox
    margin: 0 .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: .25rem;
    height: .25rem;
    border: 1px solid #cccccc;
    border-radius: 50%;



  input[type='checkbox']
    width: .25rem;
    height: .25rem;
    /*background-color: #fff;*/
    -webkit-appearance: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    outline: none;


  .checkBox input[type=checkbox]:checked
    background: url("/static/img/checkBox1.png") no-repeat center;
    background-size: cover;

</style>
