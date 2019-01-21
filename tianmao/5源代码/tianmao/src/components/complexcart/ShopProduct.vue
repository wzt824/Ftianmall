<template>
  <div class="productBox">
    <label class="checkBox" @click="changeProductCheck(shopkeys,productkeys)"><input type="checkbox"
                                                                                     :checked="product.checkStatus"/></label>
    <img class="proimg" :src="product.pic" alt="">
    <div class="otherInfo">
      <div class="proName">{{product.name}}</div>
      <div class="countConBox">
        <span class="priceBox">￥{{product.price}}</span>
        <div class="count"><span class="minxi" @click="minusProduct(shopkeys,productkeys)">-</span><span
          class="countnum">{{product.num}}</span><span class="add" @click="addProduct(shopkeys,productkeys)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopProduct",
    props: ["product", "productkeys", "shopkeys", "changeProductCheck", "minusProduct", "addProduct"],
  }
</script>

<style scoped lang="stylus">
  .productBox
    height: 1.3rem;
    width: 3.5rem;
    background: #fafafa;
    display: flex;
    align-items: center;


  .proimg
    width: .95rem;
    height: .95rem;


  .otherInfo
    height: 1.3rem;
    flex: 1;
    padding: 0 .1rem;


  .proName
    margin: .15rem 0;
    font-size: .12rem;
    line-height: .19rem;
    height: .38rem;
    overflow: hidden;
    color: #0f181d;


  .countConBox
    display: flex;
    justify-content: space-between;


  .countConBox .priceBox
    color: #fc0027;


  .count
    width: .8rem;
    height: .2rem;
    border: 1px solid #e4e4e4;
    display: flex;


  .count span
    display: flex;
    justify-content: center;
    align-items: center;
    color: #858585;


  .count .minxi, .count .add
    width: .225rem;
    color: #cccccc;


  .countnum
    width: .35rem;
    border-left: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;



  .checkBox
    margin: 0 .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: .25rem;
    height: .25rem;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 50%;
    background: url("/static/img/checkBox2.png") no-repeat center;
    background-size: cover;



  input[type='checkbox']
    width: .25rem;
    height: .25rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 1px solid transparent;
    outline: none;


  .checkBox input[type=checkbox]:checked
    background: url("/static/img/checkBox1.png") no-repeat center;
    background-size: cover;

</style>
