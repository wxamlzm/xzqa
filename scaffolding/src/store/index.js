import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 设置网站共用的登录状态及登录用户名信息
    // 信息将在login界面传入ss
    // 通过vuex从ss中获取
    uname: sessionStorage.getItem('uname'),
    isLogin: sessionStorage.getItem('isLogin')
  },
  mutations: {
    loginOK(state, newName){
      state.isLogin = true;
      state.uname = newName
    }
  },
  actions: {
  },
  modules: {
  }
})
