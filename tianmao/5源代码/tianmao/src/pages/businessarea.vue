<template>
  <div class="boxWrap">
    <businessarea-header></businessarea-header>
    <busineaaarea-local-place :localPlace="dataInfo.localPlace"></busineaaarea-local-place>
    <businessarea-main :businessareaData="dataInfo.businessareaData"></businessarea-main>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import businessareaapis from '../apis/businessareaapis'
  import IndexFooter from "../components/index/IndexFooter";
  import BusinessareaHeader from "../components/businessarea/BusinessareaHeader";
  import BusinessareaMain from "../components/businessarea/BusinessareaMain";
  import BusineaaareaLocalPlace from "../components/businessarea/BusineaaareaLocalPlace";

  export default {
    name: "businessarea",
    components: {BusineaaareaLocalPlace, BusinessareaMain, BusinessareaHeader, IndexFooter},
    data() {
      return {
        dataInfo: {
          "localPlace": "",
          "businessareaData": []

        }
      }
    },
    methods: {
      _getthisdata() {
        businessareaapis.getData(data => {
          this.dataInfo = data
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
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    background: url("/static/img/bg5.png") no-repeat;
    background-size: cover;
    background-attachment: fixed;


</style>
