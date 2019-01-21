<template>
  <div class="choicenesseditions">
    <h2>精选栏目</h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(m,idx) in choicenesseditionsinfo.slider"><img :src="m.pic" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "ChoicenessEditions",
    props: ["choicenesseditionsinfo"],
    mounted() {
      new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: true
      })
    }
  }
</script>

<style scoped lang="stylus">
  .choicenesseditions
    background:#fff;
    height: 3rem;
    overflow: hidden;
    margin: .1rem 0;


  .choicenesseditions h2
    height: .59rem;
    background: #ffffff;
    font-size: .16rem;
    display: flex;
    align-items: center;
    text-indent: .14rem;


  .swiper-slide
    background #ffffff
  .swiper-container
    background #ffffff
  .choicenesseditions .swiper-container .swiper-slide img
    width: 100%;

</style>
