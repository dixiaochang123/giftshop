<template>
    <div>
        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <el-breadcrumb separator="/" style="height: 50px;line-height: 50px;">
                    <el-breadcrumb-item >首页</el-breadcrumb-item>
                    <el-breadcrumb-item>装饰摆件</el-breadcrumb-item>
                    <el-breadcrumb-item>干花花艺</el-breadcrumb-item>
                    <el-breadcrumb-item>【xx】非洲菊仿真干花</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div style="height:92px;"></div>
        <div class="container">
            <!--大图 及 商品介绍-->
            <div class="proDet">
                <div class="pro_big">
                    <img :src="bigImg" alt="">
                    <div class="tro_list">
                            <span v-for="item in smallImg" :key="item.id" >
                                <a href="#" :title="item.title">
                                    <img :src="item.url" @mouseenter="getIndex(item.url)">
                                </a>
                            </span>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="intro">
                    <div class="intro_title">
                        <h3>【最家】非洲菊仿真花干花</h3>
                        <h5>【破损补寄】【适合放室内、卧室、书房、餐桌、办公室、客厅、电视柜等地方】【无理由退换货】【包邮】【白色现代简约花瓶】</h5>
                        <!-- <h3 class="price">&yen;17.96</h3> -->
                        <h5 class="reference-price">参考价格</h5>
                    </div>
                    <div class="intro-price">
                        <div class="intro-price-item" v-for="(item, index) in priceList" :key="index">
                            <div class="product-number">{{item.number}}个</div>
                            <div class="Split-line"><span></span></div>
                            <div class="product-price">￥{{item.price}}</div>
                        </div>
                    </div>
                    <div class="proIntro">
                        <h5 class="reference-price">规格</h5>
                        <div class="proIntro-material">
                            <span class="type-name">材质</span>
                            <div class="material-item-box">
                                <span v-for="(item, index) in materialList" @click="handleMaterial(item,index)" :key="index" class="material-item" :class="{'activeItem': item.id === materialActive}">{{item.name}}</span>
                            </div>
                        </div>
                        <div class="proIntro-size">
                            <span class="type-name">尺寸</span>
                            <div class="size-item-box">
                                <span v-for="(item, index) in sizeList" :key="index" @click="handleSize(item,index)"  class="size-item" :class="{'activeItem' : item.id === sizeActive}">{{item.name}}</span>
                            </div>
                        </div>
                        <div class="workmanship">
                            <span class="type-name" style="margin-left:0">工艺</span>
                            <div class="workmanship-box">
                                <span class="workmanship-box-item" v-for="item in smallImg" @click="handleWorkmanship(item,index)" :key="item.index" :class="{'activeItem' : item.index === workmanshipActive}">
                                    <a href="#" :title="item.title">
                                        <img :src="item.url" @click="getIndex(item.url)">
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="proIntro-packing">
                            <span class="type-name">包装</span>
                            <div class="packing-item-box">
                                <span v-for="(item, index) in packingList" :key="index" class="packing-item" @click="handlePacking(item,index)" :class="{'activeItem' : item.id === packingActive}">{{item.name}}</span>
                            </div>
                        </div>
                        <!-- <p>数量 库存数量<span>1456</span>件</p> -->
                        
                    </div>
                    <div class="proIntro-checking">
                        <span class="reference-price">核价</span>
                        <div class="checking-number">
                            <span class="type-name">数量</span>
                            <div class="checking-number-box">
                                <el-input-number v-model="num" @change="handleChange"  :min="100"  size="mini" label="描述文字"></el-input-number>
                            </div>
                        </div>
                        <div class="Unit-Price">
                            <span class="type-name">实际单价</span>
                            <div class="Unit-Price-box">
                                <span>￥{{unitPrice}}</span>
                            </div>
                        </div>
                        <div class="Total-price">
                            <span class="type-name">总价</span>
                            <div class="Total-Price-box">
                                <span>￥{{totalPrice}}</span>
                            </div>
                        </div>
                        <div class="Production-time">
                            <span class="type-name">生产时间</span>
                            <div class="Production-time-box">
                                <span>付款后15个工作日内完成生产</span>
                            </div>
                        </div>
                    </div>
                    <div class="proIntro-Design">
                        <span class="reference-price">我的设计</span>
                        <span class="workmanship-box-item" style="margin-top:30px;" v-for="item in smallImg"  :key="item.index">
                                    <a href="#" :title="item.title">
                                        <img :src="item.url">
                                    </a>
                                    <span class="img-item-desc">一二三</span>
                        </span>
                    </div>
                    <div class="add-cart">
                        <div v-if="false" class="add-Design">加入“我的设计”并联系客服定制方案</div>
                        <div class="continue-Design" @click="openOnlineBox">
                            <span>
                                继续设计
                            </span>
                        </div>
                        <div class="add-cart-box">
                            <span style="padding-right:10px;"><el-button>立即下单</el-button></span>
                            <span style="padding-right:10px;"><el-button icon="el-icon-shopping-cart-2">加入购物车</el-button></span>
                            <span ><el-button>打样</el-button></span>
                        </div>
                        <!-- <span style="padding-right:30px;"><el-button>加入购物车</el-button></span>
                        <span style="padding-left: 30px;"><el-button type="danger">立即购买</el-button></span> -->
                    </div>

                </div>
            </div>

            <div class="pro_information">
                <div class="comment">
                    <div class="tab">
                        <el-tabs type="card" v-model="activeName">
                            <el-tab-pane label="商品介绍" name="first">
                                <div class="product-data">
                                    <div class="product-data-box">
                                        <h5>长度 <span>20cm</span></h5>
                                        <h5>宽度 <span>20cm</span></h5>
                                        <h5>厚度 <span>5cm</span></h5>
                                        <h5>材质 <span>玻璃</span></h5>
                                        <h5>工艺 <span>玻璃</span></h5>
                                    </div>
                                </div>
                                <div class="pro_img" v-for="item in 3" :key="item.id">
                                    <img src="../../../assets/img/shoppingMall/detail/det07.jpg" alt="">
                                </div>
                            </el-tab-pane>
                            <!-- <el-tab-pane label="相关评论" name="second">
                                <div class="per" v-for="item in 4" :key="item.id">
                                    <div class="per_img">
                                        <img src="../../../assets/img/shoppingMall/detail/per01.jpg" alt="">
                                    </div>

                                    <div class="perR">
                                        <p class="perR_name">馨***呀</p>
                                        <p class="perR_comment">不好意思评价晚了，产品很好，价格比玻璃品便宜，没有我担心的杂色，发货快，包装好，全5分!不好意思评价晚了，产品很好，价格比玻璃品便宜，没有我担心的杂色，发货快，包装好，全5分</p>
                                        <p class="perR_img">
                                            <span v-for="item in 5" :key="item.id">
                                                <img src="../../../assets/img/shoppingMall/detail/eva01.jpg" alt="">
                                            </span>
                                        </p>
                                        <p class="perR_date">
                                            2016年12月27日08:31
                                            <span>颜色分类：大中小三件套（不含花）</span>
                                        </p>
                                    </div>
                                </div>
                            </el-tab-pane> -->
                        </el-tabs>
                    </div>
                </div>
                <div class="recommended" v-if="false">
                    <p class="recommended_title">
                        为你推荐
                    </p>
                    <div class="recommended_list">
                        <div class="recommended_item" v-for="i in 5" :key="i.id">
                            <div class="item_img">
                                <img src="../../../assets/img/shoppingMall/detail/see01.jpg" alt="">
                            </div>
                            <p>【最家】复古文艺风玻璃花瓶</p>
                            <p class="item_price">&yen;193.20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <onlineDesign :dialogOnlineDesign="dialogOnlineDesign"></onlineDesign>
    </div>
