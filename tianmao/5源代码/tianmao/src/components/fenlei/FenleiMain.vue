<template>
  <div class="main">
    <fenlei-nav-list :proArr="proArr" :changetype1="changetype1"></fenlei-nav-list>
    <fenlei-content :proArr="proArr" :type1num="type1num"></fenlei-content>
  </div>
</template>

<script>
  import FenleiNavList from "./FenleiNavList";
  import FenleiContent from "./FenleiContent";

  export default {
    name: "FenleiMain",
    props: ["proArr"],
    components: {FenleiContent, FenleiNavList},
    data() {
      return {
        "type1num": 0
      }
    },
    methods: {
      changetype1(i) {
        this.type1num = i
        console.info(this.type1num)
      }
    },

  }
</script>

<style scoped lang="stylus">
  .main
    flex: 1;
    display: flex;
    overflow-y: hidden;

</style>
