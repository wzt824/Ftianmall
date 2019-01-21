<template>
  <div class="imgShowBox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(m,idx) in productinfo.slideArr">
          <img :src="m" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "ProductinfoImgShow",
    props: ["productinfo"],
    updated() {
      new Swiper('.swiper-container', {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style scoped lang="stylus">
  .imgShowBox
    width: 100%;
    /*height: 3.75rem;*/


  .imgShowBox .swiper-slide img
    width: 100%;
    height: 100%;
    display: block;

</style>
