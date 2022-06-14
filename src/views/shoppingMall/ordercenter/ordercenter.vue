<template>
  <div class="mycart">
    <div class="shaixuan" :class="{'h-0': !filterPanelActive}">
      <el-form class="qyktj qyktj1">
        <div
            style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 24px;">
          <div class="items1" style="display: flex;align-items: center;">
            <el-form-item label="下单时间" prop="xdsj1">
              <el-date-picker clearable size="small" v-model="xdsj1" type="date" value-format="yyyy-MM-dd"
                              placeholder="选择下单时间">
              </el-date-picker>
            </el-form-item>
            <div style="padding: 0 14px;">-</div>
            <el-form-item prop="xdsj2">
              <el-date-picker clearable size="small" v-model="xdsj2" type="date" value-format="yyyy-MM-dd"
                              placeholder="选择下单时间">
              </el-date-picker>
            </el-form-item>
          </div>
          <el-form-item label="产品类型" prop="cplx">
            <el-select v-model="cplx" placeholder="请选择产品类型">

            </el-select>
          </el-form-item>
          <el-form-item label="订单状态" prop="ddzt" style="min-width: 285px;display: flex;justify-content: flex-end;">
            <el-select v-model="ddzt" placeholder="请选择订单状态">

            </el-select>
          </el-form-item>
        </div>
        <div style="display: flex;align-items: center;justify-content: space-between;">
          <div class="items1" style="display: flex;align-items: center;">
            <el-form-item label="发货时间" prop="fhsj1">
              <el-date-picker clearable size="small" v-model="fhsj1" type="date" value-format="yyyy-MM-dd"
                              placeholder="选择发货时间">
              </el-date-picker>
            </el-form-item>
            <div style="padding: 0 14px;">-</div>
            <el-form-item prop="fhsj2">
              <el-date-picker clearable size="small" v-model="fhsj2" type="date" value-format="yyyy-MM-dd"
                              placeholder="选择发货时间">
              </el-date-picker>
            </el-form-item>
          </div>
          <el-form-item label="订单编号" prop="ddbh">
            <el-input v-model="ddbh" placeholder="请输入订单编号" class="cplx-el-input"/>
          </el-form-item>
          <el-form-item style="min-width: 285px;display: flex;justify-content: flex-end;">
            <button>搜索</button>
            <button style="border-color: #333333;color: #333333;">导出</button>
          </el-form-item>
        </div>
      </el-form>

    </div>
    <div class="tabs">
      <div class="header" style="margin-bottom: 20px;">
        <div class="header_1" style="width:40%;text-align: left;">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
                       style="font-size: 18px;">全选
          </el-checkbox>
          <span class="spxx">商品信息</span>
        </div>
        <div style="width:12%">收货人</div>
        <div style="width:12%">订单金额</div>
        <div style="width:12%">订单状态</div>

        <div style="width:12%">我的设计</div>
        <div style="width:12%">操作</div>
      </div>
      <div class="tables" v-for="(item,index) in tableData" :key="index" style="display: inline-block;height: 307px;">
        <div class="ddtop">
          <el-checkbox v-model="item.checked" @change="handleCheckedCitiesChange" style="font-size: 18px;">
          </el-checkbox>
          <div class="time">2020-05-21 18:46:57</div>
          <div class="ddbh">订单编号：<span>2637283464955497116</span></div>
          <template v-if="['交易关闭','交易成功'].includes(item.ddzt)">
            <div class="deleted-wrapper">
              <span @click="deleted(item,index)"><i class="el-icon-delete"></i>删除订单</span>
            </div>
          </template>
        </div>
        <div style="display: flex;align-items: center;">
          <div class="header_1" style="width:40%;text-align: left;display: inline-block;">

            <div class="img-text" style="height: 173px;">
              <div style="display: flex; align-items: flex-start;">
                <img width="100px" height="100px" src="../../../assets/img/slices/banner-1.png" alt="" srcset="">
                <div class="img-text-text">
                  <p>{{ item.p1 }}</p>
                  <p class="p2">{{ item.p2 }}</p>
                </div>
              </div>
              <div class="jgsl">
                <p>￥30.00</p>
                <p>*</p>
                <p>100个</p>
              </div>
            </div>
            <div class="yf" style="height: 71px;">
              <span>运费</span>
              <span>￥0.00</span>
            </div>
          </div>
          <div style="width:12%">{{ item.shr }}</div>
          <div style="width:12%">¥{{ item.sumb }}</div>
          <div style="width:12%;display: flex;flex-direction: column;">
            <span>{{ item.ddzt }}</span>
            <template v-if="item.ddzt==='交易成功'">
              <span style="color: #FF946B;margin-top: 19px;cursor:pointer;" @click="viewPost(item)">查看物流</span>
            </template>
          </div>

          <div style="width:12%" class="caozuo">
            <span>{{ item.DesignNumber }}套</span>
            <span style="color: #FF946B;cursor: pointer;" @click="viewDesign(item)">查看</span>
          </div>
          <div style="width:12%" class="caozuo">
            <span class="dayang"
                  style="cursor: pointer;width: 112px;height: 42px;background: #FF946B;border-radius: 4px;color: #FFFFFF;border: none;"
                  @click="payMoney(item)">立即支付</span>
            <span style="cursor: pointer;" @click="cancelOrder(item,index)">取消订单</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Ordercenter",
  props: {
    filterPanelActive: Boolean,
    OrderInfo:Object
  },
  data() {
    return {
      ddbh: "",
      cplx: "",
      ddzt: "",
      xdsj1: null,
      xdsj2: null,
      fhsj1: null,
      fhsj2: null,
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
          ddzt: "交易关闭",
          sumb: "3000.00",
          DesignNumber: "2",
          type: '1'
        },
        {
          checked: false,
          url: "",
          p1: "愿时光停在花",
          p2: "母亲节真诚礼至特别巨献妈妈的礼物",
          shr: "喵大人",
          ddzt: "交易成功",
          sumb: "3000.00",
          DesignNumber: "2",
          type: '2'
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
          type: '3'
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
          type: '4'
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
          type: '5'
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
  mounted() {
    console.log(this.OrderInfo)
  },
  methods: {
    viewDesign(item) {
      this.$router.push({
        path: "/shoppingMall/design/undetermined",
        query: {
          //TODO: item传参
          id: item.id || 0,
        },
      });
    },
    payMoney(item) {
      this.$router.push({
        path: "/shoppingMall/order",
        //TODO: item传参
        id: item.id || 0,
      });
    },
    // eslint-disable-next-line no-unused-vars
    viewPost(item) {
      //TODO: 查看物流
    },
    //tab切换
    tabqh(zhi) {
      this.tabbq = zhi;
    },
    handleCheckAllChange(val) {
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
    cancelOrder(item, index) {
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
          .then(() => {
            this.tableData.splice(index, 1);
            this.$message({
              type: "info",
              message: "取消订单成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
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
@import "../../../assets/css/shoppingMall/vaseDetail";

@function rpx2multiple1($px, $nub) {
  @return ($px / $nub) + px;
}

@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.mycart {
  width: rpx2multiple(1380);
  margin: 0 auto;
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
    margin-left: 16px;
    margin-top: 15px;

    .p2 {
      font-size: 14px;
      font-weight: 400;
      color: #73757d;
      margin-top: 18px !important;
    }
  }

  /deep/ .el-checkbox {
    margin-right: 10px;
  }

  .caozuo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 96px;

    > span:nth-child(1) {
      margin-top: 0;
    }

    > span {
      display: inline-block;
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
  margin-bottom: 30px;
  margin-top: 10px;
  width: 100%;
}

.navtab ul li {
  display: inline-block;
  height: 42px;
  background: #f1f2f4;
  border-radius: 4px;
  padding: 0 20px;
  line-height: 42px;
  margin-right: 15px;
  font-size: 14px;
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
  border-bottom: 1px solid #bcbec6;
  padding-left: 20px;
  position: relative;
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
  border-top: 1px solid rgba($color: #7395DC, $alpha: 0.3);
  width: 100%;
  min-height: 180px;
  border-bottom: 1px solid rgba($color: #7395DC, $alpha: 0.3);
  margin-bottom: 52px;
  padding: 40px 0;
  // overflow: hidden;
}

.shaixuan.h-0 {
  padding: 0;
  min-height: unset;
  margin-bottom: 52px;
  border-bottom: none;
  overflow: hidden;
}

.shaixuan.h-0 .qyktj {
  display: none;
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
  justify-content: flex-start;
  width: 27.5%;
}

.items1 {
  width: 45%;
}

.items1 .el-form-item {
  width: unset;
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

.deleted-wrapper {
  flex: 1;
  text-align: right;
  color: #73757D;

  span {
    i {
      margin-right: 5px;
    }

    margin-right: 30px;
    cursor: pointer;
  }
}


::v-deep.cplx-el-input input {
  width: 230px;
}

::v-deep.el-select {
  width: 230px;
}

.h-0 {
  height: 0 !important;
}

/deep/ .el-checkbox__label {
  font-size: 18px;
}

/deep/ .el-input {
  font-size: 18px;
}

/deep/ .qyktj1 input.el-input__inner {
  height: 40px;
  line-height: 40px;
}
</style>
