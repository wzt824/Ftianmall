<template>
  <div class="shopBox">
    <shop-header :shop=shop></shop-header>
    <shop-product :product="m" :key="idx" :keys="idx" v-for="(m,idx) in shop.productArr"></shop-product>
  </div>
</template>

<script>
  import ShopHeader from "./ShopHeader";
  import ShopProduct from "./ShopProduct";

  export default {
    name: "ShopMoudle",
    props: ["shop"],
    components: {ShopProduct, ShopHeader}
  }
</script>

<style scoped lang="stylus">
  .shopBox
    width: 3.5rem;
    margin: .1rem auto;

</style>
