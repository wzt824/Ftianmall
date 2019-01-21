<template>
  <div class="shopBox">
    <shop-header v-show="shop.productArr.length>0" :shop=shop :shopkeys="shopkeys"
                 :singleShopAllCheck="singleShopAllCheck"></shop-header>
    <shop-product :product="m" :key="idx" :shopkeys="shopkeys" :productkeys="idx" v-for="(m,idx) in shop.productArr"
                  :changeProductCheck="changeProductCheck" :minusProduct="minusProduct"
                  :addProduct="addProduct"></shop-product>
  </div>
</template>

<script>
  import ShopHeader from "./ShopHeader";
  import ShopProduct from "./ShopProduct";

  export default {
    name: "ShopMoudle",
    props: ["shop", "singleShopAllCheck", "shopkeys", "changeProductCheck", "minusProduct", "addProduct"],
    components: {ShopProduct, ShopHeader},
  }
</script>

<style scoped lang="stylus">
  .shopBox
    width: 3.5rem;
    margin: .1rem auto;

</style>
