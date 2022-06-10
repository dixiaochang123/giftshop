<template>
  <el-dialog :visible.sync="isShowModal" title="添加地址" width="30%">
    <div style="padding: calc(10px /1.038062283737024) calc(20px / 1.038062283737024)">
      <div class="add_name" style="margin-bottom: calc(15px / 1.038062283737024)">
        <el-input v-model="addName" placeholder="请输入姓名"></el-input>
      </div>

      <div class="add_name" style="margin-bottom: calc(15px / 1.038062283737024)">
        <el-input v-model="addTel" placeholder="请输入联系方式"></el-input>
      </div>

      <div class="add_provinces">
                <span>
                   <el-select placeholder="省份/自治区" v-model="value">
                       <el-option
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           v-for="item in options">
                       </el-option>
                   </el-select>
                </span>

        <span>
                   <el-select placeholder="城市/地区" v-model="value">
                       <el-option
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           v-for="item in options">
                       </el-option>
                   </el-select>
                </span>
      </div>

      <div class="add_provinces">
                <span>
                   <el-select placeholder="街道" v-model="value">
                       <el-option
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           v-for="item in options">
                       </el-option>
                   </el-select>
                </span>

        <span>
                   <el-select placeholder="配送区域" v-model="value">
                       <el-option
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           v-for="item in options">
                       </el-option>
                   </el-select>
                </span>
      </div>

      <div class="add_name" style="margin-bottom: calc(15px / 1.038062283737024)">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="详细地址"
            v-model="textarea">
        </el-input>
      </div>

      <div class="add_name">
        <el-input v-model="addTel" placeholder="邮政编码"></el-input>
      </div>


    </div>
    <span slot="footer" class="dialog-footer">
            <el-button>确认</el-button>
            <el-button @click="isShowModal = false">取消</el-button>
        </span>
  </el-dialog>
</template>

<script>
export default {
  name: "fastDetail",
  data() {
    return {
      isShowModal: false,//是否展示发现modals
      addName: '', //姓名
      addTel: '', //联系方式
      textarea: '',
      options: [{
        value: '选项1',
        label: '厦门'
      }, {
        value: '选项2',
        label: '重庆'
      }],
      value: ''
    }
  },
  methods: {
    //是否现实模态框
    show() {
      this.isShowModal = true;
    },

  }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1)+px;
}

.add_provinces {
  display: flex;
  margin-bottom: rpx2multiple(10);

  span {
    display: inline-block;
    flex: 1;

  }

  span:nth-child(1) {
    padding-right: rpx2multiple(5);
  }

  span:nth-child(2) {
    padding-left: rpx2multiple(5);
  }
}


</style>
