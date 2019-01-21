<template>
  <div class="myInfo">
    <div class="faceBox">
      <div class="faceInnerBox"><img :src="userinfo.userface" alt=""></div>
    </div>
    <div class="userNameBox" @click="loginfn()">{{username}}</div>
  </div>
</template>

<script>
  export default {
    name: "MyInfo",
    props: ["userinfo"],
    data() {
      return {
        username: ''
      }
    },
    created() {
      /**
       * 判断vuex中username是否存在,若存在则读取赋值,否则显示请登录
       */
      if (this.$store.getters.GETUSERNAME != '') {
        this.username = this.$store.getters.GETUSERNAME
      } else {
        this.username = '请登录'
      }
    },
    methods: {
      /**
       * 点击事件判断username的状态,判断是否跳转登录
       */
      loginfn() {
        if (this.username == '请登录') {
          this.$router.push('/login')
        } else {
          return
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .myInfo
    margin-top: .5rem;
    height: 1rem;
    display: flex;



  .faceBox
    width: 1rem;
    display: flex;
    justify-content: flex-end;


  .faceBox .faceInnerBox
    width: .85rem;
    height: .85rem;
    border-radius: 50%;
    background: #ffffff;


  .faceBox img
    width: .85rem;
    height: .85rem;
    border-radius: 50%;


  .userNameBox
    flex: 1;
    font-size: .21rem;
    color: #ffffff;

</style>
