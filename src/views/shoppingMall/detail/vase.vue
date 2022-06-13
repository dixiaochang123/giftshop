<template>
  <div>
    <!--顶部大图-->
    <!-- <div class="top_banner">
            <img src="../../../assets/img/shoppingMall/detail/banner1.jpg" alt="">
        </div> -->
    <!-- <div style="height:96px;"></div> -->
    <div class="cate-filter">
      <CateFilter :categories="categories" @choose="onChooseCategory" :bgcolor="bgcolor" />
    </div>
    <!--面包屑导航-->
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 16px;color: #73757D">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.query.activeFirstName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.query.activeSecondName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.query.activeThreeName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container product-list">
      <div class="page_type"><span class="sxs">筛选</span><span class="result-num">共256个内容</span></div>
      <div class="type_list">
        <div class="product-box">
          <div class="product-item" v-for="item in 15" :key="item.id">
            <router-link to="/shoppingMall/detail/detail">
              <div class="product-content">
                <div class="product-img">
                  <img class="bgimg" style="width: 100%" src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt="">
                  <img class="zoomicon" src="../../../assets/img/slices/radus.png" alt="">
                </div>
                <div class="product-desc">
                  <p style="padding-top:20px;">
                    <span style="font-size: 22px">¥ {{`108`}}</span>
                    <span style="font-size: 14px;" class="product-orderQuantity">{{orderQuantity}}起订</span>
                  </p>
                  <span style="font-size: 22px;">
                    创意现代简约
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <el-pagination class="product-pagination" background layout="prev, pager, next,jumper" :total="1000">
      </el-pagination>
    </div>
    <fast-detail ref="FastDetail"></fast-detail>
  </div>
</template>

<script>
import FastDetail from "./fastDetailModal";
import CateFilter from "@/components/cateFilter/CateFilter";
import Categories from "@/components/cateFilter/categories.js";
import {
  productCatalogueList
} from "@/request/modules/index.js";
export default {
  components: { FastDetail, CateFilter },
  data() {
    return {
      bgcolor:true,
      categories: Categories,
      carouselHeight: "500px",
      options: [
        {
          value: "选项1",
          label: "新品上市",
        },
        {
          value: "选项2",
          label: "销量从高到低",
        },
        {
          value: "选项3",
          label: "销量从低到高",
        },
        {
          value: "选项4",
          label: "价格从低到高",
        },
        {
          value: "选项5",
          label: "价格从高到低",
        },
      ],
      value: "",
      orderQuantity: 100,
    };
  },
  mounted() {
    this.productCatalogueList();
  },
  methods: {
    productCatalogueList() {
      productCatalogueList({data:{}}).then(res=>{
      let {code,data} = res.data;
      if(code==200) {
        data.map(item=>{
          Categories.map(k=>{
            if(k.name==item.name) {
              item['icon'] = k.icon
              item['activeIcon'] = k.activeIcon
            }
          })
        })
        this.categories = data;
        console.log(code,this.categories )
      }
    }).catch(error=>console.log(error))
    },
    //快速浏览
    showDetail() {
      this.$refs.FastDetail.show();
    },
    // 选择了某个第三级分类
    onChooseCategory(data, index) {
      console.log(data, index);
      // alert(`您选择了分类${data.name}，三级索引${index}`);
      console.log(data, index);
      this.$router.push({
        name: "VaseDetail",
        query: {
          ...data,
        },
      });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../../assets/css/shoppingMall/vaseDetail";
.cate-filter {
    // margin-top: rpx2multiple(96);
 width: 100%;
  //min-height: 176px;
  position: fixed;
  top: 96px;
  z-index: 1000;
}
.product-list {
  margin-bottom: 20px;
}
.vase_item {
  .product-name {
    margin-left: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: 26px;
  }
}
.product-orderQuantity {
  float: right;
  font-size: 12px;
  color: #bcbec6;
  font-weight: 500;
}
.product-pagination {
  // display:inline-block;
  text-align: center;
  margin: 0 auto 100px;
  /deep/ .el-pager {
    .active {
      background-color: #ff946b !important;
    }
  }
}
// .result{
//     color: #2D2E33;
//     font-size: 14px;
//     font-weight: 700;
//     .result-num{
//         margin-left: 20px;
//         color: #73757D;
//         font-size: 12px;
//     }
// }
.product-box {
  margin-bottom: 30px;
  .product-item {
    width: 20%;
    padding: 12px;
    margin-bottom: 40px;
    display: inline-block;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #fff;
    transition: all 0.5s;
    .product-content {
      .product-img {
        // border-radius: 12px;
        // overflow: hidden;
        position: relative;
        .bgimg {
          border-radius: 8px;
          overflow: hidden;
        }
        .zoomicon {
          width:rpx2multiple(42);
          height:rpx2multiple(42);
          position: absolute;
          right: -5px;
          bottom: -5px;
        }
      }
      .product-desc {
        color: #2d2e33;
        font-size: 14px;
        font-weight: 700;
        > span {
          display: inline-block;
          margin-top: 10px;
        }
      }
    }
  }
  .product-item:hover {
    border-radius: 12px;
    border: 1px solid #7395dc;
    box-shadow: 12px 14px 49px 0px rgba(206, 206, 206, 0.54);
  }
}
</style>
