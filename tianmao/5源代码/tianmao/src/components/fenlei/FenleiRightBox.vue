<template>
  <div class="rightBox">
    <h3><span></span>{{proArr.type2}} <span></span></h3>
    <fenlei-right-box-sub :key="idx" v-for="(m,idx) in proArr.subArr2" :proinfo="m"></fenlei-right-box-sub>
  </div>
</template>

<script>
  import FenleiRightBoxSub from "./FenleiRightBoxSub";

  export default {
    name: "FenleiRightBox",
    props: ["proArr"],
    components: {FenleiRightBoxSub}
  }
</script>

<style scoped lang="stylus">
  .rightBox
    display: flex;
    flex-wrap: wrap;


  h3
    display: flex;
    width: 100%;
    height: .4rem;
    justify-content: center;
    align-items: center;
    font-size: .14rem;
    color: #242424;


  h3 span
    width: .25rem;
    margin: 0 .06rem;
    height: 1px;
    background: #d2d2d2;

</style>
