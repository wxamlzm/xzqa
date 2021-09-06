import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname: sessionStorage.getItem('uname')
  },
  mutations: {
    setUname(state, uname){
      state.uname = uname;
    }
  },
  actions: {
  },
  modules: {
  }
})
