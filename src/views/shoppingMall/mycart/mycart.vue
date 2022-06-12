<template>
  <div class="mycart">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物车</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabs">
      <div class="header">
        <div class="header_1" style="width:40%;text-align: left;">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
                       style="font-size: 18px;">全选
          </el-checkbox>
          <span class="spxx">商品信息</span>
        </div>
        <div style="width:12%">单价</div>
        <div style="width:12%">数量</div>
        <div style="width:12%">金额</div>
        <div style="width:12%">我的设计</div>
        <div style="width:12%">操作</div>
      </div>
      <div :class="[item.checked?'tables_hover':'', 'tables']" v-for="(item,index) in tableData" :key="index">
        <div class="header_1" style="width:40%;text-align: left;">
          <el-checkbox v-model="item.checked" @change="handleCheckedCitiesChange"
                       style="font-size: 18px;"></el-checkbox>
          <div class="img-text" @click="handleclickdetail">
            <img width="100px" height="100px" src="../../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="img-text-text">
              <p>{{ item.p1 }}</p>
              <p class="p2">{{ item.p2 }}</p>
            </div>

          </div>
        </div>
        <div style="width:12%">¥{{ item.price }}</div>
        <div style="width:12%">{{ item.number }}</div>
        <div style="width:12%">¥{{ item.sumb }}</div>
        <div style="width:12%" class="caozuo"><span>{{ item.DesignNumber }}套</span><span
            style="color: #FF946B;cursor: pointer;" @click="viewDesign(item)">查看</span></div>
        <div style="width:12%" class="caozuo">
          <span class="dayang" style="cursor: pointer;" @click="payMoney(item)">打样</span><span
            style="color: #FF946B;cursor: pointer;"
            @click="deleted(item,index)">删除</span>
        </div>
      </div>

      <div class="header header_foot">
        <div class="header_1 header_1_1" style="width:40%;text-align: left;">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
                       style="font-size: 18px;">全选
          </el-checkbox>
        </div>
        <div style="width:12%"></div>
        <!-- <div style="width:12%"></div> -->
        <div style="width:18%;color: #73757D">已选 &nbsp;<span style="font-size:28px;color:#000;">{{ total }}</span>
          &nbsp;件商品
        </div>
        <div style="width:18%;color: #73757D">总价 &nbsp;<span class="zongjia" style="font-size:28px;color:#000;">¥{{ totalPrice }}</span>&nbsp;元
        </div>
        <div style="width:12%;text-align: right;" class="jiesuan">
          <span class="dayang" style="cursor: pointer;" @click="payMoney()">结算</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Mycart",
  data() {
    return {
      checkAll: false,
      isIndeterminate: false,
      tableData: [
        {
          checked: false,
          url: '',
          p1: '愿时光停在花',
          p2: '母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb: '3000.00',
          DesignNumber: "2",
        },
        {
          checked: false,
          url: '',
          p1: '愿时光停在花',
          p2: '母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb: '3000.00',
          DesignNumber: "2",
        },
        {
          checked: false,
          url: '',
          p1: '愿时光停在花',
          p2: '母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb: '3000.00',
          DesignNumber: "2",
        },
        {
          checked: false,
          url: '',
          p1: '愿时光停在花',
          p2: '母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb: '3000.00',
          DesignNumber: "2",
        },
        {
          checked: false,
          url: '',
          p1: '愿时光停在花',
          p2: '母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb: '3000.00',
          DesignNumber: "2",
        },
      ],
      multipleSelection: [],
    };
  },
  computed: {
    total() {
      return this.tableData.filter(item => item.checked == true).length
    },
    totalPrice() {
      return this.tableData.filter(item => item.checked == true).reduce((money, item) => money + Number(item.sumb), 0)
      // return this.tableData.filter(item=>item.checked==true)

    }
  },
  mounted() {
  },
  methods: {
    handleclickdetail() {
      this.$router.push({
        name: "Detail",
        // query: {
        //   //TODO: item传参
        //   id: item.id || 0
        // }
      });
    },
    viewDesign(item) {
      this.$router.push({
        path: "/shoppingMall/design/undetermined",
        query: {
          //TODO: item传参
          id: item.id || 0
        }
      });
    },
    payMoney(item) {
      // let payload = item ? {id: item.id || 0} : {ids: this.tableData.map(item => item.id).filter(id => id).join(",")};
      this.$router.push({
        name: "Order",
        //TODO: id|ids传参
        // query: {...payload}
      });
    },

    handleCheckAllChange(val) {
      console.log(val)
      if (val == true) {
        this.tableData.map(item => item.checked = true)
      } else {
        this.tableData.map(item => item.checked = false)
      }
      // this.checkedCities = val ? this.tableData.map(item=>item.checked==true) : this.tableData.map(item=>item.checked==false);
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = this.tableData.filter(item => item.checked == true).length;
      this.checkAll = checkedCount === this.tableData.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableData.length;
    },
    deleted(item, index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@function rpx2multiple1($px, $nub) {
  @return ($px / $nub) + px;
}

@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.mycart {
  width: rpx2multiple(1380);
  margin: 92px auto 0;
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

  &.tables_hover {
    box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
    border: 1px solid #7395dc;

    // .dayang {
    //   background: #7395DC;
    //   border-radius: 4px;
    //   border: 1px solid #7395DC;
    //   color: #ffffff;

    // }
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
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #73757D;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73757D;
    &:hover {
      background: #7395DC;
      border-radius: 4px;
      border: 1px solid #7395DC;
      color: #ffffff;
    }

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
    background: #FF946B;
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
/deep/ .el-checkbox__label {
  font-size: 18px;
}
.zongjia {
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2D2E33;
}
/deep/ .el-checkbox__inner {
  width: 16px;
  height: 16px;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #7395DC;
    border-color: #7395DC;
}
</style>
