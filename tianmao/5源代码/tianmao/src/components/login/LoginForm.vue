<template>
  <div class="loginForm">
    <input class="username" type="text" placeholder="请输入天猫账户" v-model="username">
    <input class="userpass" type="password" placeholder="请输入密码" v-model="userpass">
    <input class="loginBtn" type="button" value="登录" @click="loginfn()">
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      return {
        username: '',
        userpass: '',
        tempStatus: false
      }
    },
    methods: {
      /**
       * 监听tempStatus改变loginBtn样式的函数
       */
      tempStatusTruefn() {
        document.querySelector('.loginBtn').style.opacity = 1
      },
      tempStatusFalsefn() {
        document.querySelector('.loginBtn').style.opacity = .4
      },
      /**
       * 登录函数
       */
      loginfn() {
        if (!this.tempStatus) {
          return
        } else {
          this.$store.dispatch({type: "userlogin", data: this.username})
          localStorage.setItem("islogin", 1)
          // this.$router.push('/')
          window.history.back()
        }
      }
    },
    watch: {
      username: {
        handler() {
          if (this.username != null && this.username != '' && this.userpass != null && this.userpass != '') {
            this.tempStatus = true
          } else {
            this.tempStatus = false
          }
        },
        deep: true
      },
      userpass: {
        handler() {
          if (this.userpass != null && this.userpass != '' && this.userpass != null && this.userpass != '') {
            this.tempStatus = true
          } else {
            this.tempStatus = false
          }
        },
        deep: true
      },
      tempStatus: {
        handler(n, o) {
          if (n) {
            this.tempStatusTruefn()
          } else {
            this.tempStatusFalsefn()
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .loginForm
    padding: 0 .2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;


  .loginForm input[type=text], input[type=password]
    margin: .1rem 0;
    height: .45rem;
    outline: none;
    box-sizing: border-box;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid orange;
    caret-color: red;
    text-indent: .3rem;


  .loginForm input[type=text]::-webkit-input-placeholder
    color: #cccccc;
    text-indent: .3rem;


  .loginForm input[type=password]::-webkit-input-placeholder
    color: #cccccc;
    text-indent: .3rem;


  .loginForm input[type=button]
    box-sizing: border-box;
    height: .4rem;
    margin: .1rem 0;
    border: 0;
    outline: none;
    border-radius: .2rem;
    background: #ff0000;
    color: #ffffff;
    opacity: .4;
    transition: all .5s;

</style>
