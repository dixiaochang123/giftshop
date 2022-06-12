import Vue from "vue";   //后面的vue一定小写!!!
import Vuex from "vuex";  //后面的vuex一定小写!!!
 
//安装插件
Vue.use(Vuex);     //Vuex大写!!!

export default new Vuex.Store({
  state: {
    ProductNav: JSON.parse(sessionStorage.getItem('ProductNav')) ? JSON.parse(sessionStorage.getItem('ProductNav')) : null,
    isEdit:false,
  },
  getters: {
    ProductNav: state => state.ProductNav,
    isEdit: state => state.isEdit,
  },
  mutations: {
    SETPRODUCTNAV(state, data) {
      sessionStorage.setItem('ProductNav', JSON.stringify(data));
      state.ProductNav = data
    },
    SETEDIT(state, data) {
      // sessionStorage.setItem('isEdit', JSON.stringify(data));
      state.isEdit = data
    },
  },
  actions: {
    setProductNav({ commit }, data) {
      commit("SETPRODUCTNAV", data)
    },
    setEdit({ commit }, data) {
      commit("SETEDIT", data)
    },
  },
  modules: {
  }
})
