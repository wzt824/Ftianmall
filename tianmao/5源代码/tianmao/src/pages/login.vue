<template>
  <div class="boxWrap">
    <login-header></login-header>
    <login-face></login-face>
    <login-form></login-form>
  </div>
</template>

<script>
  import LoginHeader from "../components/login/LoginHeader";
  import LoginFace from "../components/login/LoginFace";
  import LoginForm from "../components/login/LoginForm";

  export default {
    name: "login",
    components: {LoginForm, LoginFace, LoginHeader}
  }
</script>

<style scoped lang="stylus">
  .boxWrap
    height: 100%;
    display: flex;
    flex-direction: column;

</style>
