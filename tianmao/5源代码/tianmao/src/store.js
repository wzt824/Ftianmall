import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    username:'',
    productId:[],
  },
  mutations:{
    /**
     * 登录验证
     * @param state
     * @param args 传递的username
     * @constructor
     */
    INCLOGIN(state,args){
      state.username = args.data
    },
    /**
     * 加入购物车
     * @param state
     * @param args 参数格式data:{id:i,num:1}}
     * @constructor
     */
    INC(state,args){
      state.productId.push(args.data)
    },
    /**
     * 增加购物车商品的数量
     * @param state
     * @param args 参数格式data:{id:001}
     * @constructor
     */
    INCADDNUM(state,args){
      for (let i=0;i<state.productId.length;i++){
        if(state.productId[i].id==args.data.id){
          state.productId[i].num++
        }
      }
    },
    /**
     * 减少商品的数量
     * @param state
     * @param args 参数格式data:{id:001}}
     * @constructor
     */
    INCMINUS(state,args){
      for (let i=0;i<state.productId.length;i++){
        if(state.productId[i].id==args.data.id){
          state.productId[i].num--
        }
      }
    },
    /**
     * 删除商品
     * @param state
     * @param args 参数格式 data:001
     * @constructor
     */
    INCDEL(state,args){
      state.productId.forEach((v,i)=>{
        if(state.productId[i].id==args.data){
          console.info(state.productId[i].id)
          state.productId.splice(i,1)
        }
      })
    }
  },
  actions:{
    /**
     * 用户登录
     * @param store
     * @param args
     */
    userlogin(store,args){
      store.commit("INCLOGIN",args)
    },
    /**
     * 加入购物车
     * @param store
     * @param args
     */
    addCart(store,args){
      store.commit("INC",args)
    },
    /**
     * 增加购物车商品的数量
     * @param store
     * @param args
     */
    addNum(store,args){
      store.commit("INCADDNUM",args)
    },
    /**
     * 减少商品的数量
     * @param store
     * @param args
     */
    minusNum(store,args){
      store.commit("INCMINUS",args)
    },
    /**
     * 删除商品
     * @param store
     * @param args
     */
    delcart(store,args){
      store.commit("INCDEL",args)
    }
  },
  getters:{
    /**
     * 购物车信息
     * @param state
     * @returns {Array}
     * @constructor
     */
    GETPRODUCTID(state){
      return state.productId
    },
    /**
     * 向外暴露用户名
     * @param state
     * @returns {*}
     * @constructor
     */
    GETUSERNAME(state){
      return state.username
    }
  }
})
