<template>
  <div class="iconBox2">
    <div class="picBox">
      <img :src="iconInfo.pic" alt="">
    </div>
    <div class="textBox">
      <span class="name">{{iconInfo.name}}</span>
      <span class="dir">{{iconInfo.dir}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IconBox2",
    props: ["iconInfo"]
  }
</script>

<style scoped lang="stylus">
  .iconBox2
    height: .75rem;
    width: 50%;
    display: flex;
    align-items: center;


  .iconBox2 .picBox
    display: flex;
    width: .5rem;
    height: .5rem;
    margin: 0 .07rem;


  .iconBox2 .textBox
    display: flex;
    flex-direction: column;



  .iconBox2 img
    width: .5rem;
    height: .5rem;


  .iconBox2 .name
    color: #181818;
    font-size: .13rem;
    margin: .06rem 0;


  .iconBox2 .dir
    color: #898989;
    font-size: .11rem;

</style>
