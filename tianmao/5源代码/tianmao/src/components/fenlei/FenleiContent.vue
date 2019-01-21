<template>
  <div class="content">
    <fenlei-right-box v-if="proArr[type1num].subArr" v-for="(m,idx) in proArr[type1num].subArr" :proArr="m"
                      :key="idx"></fenlei-right-box>
  </div>
</template>

<script>
  import FenleiRightBox from "./FenleiRightBox";

  export default {
    name: "FenleiContent",
    props: ["proArr", "type1num"],
    components: {FenleiRightBox},

  }
</script>

<style scoped lang="stylus">
  .content
    width: 3.05rem;
    overflow-y: scroll;

</style>
