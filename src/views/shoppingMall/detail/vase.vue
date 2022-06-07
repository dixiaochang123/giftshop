<template>
    <div>
        <!--顶部大图-->
        <!-- <div class="top_banner">
            <img src="../../../assets/img/shoppingMall/detail/banner1.jpg" alt="">
        </div> -->
        <div style="height:92px;"></div>
        <div class="cate-filter">
            <CateFilter :categories="categories" @choose="onChooseCategory" />
        </div>
        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <el-breadcrumb separator="/" style="height: 50px;line-height: 50px;" separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 16px;color: #73757D">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{this.$route.query.activeFirstName}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{this.$route.query.activeSecondName}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{this.$route.query.activeThreeName}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <!--类型-->
        <div class="page_type">
            <div class="container">
                <div class="type_name" v-if="false">花瓶花器</div>
                <div class="type_select" v-if="false">
                    <template>
                        <el-select v-model="value" placeholder="排序方式">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </div>
                <div class="result">
                    <span>筛选</span>
                    <span class="result-num">256个内容</span>
                </div>
            </div>
        </div>

        <div class="container product-list">
            <div class="type_list">
                <div class="product-box">
                    <div class="product-item" v-for="item in 15" :key="item.id">
                        <router-link to="/shoppingMall/detail/detail">
                        <div class="product-content">
                            <div class="product-img">
                                <img style="width: 100%" src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt="">
                            </div>
                            <div class="product-desc">
                                <p>
                                    <span>¥ {{`108`}}</span>
                                    <span class="product-orderQuantity">{{orderQuantity}}起订</span>
                                </p>
                                <span>
                                    【最家】创意现代简约白瓷干花花瓶摆件
                                </span>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
                <!-- <el-row :gutter="20">
                    <el-col :span="5" v-for="item in 15" :key="item.id">
                        <div class="grid-content">
                            <div class="vase_item">
                                   <dl>
                                       <router-link to="/shoppingMall/detail/detail">
                                           <dt style="padding:10px;"><img style="width: 100%" src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt=""></dt>
                                       </router-link>
                                       <dd class="price">
                                           <span>&yen;17.90</span>
                                           <span class="button" v-if="false">
                                               <el-button size="small" type="danger" @click="showDetail">极速购买</el-button>
                                           </span>
                                           <span class="product-orderQuantity">{{orderQuantity}}起订</span>
                                       </dd>
                                       <dd class="product-name">【最家】创意现代简约白瓷干花花瓶摆件</dd>
                                   </dl>
                            </div>
                        </div>
                    </el-col>
                </el-row> -->
            </div>
            <el-pagination
            class="product-pagination"
            background
            layout="prev, pager, next,jumper"
            :total="1000">
            </el-pagination>
        </div>
        <fast-detail ref="FastDetail"></fast-detail>
    </div>
</template>

<script>
    import FastDetail from "./fastDetailModal";
    import CateFilter from "@/components/cateFilter/CateFilter";
    import Categories from "@/components/cateFilter/categories.js";
    export default {
        components: {FastDetail,CateFilter},
        data() {
            return {
                categories: Categories,
                carouselHeight: "500px",
                options: [{
                    value: '选项1',
                    label: '新品上市'
                }, {
                    value: '选项2',
                    label: '销量从高到低'
                }, {
                    value: '选项3',
                    label: '销量从低到高'
                }, {
                    value: '选项4',
                    label: '价格从低到高'
                }, {
                    value: '选项5',
                    label: '价格从高到低'
                }],
                value: '',
                orderQuantity: 100
            }
        },
        mounted() {
        },
        methods: {
        //快速浏览
            showDetail(){
                this.$refs.FastDetail.show();
            },
            // 选择了某个第三级分类
            onChooseCategory(data, index) {
            console.log(data, index);
            // alert(`您选择了分类${data.name}，三级索引${index}`);
            console.log(data,index)
            this.$router.push({
                name:'VaseDetail',
                query:{
                ...data
                }
            })
            },
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../assets/css/shoppingMall/vaseDetail";
    .product-list{
        margin-bottom: 20px;
    }
    .vase_item{
        .product-name{
            margin-left:0;
            font-size: 14px;
            font-weight: bold;
            line-height: 26px;
        }
    }
    .product-orderQuantity{
        float:right;
        font-size: 12px;
        color: #BCBEC6;
        font-weight: 500;
    }
    .product-pagination{
        // display:inline-block;
        text-align: center;
        margin: 0 auto;
        /deep/ .el-pager{
            .active{
                background-color:#FF946B !important;
            }
        }
    }
    .result{
        color: #2D2E33;
        font-size: 14px;
        font-weight: 700;
        .result-num{
            margin-left: 20px;
            color: #73757D;
            font-size: 12px;
        }
    }
    .product-box{
        margin-bottom: 30px;
        .product-item{
            width: 20%;
            padding: 10px;
            display: inline-block;
            border-radius: 12px;
            box-sizing: border-box;
            cursor: pointer;
            border: 1px solid #fff;
            transition: all 0.5s;
            .product-content{
                .product-img{
                    border-radius: 8px;
                    overflow: hidden;
                }
                .product-desc{
                    color: #2D2E33;
                    font-size: 14px;
                    font-weight: 700;
                    >span{
                        display: inline-block;
                        margin-top: 10px;
                    }
                }
            }
        }
        .product-item:hover{
            border: 1px solid #7395DC;
        }
    }
</style>
