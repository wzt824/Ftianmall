<template>
    <div class="boxWrap">
      <myindex-header :selectvalue="info.header.selectvalue"></myindex-header>
      <index-main :rangBox="info.rangBox" :guesslove="info.guesslove" :blockinfo2="info.blockinfo2" :blockinfo="info.blockinfo" :navinfo="info.navinfo" :gifinfo="info.gifinfo" :picInfo="info.picInfo"></index-main>

      <index-footer></index-footer>
    </div>
</template>

<script>
    import indexapis from "../apis/indexapis";
    import MyindexHeader from "../components/index/MyindexHeader";
    import IndexMain from "../components/index/IndexMain";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "index",
      components: {IndexFooter, IndexMain, MyindexHeader},
      data(){
          return{
            "info":{
              "header":{},
              "navinfo":[
              ],
              "gifinfo":{},
              "picInfo":[],
              "blockinfo":[ ],
              "blockinfo2":[],
              "rangBox":{
                "title":"",
                "left":{"name":"","dir":""},
                "right":{"pic":[]},
                "rang2":[]
              },
              "guesslove":{
                "h2":{ },
                "pdata":[]
              }
            }
          }
      },
      methods:{
          _getthisdata(){
            indexapis.getData(data=>{
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
  /*background: #f7f7f7;*/
  display: flex;
  flex-direction: column;

</style>
