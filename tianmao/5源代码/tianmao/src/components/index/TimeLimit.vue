<template>
  <div class="box1">
    <h2>{{blockinfo.h2}}</h2>
    <div class="picBox">
      <img v-for="(m,idx) in blockinfo.pic" :src="m" alt="">
    </div>
    <div class="dir">
      <span v-for="(m,idx) in blockinfo.dir">{{m}}</span>
    </div>
    <div class="dir2">
      <span v-for="(m,idx) in blockinfo.dir2">{{m}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TimeLimit",
    props: ["blockinfo"]
  }
</script>

<style scoped lang="stylus">
  .box1
    height: 1.27rem;
    width: 1.7rem;
    background: #f8f8f8;
    margin: .06rem 0;


  .box1 h2
    height: .3rem;
    font-size: .14rem;
    color: #000;
    margin-left: .16rem;
    line-height: .4rem;


  .picBox
    display: flex;
    justify-content: space-around;


  .picBox img
    width: .64rem;
    height: .68rem;


  .dir
    font-size: .08rem;
    color: #ed010f;
    display: flex;
    justify-content: space-around;


  .dir span
    border: 1px solid #ed010f;
    border-radius: .03rem;
    padding: .02rem .03rem;


  .dir2
    font-size: .08rem;
    color: #ffffff;
    display: flex;
    justify-content: space-around;


  .dir2 span
    border: 0;
    background: #c19673;
    border-radius: .03rem;
    padding: .02rem .03rem;

</style>
