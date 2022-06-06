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
        <div>全选</div>
        <div>商品信息</div>
        <div>单价</div>
        <div>数量</div>
        <div>金额</div>
        <div>我的设计</div>
        <div>操作</div>
      </div>
      <div class="tables">
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Mycart",
  data() {
    return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    };
  },
  computed: {},
  mounted() {},
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  },
};
</script>

<style lang="scss" scoped>
@function rpx2multiple1 ($px,$nub) {
  @return ($px / $nub)+px;
}
.mycart {
    width: 1200px;
    margin:rpx2multiple1(92,1.2) auto 0;
}
.tabs {
    width: 100%;
    margin:0 auto;
}
/deep/ .el-table__row {
    width: 100%;
    height: rpx2multiple1(172,1.5);
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #BCBEC6;
}
</style>
