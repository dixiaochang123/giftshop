import Vue from 'vue'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
import App from './App.vue'
import router from './router'
import store from './store'
import DevicePixelRatio from "./devicePixelRatio.js";
new DevicePixelRatio().init();
console.log('mainjs',DevicePixelRatio,new DevicePixelRatio())
//element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css';
// 去除警告
Vue.config.silent= true
//百度地图
// import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI)
// Vue.use(BaiduMap,{
//   ak:'YOU_APP_kEY'
// })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router,
    store,
}).$mount('#app')
