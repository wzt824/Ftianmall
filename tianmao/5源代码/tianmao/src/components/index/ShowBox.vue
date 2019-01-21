<template>
  <div class="showBox">
    <time-limit :key="idx" v-for="(m,idx) in blockinfo" :blockinfo="m"></time-limit>
    <time-limit-shop :key="idx+'s'" v-for="(m,idx) in blockinfo2" :blockinfo2="m"></time-limit-shop>
  </div>
</template>

<script>
  import TimeLimit from "./TimeLimit";
  import TimeLimitShop from "./TimeLimitShop";

  export default {
    name: "ShowBox",
    props: ["blockinfo", "blockinfo2"],
    components: {TimeLimitShop, TimeLimit},

  }
</script>

<style scoped lang="stylus">
  .showBox
    margin: .06rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


</style>
