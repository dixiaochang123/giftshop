import Vue from "vue";   //后面的vue一定小写!!!
import Vuex from "vuex";  //后面的vuex一定小写!!!
 
//安装插件
Vue.use(Vuex);     //Vuex大写!!!

export default new Vuex.Store({
  state: {
    ProductNav: JSON.parse(sessionStorage.getItem('ProductNav')) ? JSON.parse(sessionStorage.getItem('ProductNav')) : null,
    OrderInfo: JSON.parse(sessionStorage.getItem('OrderInfo')) ? JSON.parse(sessionStorage.getItem('OrderInfo')) : {},
    isEdit:false,
  },
  getters: {
    ProductNav: state => state.ProductNav,
    isEdit: state => state.isEdit,
    OrderInfo: state => state.OrderInfo,
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
    ORDERINFOSAVE(state, data) {
      sessionStorage.setItem('OrderInfo', JSON.stringify(data));
      state.OrderInfo = data
    },
  },
  actions: {
    setProductNav({ commit }, data) {
      commit("SETPRODUCTNAV", data)
    },
    setEdit({ commit }, data) {
      commit("SETEDIT", data)
    },
    OrderInfoSave({ commit }, data) {
      commit("ORDERINFOSAVE", data)
    },
  },
  modules: {
  }
})
