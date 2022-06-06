<template>
  <div>
    <div style="height:92px;"></div>
    <div class="cate-filter">
      <CateFilter :categories="categories" @choose="onChooseCategory" />
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
      </el-carousel>
    </div>

    <div class="big_banner">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="jrqd"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="ygfl"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="ip"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hdwz"></div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="qyzb"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="rcbg"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="swlz"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="jgfq"></div>
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
        <div @click="activeindex=index" v-for="(item,index) in specialtab" :key="item" :class="[index==activeindex? 'active':'']">{{item}}</div>
      </div>
      <!--商品-->
      <div class="pro">
        <div class="left">
          <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
          <div class="hover-text">
            <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
            <p class="hp2">夏日清凉</p>

          </div>
        </div>
        <div class="right container">
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp1"><span>¥108</span><span class="hhhs">100起订</span></p>
              <p class="hp2">夏日清凉</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
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
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp2">热门推荐</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp2">好物推荐</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp2">品牌推荐</p>

            </div>
          </div>
          <div>
            <img width="100%" height="100%" src="../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="hover-text">
              <p class="hp2">大厂案例</p>

            </div>
          </div>

        </div>
    </div>
    <div style="height:99px;"></div>
  </div>
</template>

<script>
import CateFilter from "@/components/cateFilter/CateFilter";
import Categories from "@/components/cateFilter/categories.js";
export default {
  name: "Home",
  components: { CateFilter },
  data() {
    return {
      categories: Categories,
      carouselHeight: "500px",
      activeindex:0,
      specialtab:['季节限定','暖心防疫','轻松户外','风格系列']
    };
  },
  computed: {},
  mounted() {
    //根据窗口宽度设置轮播图高度
    this.resizeCarouselHeight();
    window.onresize = () => {
      this.resizeCarouselHeight();
    };
  },
  methods: {
    // 选择了某个第三级分类
    onChooseCategory(category, index) {
      console.log(category, index);
      alert(`您选择了分类${category.name}，三级索引${index}`);
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
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/shoppingMall/shoppingMall_home";
</style>
