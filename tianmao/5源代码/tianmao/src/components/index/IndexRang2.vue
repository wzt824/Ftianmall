<template>
  <div class="rang2">
    <div class="rang2L">
      <span class="text1">{{rang2.text1}}</span>
      <span class="text2">{{rang2.text2}}</span>
      <span class="text3">{{rang2.text3}}</span>
    </div>
    <div class="rang2R">
      <img :src="rang2.pic" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexRang2",
    props: ["rang2"]
  }
</script>

<style scoped lang="stylus">
  .rang2
    margin: .05rem 0;
    display: flex;
    width: 1.7rem;
    height: .85rem;
    background: #f8f8f8;

  .rang2 .rang2L
    width: 1.1rem;
    height: .85rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-indent: .1rem;

  .rang2 .rang2R
    width: .6rem;
    height: .85rem;

  .rang2L .text1
    font-size: .11rem;
    color: #c08f57;

  .rang2L .text2
    font-size: .12rem;
    color: #1f1f1f;

  .rang2L .text3
    font-size: .11rem;
    color: #838383;

  .rang2R
    display: flex;

  .rang2R img
    width: 100%;
    height: 100%;

</style>
