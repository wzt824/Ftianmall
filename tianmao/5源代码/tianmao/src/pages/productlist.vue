<template>
  <div class="boxWrap">
    <productlist-header></productlist-header>
    <product-main-box :productlist="info.productlist"></product-main-box>
  </div>
</template>

<script>
  import productapis from '../apis/productapis';
  import ProductlistHeader from "../components/productlist/ProductlistHeader";
  import ProductMainBox from "../components/productlist/ProductMainBox";

  export default {
    name: "productlist",
    components: {ProductMainBox, ProductlistHeader},
    data() {
      return {
        "info": {
          "productlist": []
        }
      }
    },
    methods: {
      _getthisdata() {
        productapis.getData(data => {
          this.info = data
          // console.info(this.info)
        })
      }
    },
    created() {
      this._getthisdata()
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    /*background: #f7f7f7;*/
    display: flex;
    flex-direction: column;

</style>
