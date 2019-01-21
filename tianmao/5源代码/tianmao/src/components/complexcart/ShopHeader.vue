<template>
  <div class="shopHeader">
    <label class="checkBox" @click="singleShopAllCheck(shopkeys,shop.checkStatus)"><input type="checkbox"
                                                                                          :checked="shop.checkStatus"/></label>
    <span class="shopName">{{shop.shopname}}</span>
  </div>
</template>

<script>
  export default {
    name: "ShopHeader",
    props: ["shop", "singleShopAllCheck", "shopkeys"],
  }
</script>

<style scoped lang="stylus">
  .shopHeader
    display: flex;
    align-items: center;
    width: 3.5rem;
    height: .5rem;
    background: #ffffff;


  .shopName
    color: #101010;
    font-size: .15rem;


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
    box-sizing: border-box;
    border: 1px solid transparent;
    outline: none;


  .checkBox input[type=checkbox]:checked
    background: url("/static/img/checkBox1.png") no-repeat center;
    background-size: cover;

</style>
