<template>
  <div class="boxWrap">
    <cart-header :changeshowValue="_changeshowValue" :showValue="showValue"></cart-header>
    <div class="main">
      <shop-product :key="idx" v-for="(m,idx) in info.productlist" :keys="idx" :product="m"
                    :delCart="_delCart"></shop-product>
      <cart-tip v-show="info.productlist.length==0"></cart-tip>
    </div>
    <totle-count v-show="info.productlist.length!=0 && !showValue" :total="total" :allcheckStatus="allcheck"
                 :changeAllStatusfun="_changeAllStatus"></totle-count>
    <del-select v-show="showValue && info.productlist.length!=0" :info="info" :total="total" :allcheckStatus="allcheck"
                :changeAllStatusfun="_changeAllStatus"></del-select>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import productapis from "../apis/productapis";
  import IndexFooter from "../components/index/IndexFooter";
  import CartHeader from "../components/cart/CartHeader";
  import TotleCount from "../components/cart/TotleCount";
  import ShopProduct from "../components/cart/ShopProduct";
  import CartTip from "../components/cart/CartTip";
  import DelSelect from "../components/cart/DelSelect";

  export default {
    name: "cart",
    components: {DelSelect, CartTip, ShopProduct, TotleCount, CartHeader, IndexFooter},
    data() {
      return {
        showValue: false,
        total: 0,
        allcheck: true,
        info: {
          productlist: []
        }
      }
    },
    updated() {
      if (this.info.productlist.length > 0) {
        console.info('点击管理:删除选中')
      }
    },
    methods: {
      /**
       * 点击管理状态(显示结算/删除商品)
       * @private
       */
      _changeshowValue() {
        if (this.info.productlist.length != 0) {
          this.showValue = !this.showValue
        }

      },
      /**
       * 点击减号删除商品函数
       * @param i 商品索引
       * @private
       */
      _delCart(i) {
        this.info.productlist.splice(i, 1)
      },

      _getthisdata() {
        productapis.getData(data => {
          /**
           * 把获取的数据和vuex中的数据进行匹配筛选
           */
          // this.info = data
          for (let i = 0; i < data.productlist.length; i++) {
            for (let j = 0; j < this.$store.state.productId.length; j++) {
              if (data.productlist[i].id == this.$store.state.productId[j].id) {
                // console.info(this.$store.state.productId[j].id)
                data.productlist[i].num = this.$store.state.productId[j].num
                data.productlist[i].checkStatus = true
                this.info.productlist.push(data.productlist[i])
              }
            }
          }
        })
      },
      /**
       * 计算total
       * @private
       */
      _countTotal() {
        let sum = 0;
        this.info.productlist.forEach((v, i) => {
          if (this.info.productlist[i].checkStatus) {
            sum += this.info.productlist[i].price * this.info.productlist[i].num
          }
        })
        this.total = sum;
      },
      /**
       * 通过点击全选按钮改变全选按钮的状态和子按钮的状态
       */
      _changeAllStatus() {
        if (this.allcheck) {
          // this.allcheck=false
          this.info.productlist.forEach((v, i) => {
            this.info.productlist[i].checkStatus = false
          })
        } else {
          // this.allcheck=true
          this.info.productlist.forEach((v, i) => {
            this.info.productlist[i].checkStatus = true
          })
        }
      },
      /**
       * 通过监听zi按钮状态改变全选按钮的状态
       * @private
       */
      _subChangeAllStatus() {
        let trueNum = 0;
        this.info.productlist.forEach((v, i) => {
          if (this.info.productlist[i].checkStatus) {
            trueNum++;
          }
        })
        if (trueNum == this.info.productlist.length) {
          this.allcheck = true
        } else {
          this.allcheck = false
        }
      }
    },
    created() {
      /**
       *加载数据
       */
      this._getthisdata()
    },
    watch: {
      /**
       * 监听商品列表的变化重新计算totle
       */
      info: {
        handler: function (n, o) {
          this._countTotal()
          this._subChangeAllStatus()
        },
        deep: true
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
    font-size: .18rem;
    background: #f5f5f5;

</style>
