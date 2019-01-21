<template>
  <div class="rangBox">
    <h2 class="title">{{rangBox.title}}</h2>
    <div class="rang1">
      <div class="rang1L">
        <div class="rangbg">人气榜</div>
        <p>{{rangBox.left.name}}</p>
        <span>{{rangBox.left.dir}}</span>
      </div>
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(m,idx) in rangBox.right.pic"><img :src="m" alt=""></div>
        </div>
      </div>
    </div>

    <div class="rang2Box">
      <index-rang2 :rang2="m" :key="idx" v-for="(m,idx) in rangBox.rang2"></index-rang2>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import IndexRang2 from "./IndexRang2";

  export default {
    name: "IndexRangBox",
    props: ["rangBox"],
    components: {IndexRang2},

    updated() {
      new Swiper('.swiper-container2', {
        direction: 'vertical',
        autoplay: {
          disableOnInteraction: false
        },
        loop: true
      })
    }
  }
</script>

<style scoped lang="stylus">
  .rangBox .title
    height: .45rem;
    font-size: .18rem;
    line-height: .45rem;
    text-indent: .3rem;


  .rangBox .rang1
    height: .84rem;
    margin: .12rem;
    display: flex;
    /*background: orange;*/


  .rangBox .rang1 .rang1L
    width: 1.15rem;
    height: .84rem;
    display: flex;
    background: #f8f8f8;
    flex-direction: column;
    justify-content: center;


  .rangBox .rang1 .rang1L .rangbg
    margin: 0 .2rem;
    font-size: .11rem;
    color: #ffffff;
    text-align: center;
    width: .47rem;
    height: .22rem;
    background: url("/static/img/rbg.png");
    background-size: cover;


  .rangBox .rang1 .rang1L p
    font-size: .13rem;
    margin: .1rem 0;
    text-indent: .2rem;


  .rangBox .rang1 .rang1L span
    font-size: .12rem;
    text-indent: .2rem;
    color: #898989;


  .swiper-container2
    width: 2.35rem;
    height: .84rem;
    overflow: hidden;


  .swiper-container2 .swiper-slide
    display: flex;


  .swiper-container2 .swiper-slide img
    width: 2.35rem;


  .rang2Box
    padding: .05rem .05rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


</style>
