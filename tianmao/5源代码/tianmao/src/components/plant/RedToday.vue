<template>
  <div class="redTodayBox">
    <h2 class="title">今日红人</h2>
    <div class="swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(m,idx) in redTodayInfo.picArr">
          <img class="swiper-slide-img" v-show="m.slidePic" :src="m.slidePic" alt="">
          <div class="slidehead" v-show="m.facepic">
            <img class="facepic" :src="m.facepic" alt="">
            <p class="line1">{{m.line1}}</p>
            <p class="line2">{{m.line2}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "RedToday",
    props: ["redTodayInfo"],
    updated() {
      new Swiper('.swiper-container2', {
        slidesPerView: 'auto',
        // slidesPerGroup : 1,
      })
    }
  }
</script>

<style scoped lang="stylus">
  .redTodayBox
    width: 100%;
    min-height: 1.59rem;
    background: #13120e;
    padding: .18rem 0;
    overflow: hidden;


  .redTodayBox .title
    font-size: .17rem;
    height: .32rem;
    line-height: .32rem;
    color: #ffffff;
    text-indent: .3rem;


  .swiper-slide
    width: 1.15rem;


  .swiper-slide .slidehead
    width: 1.15rem;
    height: 1.15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


  .swiper-slide .swiper-slide-img
    width: 1.15rem;
    height: 1.15rem;


  .swiper-slide:nth-of-type(2) .swiper-slide-img
    border-radius: .13rem 0 0 .13rem;


  .swiper-slide:last-of-type .swiper-slide-img
    border-radius: 0 .13rem .13rem 0;


  .swiper-slide .facepic
    width: .45rem;
    height: .45rem;
    border-radius: 50%;


  .swiper-slide .line1
    font-size: .15rem;
    color: #ffffff;


  .swiper-slide .line2
    font-size: .11rem;
    color: #f77831;

</style>
