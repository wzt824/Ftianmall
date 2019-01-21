<template>
  <div class="loginFace">
    <img class="logo" src="/static/img/logo.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "LoginFace"
  }
</script>

<style scoped lang="stylus">
  .loginFace
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;


  .logo
    width: .65rem;
    height: .65rem;
    border-radius: 50%;

</style>
