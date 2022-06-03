<template>
    <div>
        <div class="shopping_haeder">
            <div class="container">
                <el-input placeholder="请输入内容" v-model="hotsearch" class="input-with-select">
                    <i slot="prepend" class="el-icon-close"></i>
                </el-input>
                <div class="icon-search"></div>
                <div class="icon-cat"></div>
                <div class="icon-order"></div>
                <div class="icon-design"></div>
                <div class="icon-search"></div>
                <el-button class="icon-login" plain>登陆</el-button>
                <el-button class="icon-register" type="text">注册</el-button>
                <!-- ------------- -->
                <div class="menu" v-if="false">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">
                            <router-link to="#">所有商品</router-link>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <router-link to="/shoppingMall/detail/vase">装饰摆件</router-link>
                        </el-menu-item>
                        <el-menu-item index="4">布艺软饰</el-menu-item>
                        <el-menu-item index="5">墙式挂壁</el-menu-item>
                        <el-menu-item index="6">蜡艺香薰</el-menu-item>
                        <el-menu-item index="7">创意家居</el-menu-item>
                    </el-menu>
                </div>
                <div class="login" v-if="false">
                    <div class="icon-search">
                        <!-- <img width="32px" height="32px" src="@~/img/slices/icon-search.png" alt="" sizes="" srcset=""> -->
                    </div>
                    
                   <!-- <div class="search">
                       <el-input
                               placeholder="热门搜索"
                               prefix-icon="el-icon-search"
                               v-model="hotsearch">
                       </el-input>
                   </div>

                    <div class="shopping_cart">
                        <div class="mine" @click="goUserCenter">
                            <el-avatar :size="'small'" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
                        </div>
                        <div class="cart">
                            <i class="el-icon-shopping-cart-2"></i>
                        </div>
                        <div class="erCode">3</div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
                hotsearch: '',
            };
        },
        mounted(){

        },
        methods: {
            goUserCenter(){
                this.$router.push('/shoppingMall/user/usercenter');
            }
        },

    }
</script>

<style lang="scss">
    .el-menu{
        background-color: transparent !important;
    }

    .el-avatar--small{
        margin-top: 18px!important;
    }

    .el-menu-item{
        a{
            text-decoration: none!important;
        }
    }
</style>

<style lang="scss" scoped>
    .shopping_haeder{
        width: 100%;
        height: 92px;
        line-height: 92px;
        position: fixed;
        top: 0;
        z-index: 110;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 12px;
        background-color: rgba(255, 255, 255, 0.8);
        background-color: #000;

        .container{
            // width: 1200px;
            height: 100%;
            // margin: 0 auto;
            margin-right: 65px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .input-with-select {
                width:380px;

                .el-icon-close {
                    font-size: 32px;
                }
                /deep/ .el-input-group__prepend {
                    background-color: transparent;
                    color: #FFFFFF;
                    vertical-align: middle;
                    display: table-cell;
                    position: relative;
                    border:none;
                    padding: 0 20px;
                }

                /deep/.el-input__inner {
                    background-color: transparent;
                    border:none;
                    color: #ffffff;
                    font-size: 24px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    line-height: 55px;
                }
            }
            
            .icon-search {
                width: 32px;
                height: 32px;
                margin-left: 40px;
                background: url("../../assets/img/slices/icon-search.png") no-repeat center center;
                background-size: contain;
                &:hover {
                    background: url("../../assets/img/slices/icon-search-1.png") no-repeat center center;
                }
            }
            .icon-cat {
                width: 32px;
                height: 32px;
                margin-left: 40px;
                background: url("../../assets/img/slices/icon-cat.png") no-repeat center center;
                background-size: contain;
                &:hover {
                    background: url("../../assets/img/slices/icon-cat-1.png") no-repeat center center;
                }
            }
            .icon-order {
                width: 32px;
                height: 32px;
                margin-left: 40px;
                background: url("../../assets/img/slices/icon-order.png") no-repeat center center;
                background-size: contain;
                &:hover {
                    background: url("../../assets/img/slices/icon-order-1.png") no-repeat center center;
                }
            }
            .icon-design {
                width: 32px;
                height: 32px;
                margin-left: 40px;
                background: url("../../assets/img/slices/icon-design.png") no-repeat center center;
                background-size: contain;
                &:hover {
                    background: url("../../assets/img/slices/icon-design-1.png") no-repeat center center;
                }
            }
            .icon-login {
                width: 112px;
                height: 48px;
                margin-left: 40px;
                border-radius: 6px;
                border: 2px solid #FFFFFF;
                background-color: transparent;
                font-size: 22px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;
                &:hover {
                    color: #7395DC;
                    border: 2px solid #7395DC;
                }
            }
            .icon-register {
                font-size: 22px;
                margin-left: 40px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                &:hover {
                    color: #7395DC;
                }
            }








            .menu{
                /*flex: 2;*/
            }

            .login{
                height: 100%;
                .icon-search {
                    width: 32px;
                    height: 32px;
                    background: url("../../assets/img/slices/icon-search.png") no-repeat center center;
                    background-size: contain;
                }
                .search{
                    width: 250px;
                    float: left;
                    margin-left: 60px;
                }

                .shopping_cart{
                    display: flex;
                    float: right;
                    .mine{
                        width: 60px;
                    }
                    .cart{
                        width: 60px;
                        i{
                            width: 28px;
                            height: 28px;
                            font-size: 28px;
                            padding-top: 17px;
                            font-weight: bold;
                            color: #C0C4CC;
                        }
                    }
                }
            }
        }
    }
</style>
