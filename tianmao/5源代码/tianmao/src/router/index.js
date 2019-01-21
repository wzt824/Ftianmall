import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import plant from '../pages/plant'
import businessarea from '../pages/businessarea'
import my from '../pages/my'
import fenlei from '../pages/fenlei'
import productlist from '../pages/productlist'
import productinfo from '../pages/productinfo'
import cart from '../pages/cart'
import complexcart from '../pages/complexcart'
import login from '../pages/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',redirect:'/index'},
    {path:'/index',component:index},
    {path:'/plant',component:plant},
    {path:'/businessarea',component:businessarea},
    {path:'/my',component:my},
    {path:'/fenlei',component:fenlei},
    {path:'/productlist',component:productlist},
    {path:'/productinfo',component:productinfo},
    {path:'/cart',component:cart,
      beforeEnter: (to, from, next) => {
        if (to.path=='/cart' && localStorage.getItem("islogin")==1){
          next()
        }else if (to.path=='/cart' && localStorage.getItem("islogin")!=1) {
          next('/login')
        }
      }},
    {path:'/complexcart',component:complexcart,
      beforeEnter: (to, from, next) => {
        if (to.path=='/complexcart' && localStorage.getItem("islogin")==1){
          next()
        }else if (to.path=='/complexcart' && localStorage.getItem("islogin")!=1) {
          next('/login')
        }
      }},
    {path:'/login',component:login},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  linkActiveClass: 'focus'
})

