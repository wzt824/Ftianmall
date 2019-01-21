<template>
  <div class="box">
    <my-title :titleInfo="tMallShopCark.title"></my-title>
    <my-cark :carkInfo="m" :key="idx" v-for="(m,idx) in tMallShopCark.subArr"></my-cark>
    <p>账户余额: ￥{{sumfun()}}</p>
  </div>
</template>

<script>
  import MyTitle from "./MyTitle";
  import MyCark from "./MyCark";

  export default {
    name: "MyModule3",
    props: ["tMallShopCark"],
    components: {MyCark, MyTitle},
    methods: {
      sumfun() {
        let sumValue = 0;
        this.tMallShopCark.subArr.forEach((a, i) => {
          sumValue += parseFloat(this.tMallShopCark.subArr[i].price)
        })
        return sumValue
      }
    },
    mounted() {
      this.sumfun()
    }
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


  .box p
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    text-indent: .1rem;
    color: #1f1f1f;
    font-size: .14rem;

</style>
