<template>
  <div class="footer">
    <div class="subBox1"><i class="iconfont icon-pinpaibiaoshi-aliwangwang"></i><span>客服</span></div>
    <div class="subBox1"><i class="iconfont icon-dianpu"></i><span>店铺</span></div>
    <div class="subBox1"><i class="iconfont icon-shoucang"></i><span>收藏</span></div>
    <div class="subBox2" @click="addCart(productinfo.id)">加入购物车</div>
    <div class="subBox2">立即购买</div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  export default {
    name: "ProductinfoFooter",
    props: ["productinfo"],
    methods: {
      addCart(i) {
        /**
         *加入购物车功能中的登录权限的判断
         */
        if (this.$store.getters.GETUSERNAME == '') {
          this.$router.push('/login')
          // document.querySelector('.tipBox1').innerHTML = '请登录'
          // document.querySelector('.tipBox1').style.opacity = 1
          // setTimeout(()=>{
          //   document.querySelector('.tipBox1').style.opacity = 0
          // },800)
          return
        }
        /**
         *判断如果购物车中有给商品,则数量+1
         */
        let statuskey = true
        for (let j = 0; j < this.$store.state.productId.length; j++) {
          if (this.$store.state.productId[j].id == i) {
            this.$store.dispatch({type: "addNum", data: {id: i}})
            statuskey = false
          }
        }
        /**
         * 若购物车中没该商品,则将该商品加入购物车
         */
        if (statuskey) {
          this.$store.dispatch({type: "addCart", data: {id: i, num: 1}})
        }
        /**
         * 效果
         * @type {number}
         */

        document.querySelector('.tipBox1').style.opacity = 1
        setTimeout(() => {
          document.querySelector('.tipBox1').style.opacity = 0
        }, 800)

      },

    }
  }
</script>

<style scoped lang="stylus">
  .footer
    width: 100%;
    height: .5rem;
    background: #ffffff;
    border-top: 1px solid #dedede;
    display: flex;
    justify-content: space-around;


  .footer .subBox2
    width: 30%;


  .footer .subBox1
    width: 13.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


  .footer .subBox1 i
    font-size: .2rem;
    color: #4c4c4c;


  .footer .subBox1:nth-of-type(1) i
    color: #35a6f2;


  .footer .subBox1 span
    color: #424242;
    font-size: .1rem;


  .footer .subBox1:nth-of-type(2)
    border-right: 1px solid #dedede;
    border-left: 1px solid #dedede;
    box-sizing: border-box;


  .footer .subBox2
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 900;
    font-size: .16rem;


  .footer .subBox2:nth-of-type(4)
    background: #fe9402;


  .footer .subBox2:nth-of-type(5)
    background: #fe0036;

</style>
