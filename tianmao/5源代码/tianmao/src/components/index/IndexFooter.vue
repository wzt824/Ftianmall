<template>
  <div class="footer">
    <router-link linkActiveClass="focus" exact to="/index"><i class="iconfont icon-shouye"></i><span>精选</span>
    </router-link>
    <router-link linkActiveClass="focus" exact to="/plant"><i class="iconfont icon-icon"></i><span>种草猫</span>
    </router-link>
    <router-link linkActiveClass="focus" exact to="/businessarea"><i
      class="iconfont icon-iconfontzhizuobiaozhun023117"></i><span>逛商圈</span></router-link>
    <router-link linkActiveClass="focus" exact to="/cart"><i class="iconfont icon-gouwuche"></i><span>购物车</span>
    </router-link>
    <router-link linkActiveClass="focus" exact to="/my"><i class="iconfont icon-wode1"></i><span>我</span></router-link>
  </div>
</template>

<script>
  export default {
    name: "IndexFooter"
  }
</script>

<style scoped lang="stylus">
  .footer
    height: .5rem;
    background: #ffffff;
    display: flex;
    justify-content: space-around;


  .footer a
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;


  .footer a i
    font-size: .23rem;


  .footer a span
    font-size: .1rem;


  .focus
    color: red;
    font-size: 1rem;

</style>
