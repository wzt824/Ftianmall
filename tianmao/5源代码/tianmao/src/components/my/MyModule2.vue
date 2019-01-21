<template>
  <div class="box">
    <my-title :titleInfo="myWelfare.title"></my-title>
    <icon-box2 :iconInfo="m" :key="idx" v-for="(m,idx) in myWelfare.subArr"></icon-box2>
  </div>
</template>

<script>
  import MyTitle from "./MyTitle";
  import IconBox2 from "./IconBox2";

  export default {
    name: "MyModule2",
    props: ["myWelfare"],
    components: {IconBox2, MyTitle}
  }
</script>

<style scoped lang="stylus">
  .box
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 .12rem;
    background: #ffffff;
    border-bottom: 1px solid #e1e1e1;

</style>
