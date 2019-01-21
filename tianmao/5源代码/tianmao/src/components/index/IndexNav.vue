<template>
  <div class="nav" :style="bgfun()">
    <a v-for="(m,idx) in navinfo" @click="goto(m.text)" class="navBox" href="javascript:0;"><img :src="m.pic"
                                                                                                 alt=""><span>{{m.text}}</span></a>
  </div>
</template>

<script>
  export default {
    name: "IndexNav",
    props: ["navinfo", "colorIndex", "picInfo"],
    data() {
      return {
        currColor: 'transparent',
      }
    },
    methods: {
      goto(i) {
        if (i == '分类') {
          this.$router.push('/fenlei')
        }
      },
      bgfun() {
        return `background:${this.currColor}`
      }
    },
    updated() {
      this.currColor = this.picInfo[this.colorIndex].colors
    },
    watch: {
      colorIndex: {
        handler(n, o) {
          this.currColor = this.picInfo[n].colors
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .nav
    padding: .82rem .1rem 0.1rem;
    display: flex;
    flex-wrap: wrap;
    transition: all .8s;


  .navBox
    width: 20%;
    font-size: .1rem;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;


  .navBox img
    width: .43rem;
    height: .43rem;
    border-radius: 50%;
    margin: .07rem 0;

</style>
