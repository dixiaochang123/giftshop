<template>
  <div class="design">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的设计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="design-tabs">
      <div :class="{active:activePanel==='undetermined'}" @click="switchPanel('undetermined')">待确定</div>
      <div :class="{active:activePanel==='producing'}" @click="switchPanel('producing')">生产中</div>
    </div>

    <router-view/>
    <product-design-item-plan-detail-dialog @edit="onDesignItemPlanDetailDialogEdit"
                                            @share="onDesignItemPlanDetailDialogShare"
                                            @download="onDesignItemPlanDetailDialogDownload"
                                            ref="product-design-item-plan-detail-dialog"/>
  </div>
</template>

<script>
import ProductDesignItemPlanDetailDialog from "@/components/shoppingMall/ProductDesignItemPlanDetailDialog";

export default {
  name: "index",
  components: {ProductDesignItemPlanDetailDialog},
  provide() {
    return {
      designItemPlanDetailDialog: this.designItemPlanDetailDialog
    }
  },
  data() {
    return {
      activePanel: "undetermined",
      designItemPlanDetailDialog: {
        instance: null
      }
    }
  },
  methods: {
    switchPanel(activePanel) {
      this.activePanel = activePanel;
    },
    // eslint-disable-next-line no-unused-vars
    onDesignItemPlanDetailDialogEdit(planDetail) {
      // eslint-disable-next-line no-console
      console.log("编辑");
      //TODO 编辑
    },
    // eslint-disable-next-line no-unused-vars
    onDesignItemPlanDetailDialogShare(planDetail) {
      // eslint-disable-next-line no-console
      console.log("分享");
      //TODO 分享
    },
    // eslint-disable-next-line no-unused-vars
    onDesignItemPlanDetailDialogDownload(planDetail){
      // eslint-disable-next-line no-console
      console.log("下载");
      //TODO 下载
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.designItemPlanDetailDialog.instance = this.$refs['product-design-item-plan-detail-dialog'];
    })
  }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1.2) + px;
}

.design {
  width: rpx2multiple(1380);
  margin: rpx2multiple(92) auto 0;
}

.Breadcrumb {
  height: rpx2multiple(120);
}

.el-breadcrumb {
  font-size: rpx2multiple(14);
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

.design > div {
  width: 100%;
}

.design-tabs {
  display: flex;
  align-items: center;
  padding-bottom: rpx2multiple(50);
}

.design-tabs > div {
  position: relative;
  font-size: rpx2multiple(24);
  color: #73757D;
  cursor: pointer;
}

.design-tabs > div::after {
  position: absolute;
  content: "";
  display: block;
  left: 0;
  right: 0;
  bottom: rpx2multiple(-10);
  height: 6px;
  background-color: transparent;
  transform: translateY(100%);
}

.design-tabs > div:nth-child(1) {
  margin-right: rpx2multiple(130);
}

.design-tabs > div.active {
  color: #2D2E33;
}

.design-tabs > div.active::after {
  background-color: #7395DC;
}
</style>