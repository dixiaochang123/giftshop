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
          <el-checkbox style="font-size: 18px;">全选</el-checkbox><span class="spxx">商品信息</span>
        </div>
        <div style="width:12%">单价</div>
        <div style="width:12%">数量</div>
        <div style="width:12%">金额</div>
        <div style="width:12%">我的设计</div>
        <div style="width:12%">操作</div>
      </div>
      <div class="tables" v-for="(item,index) in tableData" :key="index">
        <div class="header_1" style="width:40%;text-align: left;">
          <el-checkbox style="font-size: 18px;"></el-checkbox>
          <div class="img-text">
            <img width="100px" height="100px" src="../../../assets/img/slices/banner-1.png" alt="" srcset="">
            <div class="img-text-text">
              <p>{{item.p1}}</p>
              <p class="p2">{{item.p2}}</p>
            </div>

          </div>
        </div>
        <div style="width:12%">¥{{item.price}}</div>
        <div style="width:12%">{{item.number}}</div>
        <div style="width:12%">¥{{item.sumb}}</div>
        <div style="width:12%" class="caozuo"><span>{{item.DesignNumber}}套</span><span style="color: #FF946B;cursor: pointer;">查看</span></div>
        <div style="width:12%" class="caozuo">
          <span class="dayang" style="cursor: pointer;">打样</span><span style="color: #FF946B;cursor: pointer;">删除</span>
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
      tableData: [
        {
          url:'',
          p1:'愿时光停在花',
          p2:'母亲节真诚礼至特别巨献妈妈的礼物',
          price: "30.00",
          number: "100",
          sumb:'3000.00',
          DesignNumber: "2",
        },
        {
          url:'',
          p1:'愿时光停在花',
          p2:'母亲节真诚礼至特别巨献妈妈的礼物',
          price: "¥30.00",
          number: "100",
          sumb:'¥3000.00',
          DesignNumber: "2",
        },
        {
          url:'',
          p1:'愿时光停在花',
          p2:'母亲节真诚礼至特别巨献妈妈的礼物',
          price: "¥30.00",
          number: "100",
          sumb:'¥3000.00',
          DesignNumber: "2",
        },
        {
          url:'',
          p1:'愿时光停在花',
          p2:'母亲节真诚礼至特别巨献妈妈的礼物',
          price: "¥30.00",
          number: "100",
          sumb:'¥3000.00',
          DesignNumber: "2",
        },
        {
          url:'',
          p1:'愿时光停在花',
          p2:'母亲节真诚礼至特别巨献妈妈的礼物',
          price: "¥30.00",
          number: "100",
          sumb:'¥3000.00',
          DesignNumber: "2",
        },
      ],
      multipleSelection: [],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@function rpx2multiple1($px, $nub) {
  @return ($px / $nub) + px;
}
@function rpx2multiple($px) {
  @return ($px / 1.2) + px;
}
.mycart {
  width: 1200px;
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
  &:hover {
    box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
    border: 1px solid #7395dc;
    .dayang {
      background: #7395DC;
      border-radius: 4px;
      border: 1px solid #7395DC;
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
    >span {
      display: inline-block;
      height: 50%;
      box-sizing: border-box;
      margin-top: 20px;
    }
  }
  .dayang {
    width: 112px;
    padding:9px 0;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #73757D;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73757D;
    
  }
}
</style>
