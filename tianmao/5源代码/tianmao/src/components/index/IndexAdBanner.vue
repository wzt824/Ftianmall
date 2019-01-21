<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
    <swiper-slide :key="idx" v-show="picInfo" v-for="(m,idx) in picInfo"><img class="swiper-slide" :src="m.pic" alt="">
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
  // import Swiper from 'swiper'
  export default {
    name: "IndexAdBanner",
    props: ["picInfo", "changei"],
    data() {
      const that = this
      return {
        colorIndex: 0,
        currColor: 'transparent',
        swiperOption: {
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          on: {
            slideChangeTransitionEnd: function (swiper) {
              that.changei(this.activeIndex)
            }
          }
        }
      }
    }
  }

</script>

<style scoped lang="stylus">
  .swiper-container
    /*margin: .1rem;*/
    height: 1.32rem;


  .swiper-slide
    width: 100%;


</style>
