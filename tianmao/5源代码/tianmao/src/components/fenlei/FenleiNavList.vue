<template>
  <div class="navList">
    <fenlei-nav-box v-for="(m,idx) in proArr" :key="idx" :keys="idx" :changetype1="changetype1"
                    :pro="m"></fenlei-nav-box>
  </div>
</template>

<script>
  import FenleiNavBox from "./FenleiNavBox";

  export default {
    name: "FenleiNavList",
    props: ["proArr", "changetype1"],
    components: {FenleiNavBox},
  }
</script>

<style scoped lang="stylus">
  .navList
    width: .7rem;
    overflow-y: scroll;
    /*height: 100%;*/


  .navList::-webkit-scrollbar
    display: none;

</style>
