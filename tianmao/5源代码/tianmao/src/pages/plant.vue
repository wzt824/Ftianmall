<template>
  <div class="boxWrap">
    <plant-header :headerinfo="info.headerinfo"></plant-header>
    <div class="main">
      <pull-to>
      <plant-banner :bannerinfo="info.bannerinfo"></plant-banner>
      <choiceness-editions :choicenesseditionsinfo="info.choicenesseditionsinfo"></choiceness-editions>
      <red-today :redTodayInfo="info.redTodayInfo"></red-today>
      <plant-find :imgsArr="info.imgsArr" :delImgsArrFun="delImgsArrFun"></plant-find>
      </pull-to>
    </div>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import PullTo from 'vue-pull-to'
  import plantapis from "../apis/plantapis";
  import IndexFooter from "../components/index/IndexFooter";
  import PlantHeader from "../components/plant/PlantHeader";
  import PlantBanner from "../components/plant/PlantBanner";
  import ChoicenessEditions from "../components/plant/ChoicenessEditions";
  import PlantFind from "../components/plant/PlantFind";
  import RedToday from "../components/plant/RedToday";

  export default {
    name: "plant",
    components: {PullTo,RedToday, PlantFind, ChoicenessEditions, PlantBanner, PlantHeader, IndexFooter},
    data() {
      return {
        "info": {
          "headerinfo": {"pic": ""},
          "bannerinfo": {"bgpic": "/static/img/b1.jpg"},
          "choicenesseditionsinfo": {
            "title": "精选栏目",
            "slider": [
              {"pic": "/static/img/1.png", "time": "今日更新"},
              {"pic": "/static/img/2.png", "time": "12:30"},
              {"pic": "/static/img/1.png", "time": "今日更新"},
              {"pic": "/static/img/2.png", "time": "12:30"}
            ]
          },
          "redTodayInfo": {},
          "imgsArr": []
        }
      }
    },
    methods: {
      /**
       * 父页面的方法删除imgsArr中的数据,通过props在子组件中调用
       * @param i 调用时传来的索引
       */
      delImgsArrFun(i) {
        this.info.imgsArr.splice(i, 1)
      },
      _getthisdata() {
        plantapis.getData(data => {
          this.info = data
        })
      }
    },
    created() {
      this._getthisdata()
    }
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    background: linear-gradient(to bottom ,#1c1352 60%,#fff 40%);
    display: flex;
    flex-direction: column;


  .main
    flex: 1;
    overflow-y: auto;

</style>
