<template>
  <div class="productMainBox">
    <product-box :key="idx" v-for="(m,idx) in productlistArr" :singleInfo="m"></product-box>
    <div class="elseShow" v-if="productlistArr.length==0">该类商品还给没上线哟!</div>
  </div>
</template>

<script>
  import ProductBox from "./ProductBox";

  export default {
    name: "ProductMainBox",
    props: ["productlist"],
    components: {ProductBox},
    data() {
      return {
        productlistArr: []
      }
    },
    // created() {
    //     for (let i in this.productlist){
    //       console.info(this.productlist)
    //       if (this.productlist[i].type3==this.$route.query.menuValue){
    //         this.productlistArr.push(this.productlist[i])
    //       }
    //     }
    // },
    watch: {
      productlist: function (n, o) {
        for (let i in n) {
          // console.info(n)
          if (n[i].type3 == this.$route.query.menuValue) {
            this.productlistArr.push(n[i])
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .productMainBox
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #f4f4f4;


  .elseShow
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 100%;*/
    font-size: .18rem;
    color: #666666;

</style>
