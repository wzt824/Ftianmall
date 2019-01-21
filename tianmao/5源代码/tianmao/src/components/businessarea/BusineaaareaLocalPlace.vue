<template>
  <div class="localPlace">
    <div id="allmap"></div>
    <h2>{{currPlace}}</h2>
    <p>{{currTime}}</p>
  </div>
</template>

<script>
  export default {
    name: "BusineaaareaLocalPlace",
    props: ["localPlace"],
    data() {
      return {
        currPlace:"定位中...",
        currTime: "loading...",
        publicScrollTop: 0
      }
    },
    mounted(){
      const that = this
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398,39.897445);
      map.centerAndZoom(point,12);

      function myFun(result){
        var cityName = result.name;
        map.setCenter(cityName);
        that.currPlace = cityName
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
    },
    updated() {
      for (let i = 0; i < document.querySelectorAll('.slide-page').length; i++) {
        document.querySelectorAll('.slide-page')[i].addEventListener('scroll', function () {
          this.publicScrollTop = document.querySelectorAll('.slide-page')[i].scrollTop;
          document.querySelector('.localPlace').style.height = (0.85 - this.publicScrollTop / 200) + 'rem'
          document.querySelector('.localPlace').style.opacity = (0.85 - this.publicScrollTop / 200)
        })
      }
      setInterval(() => {
        this.currTime = new Date().toLocaleString()
      }, 1000)

    }
  }
</script>

<style scoped lang="stylus">
  .localPlace
    height: .85rem;
    margin-top: .45rem;
    text-align: center;


  h2
    height: .5rem;
    font-size: .28rem;
    color: #ffffff;
    line-height: .5rem;


  p
    height: .35rem;
    font-size: .09rem;
    color: #ffffff;
    line-height: .35rem;

</style>
