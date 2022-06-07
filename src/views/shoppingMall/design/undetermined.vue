<template>
  <div class="undetermined">
    <div class="undetermined-tabs">
      <div :class="{active:activeType==='online'}" @click="switchPanel('online')">在线设计方案</div>
      <div :class="{active:activeType==='offline'}" @click="switchPanel('offline')">线下设计方案</div>
    </div>
    <div class="undetermined-content">
      <div v-show="activeType==='online'">
        <template v-for="i in 10">
          <product-design-item type="online" :key="i" style="margin-bottom: 40px;"/>
        </template>
      </div>
      <div v-show="activeType==='offline'">
        <template v-for="i in 10">
          <product-design-item type="offline" :key="i" style="margin-bottom: 40px;"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDesignItem from "@/components/shoppingMall/ProductDesignItem";

export default {
  name: "undetermined",
  components: {ProductDesignItem},
  data() {
    return {
      activeType: "online"
    }
  },
  methods: {
    switchPanel(activeType) {
      this.activeType = activeType;
    }
  }
}
</script>

<style scoped>
.undetermined {

}

.undetermined-tabs {
  display: flex;
  align-items: center;
}

.undetermined-tabs > div {
  padding: 10px 20px;
  background-color: #F1F2F4;
  font-size: 18px;
  color: #73757D;
  border-radius: 4px;
  cursor: pointer;
}

.undetermined-tabs > div:nth-child(1) {
  margin-right: 24px;
}

.undetermined-tabs > div.active {
  background-color: #7395DC;
  color: #FFFFFF;
}

.undetermined-content {
  padding: 60px 0 20px;
}
</style>