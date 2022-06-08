import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ProducNavDat:sessionStorage.getItem('ProducNavDat') ? sessionStorage.getItem('ProducNavDat') : {},
  },
  getters: {
    ProducNavDat: state => state.ProducNavDat
  },
  mutations: {
    ProducNav(state, data) {
      sessionStorage.setItem('ProducNavDat', JSON.stringify(data));
      state.ProducNavDat = data
    },
  },
  actions: {
    ProducNav({ commit }, data) {
      commit("ProducNav", data)
    }
  },
  modules: {
  }
})
