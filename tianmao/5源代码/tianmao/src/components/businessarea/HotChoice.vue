<template>
  <div class="hotchoice">
    <div class="header">
      <img :src="shopinfo.header.pic" alt="">
      <div class="headerCon">
        <p class="shopName">{{shopinfo.header.shopName}}</p>
        <p class="shopPlace"><i class="iconfont icon-dingwei"></i>{{shopinfo.header.shopPlace}}</p>
      </div>
      <span class="gointo">进店</span>
    </div>
    <div class="imgbox" v-if="shopinfo.imgbox1">
      <img class="pic1" :src="shopinfo.imgbox1" alt="">
    </div>
    <div class="font1" v-if="shopinfo.font1">
      <span>{{shopinfo.font1.span}}</span>{{shopinfo.font1.timedir}}
    </div>
    <div class="imgBox2" v-if="shopinfo.imgBox2">
      <div class="subBox" v-for="(m,idx) in shopinfo.imgBox2">
        <img :src="m.pic" alt="">
        <p class="price">￥{{m.price}}</p>
        <p class="shopdir">{{m.dir}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotChoice",
    props: ["shopinfo"],

  }
</script>

<style scoped lang="stylus">
  .hotchoice
    /*width: 100%;*/
    height: 2.72rem;
    padding: 0 .1rem;
    background: #ffffff;
    border-bottom: 1px solid #e9e9e9;


  .header
    height: .85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


  .header img
    margin: 0 .1rem;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;


  .header .gointo
    width: .5rem;
    height: .19rem;
    border: 1px solid #e50017;
    font-size: .09rem;
    color: #e50017;
    text-align: center;
    line-height: .19rem;
    border-radius: .09rem;


  .header .headerCon
    flex: 1;
    height: .85rem;
    display: flex;
    flex-direction: column;
    justify-content: center;


  .shopName
    font-size: .16rem;


  .shopPlace
    font-size: .11rem;
    color: #868686;


  .shopPlace i
    font-size: .13rem;
    color: #c1c1bf;


  .imgbox .pic1
    width: 3.51rem;
    height: 1.09rem;


  .font1
    line-height: .23rem;
    font-size: .13rem;
    color: #545454;


  .font1 span
    color: red;


  .imgBox2
    display: flex;
    justify-content: space-between;


  .imgBox2 .subBox img
    width: 1.15rem;
    height: 1.15rem;


  .imgBox2 .subBox .price
    height: .3rem;
    line-height: .3rem;
    font-size: .13rem;
    text-align: center;


  .imgBox2 .subBox .shopdir
    color: #878787;
    font-size: .09rem;
    text-align: center;

</style>
