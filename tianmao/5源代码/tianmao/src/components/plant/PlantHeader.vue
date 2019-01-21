<template>
  <div class="header" :style="bgpic">
    <div class="text">理想生活分享社区</div>
    <div class="iconfontBox"><i class="iconfont icon-wode"></i><i class="iconfont icon-buoumaotubiao14"></i></div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "PlantHeader",
    props: ["headerinfo"],
    methods: {
      bgpicfun() {
        return `background:url(${this.headerinfo.pic});background-size: cover;`
      }
    },
    computed: {
      bgpic() {
        return this.bgpicfun()
      }
    },
    mounted() {
      $.ready(
        $('.scroll-container').on('scroll', function () {
          let scrollTop = document.querySelector('.scroll-container').scrollTop;
          $('.header').css({background: `rgba(255,0,0,${(scrollTop - 50) / 200})`})
        })
      )
    }
  }
</script>

<style scoped lang="stylus">
  .header
    width: 100%;
    height: .45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 100;
    /*transition: all 1s;*/


  .header .text
    font-size: .21rem;
    font-weight: 900;
    text-indent: .1rem;
    color: #ffffff;


  .header .iconfontBox
    display: flex;
    justify-content: space-around;
    align-items: center;


  .header .iconfontBox i
    margin: 0 .1rem;
    font-size: .2rem;
    color: #ffffff;

</style>
