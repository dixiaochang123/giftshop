<template>
  <el-dialog append-to-body lock-scroll custom-class="ProductDesignItemPlanDetailDialog" :show-close="false" :visible="active">
    <template v-slot:title>
      <el-icon class="header_icon_item" name="close" @click.native="close" />
      <div v-show="type==='online'" style="display: flex;align-items: center;">
        <!-- <el-icon class="header_icon_item" name="share" @click.native="onCommand('share')"/> -->
        <img style="width: 28px;margin-right: 36px;" class="header_icon_item" src="../../assets/img/slices/daochuicon.png" alt="" srcset="" @click="onCommand('share')">
        <img style="width: 28px;margin-right: 36px;" class="header_icon_item" src="../../assets/img/slices/fenxiangicon.png" alt="" srcset="" @click="onCommand('share')">
        <!-- <el-icon class="header_icon_item" name="share" style="margin-left: calc(20px);"
                 @click.native="onCommand('share')"/> -->
        <el-button style="background-color:#FF946B;border-radius: 4px;border: none;color: #ffffff;padding: 9px 34px;font-size: 16px;margin-left: 14px;" @click="onCommand('edit')">
          修改
        </el-button>
      </div>
    </template>

    <template v-if="type==='online'">
      <div>
        <div class="title">整体效果</div>
        <el-image :src="planDetail.main" style="width: 1000px;height: 1000px;" fit="cover"/>
      </div>
      <div style="margin-top: 100px">
        <div class="title">细节效果</div>
        <template v-for="(item,index) of planDetail.detail">
          <div class="sub_title" :key="'title'+index">{{ item.title }}</div>
          <div class="detail_pictures" :key="index">
            <template v-for="(picture,i) of item.pictures">
              <div class="detail_pictures-item" :key="i">
                <div class="detail_pictures-item_pic_wrap">
                  <el-image :src="picture.src" />
                </div>
                <p>{{ picture.name }}</p>
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center; background-color:rgba(255,255,255,0.15);backdrop-filter: blur(50px);">
        <div style="padding: calc(80px) calc(75px);display: flex;align-items: center;flex-direction: column;border: 1px solid #7ea3da;border-radius: calc(23px / 1.124780316344464);background-color:#ffffff;">
          <el-image :src="require('@/assets/img/shoppingMall/design/preview.png')" style="width: calc(210px);" />
          <p style="margin-top: calc(75px);font-size: calc(20px);">
            暂不支持在线预览，请下载后查看</p>
          <el-button style="background-color:#FF946B;border-radius: 4px;margin-top: calc(20px);border: none;color: #ffffff;padding: 9px 34px;font-size: 16px;" @click="onCommand('download')">
            下载
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "ProductDesignItemPlanDetailDialog",
  emits: ["edit", "share", "download"],
  data() {
    return {
      active: false,
      type: "online",
      planDetail: {},
    };
  },
  methods: {
    open(item, type) {
      this.type = type;
      this.$set(this, "planDetail", Object.assign({}, item));
      this.active = true;
    },
    close() {
      this.active = false;
    },
    onCommand(command) {
      this.active = false;
      this.$emit(command, this.planDetail);
    },
  },
};
</script>

<style lang="scss">
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.ProductDesignItemPlanDetailDialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-width: rpx2multiple(1380);
  margin: 0 !important;
  color: #2d2e33;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*background: rgba(255, 255, 255, 0.15);*/
}

.ProductDesignItemPlanDetailDialog .el-dialog__header {
  width: 1380px;
  margin: 0 !important;
  display: flex;
  justify-content: space-between;
  padding: rpx2multiple(45) 0 rpx2multiple(30);
}

.ProductDesignItemPlanDetailDialog .header_icon_item {
  color: #73757d;
  font-size: rpx2multiple(32);
  cursor: pointer;
}

.ProductDesignItemPlanDetailDialog .el-dialog__body {
  width: rpx2multiple(1380);
  // flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 30px 20px 30px 0;
}

.ProductDesignItemPlanDetailDialog .title {
  font-size: rpx2multiple(32);
  margin-bottom: rpx2multiple(40);
}

.ProductDesignItemPlanDetailDialog .sub_title {
  font-size: rpx2multiple(22);
  margin-top: rpx2multiple(20);
  margin-bottom: rpx2multiple(30);
}

.ProductDesignItemPlanDetailDialog .el-image {
  border-radius: rpx2multiple(12);
}

.ProductDesignItemPlanDetailDialog .detail_pictures {
  display: flex;
  flex-wrap: wrap;
}

.ProductDesignItemPlanDetailDialog .detail_pictures-item {
  width: 33.33333333%;
  padding-right: rpx2multiple(60);
  box-sizing: border-box;
}

.ProductDesignItemPlanDetailDialog .detail_pictures-item > * {
  width: 100%;
  text-align: center;
}

.ProductDesignItemPlanDetailDialog .detail_pictures-item > p {
  margin: rpx2multiple(30) 0 60px;
}

.ProductDesignItemPlanDetailDialog
  .detail_pictures-item
  > .detail_pictures-item_pic_wrap {
  position: relative;
  height: 0;
  padding-bottom: 100%;
}

.ProductDesignItemPlanDetailDialog
  .detail_pictures-item
  > .detail_pictures-item_pic_wrap
  > .el-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>