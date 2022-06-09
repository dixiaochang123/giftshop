<template>
  <div class="cate-filter-container" @mouseleave="onMouseLeave">
    <template v-if="categories.length">
      <div class="cate-filter-first">
        <div :class="['cate-filter-first__item', {active: activeFirst === index}]"
             v-for="(item, index) in categories"
             :key="index">
          <img
            :src="activeFirst === index ? item.activeIcon : item.icon"
            alt=""
            @mouseenter="onMouseEnterFirstItem($event,item, index)">
          <div
            class="name"
            @mouseenter="onMouseEnterFirstItem($event,item, index)">{{ item.name }}
          </div>
        </div>
      </div>
      <div class="cate-filter-second" v-if="showCateSecond">
        <div :class="['cate-filter-second__item', {active: activeSecond === index}]"
             v-for="(item, index) in categories[activeFirst].children"
             :key="index"
             @mouseenter="onMouseEnterSecondItem($event, item,index)">
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
      <div class="cate-filter-three" v-if="showCateThree">
        <div :class="['cate-filter-three__item', {active: activeThree === index}]"
             v-for="(item, index) in categories[activeFirst].children[activeSecond].children"
             :key="index"
             @mouseenter="onMouseEnterThreeItem($event, index)"
             @click="onClickThreeItem($event, item, index)">
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'CateFilter',
  props: {
    categories: {
      type: Array,
      default: function () {
        return [];
      },
    }
  },
  computed: {
    ...mapGetters(["ProductNav"]),
    showCateSecond() {
      try {
        return this.categories[this.activeFirst].children.length
      } catch (e) {
        return false;
      }
    },
    showCateThree() {
      try {
        return this.categories[this.activeFirst].children[this.activeSecond].children.length
      } catch (e) {
        return false;
      }
    },
  },
  data() {
    return {
      activeFirst: -1,
      activeSecond: -1,
      activeThree: -1,

      activeFirstName: '',
      activeSecondName: '',
      activeThreeName: '',
    }
  },
  methods: {
    ...mapActions(["setProductNav"]),
    onMouseEnterFirstItem(e,item, index) {
      // console.log('onMouseEnterFirstItem', e, index)
      this.activeFirst = index;
      this.activeSecond = 0;
      this.activeSecondName = item.children[0].name
      this.activeThree = -1;
      this.activeFirstName = item.name
    },
    onMouseEnterSecondItem(e,item, index) {
      // console.log('onMouseEnterFirstItem', e, index)
      this.activeSecond = index;
      this.activeThree = -1;
      this.activeSecondName = item.name
      console.log(item)
    },
    onMouseEnterThreeItem(e, index) {
      // console.log('onMouseEnterFirstItem', e, index)
      this.activeThree = index;
    },
    onMouseLeave() {
      this.activeFirst = -1;
      this.activeSecond = -1;
      this.activeThree = -1;
    },
    onClickThreeItem(e, category, index) {
      let data = {
        activeFirstName :this.activeFirstName,
        activeSecondName: this.activeSecondName,
        activeThreeName: category.name,
      }
      this.setProductNav(data)
      this.$emit('choose', data, index)
    },
  }
}
</script>
<style lang="scss" scoped>
@function rpx2multiple ($px) {
  @return ($px / 1.5)+px;
}

.cate-filter-container {
  position: relative;
  width: 100%;
  background: linear-gradient(77deg, #FFECE5 0%, rgba(255, 255, 255, 0) 50%, #E5EDFF 100%);
  font-family: PingFangSC-Regular, PingFang SC;
  animation: all .3s ease-in-out;

  &:hover {
    background: linear-gradient(77deg, #FFECE5 0%, rgba(255, 255, 255, 1) 50%, #E5EDFF 100%);
  }

  .cate-filter-first {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    .cate-filter-first__item {
      flex: 1 1 auto;
      padding: 33px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      > img {
        width: rpx2multiple(56);
        height: rpx2multiple(56);
      }

      > .name {
        text-align: center;
        height: 28px;
        font-size: rpx2multiple(20);
        font-weight: 400;
        color: #2D2E33;
        line-height: 28px;
      }

      &.active {
        .name {
          color: #FF946B;
        }
      }
    }
  }

  > .cate-filter-second {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    .cate-filter-second__item {
      margin: 0 20px 16.5px;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: solid 6px transparent;
      font-size: rpx2multiple(24);
      font-weight: 400;
      color: #73757D;
      cursor: pointer;

      &.active {
        border-bottom: solid 6px #FF946B;
        font-weight: 500;
        color: #2D2E33;
      }
    }
  }

  > .cate-filter-three {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    .cate-filter-three__item {
      margin: 16.5px 12px 33px;
      font-size: rpx2multiple(18);
      font-weight: 500;
      color: #FFFFFF;
      padding: 8px 20px;
      background: rgba(0, 0, 0, 0.16);
      border-radius: 4px;
      cursor: pointer;

      &.active {
        opacity: 1;
        background: #FF946B;
      }
    }
  }
}
</style>