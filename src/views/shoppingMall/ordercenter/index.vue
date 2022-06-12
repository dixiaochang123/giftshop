<template>
  <div class="mycart1">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>订单中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--类型-->
    <div class="page_type" style="border-bottom: none;height: auto;">
      <div class="tab-list-2-1">
        <div @click="activeindexchange(index)" v-for="(item,index) in specialtab" :key="item"
             :class="[index==activeindex? 'active':'']">{{ item }}
        </div>
      </div>
      <div class="container">
        <div class="navtab" style="display: flex;justify-content: space-between;align-items: center;">
          <ul>
            <li @click="tabqh(1)" :class="{active:tabbq==1}">全部订单 10</li>
            <li @click="tabqh(2)" :class="{active:tabbq==2}">待支付 2</li>
            <li @click="tabqh(3)" :class="{active:tabbq==3}">生产中 1</li>
            <li @click="tabqh(4)" :class="{active:tabbq==4}">待收货 6</li>
            <li @click="tabqh(5)" :class="{active:tabbq==5}">已完成 3</li>
            <li @click="tabqh(6)" :class="{active:tabbq==6}">异常订单 0</li>
            <li @click="tabqh(7)" :class="{active:tabbq==7}">已取消 0</li>

          </ul>
          <div class="dingdannth" @click="toggleFilterPanel" :style="{color:(filterPanel.active?'#FF946B':'#73757D')}">
            <span style="margin-right: 15px;">订单筛选</span>
            <i :class="filterPanel.active?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
          </div>
        </div>

      </div>
    </div>
    <router-view :filterPanel="filterPanel"/>

  </div>
</template>

