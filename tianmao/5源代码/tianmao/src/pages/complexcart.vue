<template>
  <div class="boxWrap">
    <cart-header :changeshowValue="_changeshowValue" :showValue="showValue"></cart-header>
    <div class="main">
      <shop-moudle :key="idx" :shopkeys="idx" v-for="(m,idx) in shopinfo" :shop="m"
                   :singleShopAllCheck="_singleShopAllCheck" :changeProductCheck="_changeProductCheck"
                   :addProduct="_addProduct" :minusProduct="_minusProduct"></shop-moudle>
    </div>
    <totle-count v-show="!showValue && productnum" :total="total" :allTotleCheck="allTotleCheck"
                 :allShopCheckfun="_allShopCheckfun"></totle-count>
    <del-select v-show="showValue && productnum" :total="total" :shopinfo="shopinfo" :allTotleCheck="allTotleCheck"
                :allShopCheckfun="_allShopCheckfun"></del-select>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import productapis from "../apis/productapis";
  import IndexFooter from "../components/index/IndexFooter";
  import CartHeader from "../components/complexcart/CartHeader";
  import ShopMoudle from "../components/complexcart/ShopMoudle";
  import TotleCount from "../components/complexcart/TotleCount";
  import DelSelect from "../components/complexcart/DelSelect";

  export default {
    name: "cart",
    components: {DelSelect, TotleCount, ShopMoudle, CartHeader, IndexFooter},
    data() {
      return {
        "total": "0",
        "showValue": false,
        "productnum": 0,
        "allTotleCheck": true,
        "shopinfo": [],
        info: {
          productlist: []
        }
      }
    },
    methods: {
      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue() {
        // if (this.productnum) {
        this.showValue = !this.showValue
        // }
      },
      _countProductNum() {
        let num = 0
        this.shopinfo.forEach((v1, i1) => {
          v1.productArr.forEach((v2, i2) => [
            num++
          ])
        })
        this.productnum = num
        console.info(this.productnum)
      },
      /**
       *对应商品的加减
       */
      _addProduct(k, i) {
        this.shopinfo[k].productArr[i].num++;
      },
      /**
       *对应商品的加减
       */
      _minusProduct(k, i) {
        if (this.shopinfo[k].productArr[i].num <= 1) {
          return
        }
        this.shopinfo[k].productArr[i].num--;
      },
      /**
       *监听店铺状态改变全选按钮的状态
       */
      _allCheckWatch() {
        let truenum = 0;
        this.shopinfo.forEach((v, i) => {
          if (this.shopinfo[i].checkStatus) {
            truenum++;
          }
        })
        if (truenum == this.shopinfo.length) {
          this.allTotleCheck = true
        } else {
          this.allTotleCheck = false
        }
      },
      /**
       *点击全选改变店铺状态
       */
      _allShopCheckfun() {
        this.allTotleCheck = !this.allTotleCheck
        this.shopinfo.forEach((v, i) => {
          this.shopinfo[i].productArr.forEach((v2, i2) => {
            this.shopinfo[i].productArr[i2].checkStatus = this.allTotleCheck
          })
        })
      },
      /**
       *监听商品改变店铺的状态
       */
      _singleShopAllCheckWatch() {
        this.shopinfo.forEach((v, i) => {
          let truenum = 0;
          this.shopinfo[i].productArr.forEach((v2, i2) => {
            if (this.shopinfo[i].productArr[i2].checkStatus) {
              truenum++;
            }
          })
          if (truenum == this.shopinfo[i].productArr.length) {
            this.shopinfo[i].checkStatus = true
          } else {
            this.shopinfo[i].checkStatus = false
          }
        })
      },
      /**
       *点击改变单一商品的状态
       */
      _changeProductCheck(kk, jj) {
        this.shopinfo[kk].productArr[jj].checkStatus = !this.shopinfo[kk].productArr[jj].checkStatus
      },
      /**
       *点击改变单一店铺全选
       */
      _singleShopAllCheck(kk, s) {
        let sta = true;
        if (s) {
          sta = false
        } else {
          sta = true
        }
        // this.shopinfo.forEach((v,i)=>{
        //   v.checkStatus=!sta
        // })
        this.shopinfo[kk].productArr.forEach((v, i) => {
          this.shopinfo[kk].productArr[i].checkStatus = sta
        })
      },
      /**
       *计算总价
       */
      _totleCountfun() {
        let count = 0;
        this.shopinfo.forEach((v, i) => {
          this.shopinfo[i].productArr.forEach((v2, j) => {
            if (this.shopinfo[i].productArr[j].checkStatus) {
              count += this.shopinfo[i].productArr[j].price * this.shopinfo[i].productArr[j].num
            }
          })
        })
        this.total = count;
      },
      // _getthisdata(){
      //   productapis.getData(data=>{
      //     /**
      //      * 把获取的数据和vuex中的数据进行匹配筛选
      //      */
      //     for (let i=0;i<data.productlist.length;i++){
      //         for (let j=0;j<this.$store.state.productId.length;j++){
      //           if (data.productlist[i].id==this.$store.state.productId[j].id){
      //             data.productlist[i].num=this.$store.state.productId[j].num
      //             this.info.productlist.push(data.productlist[i])
      //           }
      //         }
      //     }
      //   })
      // },


    },
    created() {
      // this._getthisdata()
      fetch('/static/json/shopinfo.json').then(res => {
        res.json().then(data => {
          this.shopinfo = data
        })
      })
    },
    watch: {
      shopinfo: {
        handler(n, o) {
          this._totleCountfun()
          this._singleShopAllCheckWatch()
          this._allCheckWatch()
          this._countProductNum()
        },
        deep: true
      },
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
    font-size: .18rem;
    background: #f5f5f5;

</style>
