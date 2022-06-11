<template>
  <div class="undetermined">
    <div class="undetermined-tabs">
      <div :class="{active:activeType==='online'}" @click="switchPanel('online')">在线设计方案</div>
      <div :class="{active:activeType==='offline'}" @click="switchPanel('offline')">线下设计方案</div>
    </div>
    <div class="undetermined-content">
      <div v-show="activeType==='online'">
        <template v-for="i in 10">
          <product-design-item type="online" :key="i" style="margin-bottom: calc(40px);" @design-add="onDesignAdd"/>
        </template>
      </div>
      <div v-show="activeType==='offline'">
        <template v-for="i in 10">
          <product-design-item type="offline" :key="i" style="margin-bottom: calc(40px);"/>
        </template>
      </div>
    </div>
    <onlineDesign :dialogOnlineDesign="dialogOnlineDesign"></onlineDesign>
  </div>
</template>

<script>
import ProductDesignItem from "@/components/shoppingMall/ProductDesignItem";
import onlineDesign from "@/components/onlineDesign/onlineDesign";

export default {
  name: "undetermined",
  components: {ProductDesignItem, onlineDesign},
  data() {
    return {
      dialogOnlineDesign: false,
      activeType: "online"
    }
  },
  methods: {
    switchPanel(activeType) {
      this.activeType = activeType;
    },
    onDesignAdd() {
      this.dialogOnlineDesign = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.undetermined {

}

.undetermined-tabs {
  display: flex;
  align-items: center;
}

.undetermined-tabs > div {
  padding: rpx2multiple(10) rpx2multiple(20);
  background-color: #F1F2F4;
  font-size: rpx2multiple(18);
  color: #73757D;
  border-radius: 4px;
  cursor: pointer;
}

.undetermined-tabs > div:nth-child(1) {
  margin-right: rpx2multiple(24);
}

.undetermined-tabs > div.active {
  background-color: #7395DC;
  color: #FFFFFF;
}

.undetermined-content {
  padding: rpx2multiple(60) 0 rpx2multiple(20);
}
</style>