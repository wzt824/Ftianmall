<template>
  <div class="findBox">
    <h2 class="findTitle">每日都有新发现</h2>
    <vue-waterfall-easy :enablePullDownEvent="true"
                        :loadingTimeOut="200" :linkRange="'img'" :mobileGap="10"
                        @click="clickFn"
                        :imgsArr="imgsArr" @scrollReachBottom="getData">

      <div class="img-info" slot-scope="props">
        <p class="some-info">{{props.value.info}}</p>
        <p class="some-info2">
          <img :src="props.value.personface" alt="">
          <span class="personname">{{props.value.personname}}</span>
          <i class="iconfont icon-weibiaoti--"></i>
        </p>
        <span class="some-info3">不在显示</span>
      </div>

      <div slot="waterfall-over">waterfall-over</div>
    </vue-waterfall-easy>

  </div>
</template>

<script>
  import imgsArr2apis from '../../apis/imgArr2apis'
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    name: "PlantFind",
    components: {vueWaterfallEasy},
    data() {
      return {
        reFetchNum: 0
      }
    },
    props: ["imgsArr", "delImgsArrFun"],
    methods: {
      /**
       * 获取数据更新信息
       */
      getData() {
        // this.imgsArr.push({"src":"/static/img/4.png","href":"javascript:0;","personface":"/static/img/face1.png","personname":"一颗鱼蛋在说话","info":"女汉子一秒变软妹子，你相信吗？快来看看！"},)

        this.reFetchNum++;
        if (this.reFetchNum > 4) {
          console.info(123)
          // this.$refs.waterfall.waterfallOver()
          // return
        }
        fetch("/static/json/imgsArr1.json").then(res => {
          res.json().then(data => {
            for (let i in data) {
              this.imgsArr.push(data[i])
            }
          })
        })
        // imgsArr2apis.getData(data=>{
        //   for (let i in data){
        //           this.imgsArr.push(data[i])
        //         }
        // })
      },
      clickFn(event, {index, value}) {//click事件
        // 阻止a标签跳转
        event.preventDefault()
        // 只有当点击到图片时才进行操作
        if (event.target.tagName.toLowerCase() == 'span') {
          console.log(index, value)
          this.delImgsArrFun(index)
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .findBox
    width: 100%;
    height: 100%;
    background: #ffffff;


  .findTitle
    height: .45rem;
    line-height: .45rem;
    text-indent: .15rem;
    font-size: .18rem;


  .findBox .img-info .some-info
    line-height: .19rem;
    padding: 0 .1rem;
    font-size: .12rem;


  .findBox .img-info .some-info2
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .05rem 0;


  .findBox .img-info .some-info2 img
    width: .28rem;
    height: .28rem;
    margin: 0 .03rem;


  .findBox .img-info .some-info2 .personname
    flex: 1;
    text-indent: .1rem;
    font-size: .11rem;


  .findBox .img-info .some-info2 i
    margin: 0 .03rem;


  .findBox .img-info .some-info3
    font-size: .1rem;
    display: flex;
    justify-content: center;
    padding: .1rem;
    overflow: hidden;

</style>
