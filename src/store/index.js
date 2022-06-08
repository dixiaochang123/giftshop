import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo') : {},
    ProducNavDat:sessionStorage.getItem('ProducNavDat') ? sessionStorage.getItem('ProducNavDat') : {},
  },
  getters: {
    userInfo: state => state.userInfo,
    ProducNavDat: state => state.ProducNavDat
  },
  mutations: {
    userInfo(state, data) {
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      state.userInfo = data
    },
    ProducNav(state, data) {
      sessionStorage.setItem('ProducNavDat', JSON.stringify(data));
      state.ProducNavDat = data
    },
  },
  actions: {
    userInfo({ commit }, data) {
      commit("userInfo", data)
    },
    ProducNav({ commit }, data) {
      commit("ProducNav", data)
    }
  },
  modules: {
  }
})
