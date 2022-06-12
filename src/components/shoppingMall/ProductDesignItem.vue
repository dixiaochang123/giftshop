<template>
  <div class="ProductDesignItem">
    <div class="ProductDesignItem-header">
      <div>商品</div>
      <div>设计方案</div>
    </div>
    <div class="ProductDesignItem-content">
      <div class="ProductDesignItem-content__goods">
        <el-image :src="cacheData.src" fit="cover" />
        <p>{{ cacheData.name }}</p>
      </div>
      <div class="ProductDesignItem-content__designs">
        <div class="ProductDesignItem-content__designs-carousel" ref="ProductDesignItem-content__designs-carousel">
          <template v-for="(item,index) of cacheData.plans">
            <div class="ProductDesignItem-content__designs-carousel__item" :key="index">
              <div class="relative ProductDesignItem-content__designs-carousel__item-img-wrapper">
                <template v-if="type==='online'">
                  <el-image :src="item.src" style="cursor:pointer;" fit="cover" @click.native="viewPlan(item)" />
                </template>
                <template v-else>
                  <div class="imgbox" style="display: flex;justify-content: center; align-items: center;border: 1px solid #BCBEC6;border-radius: 12px;color: #7395DC;cursor:pointer;" @click="viewPlan(item)">
                    <el-icon name="s-cooperation" style="font-size: 40px;" />
                  </div>
                </template>
                <el-icon class="ProductDesignItem-content__designs-carousel__item-close-icon" name="close" @click.native="deletePlan(index)" />
              </div>
              <p>{{ item.name }}</p>
            </div>
          </template>

          <div class="ProductDesignItem-content__designs-carousel__item">
            <div class="relative ProductDesignItem-content__designs-carousel__item-img-wrapper plan-uploader-wrapper">
              <template v-if="type==='offline'">
                <el-upload class="plan-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleUploadSuccess" :before-upload="beforeUpload">
                  <i class="el-icon-plus plan-uploader-icon"></i>
                </el-upload>
              </template>
              <template v-else>
                <div class="plan-uploader">
                  <div class="el-upload" @click="addPlan">
                    <i class="el-icon-plus plan-uploader-icon"></i>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <template v-if="computedPlansLength>4">
          <div class="ProductDesignItem-content__designs-control ProductDesignItem-content__designs-control__left">
            <el-icon class="ProductDesignItem-content__designs-control__icon" :class="{'ProductDesignItem-content__designs-control__icon_disabled':computedControlLeftDisabled}" name="arrow-left"
              @click.native="togglePlan(-1)" />
          </div>
          <div class="ProductDesignItem-content__designs-control ProductDesignItem-content__designs-control__right">
            <el-icon class="ProductDesignItem-content__designs-control__icon" :class="{'ProductDesignItem-content__designs-control__icon_disabled':computedControlRightDisabled}" name="arrow-right"
              @click.native="togglePlan(1)" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDesignItem",
  inject: ["designItemPlanDetailDialog"],
  props: {
    type: String,
    value: Object,
  },
  data() {
    return {
      cacheData: {},
      planIndex: 0,
    };
  },
  computed: {
    computedPlansLength() {
      return 1 + this.cacheData.plans.length;
    },
    computedControlLeftDisabled() {
      return this.planIndex <= 4 - this.computedPlansLength;
    },
    computedControlRightDisabled() {
      return this.planIndex >= 0;
    },
  },
  watch: {
    planIndex(val) {
      this.$refs[
        "ProductDesignItem-content__designs-carousel"
      ].style.transform = `translateX(${val * 25}%)`;
    },
  },
  methods: {
    edit(data){
      console.log(data,this.$parent)
      // this.$parent.onDesignAdd()
    },
    togglePlan(step) {
      switch (step) {
        case -1:
          if (this.planIndex > 4 - this.computedPlansLength) {
            this.planIndex--;
          }
          break;
        case 1:
          if (this.planIndex < 0) {
            this.planIndex++;
          }
          break;
      }
    },
    deletePlan(index) {
      this.cacheData.plans.splice(index, 1);
      this.$emit("input", this.cacheData);
    },
    // eslint-disable-next-line no-unused-vars
    viewPlan(item) {
      // document.getElementsByTagName('body')[0].style.transform ='none'
      //TODO: Mock Data
      this.designItemPlanDetailDialog.instance &&
        this.designItemPlanDetailDialog.instance.open(
          {
            main: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            detail: [
              {
                title: "文字",
                pictures: [
                  {
                    name: "文字1",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                  {
                    name: "文字2",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                  {
                    name: "文字1",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                  {
                    name: "文字2",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                ],
              },
              {
                title: "LOGO",
                pictures: [
                  {
                    name: "LOGO1",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                  {
                    name: "LOGO2",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                ],
              },
              {
                title: "图案",
                pictures: [
                  {
                    name: "图案1",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                  {
                    name: "图案2",
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  },
                ],
              },
            ],
          },
          this.type
        );
      // this.designItemPlanDetailDialog.instance && this.designItemPlanDetailDialog.instance.open(item,this.type);
    },
    addPlan() {
      //TODO: 新增加设计
      this.$emit("design-add");
    },

    // eslint-disable-next-line no-unused-vars
    handleUploadSuccess(res, file) {
      //TODO 上传
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      return isJPG;
    },
  },
  created() {
    //TODO: Mock Data
    this.cacheData = this.value || {
      name: "愿时光停在花",
      src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      plans: new Array(10).fill(0).map((it, ix) => ({
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        name: "方案" + (ix + 1),
      })),
    };
  },
};
</script>

<style scoped lang="scss">
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.ProductDesignItem {
  border: 1px solid #bcbec6;
  border-radius: 8px;
  overflow: hidden;
}

.ProductDesignItem-header {
  background-color: #f6f9fe;
  border-bottom: 1px solid #bcbec6;
  color: #2d2e33;
}

.ProductDesignItem-header,
.ProductDesignItem-content {
  display: flex;
  align-items: center;
}

.ProductDesignItem-header > div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: rpx2multiple(20) 0;
  font-size: rpx2multiple(18);
}

.ProductDesignItem-header > div:nth-child(1) {
  width: rpx2multiple(274);
}

.ProductDesignItem-header > div:nth-child(2) {
  flex: 1;
}

.ProductDesignItem-content {
  align-items: start;
  padding: 0 rpx2multiple(32);
}

.ProductDesignItem-content > .ProductDesignItem-content__goods {
  padding: rpx2multiple(40) 0;
  margin-right: rpx2multiple(55);
}

.ProductDesignItem-content > .ProductDesignItem-content__goods > .el-image,
.ProductDesignItem-content__designs-carousel
  > .ProductDesignItem-content__designs-carousel__item
  .el-image {
  width: rpx2multiple(208);
  height: rpx2multiple(208);
  overflow: hidden;
  border-radius: 12px;
}

.ProductDesignItem-content > .ProductDesignItem-content__goods > p,
.ProductDesignItem-content__designs-carousel
  > .ProductDesignItem-content__designs-carousel__item
  > p {
  margin-top: rpx2multiple(16);
  margin-bottom: rpx2multiple(16);
  font-size: rpx2multiple(22);
}

.ProductDesignItem-content > .ProductDesignItem-content__designs {
  position: relative;
  flex: 1;
  padding: rpx2multiple(40) 2px rpx2multiple(40) rpx2multiple(52);

  max-width: 100%;
  overflow: hidden;
}

.ProductDesignItem-content__designs
  > .ProductDesignItem-content__designs-carousel {
  width: 100%;
  display: flex;
  transition: transform 0.3s;
}

.ProductDesignItem-content__designs-carousel
  > .ProductDesignItem-content__designs-carousel__item {
  width: 25%;
  flex-shrink: 0;
  padding-right: rpx2multiple(39);
  box-sizing: border-box;
}

.relative {
  position: relative;
}

.ProductDesignItem-content__designs-carousel__item-img-wrapper
  > .ProductDesignItem-content__designs-carousel__item-close-icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  width: rpx2multiple(32);
  height: rpx2multiple(32);
  border-radius: 50%;
  color: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: rpx2multiple(22);
  cursor: pointer;
  z-index: 99;
}

.ProductDesignItem-content__designs-carousel__item:hover .ProductDesignItem-content__designs-carousel__item-close-icon{
  display: flex;
}

.ProductDesignItem-content__designs
  > .ProductDesignItem-content__designs-control {
  position: absolute;
  width: rpx2multiple(33);
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}

.ProductDesignItem-content__designs-control__icon {
  background-color: rgba(0, 0, 0, 0.3);
  width: rpx2multiple(32);
  height: rpx2multiple(32);
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: rpx2multiple(22);
  cursor: pointer;
}

.ProductDesignItem-content__designs-control__icon_disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.ProductDesignItem-content__designs
  > .ProductDesignItem-content__designs-control__left {
  left: 0;
  top: 0;
  bottom: rpx2multiple(40);
  justify-content: flex-start;
}

.ProductDesignItem-content__designs
  > .ProductDesignItem-content__designs-control__right {
  right: 0;
  top: 0;
  bottom: rpx2multiple(40);
  justify-content: flex-end;
}

.ProductDesignItem-content__designs-carousel__item-img-wrapper.plan-uploader-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

::v-deep .plan-uploader .el-upload {
  border: 1px dashed #bcbec6;
  border-radius: 6px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

::v-deep .plan-uploader .el-upload:hover {
  border-color: #409eff;
}

.plan-uploader-icon {
  font-size: rpx2multiple(28);
  color: #8c939d;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.imgbox {
  width: rpx2multiple(208);
  height: rpx2multiple(208);
}
</style>