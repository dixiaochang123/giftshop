<template>
  <div>
    <!--面包屑导航-->
    <div style="height:96px;"></div>
    <!-- <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物车</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 16px;color: #73757D">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ProductNav?ProductNav.activeFirstName : '商品详情'}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="ProductNav">{{ProductNav?ProductNav.activeSecondName : ''}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="ProductNav">{{ProductNav?ProductNav.activeThreeName : ''}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <!--大图 及 商品介绍-->
      <div class="proDet">
        <div class="pro_big">
          <div class="pro_big_right" v-show="rShow">
            <img :style="r_img" class="rightImg" :src="bigImg" alt="">
          </div>
          <img :src="bigImg" alt="">
          <!-- <img v-show="!rShow" class="zoomicon" src="../../../assets/img/slices/radus.png" alt=""> -->
          <!-- 鼠标层罩 -->
          <div v-show="topShow" class="top" :style="topStyle"></div>
          <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
          <div
            class="maskTop"
            @mouseenter="enterHandler"
            @mousemove="moveHandler"
            @mouseout="outHandler"
          ></div>
          <div class="tro_list">
            <span v-for="item in smallImg" :key="item">
              <a href="javaScript:void(0);">
                <img :src="item" @mouseenter="getIndex(item)">
              </a>
            </span>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="intro">
          <div class="intro_title">
            <h3>{{productList.name}}</h3>
            <h5>{{productList.productDescription}}</h5>
            <!-- <h3 class="price">&yen;17.96</h3> -->
            <h5 class="reference-price">
             <span>参考价格</span><span class="borderspan" style="width:520px;"></span>
              </h5>
          </div>
          <div class="intro-price">
            <div class="intro-price-item" v-for="(item) in priceList" :key="item">
              <div class="product-number">{{item.number}}个</div>
              <div class="Split-line"><span></span></div>
              <div class="product-price">￥{{item.price}}</div>
            </div>
          </div>
          <div class="proIntro">
            <h5 class="reference-price"><span>规格</span><span class="borderspan" style="width:588px;"></span></h5>
            <div class="proIntro-material">
              <span class="type-name">材质</span>
              <div class="material-item-box">
                <span v-for="(item, index) in productListMC" @click="handleMaterial(item,index)" :key="index" class="material-item" :class="{'activeItem': index === materialActive}">{{item.name}}</span>
              </div>
            </div>
            <div class="proIntro-size">
              <span class="type-name">尺寸</span>
              <div class="size-item-box">
                <span v-for="(item, index) in productListSize" :key="index" @click="handleSize(item,index)" class="size-item" :class="{'activeItem' : index === sizeActive}">{{item.name}}</span>
              </div>
            </div>
            <div class="workmanship">
              <span class="type-name" style="margin-left:0">工艺</span>
              <div class="workmanship-box">
                <span class="workmanship-box-item" v-for="(item,index) in productListCraft" @click="handleWorkmanship(item,index)" :key="item.id">
                  <img :src="item.fileName" :class="{'activeItem' : index === workmanshipActive}">
                  <div class="img-item-desc">
                    <span>{{item.name}}</span>
                  </div>
                </span>
                <!-- <span class="workmanship-box-item" v-for="item in smallImg" @click="handleWorkmanship(item,index)" :key="item.index" :class="{'activeItem' : item.index === workmanshipActive}">
                  <img :src="item.url" @click="getIndex(item.url)">
                </span> -->
              </div>
            </div>
            <div class="proIntro-packing">
              <span class="type-name">包装</span>
              <div class="packing-item-box">
                <span v-for="(item, index) in productListPackage" :key="index" class="packing-item" @click="handlePacking(item,index)" :class="{'activeItem' : index === packingActive}">{{item.name}}</span>
              </div>
            </div>
            <!-- <p>数量 库存数量<span>1456</span>件</p> -->

          </div>
          <div class="proIntro-checking">
            <span class="reference-price"><span>核价</span><span class="borderspan" style="width:588px;"></span></span>
            <div class="checking-number">
              <span class="type-name">数量</span>
              <div class="checking-number-box">
                <el-input-number size="small" :step="step" v-model="num" @change="handleChange" :min="100" label="描述文字"></el-input-number>
              </div>
              <p style="color: #73757D;">{{step}}个起订</p>
            </div>
            <div class="Unit-Price">
              <span class="type-name" style="margin-right: 50px">实际单价</span>
              <div class="Unit-Price-box">
                <span style="color:#2D2E33">￥{{unitPrice}}</span>
              </div>
            </div>
            <div class="Total-price">
              <span class="type-name">总价</span>
              <div class="Total-Price-box">
                <span>￥{{totalPrice}}</span>
              </div>
            </div>
            <div class="Production-time">
              <span class="type-name" style="margin-right: 50px">生产时间</span>
              <div class="Production-time-box">
                <span>付款后{{productList.duration}}个工作日内完成生产</span>
              </div>
            </div>
          </div>
          <!-- <div class="proIntro-Design" v-if="productList.isOnlineDesign!==0"> -->
          <div class="proIntro-Design" v-if="productOnline.length">
            <span class="reference-price">我的设计</span>
            <div class="proIntro-Design-imgs">
              <div @click="handleclickjumpOrderPage(item,index)" :class="[jumpOrderPageAcive==index ? 'active':'','workmanship-box-item']" style="margin-top:30px;" v-for="(item,index) in productOnline" :key="item.id">
                <!-- <a href="#" :title="item.title"> -->
                  <img :src="item.fileName">
                <!-- </a> -->
                <div class="img-item-desc">
                  <span>{{item.name}}</span>
                  <!-- <i style="color:#ffffff;" class="el-icon-more"></i> -->
                  <el-dropdown trigger="click" style="cursor: pointer;" @command="jumpOrderPage">
                    <i style="color:#ffffff;" class="el-icon-more"></i>
                    <el-dropdown-menu slot="dropdown" placement="bottom">
                      <el-dropdown-item icon="el-icon-edit" :command="{index:index,type:'edit',data:item}">编辑</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-delete" :command="{index:index,type:'deleted'}">删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="add-cart">
            <div v-if="productList.isOnlineDesign!==0" style="width: 498px;height: 52px;line-height: 40px;font-size: 22px;"  class="add-Design">加入“我的设计”并联系客服定制方案</div>
            <div v-else class="continue-Design" @click="openOnlineBox">
              <span>
                {{productOnline.length?'继续设计':'开始设计'}}
              </span>
            </div>
            <div class="add-cart-box">
              <span style="padding-right:10px;">
                <el-button size="medium" @click="gotoOrder(1)">立即下单</el-button>
              </span>
              <span style="padding-right:10px;">
                <el-button size="medium" icon="el-icon-shopping-cart-2" @click="gotoMycart">加入购物车</el-button>
              </span>
              <span>
                <el-button size="medium" @click="gotoOrder(0)">打样</el-button>
              </span>
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
                  <p>产品详情</p>
                  <div v-if="false" class="product-data-box">
                    <div>
                      <p class="first_p"><span>长度</span><span>20cm</span></p>
                      <p><span>材质</span><span>玻璃</span></p>
                    </div>
                    <div>
                      <p class="first_p"><span>宽度</span><span>20cm</span></p>
                      <p><span>工艺</span><span>玻璃</span></p>
                    </div>
                    <div>
                      <p class="first_p"><span>厚度</span><span>5cm</span></p>
                      <p><span>工艺</span><span>玻璃</span></p>
                    </div>
                  </div>
                </div>
                <div class="pro_img" v-for="item in smallSubImg" :key="item">
                  <img :src="item" alt="">
                </div>
              </el-tab-pane>
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
    <onlineDesign :dialogOnlineDesign="dialogOnlineDesign" :productOnlineDialogInfo="productOnlineDialogInfo"></onlineDesign>
  </div>
