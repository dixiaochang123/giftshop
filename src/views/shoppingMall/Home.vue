<template>
  <div>
    <!-- <div style="height:96px;"></div> -->
    <div class="cate-filter">
      <CateFilter :categories="categories" @choose="onChooseCategory"/>
    </div>
    <!--轮播部分-->
    <div class="swipe">
      <el-carousel :height="carouselHeight" arrow="always" indicator-position="outside">
        <el-carousel-item>
          <div class="swipe_img" :style="{backgroundImage:'url('+require('../../assets/img/slices/banner-1.png')+')'}">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="swipe_img" :style="{backgroundImage:'url('+require('../../assets/img/slices/banner-2.png')+')'}">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="swipe_img" :style="{backgroundImage:'url('+require('../../assets/img/slices/banner-3.png')+')'}">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="swipe_img" :style="{backgroundImage:'url('+require('../../assets/img/slices/banner-4.png')+')'}">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="big_banner">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="jrqd" style="cursor: pointer;" @click="gotozhuanti('节日庆典')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="ygfl" style="cursor: pointer;" @click="gotozhuanti('公司福利')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="ip" style="cursor: pointer;" @click="gotozhuanti('IP衍生')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hdwz" style="cursor: pointer;" @click="gotozhuanti('活动物资')"></div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="qyzb" style="cursor: pointer;" @click="gotozhuanti('企业周边')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="rcbg" style="cursor: pointer;" @click="gotozhuanti('日常办公')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="swlz" style="cursor: pointer;" @click="gotozhuanti('商务礼赠')"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="jgfq" style="cursor: pointer;" @click="gotozhuanti('价格分区')"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="image">
      <img src="../../assets/img/slices/zhuanti.png" alt="">
    </div>

    <!--底部区域-->
    <div class="container">
      <div class="tab-list-2-1">
        <div @click="activeindex=index" v-for="(item,index) in specialtab" :key="item"
             :class="[index==activeindex? 'active':'']">{{ item }}
        </div>
      </div>
      <!--商品-->
      <div class="pro">
        <div class="left">
          <img style="cursor: pointer;" @click="viewGoodsDetail" width="100%" height="100%"  src="../../assets/img/slices/1.png" alt="" srcset="">
          <!-- <div class="hover-text" @click="viewGoodsDetail">
            <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
            <p class="hp2">夏日清凉</p>

          </div> -->
        </div>
        <div class="right container">
          <div style="cursor: pointer;">
            <img width="100%" height="100%" src="../../assets/img/slices/2.png" alt="" srcset="">
            <div class="hover-text hover-text1" @click="viewGoodsDetail">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div style="cursor: pointer;">
            <img width="100%" height="100%" src="../../assets/img/slices/3.png" alt="" srcset="">
            <div class="hover-text hover-text1" @click="viewGoodsDetail">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div style="cursor: pointer;">
            <img width="100%" height="100%" src="../../assets/img/slices/4.png" alt="" srcset="">
            <div class="hover-text hover-text1" @click="viewGoodsDetail">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div style="cursor: pointer;">
            <img width="100%" height="100%" src="../../assets/img/slices/5.png" alt="" srcset="">
            <div class="hover-text hover-text1" @click="viewGoodsDetail">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="image">
      <img src="../../assets/img/slices/linggan.png" alt="">
    </div>
    <div class="inspiration">
      <div class="container">
        <div style="cursor: pointer;" @click="gotohotrecommend(0)">
          <img width="100%" height="100%" src="../../assets/img/slices/9.png" alt="" srcset="">
        </div>
        <div style="cursor: pointer;" @click="gotohotrecommend(1)">
          <img width="100%" height="100%" src="../../assets/img/slices/7.png" alt="" srcset="">
        </div>
        <div style="cursor: pointer;" @click="gotohotrecommend(2)">
          <img width="100%" height="100%" src="../../assets/img/slices/8.png" alt="" srcset="">
        </div>
        <div style="cursor: pointer;" @click="gotohotrecommend(3)">
          <img width="100%" height="100%" src="../../assets/img/slices/6.png" alt="" srcset="">
        </div>

      </div>
    </div>
    <div style="height:99px;"></div>
  </div>
</template>

<script>
import CateFilter from "@/components/cateFilter/CateFilter";
import Categories from "@/components/cateFilter/categories.js";
import {
  productCatalogueList
} from "@/request/modules/index.js";
export default {
  name: "Home",
  components: {CateFilter},
  data() {
    return {
      categories: [],
      carouselHeight: "776",
      activeindex: 0,
      specialtab: ['季节限定', '暖心防疫', '轻松户外', '风格系列']
    };
  },
  computed: {},
  mounted() {
    this.productCatalogueList();
    //根据窗口宽度设置轮播图高度
    this.resizeCarouselHeight();
    window.onresize = () => {
      this.resizeCarouselHeight();
    };
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
    viewGoodsDetail() {
      //TODO: 传入id
      this.$router.push({
        path: "/shoppingMall/detail/detail"
      });
    },
    // 选择了某个第三级分类
    onChooseCategory(data, index) {
      console.log(data, index);
      // alert(`您选择了分类${data.name}，三级索引${index}`);
      console.log(data, index)
      this.$router.push({
        name: 'VaseDetail',
        query: {
          ...data
        }
      })
    },
    //轮播图高度
    resizeCarouselHeight() {
      let innerWidth = window.innerWidth;
      if (innerWidth <= 768) {
        this.carouselHeight = "280px";
      } else if (innerWidth > 768 && innerWidth <= 1024) {
        this.carouselHeight = "360px";
      } else if (innerWidth > 1024 && innerWidth <= 1280) {
        this.carouselHeight = "440px";
      } else if (innerWidth > 1280 && innerWidth <= 1366) {
        this.carouselHeight = "480px";
      } else if (innerWidth > 1366 && innerWidth <= 1680) {
        this.carouselHeight = "640px";
      } else if (innerWidth > 1680 && innerWidth <= 1920) {
        this.carouselHeight = "720px";
      } else if (innerWidth > 1920 && innerWidth <= 2560) {
        this.carouselHeight = "820px";
      } else if (innerWidth > 2560) {
        this.carouselHeight = "900px";
      }
    },
    gotozhuanti(params) {
      this.$router.push({
        name:'zhuanti',
        query:{
          title:params
        }
      })
    },
    gotohotrecommend(id) {
      this.$router.push({
        name:'Hotrecommend',
        query:{
          id
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/shoppingMall/shoppingMall_home.scss";
// @media screen and(min-width: 1920px) {
//   @import "../../assets/css/shoppingMall/shoppingMall_home_media.scss";
// }

</style>
