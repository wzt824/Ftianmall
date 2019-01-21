<template>
  <div class="cartHeader">
    <span @click="goto('/complexcart')">购物车</span>
    <span @click="changeshowValue">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: "CartHeader",
    props: ["changeshowValue", "showValue"],
    data() {
      return {
        text: "管理"
      }
    },
    methods: {
      goto(k) {
        this.$router.push(k)
      }
    },
    watch: {
      showValue: {
        handler(n, o) {
          if (n) {
            this.text = "完成"
          } else {
            this.text = "管理"
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cartHeader
    height: .5rem;
    padding: 0 .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fe0036;


  .cartHeader span
    font-size: .15rem;
    color: #ffffff;

</style>
