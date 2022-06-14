import Vue from 'vue'
import Router from 'vue-router'

//商城
import ShoppingTemplate from './views/shoppingMall/template'

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
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
                },
                {
                    path: '/shoppingMall/user/userCenter2',
                    name: 'UserCenter2',
                    component: () => import("./views/shoppingMall/user/userCenter2"),
                    children:[
                        {
                            path:'/',
                            name:'userDetails',
                            component: () => import("./views/shoppingMall/user/userDetails"),
                        },
                        {
                            path:'/shoppingMall/user/userCenter2/addressDetails',
                            name:'addressDetails',
                            component: () => import("./views/shoppingMall/user/addressDetails"),
                        },
                        {
                            path:'/shoppingMall/user/userCenter2/invoiceDetails',
                            name:'invoiceDetails',
                            component: () => import("./views/shoppingMall/user/invoiceDetails"),
                        }
                    ]
                },
                {
                    path: '/shoppingMall/order',
                    name: 'Order',
                    component: () => import("./views/shoppingMall/order")
                },
                {
                    path: '/shoppingMall/mycart/mycart',
                    name: 'Mycart',
                    component: () => import("./views/shoppingMall/mycart/mycart")
                },
                {
                    path: '/shoppingMall/payment/payment',
                    name: 'Payment',
                    component: () => import("./views/shoppingMall/payment/payment")
                },
                {
                    path: '/shoppingMall/design',
                    name: 'Design',
                    component: () => import("./views/shoppingMall/design/index"),
                    redirect: "/shoppingMall/design/undetermined",
                    children: [
                        {
                            path: 'undetermined',
                            name: 'Design-undetermined',
                            component: () => import("./views/shoppingMall/design/undetermined"),
                        },
                        {
                            path: 'producing',
                            name: 'Design-producing',
                            component: () => import("./views/shoppingMall/design/producing"),
                        }
                    ]
                },
                {
				    path: '/shoppingMall/zhuanti',
				    name: 'zhuanti',
				    component: () => import("./views/shoppingMall/zhuanti")
				},
                {
				    path: '/shoppingMall/onlineDesign',
				    name: 'onlineDesign',
				    component: () => import("./views/shoppingMall/onlineDesign/onlineDesign")
				},
                {
				    path: '/shoppingMall/hotrecommend',
				    name: 'Hotrecommend',
				    component: () => import("./views/shoppingMall/hotrecommend/hotrecommend")
				},
				{
				    path: '/shoppingMall/ordercenter',
				    name: 'Ordercenter',
				    component: () => import("./views/shoppingMall/ordercenter"),
                    redirect: "/shoppingMall/ordercenter/ordercenter",
                    children: [
                        {
                            path: 'ordercenter',
                            name: 'Ordercenter',
                            component: () => import("./views/shoppingMall/ordercenter/ordercenter"),
                        },
                        {
                            path: 'proofing',
                            name: 'Proofing',
                            component: () => import("./views/shoppingMall/ordercenter/proofing"),
                        }
                    ]
				},
            ]
        },
        //登录
        {
            path:'/login',
            name:"login",
            component:() => import ('@/views/shoppingMall/account/login')
        },
        //注册
        {
            path:'/register',
            name:"register",
            component:() => import ('@/views/shoppingMall/account/register')
        },
        //找回密码
        {
            path:'/resetPassword',
            name:"resetPassword",
            component:() => import ('@/views/shoppingMall/account/resetPassword')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})
