<template>
  <div class="haowutuijian">
    <!--顶部大图-->
    <!-- <div class="top_banner">
            <img src="../../../assets/img/shoppingMall/detail/banner1.jpg" alt="">
        </div> -->
    <div class="cate-filter">
      <CateFilter :categories="categories" @choose="onChooseCategory" :bgcolor="bgcolor" />
    </div>
    <img class="banner" src="../../../assets/img/slices/haowutuijian.png" alt="" srcset="">
    <div class="Integrated" v-for="(item,index) in IntegratedInfo" :key="index">
        <img v-if="index%2==0" :src="item.img" alt="" srcset="">
        <div class="text">
            <h3>{{item.title}}待</h3>
            <p>{{item.text}}</p>
        </div>
        <img v-if="index%2!==0" :src="item.img" alt="" srcset="">
    </div>
    
  </div>
</template>

<script>
import CateFilter from "@/components/cateFilter/CateFilter";
import Categories from "@/components/cateFilter/categories.js";
export default {
  components: {CateFilter },
  data() {
    return {
        bgcolor:true,
      categories: Categories,
      carouselHeight: "500px",
      IntegratedInfo: [
        {
          title:'愿时光清浅，将你温柔以待',
          text: "愿时光清浅，将你温柔以待。我的理解是希望时光静静地慢慢地流过，让时光在你的身上不留下岁月的痕迹。人常说，岁月是把杀猪刀。希望岁月对你温柔以待，时光就像清清的河水，清清浅浅，在这般温柔的岁月流过后，你的身上毫无岁月的痕迹。愿你走出半生，归来仍是少女。",
          img: require('../../../assets/img/slices/2.png'),
        },
        {
          title:'时光就像清清的河水',
          text: "愿时光清浅，将你温柔以待。我的理解是希望时光静静地慢慢地流过，让时光在你的身上不留下岁月的痕迹。人常说，岁月是把杀猪刀。希望岁月对你温柔以待，时光就像清清的河水，清清浅浅，在这般温柔的岁月流过后，你的身上毫无岁月的痕迹。愿你走出半生，归来仍是少女。",
          img: require('../../../assets/img/slices/2.png'),
        },
        {
          title:'愿时光清浅，将你温柔以待',
          text: "愿时光清浅，将你温柔以待。我的理解是希望时光静静地慢慢地流过，让时光在你的身上不留下岁月的痕迹。人常说，岁月是把杀猪刀。希望岁月对你温柔以待，时光就像清清的河水，清清浅浅，在这般温柔的岁月流过后，你的身上毫无岁月的痕迹。愿你走出半生，归来仍是少女。",
          img: require('../../../assets/img/slices/2.png'),
        },
        {
          title:'时光就像清清的河水',
          text: "愿时光清浅，将你温柔以待。我的理解是希望时光静静地慢慢地流过，让时光在你的身上不留下岁月的痕迹。人常说，岁月是把杀猪刀。希望岁月对你温柔以待，时光就像清清的河水，清清浅浅，在这般温柔的岁月流过后，你的身上毫无岁月的痕迹。愿你走出半生，归来仍是少女。",
          img: require('../../../assets/img/slices/2.png'),
        },
        

       
      ],
      value: "",
      orderQuantity: 100,
    };
  },
  mounted() {},
  methods: {
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
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}
.haowutuijian {
    width:100%;
}
.cate-filter {
    margin-top: rpx2multiple(96);
}
.banner {
    display: block;
    width:rpx2multiple(1380);
    height:rpx2multiple(480);
    margin: rpx2multiple(50) auto rpx2multiple(120);
    border-radius: 24px;
    overflow: hidden;
}
.Integrated {
    width:rpx2multiple(1380);
    margin:0 auto;
    border-bottom: 1px solid #E9EEF7;
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    margin-bottom: 50px;
    .text {
        width: 1060px;
        h3 {
            height: 45px;
            font-size: 32px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #2D2E33;
            line-height: 1;
            padding:0;
            margin:0;
            margin-bottom:40px;
        }
        p {
            width: 1060px;
            height: 120px;
            font-size: 22px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #73757D;
            line-height: 40px;
            padding:0;
            margin:0;
        }
    }
    img {
        width: rpx2multiple(256);
        height: rpx2multiple(256);
        border-radius: 12px;
        overflow: hidden;
    }
}

</style>
