<template>
  <div class="iconBox" :style="columnfun(column)">
    <img :src="iconinfo.pic" alt="">
    <span>{{iconinfo.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "IconBox",
    props: ["iconinfo", "column"],
    methods: {
      columnfun(i) {
        return `width:${100 / i}%`
      }
    }
  }
</script>

<style scoped lang="stylus">
  .iconBox
    /*width: .5rem;*/
    width: 20%;
    height: .65rem;
    display: flex;
    flex-direction: column;
    align-items: center;


  .iconBox img
    width: .3rem;
    height: .3rem;


  .iconBox span
    font-size: .12rem;
    color: #494949;
    margin: .05rem 0;

</style>
