import Vue from 'vue'
import Router from 'vue-router'

//商城
import ShoppingTemplate from './views/shoppingMall/template'

Vue.use(Router)

export default new Router({
    routes: [
        //商城
        {
            path: '/',
            name: 'ShoppingTemplate',
            component: ShoppingTemplate,
            redirect: '/shoppingMall/Home',
            children:[
                {
                    path: '/shoppingMall/Home',
                    name: 'shoppingMallHome',
                    component: () => import("./views/shoppingMall/Home")
                },
                {
                    path: '/shoppingMall/detail/vase',
                    name: 'VaseDetail',
                    component: () => import("./views/shoppingMall/detail/vase")
                },
                {
                    path: '/shoppingMall/detail/detail',
                    name: 'Detail',
                    component: () => import("./views/shoppingMall/detail/detail")
                },
                {
                    path: '/shoppingMall/user/usercenter',
                    name: 'UserCenter',
                    component: () => import("./views/shoppingMall/user/usercenter")
                }
            ]
        },

    ]

})