</template>

<script>
    import onlineDesign from '@/components/onlineDesign/onlineDesign'
    export default {
        name: "detail",
        components: {
            onlineDesign
        },
        data(){
            return{
                dialogOnlineDesign:false,
                bigImg:require('../../../assets/img/shoppingMall/detail/proBig02.jpg'),
                num: 1,
                activeName:'first',
                unitPrice: 30,
                totalPrice: 3000,
                materialActive: null,
                workmanshipActive: null,
                sizeActive: null,
                packingActive: null,
                priceList: [
                    {
                        number: '100~200',
                        price: '30.00'
                    },
                    {
                        number: '100~200',
                        price: '30.00'
                    },
                    {
                        number: '100~200',
                        price: '30.00'
                    },
                    {
                        number: '100~200',
                        price: '30.00'
                    },
                    {
                        number: '100~200',
                        price: '30.00'
                    }
                ],
                materialList:[
                    {
                      id: 1,
                      name: '280g精硫棉'
                    },
                    {
                        id: 2,
                        name: '320g精硫棉'
                    }
                ],
                sizeList: [
                    {
                        name: '10 × 10cm',
                        id: 1,
                    },
                    {
                        name: '20 × 20cm',
                        id: 2,
                    },
                    {
                        name: '20 × 20cm',
                        id: 3,
                    }
                ],
                packingList: [
                    {
                        name: '纸盒',
                        id: 1
                    },
                    {
                        name: 'PP袋',
                        id: 2
                    },
                    {
                        name: '定制',
                        id: 3
                    }
                ],
                smallImg:[
                    {
                        index:1,
                        url:require('../../../assets/img/shoppingMall/detail/pro01.jpg'),
                        title:'【1111】,xxxxxxxxxxx'
                    },
                    {
                        index:2,
                        url:require('../../../assets/img/shoppingMall/detail/pro02.jpg'),
                        title:'【2222】,xxxxxxxxxxx'
                    },
                    {
                        index:3,
                        url:require('../../../assets/img/shoppingMall/detail/pro03.jpg'),
                        title:'【3333】,xxxxxxxxxxx'
                    },
                    {
                        index:4,
                        url:require('../../../assets/img/shoppingMall/detail/pro04.jpg'),
                        title:'【4444】,xxxxxxxxxxx'
                    },
                ],
            }
        },
        methods:{
            //判断选中数量是否>5,超过5就提示
            handleChange(value) {
                console.log(value)
                if(value >= 100 && value <= 200){
                    this.unitPrice = 30
                }else if(value >= 201 && value <= 500) {
                    this.unitPrice = 29
                }else if(value >= 501 && value <= 1000) {
                    this.unitPrice = 28
                }else if(value >= 1001 && value <= 5000) {
                    this.unitPrice = 27
                }else if(value >= 5001) {
                    this.unitPrice = 26
                }
                this.totalPrice = this.unitPrice * value
                // if (value == 5){
                //     this.$notify({
                //         title: '温馨提示',
                //         message: '购买数量最多为5件',
                //         type: 'warning'
                //     });
                // }
            },
            handleMaterial(item,index) {
                console.log(this.materialActive)
                this.materialActive = item.id
            },
            handleSize(item,index) {
                this.sizeActive = item.id
            },
            handleWorkmanship(item,index) {
                this.workmanshipActive = item.index
            },
            handlePacking(item,index) {
                this.packingActive = item.id
            },
            //点击小图片时将图片路径赋值给大图
            getIndex(smallImg){
                this.bigImg = smallImg;
            },
            openOnlineBox() {
                this.dialogOnlineDesign = true
            },
            closeOnlineBox() {
                this.dialogOnlineDesign = false
            },
            
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/shoppingMall/detail";
  .reference-price{
      margin-top:20px;
      display:inline-block;
      color: #2D2E33 !important;
      font-weight: 700 !important;
    //   font-size:20px;
  }
  .intro_title{
      width: 100%;
  }
  .intro-price{
      height: 105px;
      background: #F6F9FE;
      display:flex;
    //   justify-content: space-around;
      align-items: center;
      .intro-price-item{
          display:inline-block;
          text-align: center;
          width: 20%;
          position: relative;
      }
  }
  .product-number{
      color: #73757D;
      font-size: 14px;
  }
  .img-item-desc{
      display:block;
      position:absolute;
      bottom: 5px;
      width:100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background: rgba(0,0,0,0.2);
      color: #fff;
      text-align: center;
  }
  .product-price{
      color: #7395DC;
      font-size: 16px;
  }
  .Split-line{
      margin: 0 auto;
      display: inline-block;
      margin: 10px 0;
      position:relative;
      z-index: 10;
      span{
        display:inline-block;
        width:5px;
        height: 5px;
        border-radius: 50%;
        background:#7395DC;
      }
    //   width:5px;
      padding-right:calc(50% - 2.5px);
      padding-left:calc(50% - 2.5px);
  }
  .type-name{
      color: #73757D;
      font-size:12px;
      vertical-align: middle;
      margin-right: 60px;
      padding: 0 !important;
  }
  .intro-price-item::after{
      content: '';
      display:block;
      width: calc(50% - 2.5px);
      height: 0px;
      position: absolute;
      top: 50%;
      right: 0;
      margin-left: 5px;
    //   margin-top:2px;
      border-bottom:1px solid #E9EEF7;
  }
  .intro-price-item::before{
      content: '';
      display:block;
      width: calc(50% - 2.5px);
      height: 0px;
      position: absolute;
      top: 50%;
      left: 0;
      margin-left: 5px;
    //   margin-top:2px;
      border-bottom:1px solid #E9EEF7;
  }
 .intro-price-item:first-child::before{
      content: '';
      display:none;
  }
  .reference-price::after{
      content: '';
      display:inline-block;
      width: 380px;
      margin-left: 20px;
      height: 0;
      vertical-align: middle;
      border-bottom: 1px solid #E9EEF7;
  }
  .intro-price-item:last-child::after{
      content: '';
      display:none;
  }
  .material-item-box{
    display:inline-block;
    .material-item{
        cursor: pointer;
        display:inline-block;
        border-radius: 4px;
        border: 1px solid #BCBEC6;
        padding: 9px 22px;
        font-size: 12px;
        color: #2D2E33;
        margin-right: 20px;
    }
  }
  .size-item-box{
    margin-top:30px;
    display:inline-block;
    .size-item{
        cursor: pointer;
        display:inline-block;
        border-radius: 4px;
        border: 1px solid #BCBEC6;
        padding: 9px 22px;
        font-size: 12px;
        color: #2D2E33;
        margin-right: 20px;
    }
  }
  .packing-item-box{
      margin-top:30px;
    display:inline-block;
    .packing-item{
        cursor: pointer;
        display:inline-block;
        border-radius: 4px;
        border: 1px solid #BCBEC6;
        padding: 9px 22px;
        font-size: 12px;
        color: #2D2E33;
        margin-right: 20px;
    }
  }
  .workmanship{
      margin-top: 30px;
  }
  .workmanship-box{
      display:inline-block;
      padding-left: 5px;
      vertical-align: middle;
      margin-left:80px;
  }
.workmanship-box-item{
    width: 120px;
    display: inline-block;
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
    margin-right: 20px;
    img{
        width: 100%;
        height:100%;
    }
}
  .Unit-Price{
      margin-top:30px;
      .type-name{
          margin-right: 40px;
      }
      .Unit-Price-box{
          display:inline-block;
      }
  }
  .Total-price{
      margin-top:30px;
      .Total-Price-box{
          display:inline-block;
      }
  }
  .checking-number{
      margin-top:30px;
      .checking-number-box{
          display:inline-block;
      }
  }
  .Production-time{
      margin-top:20px;
      margin-bottom:30px;
      .type-name{
          margin-right: 40px;
      }
      .Production-time-box{
          display:inline-block;
          color:#7395DC;
          font-size: 12px;
      }
  }
  .proIntro-checking{
    //   border-bottom: 1px solid #E9EEF7;
      margin-bottom: 30px;
  }
  .proIntro-Design{
      border-bottom: 1px solid #E9EEF7;
      margin-bottom: 30px;
  }
  .add-cart{
    //   width:300px;
    display:inline-block;
    .add-Design{
        margin-bottom:10px;
        padding: 8px 0;
        text-align: center;
        cursor: pointer;
        border: 1px solid #DCDFE6;
        border-radius: 24px;
        font-size:14px;
        color: #606266;
    }
    .add-Design:hover{
        border:1px solid #FF946B;
        color:#FF946B
    }
    .continue-Design{
        margin-bottom:10px;
        font-size:14px;
        width: 100%;
        text-align: center;
        cursor: pointer;
        border-radius: 32px;
        // border: 3px solid;
        padding: 8px 0;
        font-size:14px;
        color: #606266;
        padding:2px;
        background-image: linear-gradient(225deg, rgba(170, 235, 157, 1), rgba(115, 163, 223, 1), rgba(145, 133, 212, 1), rgba(245, 113, 98, 1), rgba(253, 220, 93, 1));
        span{
            padding: 8px 0;
            width:calc(100% - 4px);
            height:calc(100% - 4px);
            margin: 0 auto;
            border-radius: 26px;
            display: block;
            background: #fff;
        }
    }
  }
  .product-data{
      border-bottom: 1px solid #DCDFE6;
      padding: 30px 0 10px 0;
      margin-bottom: 50px;
      .product-data-box{
        display:flex;
        flex-wrap:wrap;
        width: 360px;
        >h5{
          color:#BCBEC6;
          font-size:12px;
          display: inline-block;
          margin-right: 50px;
          margin-bottom: 20px;
          span{
              color:#2D2E33;
              margin-left:10px;
          }
      }
  }
 }
     .activeItem{
      color:#FF946B !important;
      border:1px solid #FF946B !important;
  }
</style>
