<template>
  <div class="myNav">
    <my-nav-curr :subnav="m" :key="idx" v-for="(m,idx) in navinfo"></my-nav-curr>
  </div>
</template>

<script>
  import MyNavCurr from "./MyNavCurr";

  export default {
    name: "MyNav",
    props: ["navinfo"],
    components: {MyNavCurr},
  }
</script>

<style scoped lang="stylus">
  .myNav
    height: .7rem;
    display: flex;
    padding: 0 .15rem;
    justify-content: space-around;

</style>
