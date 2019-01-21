<template>
  <div class="box" @click="goto(proinfo.name)">
    <img :src="proinfo.pic" alt="">
    <h4>{{proinfo.name}}</h4>
  </div>
</template>

<script>
  export default {
    name: "FenleiRightBoxSub",
    props: ["proinfo"],
    methods: {
      goto(k) {
        this.$router.push(`/productlist?menuValue=${k}`)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .box
    height: 1rem;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;


  .box img
    width: .7rem;
    height: .7rem;


  .box h4
    height: .18rem;
    line-height: .18rem;
    font-size: .12rem;
    color: #141414;

</style>
