<template>
  <div class="myNavCurr">
    <span>{{subnav.num}}</span>
    <span>{{subnav.name}}</span>
  </div>
</template>

<script>
  export default {
    name: "MyNavCurr",
    props: ["subnav"]
  }
</script>

<style scoped lang="stylus">
  .myNavCurr
    font-size: .14rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  .myNavCurr span
    margin: .05rem 0;

</style>
