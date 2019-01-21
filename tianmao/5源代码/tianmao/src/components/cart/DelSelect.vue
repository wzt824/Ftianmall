<template>
  <div class="totleCount">
    <!--<van-checkbox v-model="tempStatus" @change="fun1()"></van-checkbox>-->
    <label class="checkBox" @click="changeAllStatusfun()"><input type="checkbox" :checked="allcheckStatus"/></label>
    <span class="inputDir">全选</span>
    <div class="totleBox"></div>
    <div class="totleBtn" @click="delSelect()">删除选中</div>
  </div>
</template>

<script>
  export default {
    name: "DelSelect",
    props: ["total", "allcheckStatus", "changeAllStatusfun", "info"],
    methods: {
      delSelect() {
        let idArr = []
        this.info.productlist.forEach((v, i) => {
          if (this.info.productlist[i].checkStatus) {
            idArr.push(this.info.productlist[i].id)
            this.$store.dispatch({type: "delcart", data: this.info.productlist[i].id})
          }
        })
        idArr.forEach((v, i) => {
          this.info.productlist.forEach((j, k) => {
            if (idArr[i] == this.info.productlist[k].id) {
              this.info.productlist.splice(k, 1)
            }
          })
        })

      }
    }
  }
</script>

<style scoped lang="stylus">
  .totleCount
    height: .55rem;
    background: #ffffff;
    padding: 0 .1rem;
    display: flex;
    align-items: center;


  .inputDir
    font-size: .15rem;


  .totleBox
    font-size: .15rem;
    padding: 0 .05rem;
    flex: 1;


  .totleBtn
    font-size: .16rem;
    width: .94rem;
    height: .38rem;
    border-radius: .19rem;
    background: #fe0036;
    text-align: center;
    line-height: .38rem;
    color: #ffffff;


  .checkBox
    margin: 0 .12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: .25rem;
    height: .25rem;
    border: 1px solid #cccccc;
    border-radius: 50%;



  input[type='checkbox']
    width: .25rem;
    height: .25rem;
    /*background-color: #fff;*/
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 1px solid transparent;
    outline: none;


  .checkBox input[type=checkbox]:checked
    background: url("/static/img/checkBox1.png") no-repeat center;
    background-size: cover;

</style>
