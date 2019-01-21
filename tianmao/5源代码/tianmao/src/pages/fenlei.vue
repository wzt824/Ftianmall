<template>
  <div class="boxWrap">
    <fenlei-header></fenlei-header>
    <fenlei-main :proArr="info.proArr"></fenlei-main>
  </div>
</template>

<script>
  import productFenleiInfoapis from '../apis/productFenleiInfoapis';
  import FenleiHeader from "../components/fenlei/FenleiHeader";
  import FenleiMain from "../components/fenlei/FenleiMain";

  export default {
    name: "fenlei",
    components: {FenleiMain, FenleiHeader},
    data() {
      return {
        "info": {
          "proArr": [
            {
              "type1": "", "subArr": []
            }
          ]
        }
      }
    },
    mounted() {
      console.info('暂时只有天猫国际=>母婴用品=>德国Aptamil 和 男装=>棉衣=>加厚棉衣 两类有商品')
    },
    methods: {
      _getthisdata() {
        productFenleiInfoapis.getData(data => {
          this.info = data
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
