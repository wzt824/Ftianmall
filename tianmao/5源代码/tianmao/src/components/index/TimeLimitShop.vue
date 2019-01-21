<template>
  <div class="box2">
    <img :src="blockinfo2.pic" alt="">
    <div class="textBox" :style="bgfun()">
      <h3>{{blockinfo2.tit}}</h3>
      <p>{{blockinfo2.dir}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TimeLimitShop",
    props: ["blockinfo2"],
    methods: {
      bgfun() {
        return `background:url(${this.blockinfo2.bg}) no-repeat;background-size:cover;`
      }
    }
  }
</script>

<style scoped lang="stylus">
  .box2
    height: 1.33rem;
    width: 24%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;


  .box2 img
    width: .55rem;
    height: .55rem;
    margin: .1rem 0;


  .box2 .textBox
    width: 100%;
    flex: 1;
    color: #ffffff;
    font-size: .12rem;
    text-align: center;
    overflow: hidden;


  .box2 .textBox h3
    font-size: .13rem;
    margin: .14rem auto .03rem;


</style>
