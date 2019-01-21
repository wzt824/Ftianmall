<template>
  <div class="carkBox">
    <img :src="carkInfo.pic" alt="">
  </div>
</template>

<script>
  export default {
    name: "MyCark",
    props: ["carkInfo"]
  }
</script>

<style scoped lang="stylus">
  .carkBox
    width: 3.44rem;
    padding: .05rem 0;
    display: flex;



  .carkBox img
    width: 3.44rem;
    height: .7rem;

</style>