<script>
export default {
  name: "Ordercenter",
  data() {
    return {
      filterPanel: {
        active: true
      },
      specialtab: ["常规订单", "打样订单"],
      activeindex: 0,
      cplx: "",
      ddzt: "",
      xdsj: null,
      bq: 1,
      tabbq: 1,
      checkAll: false,
      isIndeterminate: false,
      tableData: [
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "待支付",
          sumb: "3000.00",
          DesignNumber: "2",
        },
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "待支付",
          sumb: "3000.00",
          DesignNumber: "2",
        },
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "待支付",
          sumb: "3000.00",
          DesignNumber: "2",
        },
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "待支付",
          sumb: "3000.00",
          DesignNumber: "2",
        },
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "待支付",
          sumb: "3000.00",
          DesignNumber: "2",
        },
      ],
      multipleSelection: [],
    };
  },
  computed: {
    total() {
      return this.tableData.filter((item) => item.checked == true).length;
    },
    totalPrice() {
      return this.tableData
          .filter((item) => item.checked == true)
          .reduce((money, item) => money + Number(item.sumb), 0);
      // return this.tableData.filter(item=>item.checked==true)
    },
  },
  watch: {
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to, from) {
        this.activeindex = this.$route.query.index || 0
      },
    },
  },
  mounted() {
    this.activeindex = this.$route.query.index || 0
  },
  methods: {
    toggleFilterPanel() {
      this.filterPanel.active = !this.filterPanel.active;
    },
    activeindexchange(index) {
      this.activeindex = index;
      console.log(index)
      if (index == 0) {
        this.$router.push({
          name: 'Ordercenter'
        })
      } else {
        this.$router.push({
          name: 'Proofing'
        })
      }
    },
    //tab切换
    tabqh(zhi) {
      this.tabbq = zhi;
    },
    handleCheckAllChange(val) {
      console.log(val);
      if (val == true) {
        this.tableData.map((item) => (item.checked = true));
      } else {
        this.tableData.map((item) => (item.checked = false));
      }
      // this.checkedCities = val ? this.tableData.map(item=>item.checked==true) : this.tableData.map(item=>item.checked==false);
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = this.tableData.filter(
          (item) => item.checked == true
      ).length;
      this.checkAll = checkedCount === this.tableData.length;
      this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.tableData.length;
    },
    deleted(item, index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
          .then(() => {
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../../../assets/css/shoppingMall/vaseDetail";

@function rpx2multiple1($px, $nub) {
  @return ($px / $nub) + px;
}

@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.mycart1 {
  width: rpx2multiple(1380);
  margin: rpx2multiple(96) auto 0;
}

.page_type {
  width: rpx2multiple(1380);
  margin: 0 auto;

  .tab-list-2-1 {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 40px;

    > div {
      margin-right: rpx2multiple(48);
      // width: 96px;
      height: 33px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #73757d;
      line-height: 33px;
      position: relative;
      cursor: pointer;

      &.active {
        font-weight: 500;
        color: #2d2e33;
      }

      &.active::after {
        content: "";
        width: 72px;
        height: 6px;
        background: #7395dc;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}

.Breadcrumb {
  height: rpx2multiple(120);
}

.el-breadcrumb {
  font-size: 14px;
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

.tabs {
  width: 100%;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #f6f9fe;
  border-radius: 8px;
  border: 1px solid #bcbec6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2d2e33;
  }

  .header_1 {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
  }

  .spxx {
    padding-left: 100px;
  }
}

.tables {
  width: 100%;
  height: 172px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #bcbec6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  &:hover {
    box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
    border: 1px solid #7395dc;

    .dayang {
      background: #7395dc;
      border-radius: 4px;
      border: 1px solid #7395dc;
      color: #ffffff;
    }
  }

  > div {
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2d2e33;
  }

  .header_1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
  }

  .img-text {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .img-text-text {
    font-size: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2d2e33;
    padding-left: 16px;

    .p2 {
      font-size: 14px;
      font-weight: 400;
      color: #73757d;
    }
  }

  /deep/ .el-checkbox {
    margin-right: 10px;
  }

  .caozuo {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    height: 96px;

    > span {
      display: inline-block;
      height: 50%;
      box-sizing: border-box;
      margin-top: 20px;
    }
  }

  .dayang {
    width: 112px;
    padding: 9px 0;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #73757d;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73757d;
  }
}

.jiesuan {
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    display: inline-block;
  }

  .dayang {
    width: 112px;
    height: 25px;
    line-height: 25px;
    padding: 9px 0;
    background: #ff946b;
    border-radius: 4px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
}

.header_1_1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_foot {
  border: none;
  background: none;
  margin-bottom: 100px;
}

.navtab {
  height: 42px;
  margin-bottom: 40px;
  // margin-top: 10px;
  width: 100%;
}

.navtab ul {
  margin: 0;
  padding: 0;
}

.navtab ul li {
  display: inline-block;
  background: #f1f2f4;
  border-radius: 4px;
  margin-right: 15px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757D;
  padding: 9px 20px;
  cursor: pointer;
}

.navtab ul .active {
  background: #7395dc;
  color: #ffffff;
}

.ddtop {
  display: flex;
  align-items: center;
  height: 64px;
  background: #f6f9fe;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #bcbec6;
  padding-left: 20px;
}

.ddtop .time {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d2e33;
  line-height: 25px;
  margin: 0 15px;
}

.ddtop .ddbh {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #bcbec6;
  line-height: 25px;
}

.ddtop .ddbh span {
  color: #2d2e33;
}

.tables .header_1 {
  border-right: 1px solid #bcbec6;
  height: 100%;
  height: 244px;
  padding: 0;
}

.tables .header_1 .img-text {
  padding: 0 20px;
}

.yf {
  height: 71px;
  line-height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d2e33;
  border-top: 1px solid #bcbec6;
  padding: 0 20px;
}

.jgsl {
  text-align: right;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d2e33;
  line-height: 25px;
}

.tables .img-text-text {
  padding-left: 0;
}

.tables .img-text-text .p2 {
  margin-top: 15px;
}

.active1 {
  position: relative;
  width: 100px;
}

.active1::before {
  position: absolute;
  content: "";
  width: 50px;
  height: 3px;
  background: #7395dc;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}

.shaixuan {
  // border-top: 1px solid #7395dc;
  // width: 100%;
  // height: 150px;
  // border-bottom: 1px solid #bcbec6;
  // margin-bottom: 30px;
}

.qyktj .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-form-item {
  display: flex;
  align-items: center;
  font-size: 18px;
}
/deep/ .el-form-item__label {
  font-size: 18px;
}
/deep/ .el-input--small {
  font-size: 18px;
}

.shaixuan button {
  width: 112px;
  height: 42px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #ff946b;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ff946b;
  line-height: 42px;
  margin-left: 20px;
}
.dingdannth {
  cursor: pointer;
}
</style>
