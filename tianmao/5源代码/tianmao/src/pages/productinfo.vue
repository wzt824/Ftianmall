<template>
  <div class="boxWrap">
    <productinfo-header></productinfo-header>
    <div class="main">
      <productinfo-img-show :productinfo="productinfo"></productinfo-img-show>
      <productinfo-line-show :productinfo="productinfo"></productinfo-line-show>
      <productinfo-tips></productinfo-tips>
    </div>
    <productinfo-footer :productinfo="productinfo"></productinfo-footer>
  </div>
</template>

<script>
  import productapis from '../apis/productapis';
  import ProductinfoHeader from "../components/productinfo/ProductinfoHeader";
  import ProductinfoFooter from "../components/productinfo/ProductinfoFooter";
  import ProductinfoImgShow from "../components/productinfo/ProductinfoImgShow";
  import ProductinfoLineShow from "../components/productinfo/ProductinfoLineShow";
  import ProductinfoTips from "../components/productinfo/ProductinfoTips";

  export default {
    name: "productinfo",
    components: {ProductinfoTips, ProductinfoLineShow, ProductinfoImgShow, ProductinfoFooter, ProductinfoHeader},
    data() {
      return {
        "productinfo": {},
        "info": {
          "productlist": []
        }
      }
    },
    methods: {
      _getthisdata() {
        productapis.getData(data => {
          this.info = data
        })
      }
    },
    created() {
      this._getthisdata()
    },
    watch: {
      info: function (n, o) {
        for (let i in n.productlist) {
          if (n.productlist[i].id == this.$route.query.productid) {
            this.productinfo = n.productlist[i]
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    /*background: #f7f7f7;*/
    display: flex;
    flex-direction: column;


  .main
    flex: 1;
    overflow-y: scroll;
    background: #f4f4f4;

</style>
