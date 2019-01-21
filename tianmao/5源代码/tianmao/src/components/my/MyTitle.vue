<template>
  <h3>
    <span class="title">{{titleInfo.name}}</span>
    <span class="more" v-show="titleInfo.more">{{titleInfo.more}} <i class="iconfont icon-z043"></i></span>
  </h3>
</template>

<script>
  export default {
    name: "MyTitle",
    props: ["titleInfo"]
  }
</script>

<style scoped lang="stylus">
  h3
    height: .55rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


  h3 .title
    font-size: .18rem;
    color: #081b2a;


  h3 .more
    font-size: .12rem;
    color: #838383;

</style>
