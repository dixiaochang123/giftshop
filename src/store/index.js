import Vue from "vue";   //后面的vue一定小写!!!
import Vuex from "vuex";  //后面的vuex一定小写!!!
 
//安装插件
Vue.use(Vuex);     //Vuex大写!!!

export default new Vuex.Store({
  state: {
    Highlight: sessionStorage.getItem('Highlight') ? sessionStorage.getItem('Highlight') : 1,
  },
  getters: {
    Highlight: state => state.Highlight,
  },
  mutations: {
    SETHIGHLIGH(state, data) {
      sessionStorage.setItem('Highlight', JSON.stringify(data));
      state.Highlight = data
    },
  },
  actions: {
    sethighligh({ commit }, data) {
      commit("SETHIGHLIGH", data)
    },
  },
  modules: {
  }
})
