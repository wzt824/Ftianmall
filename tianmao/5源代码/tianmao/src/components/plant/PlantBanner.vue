<template>
  <div class="banner" :style="bgpicfun()">

  </div>
</template>

<script>
  export default {
    name: "PlantBanner",
    props: ["bannerinfo"],
    methods: {
      bgpicfun() {
        return `background:url(${this.bannerinfo.bgpic}) no-repeat;background-size: cover;`
      }
    },
    computed: {
      bgpic() {
        return this.bgpicfun()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    height: 2.6rem;

</style>
