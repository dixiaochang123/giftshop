<template>
  <div>
    <!-- <div style="height:92px;"></div> -->
    <div class="tab-list">
      <div class="leftbg"></div>
      <div class="rightbg"></div>
      <div class="tab-list-1">
        <div class="icon-text icon-fz">
          <div></div>
          <p>纺织品</p>
        </div>
        <div class="icon-text icon-fs">
          <div></div>
          <p>服饰类</p>
        </div>
        <div class="icon-text icon-gy">
          <div></div>
          <p>工艺品</p>
        </div>
        <div class="icon-text icon-ys">
          <div></div>
          <p>印刷品</p>
        </div>
        <div class="icon-text icon-ry">
          <div></div>
          <p>日用办公</p>
        </div>
        <div class="icon-text icon-cy">
          <div></div>
          <p>创意数码</p>
        </div>
        <div class="icon-text icon-fy">
          <div></div>
          <p>防疫产品</p>
        </div>
        <div class="icon-text icon-hw">
          <div></div>
          <p>户外运动</p>
        </div>
        <div class="icon-text icon-lh">
          <div></div>
          <p>礼盒类</p>
        </div>

      </div>
      <div class="tab-list-2">
        <div class="tab-list-2-1">
          <div>徽章</div>
          <div>奖杯</div>
          <div>瓷器</div>
          <div>盲盒</div>
          <div>创意摆件</div>
        </div>
        <div class="tab-list-2-2">
          <div class="active">金属徽章</div>
          <div>亚克力徽章</div>
          <div>树脂徽章</div>
        </div>
      </div>

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
            <img width="300px" height="360px" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ygfl-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ip-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/hdwz-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ygfl-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ip-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/hdwz-hover.png" alt="" sizes="" srcset="">
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
        <div class="active">季节限定</div>
        <div>暖心防疫</div>
        <div>轻松户外</div>
        <div>风格系列</div>
      </div>
      <!--商品-->
      <div class="pro">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <img width="100%" height="100%" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
            </div>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                    <img width="100%" height="100%" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                    <img width="100%" height="100%" src="../../assets/img/slices/ygfl-hover.png" alt="" sizes="" srcset="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                    <img width="100%" height="100%" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                    <img width="100%" height="100%" src="../../assets/img/slices/ygfl-hover.png" alt="" sizes="" srcset="">
                    </div>
                </el-col>
                </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="image">
      <img src="../../assets/img/slices/linggan.png" alt="">
    </div>
    <div class="big_banner">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/jrqd-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ygfl-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/ip-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img width="300px" height="360px" src="../../assets/img/slices/hdwz-hover.png" alt="" sizes="" srcset="">
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="height:99px;"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselHeight: "500px", //轮播图高度
      flowerList: [
        {
          flowerId: "001",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "89.00",
        },
        {
          flowerId: "002",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "150.00",
        },
        {
          flowerId: "003",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "88.00",
        },
        {
          flowerId: "004",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "96.00",
        },
        {
          flowerId: "005",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "72.00",
        },
        {
          flowerId: "006",
          flowerName: "【花艺】七头美丽玫瑰仿真花束",
          flowerPrice: "108.00",
        },
      ],
      proList: [
        {
          proId: "001",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "89.00",
        },
        {
          proId: "002",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "150.00",
        },
        {
          proId: "003",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "88.00",
        },
        {
          proId: "004",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "96.00",
        },
        {
          proId: "005",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "72.00",
        },
        {
          proId: "006",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "108.00",
        },
        {
          proId: "007",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "108.00",
        },
        {
          proId: "008",
          proName: "【GC】七头美丽玫瑰仿真花束",
          proPrice: "108.00",
        },
      ],
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
// .icon-fz {
//     width: 56px;
//     height: 56px;
//     margin: 0 auto;
//     border:solid 1px red;
//     background: url('../../assets/img/slices/icon-fz.png') no-repeat center center;
//     background-size: contain;
//     &:hover {
//         background: url("../../assets/img/slices/icon-fz-1.png") no-repeat center center;
//     }
// }
</style>
