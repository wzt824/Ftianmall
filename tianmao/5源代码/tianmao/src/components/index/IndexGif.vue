<template>
  <div class="gifBox">
    <img :src="gifinfo.imgInfo" alt="">
  </div>
</template>

<script>
  export default {
    name: "IndexGif",
    props: ["gifinfo", "colorIndex", "picInfo"],
    data() {
      return {
        currColor: 'transparent'
      }
    },
    // methods:{
    //     bgfun(){
    //       return `background:${this.currColor}`
    //     }
    // },
    // watch:{
    //     colorIndex:{
    //       handler(n,o){
    //         this.currColor = this.picInfo[n].colors
    //       },
    //       deep:true
    //     }
    // }
  }
</script>

<style scoped lang="stylus">
  .gifBox
    margin: .05rem 0;


  .gifBox img
    width: 100%;

</style>
