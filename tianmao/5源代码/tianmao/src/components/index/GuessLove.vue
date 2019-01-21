<template>
  <div class="guessBox">
    <h2>
      <img :src="guesslove.h2.picL" alt="">
      <span>{{guesslove.h2.text}}</span>
      <img :src="guesslove.h2.picR" alt="">
    </h2>
    <!--<guess-product-box :key="idx" v-for="(m,idx) in guesslove.pdata" :pdata="m"></guess-product-box>-->
    <vue-waterfall-easy
      :loadingTimeOut="200"
      :mobileGap="10"
      :imgsArr="guesslove.pdata" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <div class="pname">{{props.value.pname}}</div>
        <div class="priceBox"><span class="price">￥{{props.value.price}}</span><span class="similarity">看相似</span></div>
        <div class="recommend">{{props.value.recommend}}</div>
      </div>

    </vue-waterfall-easy>
  </div>
</template>

<script>
  import imgsArr1apis from '../../apis/imgsArr1apis'
  import GuessProductBox from "./GuessProductBox";
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: "GuessLove",
    props: ["guesslove"],
    components: {GuessProductBox, vueWaterfallEasy},
    methods: {
      getData() {
        // this.imgsArr.push({"src":"/static/img/4.png","href":"javascript:0;","personface":"/static/img/face1.png","personname":"一颗鱼蛋在说话","info":"女汉子一秒变软妹子，你相信吗？快来看看！"},)

        // this.reFetchNum++;
        if (this.reFetchNum > 4) {
          console.info('刷新完毕')
          // this.$refs.waterfall.waterfallOver()
          // return
        }
        fetch("/static/json/imgsArr2.json").then(res => {
          res.json().then(data => {
            console.info(data)
            for (let i in data) {
              this.guesslove.pdata.push(data[i])
            }
          })
        })
        // imgsArr1apis.getData(data=>{
        //   for (let i in data){
        //           this.guesslove.pdata.push(data[i])
        //         }
        // })
      }

    }
  }
</script>

<style scoped lang="stylus">
  .guessBox
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: .05rem;


  .guessBox h2
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .18rem;


  .guessBox h2 img
    width: .25rem;
    height: .2rem;


  .pname
    padding: 0 .1rem;
    font-size: .15rem;
    line-height: .25rem;
    text-indent: .1rem;


  .priceBox
    /*width: 100%;*/
    padding: 0.04rem .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


  .priceBox .price
    color: red;
    font-size: .15rem;


  .priceBox .similarity
    font-size: .1rem;
    color: red;
    background: #ffe6ea;
    padding: .05rem;
    border-radius: .1rem;


  .recommend
    font-size: .11rem;
    height: .3rem;
    line-height: .3rem;
    color: #727272;
    text-indent: .16rem;
    border-top: 1px solid #e8e8e8;

</style>
