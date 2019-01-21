<template>
  <div class="boxWrap">
    <my-header></my-header>
    <div class="main">
      <pull-to>
      <my-info :userinfo="myInfo.userinfo"></my-info>
      <my-nav :navinfo="myInfo.navinfo"></my-nav>
      <my-module1 :module1="myInfo.myOrder"></my-module1>
      <my-module2 :myWelfare="myInfo.myWelfare"></my-module2>
      <MyModule1 :module1="myInfo.baseTools"></MyModule1>
      <my-module3 :tMallShopCark=myInfo.tMallShopCark></my-module3>
      </pull-to>
    </div>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import PullTo from 'vue-pull-to'
  import myapis from '../apis/myapis'
  import IndexFooter from "../components/index/IndexFooter";
  import MyHeader from "../components/my/MyHeader";
  import MyInfo from "../components/my/MyInfo";
  import MyNav from "../components/my/MyNav";
  import MyModule1 from "../components/my/MyModule1";
  import MyModule2 from "../components/my/MyModule2";
  import MyModule3 from "../components/my/MyModule3";

  export default {
    name: "my",
    components: {PullTo,MyModule3, MyModule2, MyModule1, MyNav, MyInfo, MyHeader, IndexFooter},
    data() {

      return {
        "myInfo": {
          "userinfo": {},
          "navinfo": [],
          "myOrder": {
            "title": {},
            "column": "5",
            "subArr": []
          },
          "baseTools": {
            "title": {},
            "column": "4",
            "subArr": []
          },
          "myWelfare": {
            "title": {},
            "subArr": []
          },
          "tMallShopCark": {
            "title": {},
            "subArr": []
          }
        }
      }
    },
    methods: {
      _getthisdata() {
        myapis.getData(data => {
          this.myInfo = data
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
    display: flex;
    flex-direction: column;
    background:#f13945 url("/static/img/bg6.jpg") no-repeat;
    background-size: 100%;


  .main
    flex: 1;
    overflow-y: scroll;

</style>
