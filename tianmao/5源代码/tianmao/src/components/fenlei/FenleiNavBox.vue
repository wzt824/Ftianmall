<template>
  <div ref="navBox" class="navBox" @click="changetype1(keys)">{{pro.type1}}</div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "FenleiNavBox",
    props: ["pro", "keys", "changetype1"],
    mounted() {
      const that = this;
      if (this.$refs.navBox.innerHTML.length >= 4) {
        let htmlText = '';
        for (let i = 0; i < this.$refs.navBox.innerHTML.length; i++) {
          htmlText += this.$refs.navBox.innerHTML[i]
          if (i == parseInt(this.$refs.navBox.innerHTML.length / 2 - 1)) {
            htmlText += '<br/>'
          }
        }
        this.$refs.navBox.innerHTML = htmlText
      }

      $.ready(
        $('.navBox').on('click', function () {
          $(this).css({background: '#fff', borderLeftColor: 'red'})
            .siblings().css({background: '#f7f7f7', borderLeftColor: 'transparent'})
        })
      )

    }
  }
</script>

<style scoped lang="stylus">
  .navBox
    width: .7rem;
    border-left: 2px solid transparent;
    height: .6rem;
    margin: 1px 0;
    background: #f7f7f7;
    box-sizing: border-box;
    font-size: .13rem;
    color: #232323;
    display: flex;
    align-items: center;
    justify-content: center;


  .navBox:first-of-type
    border-left-color: red;
    background: #fff;

</style>