</template>

<script>
import { productPage,productMaterialPage,productSizePage,productCraftPage,productPackagePage,productOnlineDesign,productOrderAdd,productOnlineDesignFindTwoList } from "@/request/modules/index.js";
import { mapActions, mapGetters } from "vuex";
import onlineDesign from "@/components/onlineDesign/onlineDesign";
// import _ from "lodash";
import lodash from "lodash";
let smallImg = [
  {
    index: 1,
    url: require("../../../assets/img/shoppingMall/detail/pro01.jpg"),
    title: "【1111】,xxxxxxxxxxx",
  },
  {
    index: 2,
    url: require("../../../assets/img/shoppingMall/detail/pro02.jpg"),
    title: "【2222】,xxxxxxxxxxx",
  },
  {
    index: 3,
    url: require("../../../assets/img/shoppingMall/detail/pro03.jpg"),
    title: "【3333】,xxxxxxxxxxx",
  },
  {
    index: 4,
    url: require("../../../assets/img/shoppingMall/detail/pro04.jpg"),
    title: "【4444】,xxxxxxxxxxx",
  },
  {
    index: 5,
    url: require("../../../assets/img/shoppingMall/detail/pro03.jpg"),
    title: "【3333】,xxxxxxxxxxx",
  },
];
export default {
  name: "detail",
  components: {
    onlineDesign,
  },
  data() {
    return {
      dialogOnlineDesign: false,
      bigImg: require("../../../assets/img/shoppingMall/detail/proBig02.jpg"),
      bigImg: '',
      num: 100,
      activeName: "first",
      unitPrice: 30,
      totalPrice: 3000,
      step:100,
      materialActive: null,
      workmanshipActive: null,
      sizeActive: null,
      packingActive: null,
      priceList: [
      ],
      materialList: [
        {
          id: 1,
          name: "280g精硫棉",
        },
        {
          id: 2,
          name: "320g精硫棉",
        },
      ],
      sizeList: [
        {
          name: "10 × 10cm",
          id: 1,
        },
        {
          name: "20 × 20cm",
          id: 2,
        },
        {
          name: "20 × 20cm",
          id: 3,
        },
      ],
      packingList: [
        {
          name: "纸盒",
          id: 1,
        },
        {
          name: "PP袋",
          id: 2,
        },
        {
          name: "定制",
          id: 3,
        },
      ],
      smallImg: lodash.cloneDeep(smallImg),
      smallSubImg: lodash.cloneDeep(smallImg),
      smallImgcopy: lodash.cloneDeep(smallImg),
      // 放大镜效果
      topStyle: { transform: "" },
      r_img: {},
      topShow: false,
      rShow: false,
      jumpOrderPageAcive:0,

      productId:'',
      productList:{},
      productListMC:{},
      productListSize:{},
      productListCraft:{},
      productListPackage:{},
      productOnline:[],
      productOnlineDialogInfo:{}
    };
  },
  computed: {
    ...mapGetters(["ProductNav"]),
  },
  mounted() {
    console.log(this.ProductNav);
    this.productId = this.$route.query.id;
    this.productPage();
    this.productMaterialPage();
    this.productSizePage();
    this.productCraftPage();
    this.productPackagePage();
    this.productOnlineDesign();
  },
  methods: {
    ...mapActions(["OrderInfoSave"]),
    productPage(pageNum) {
      let data = {"data":{"id":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productPage(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            try {
              
              this.smallImg = !!data.records[0] && data.records[0].filesList[0].fileName.split(",")
              this.smallSubImg = !!data.records[0] && data.records[0].filesList[1].fileName.split(",")
              this.bigImg = !!this.smallImg && this.smallImg[0]
  
              let priceListNumber = !!data.records[0] && data.records[0].sectionNum.split("-");
              let priceListPrice = !!data.records[0] && data.records[0].sectionPrice.split("-");
              this.unitPrice = priceListPrice[0];
              this.totalPrice = this.unitPrice * this.num
              this.priceList = !!priceListNumber && priceListNumber.map((item,index)=>{
                return {
                   number: item,
                   price:  priceListPrice[index],
                }
              })
  
              this.productList = !!data.records && data.records[0];
            } catch (error) {
              
            }
          }
        })
        .catch((error) => console.log(error));
    },
    productMaterialPage(pageNum) {
      let data = {"data":{"productId":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productMaterialPage(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            let records = data.records;
            // records.name = records.name.split('+');
            this.productListMC = records;
          }
        })
        .catch((error) => console.log(error));
    },
    productSizePage(pageNum) {
      let data = {"data":{"productId":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productSizePage(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            let records = data.records;
            // console.log(records)
            // records.name = records.name.split('*');
            this.productListSize = records;
            console.log(33333333,records)
          }
        })
        .catch((error) => console.log(error));
    },
    productCraftPage(pageNum) {
      let data = {"data":{"productId":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productCraftPage(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            let records = data.records;
            this.productListCraft = records;
          }
        })
        .catch((error) => console.log(error));
    },
    productPackagePage(pageNum) {
      let data = {"data":{"productId":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productPackagePage(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            let records = data.records;
            // records.name = records.name.split('+');
            this.productListPackage = records;
          }
        })
        .catch((error) => console.log(error));
    },
    productOnlineDesign(pageNum) {
      let data = {"data":{"productId":this.productId },"pageNum":pageNum || 1,"pageSize":10}
      productOnlineDesign(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            this.productOnline = data;
            // let records = data.records[0];
            // records.name = records.name.split('+');
            // this.productListPackage = data.records[0];
            console.log(11,data,this.productOnline)
          }
        })
        .catch((error) => console.log(error));
    },
    //判断选中数量是否>5,超过5就提示
    handleChange(value) {
      console.log(value);
      this.priceList.map(item=>{
        if(value>=item.number) {
          this.unitPrice = item.price;

        }
      })
      this.totalPrice = this.unitPrice * value;
      // if (value == 5){
      //     this.$notify({
      //         title: '温馨提示',
      //         message: '购买数量最多为5件',
      //         type: 'warning'
      //     });
      // }
    },
    handleMaterial(item, index) {
      console.log(this.materialActive);
      this.materialActive = index;
    },
    handleSize(item, index) {
      this.sizeActive = index;
    },
    handleWorkmanship(item, index) {
      this.workmanshipActive = index;
      console.log(index,this.workmanshipActive)
    },
    handlePacking(item, index) {
      this.packingActive = index;
    },
    //点击小图片时将图片路径赋值给大图
    getIndex(smallImg) {
      this.bigImg = smallImg;
    },
    openOnlineBox() {
      this.productOnlineDialogInfo = this.productOnline;
      // let groupingType = !!this.productOnline?this.productOnline[this.jumpOrderPageAcive].groupingType:null;
      // if(groupingType) {

      //   this.productOnlineDesignFindTwoList(groupingType)
      // }
      this.dialogOnlineDesign = true;
    },
    closeOnlineBox() {
      this.dialogOnlineDesign = false;
      this.productOnlineDesign();
    },
    handleclickjumpOrderPage(item,index) {
      this.jumpOrderPageAcive = index;
    },
    jumpOrderPage(command) {
      console.log(command);
      if (command.type == "edit") {
        this.productOnlineDialogInfo = this.productOnline;
        console.log(this.productOnlineDialogInfo)
        this.dialogOnlineDesign = true;
      } else {
        this.$confirm("确定要删除该方案吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.smallImgcopy.splice(command.index, 1);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      }
    },
    productOnlineDesignFindTwoList(groupingType){
      productOnlineDesignFindTwoList({
        "groupingType": groupingType,
        "productId": this.productId
      }).then(res=>{
        if (code == 200) {
            console.log(data)
        }
      }).catch(error=>console.log(error))

    },
    editProgramme(data) {
      this.dialogOnlineDesign = true;
    },
    deletedProgramme(index) {
      this.$confirm("确定要删除该方案吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.smallImg.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    gotoOrder(isProofing) {
      let data = {
        "isProofing": isProofing,
        "num": this.num,
        "price": this.totalPrice,
        "productFile": this.smallImg[0],
        "productId": this.productId,
        "productName": this.productList.name,
        "unitPrice": this.unitPrice
      }
      productOrderAdd(data).then(res=>{
        let { code, data } = res.data;
          if (code == 200) {
            this.OrderInfoSave(data)
            this.$router.push({
              name:'Order',
              query:{
                id:this.$route.query.id,
                deliveryDate:isProofing==0?this.productList.duration:this.productList.proofingDuration
              }
            })
          }
      }).catch(error=>console.log(error))
    },
    gotoMycart() {
      this.$router.push({
        name:'Mycart'
      })
    },
    // 鼠标进入原图空间函数
    enterHandler() {
      // 层罩及放大空间的显示
      // this.topShow = true;
      // this.rShow = true;
    },
    // 鼠标移动函数
    moveHandler(event) {
      // 鼠标的坐标位置
      let x = event.offsetX;
      let y = event.offsetY;
      // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
      let topX = x - 166 < 0 ? 0 : x - 166;
      let topY = y - 166 < 0 ? 0 : y - 166;
      // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
      if (topX > 332) {
        topX = 332;
      }
      if (topY > 332) {
        topY = 332;
      }
      // 通过 transform 进行移动控制
      this.topStyle.transform = `translate(${topX}px,${topY}px)`;
      this.r_img.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
    },
    // 鼠标移出函数
    outHandler() {
      // 控制层罩与放大空间的隐藏
      this.topShow = false;
      this.rShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1.2) + px;
}
@import "../../../assets/css/shoppingMall/detail";
.Breadcrumb {
  width: rpx2multiple(1380);
  margin: 0 auto;
  height: rpx2multiple(120);
}
.el-breadcrumb {
  font-size: 14px;
  height: rpx2multiple(120);
  line-height: rpx2multiple(120);
}
/deep/ .el-breadcrumb__inner {
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757d;
}
/deep/ .el-breadcrumb__inner.is-link {
  font-size: rpx2multiple(28);
}
.reference-price {
  margin-top: 20px;
  display: inline-block;
  color: #2d2e33 !important;
  // font-weight: 700 !important;
  //   font-size:20px;

  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d2e33;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    white-space: nowrap;
  }
  .borderspan {
    height: 1px;
    border-bottom: 1px solid #E9EEF7;
  }

}
.intro_title {
  width: 100%;
}
.intro-price {
  height: 136px;
  background: #f6f9fe;
  display: flex;
  //   justify-content: space-around;
  align-items: center;
  .intro-price-item {
    display: inline-block;
    text-align: center;
    width: 20%;
    position: relative;
  }
}
.product-number {
  color: #73757d;
  font-size: 16px;
}
.img-item-desc {
  height: 60px;
  //  opacity: 0.9;
  // background: #e4e4e4;
  background: rgba($color: #e4e4e4, $alpha: 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0px 24px 12px 12px;
  font-size: 22px;
  display: block;
  position: absolute;
  bottom: -1px;
  width: 100%;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px !important;
}
.img-item-desc1 {
  transition: all 0.5s ease-in-out;
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
}
.product-price {
  color: #7395dc;
  font-size: 22px;
}
.Split-line {
  margin: 0 auto;
  display: inline-block;
  margin: 10px 0;
  position: relative;
  z-index: 10;
  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #7395dc;
  }
  //   width:5px;
  padding-right: calc(50% - 2.5px);
  padding-left: calc(50% - 2.5px);
}
.type-name {
  color: #73757d;
  font-size: 18px;
  vertical-align: middle;
  margin-right: 88px;
  padding: 0 !important;
  white-space: nowrap;
}
.intro-price-item::after {
  content: "";
  display: block;
  width: calc(50% - 2.5px);
  height: 0px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-left: 5px;
  //   margin-top:2px;
  border-bottom: 1px solid #e9eef7;
}
.intro-price-item::before {
  content: "";
  display: block;
  width: calc(50% - 2.5px);
  height: 0px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 5px;
  //   margin-top:2px;
  border-bottom: 1px solid #e9eef7;
}
.intro-price-item:first-child::before {
  content: "";
  display: none;
}
// .reference-price::after {
//   content: "";
//   display: inline-block;
//   width: 380px;
//   margin-left: 20px;
//   height: 0;
//   vertical-align: middle;
//   border-bottom: 1px solid #e9eef7;
// }
.intro-price-item:last-child::after {
  content: "";
  display: none;
}
.material-item-box {
  display: inline-block;
  .material-item {
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #bcbec6;
    padding: 9px 22px;
    font-size: 18px;
    color: #2d2e33;
    margin-right: 20px;
  }
}
.size-item-box {
  margin-top: 30px;
  display: inline-block;
  .size-item {
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #bcbec6;
    padding: 9px 22px;
    font-size: 18px;
    color: #2d2e33;
    margin-right: 20px;
  }
}
.packing-item-box {
  margin-top: 30px;
  display: inline-block;
  .packing-item {
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #bcbec6;
    padding: 9px 22px;
    font-size: 18px;
    color: #2d2e33;
    margin-right: 20px;
  }
}
.workmanship {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
}
.workmanship-box {
  display: inline-block;
  padding-left: 5px;
  vertical-align: middle;
}
.workmanship-box-item {
  width: rpx2multiple(216);
  height: rpx2multiple(216);
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  &.active {
    border-radius: 12px;
    border: 2px solid #FF946B;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
  &:hover {
    .img-item-desc1 {
      bottom: 0;
    }
  }
}
.Unit-Price {
  margin-top: 30px;
  .type-name {
    margin-right: 40px;
  }
  .Unit-Price-box {
    display: inline-block;
    font-size: 22px;
  }
}
.Total-price {
  margin-top: 30px;
  .Total-Price-box {
    display: inline-block;
    font-size: 32px;
  }
}
.checking-number {
  margin-top: 30px;
  display: flex;
    justify-content: space-between;
    align-items: center;
  .checking-number-box {
    display: inline-block;
    
  }
}
.Production-time {
  margin-top: 20px;
  margin-bottom: 30px;
  .type-name {
    margin-right: 40px;
  }
  .Production-time-box {
    display: inline-block;
    color: #7395dc;
    font-size: 18px;
  }
}
.proIntro-checking {
  //   border-bottom: 1px solid #E9EEF7;
  margin-bottom: 30px;
}
.proIntro-Design {
  border-bottom: 1px solid #e9eef7;
  margin-bottom: 50px;
  padding-bottom: 50px;
  .proIntro-Design-imgs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &::after {
      content: "";
      display: block;
      width: rpx2multiple(208);
      height: rpx2multiple(208);
    }
  }
  .workmanship-box-item {
    width: rpx2multiple(208);
    height: rpx2multiple(208);
    margin: 0;
  }
}
.add-cart {
  width: 100%;
  display: inline-block;
  .add-Design {
    margin-bottom: 10px;
    padding: 8px 0;
    text-align: center;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    border-radius: 24px;
    font-size: 14px;
    color: #606266;
  }
  .add-Design:hover {
    border: 1px solid #ff946b;
    color: #ff946b;
  }
  .continue-Design {
    width: 498px;
    margin-bottom: 16px;
    text-align: center;
    cursor: pointer;
    border-radius: 52px;
    // border: 3px solid;
    padding: 8px 0;
    font-size: 22px;
    color: #606266;
    padding: 2px;
    background-image: linear-gradient(
      225deg,
      rgba(170, 235, 157, 1),
      rgba(115, 163, 223, 1),
      rgba(145, 133, 212, 1),
      rgba(245, 113, 98, 1),
      rgba(253, 220, 93, 1)
    );
    span {
      padding: 8px 0;
      // width: calc(100% - 4px);
      height: 52px;
      line-height: 52px;
      margin: 0 auto;
      border-radius: 52px;
      display: block;
      background: #fff;
    }
    &:hover {
      span {
        color:#000000;
      }
    }
  }
}
.product-data {
  border-bottom: 1px solid rgba($color: #7395DC, $alpha: 0.3);
  padding: 30px 0 30px 27px;
  margin-bottom: 80px;
  .product-data-box {
    display: flex;
    justify-content: start;
    align-items: center;
    // width: 360px;
    >div {
      font-size: 18px;
      padding-right:152px;
      p {
        color: #2D2E33;
        span {
          &:first-of-type {
            display: inline-block;
            padding-right: 24px;
            color: #BCBEC6;
          }
        }
      }
      .first_p {
        padding-bottom: 24px;
      }

    }
    > h5 {
      font-size: 12px;
      display: inline-block;
      margin-right: 50px;
      margin-bottom: 20px;

      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #bcbec6;
      span {
        width: 60px;
        border:solid 1px red;
        display: inline-block;
        color: #2d2e33;
        margin-left: 10px;
      }
    }
  }
}
.activeItem {
  color: #ff946b !important;
  border: 2px solid #ff946b !important;
}
.proIntro-material {
  padding-top: 45px;
  font-size: 18px;
}
.proIntro-packing {
  padding-bottom: 57px;
}
/deep/ .el-dropdown-menu__item {
  width: 128px !important;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0px 42px 92px 0px rgba(129, 135, 150, 0.2);
  border-radius: 8px;
  border: 1px solid #f6f9fe;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757d;
}
.el-button--medium {
  font-size: 22px;
  padding: 11px 34px;
}
.add-cart-box {
  .el-button:hover {
    color: #ff946b;
    border-color: #ff946b;
    background-color: #ffffff;
  }
}
/deep/ .el-input--small {
    font-size: 18px;
}
</style>
