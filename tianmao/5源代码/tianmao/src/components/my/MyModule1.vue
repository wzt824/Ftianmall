<template>
  <div class="box">
    <my-title :titleInfo="module1.title"></my-title>
    <icon-box :column="module1.column" :iconinfo="m" :key="idx" v-for="(m,idx) in module1.subArr"></icon-box>
  </div>
</template>

<script>
  import MyTitle from "./MyTitle";
  import IconBox from "./IconBox";

  export default {
    name: "MyModule1",
    props: ["module1"],
    components: {IconBox, MyTitle}
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
