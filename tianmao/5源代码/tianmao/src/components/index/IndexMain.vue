<template>
  <div class="main">
    <!--<pull-to >-->
    <vue-pull-refresh :on-refresh="onRefresh" >
    <index-nav :navinfo="navinfo" :picInfo="picInfo" :colorIndex="colorIndex"></index-nav>
    <index-ad-banner :picInfo="picInfo" :changei="changei"></index-ad-banner>
    <index-gif :gifinfo="gifinfo" :picInfo="picInfo" :colorIndex="colorIndex"></index-gif>
    <show-box :blockinfo="blockinfo" :blockinfo2="blockinfo2"></show-box>
    <index-rang-box :rangBox="rangBox"></index-rang-box>
    <guess-love :guesslove="guesslove"></guess-love>
    </vue-pull-refresh>
    <!--</pull-to>-->
  </div>
</template>

<script>
  import VuePullRefresh from 'vue-pull-refresh';
  import PullTo from 'vue-pull-to'
  import IndexNav from "./IndexNav";
  import IndexGif from "./IndexGif";
  import IndexAdBanner from "./IndexAdBanner";
  import ShowBox from "./ShowBox";
  import GuessLove from "./GuessLove";
  import IndexRangBox from "./IndexRangBox";

  export default {
    name: "IndexMain",
    props: ["rangBox", "guesslove", "navinfo", "imgInfo", "gifinfo", "picInfo", "blockinfo", "blockinfo2"],
    components: {VuePullRefresh,PullTo,IndexRangBox, GuessLove, ShowBox, IndexAdBanner, IndexGif, IndexNav},
    data() {
      return {
        colorIndex: 0
      }
    },
    methods: {
      onRefresh: function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1000);
        });
      },
      changei(i) {
        this.colorIndex = i
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main
    padding-top .7rem;
    flex: 1;
    overflow-y: scroll;

</style>
