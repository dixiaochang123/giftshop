<template>
  <div class="mycart">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>下单页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="xiadan">
      <p class="title">商品清单</p>
      <div class="spqd">
        <div class="spqdtop">
          <div style="width: 500px;text-align: center;">商品信息</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">单价</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">数量</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">运费</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">小计</div>
        </div>
        <div class="spqdnr">
          <div class="spxx" style="width: 500px;">
            <img :src="OrderInfo.productFile" style="border-radius: 4px;"/>
            <div class="info">
              <div class="name">{{OrderInfo.productName}}</div>
              <div class="js">母亲节真诚礼至特别巨献妈妈的礼物</div>
            </div>
          </div>
          <div style="width: 220px;text-align: center;font-size: 18px;">￥{{OrderInfo.unitPrice}}</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">{{OrderInfo.num}}</div>
          <div style="width: 220px;text-align: center;font-size: 18px;">￥{{'15'}}</div>
          <div style="font-size: 28px;font-weight: 500;color: #2D2E33;width: 220px;text-align: center;font-size: 18px;">
            ￥{{OrderInfo.price}}元
          </div>
        </div>
      </div>
      <div class="psfs">
        <div class="tit title" style="margin: 0;">配送方式</div>
        <el-select v-model="psfs">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <div class="tit2" style="font-size: 24px;">
          <span style="margin-right: 24px;">运费:</span>
          <span>¥15</span>
        </div>
      </div>

      <div class="title">
        设计方案
      </div>
      <div class="sjfa">
        <div v-for="(item,index) in productOnline" :key="item.id" class="lb" :class="{'sjfa-lb-active':sjfaLbActiveIndex===index}" @click="handleClickActive(index)">
          <img :src="item.fileName"/>
          <div class="tt">{{item.name}}</div>
        </div>
      </div>


      <div class="title" style="display: flex;align-items: center;justify-content: space-between;">
        <span>收货人信息</span>
        <div class="dz">
          <div class="qhdz">切换地址</div>
          <div class="dzgl" @click="dzglhandleclick">地址管理</div>
        </div>
      </div>

      <div class="shrxx" :class="{'shrxx-active':zffs===0}">
        <div class="dx" @click="zffs=0" :class="{'dx-active':zffs===0}">
          <span class="el-checkbox__inner"></span>
        </div>
        <div>喵大人</div>
        <div class="sj">15258888888</div>
        <div class="dzxx">北京市昌平区沙河镇宏福苑小区1号楼9单元309</div>
      </div>
      <div class="shrxx" :class="{'shrxx-active':zffs===1}">
        <div class="dx" @click="zffs=1" :class="{'dx-active':zffs===1}">
          <span class="el-checkbox__inner"></span>
        </div>
        <div>喵大人</div>
        <div class="sj">15258888888</div>
        <div class="dzxx">北京市昌平区沙河镇宏福苑小区1号楼9单元309</div>
      </div>

      <div class="liyan">
        <div class="title" style="margin-top: 0;">留言</div>
        <textarea v-model="textarea"></textarea>
      </div>
      <div class="jgyf">
        <div class="jg">
          <div class="t1">商品金额</div>
          <div class="t2">¥{{OrderInfo.unitPrice}}元</div>
        </div>
        <div class="jg">
          <div class="t1">运费</div>
          <div class="t2">¥15元</div>
        </div>
      </div>
      <div class="fkxx">
        <div class="jg">
          <div class="t1">总计</div>
          <div class="t2">¥{{OrderInfo.price}}元</div>
        </div>
        <div class="jsxx">
          <span style="margin-right: 18px;color: #73757D;">寄送至</span>
          <span style="margin-right: 50px;">北京市昌平区沙河镇宏福苑小区1号楼9单元309</span>
          <span style="margin-right: 18px;color: #73757D;">收货人:</span>
          <span>喵大人 15258888888</span>
        </div>
      </div>
      <div class="tjdd" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { productOnlineDesign, productOrderUpdate } from "@/request/modules/index.js";
export default {
  name: 'order',
  data() {
    return {
      options: [{
          value: '中通',
          label: '中通'
        }, {
          value: '顺丰',
          label: '顺丰'
        }, {
          value: '速运',
          label: '速运'
        }],
        psfs: '顺丰',
      zffs: 1,
      sjfaLbActiveIndex: 0,
      productOnline:[],
      textarea:''
    };
  },
  computed: {
    ...mapGetters(['OrderInfo']),
  },
  mounted() {
    this.productOnlineDesign();
  },
  methods: {
    productOnlineDesign(pageNum) {
      let data = {"data":{"productId":this.$route.query.id },"pageNum": 1,"pageSize":10}
      productOnlineDesign(data)
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            this.productOnline = data;
            // let records = data.records[0];
            // records.name = records.name.split('+');
            // this.productListPackage = data.records[0];
            console.log(11,data)
          }
        })
        .catch((error) => console.log(error));
    },
    handleClickActive(index) {
      this.sjfaLbActiveIndex = index;
    },
    submitOrder() {
      this.$router.push({
        path: "/shoppingMall/payment/payment"
      });
      let data = {
      "consignee": "喵大人",
      "consigneeAddress": "北京市昌平区沙河镇宏福苑小区1号楼9单元309",
      "consigneeMobile": "15258888888",
      "deliveryDate": this.$route.query.deliveryDate,
      "designFile": this.productOnline[0].fileName,
      "distributionMethod": this.psfs,
      "freight": 15,
      "id": parseInt(this.$route.query.id) ,
      "num": this.OrderInfo.num,
      "orderNo": this.OrderInfo.orderNo,
      "price": this.OrderInfo.unitPrice,
      "status": 1,
      "stayMessage": this.textarea
    }
      productOrderUpdate(data).then(res=>{


      }).catch(error=>console.log(error))
      //TODO: 根据ids生产订单，跳转支付页
      this.$router.push({
        path: "/shoppingMall/payment/payment"
      });
    },
    dzglhandleclick() {
      this.$router.push({
        path: "/shoppingMall/user/userCenter2/addressDetails",
        query: {
          current: 1
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.mycart {
  width: rpx2multiple(1380);
  margin: 96px auto 0;
}

.Breadcrumb {
  height: rpx2multiple(100);
}

.el-breadcrumb {
  font-size: 14px;
  height: rpx2multiple(100);
  line-height: rpx2multiple(100);
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

.xiadan {
  width: rpx2multiple(1380);
  margin: 0px auto;
  display: block;
}

.xiadan .title {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.spqdtop {
  height: 64px;
  background: #F6F9FE;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #BCBEC6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}

.spqdnr {
  background: #FFFFFF;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #BCBEC6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: none;
  width: 100%;
  padding: 32px 50px;
  box-sizing: border-box;
}

.spxx {
  display: flex;
  align-items: center;
}

.spxx img {
  width: 100px;
  height: 100px;
  margin-right: 15px;
}

.spxx .name {
  font-weight: 500;
  color: #2D2E33;
  font-size: 22px;
}

.spxx .js {
  font-size: 14px;
  margin-top: 20px;
  font-weight: 400;
  color: #73757D;
}

.psfs {
  display: flex;
  align-items: center;
  margin: 44px 0;
}

::v-deep.psfs .el-select {
  width: 230px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 4px;
  margin-left: 60px;
  margin-right: 40px;
}

::v-deep.psfs .el-select input {
  font-size: 18px;
  height: 42px;
  line-height: 42px;
}

.psfs .tit2 {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757D;
  line-height: 25px;
}

.sjfa .lb {
  width: 280px;
  background: #FFFFFF;
  border-radius: 8px;
  float: left;
  margin-right: 20px;
  border: 1px solid #BCBEC6;
}

.sjfa .lb.sjfa-lb-active {
  box-shadow: 0 7px 28px 0 rgba(178, 187, 206, 0.45);
  border: 1px solid #7395DC;
}

.sjfa .lb img {
  width: 256px;
  height: 256px;
  display: block;
  margin: 12px auto;
  border-radius: 4px;
}

.sjfa .lb .tt {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  padding: 5px 14px 16px;
  box-sizing: border-box;
}

.sjfa {
  display: flex;
  width: 100%;
  margin-bottom: 50px;
}

.shrxx {
  display: flex;
  align-items: center;
  height: 96px;
  background: #FFFFFF;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 20px;
}

.shrxx.shrxx-active {
  border: 1px solid #7395DC;
  box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
}

.shrxx img {
  width: 16px;
  height: 16px;
  margin-left: 24px;
  margin-right: 30px;
}

.shrxx .sj {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: 25px;
  margin-left: 36px;
  margin-right: 71px;
}

.dz {
  display: flex;
  align-items: center;
  justify-content: end;
}

.dz .qhdz {
  width: 112px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #FF946B;
  line-height: 42px;
  color: #FF946B;
  text-align: center;
  cursor: pointer;
}

.dz .dzgl {
  width: 112px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
}

.liyan {
  display: flex;
  margin-top: 44px;
}

.liyan textarea {
  width: 634px;
  height: 120px;
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #BCBEC6;
  margin-left: 60px;
  padding: 10px;
}

.jgyf .jg {
  display: flex;
  align-items: center;
  justify-content: end;
}

.jgyf .jg .t1 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: 30px;
  width: 100px;
  text-align: left;
  margin-bottom: 20px;
}

.jgyf .jg .t2 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 20px;
  font-weight: 500;
  color: #2D2E33;
  line-height: 30px;
  margin-left: 124px;
  width: 150px;
  text-align: right;
  margin-right: 27px;
}

.fkxx {
  width: 100%;
  height: 131px;
  background: #F6F9FE;
  border-radius: 8px;
  padding: 21px 27px;
  box-sizing: border-box;
}

.fkxx .jg {
  display: flex;
  align-items: center;
  justify-content: end;
  height: 60px;
}

.fkxx .jg .t1 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: 30px;
  width: 100px;
  text-align: left;
  margin-bottom: 21px;
}

.fkxx .jg .t2 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 21px;
  font-weight: 500;
  color: #2D2E33;
  line-height: 30px;
  margin-left: 124px;
  width: 150px;
  text-align: right;
}

.jsxx {
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: 22px;
  display: flex;
  justify-content: end;
}

.tjdd {
  background: #FF946B;
  border-radius: 4px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  margin-top: 20px;
  margin-left: 1060px;
  margin-bottom: 74px;
  padding: 11px 30px;
}

.dx {
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(115, 117, 125, 1);
  min-width: 16px;
  margin-left: 24px;
  margin-right: 18px;
  color: transparent;
}

.dx.dx-active {
  width: 16px;
  height: 16px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

.dx:hover,
.dx.dx-active {
  border-color: #7395dc;
}

.dx .el-checkbox__inner,
.dx .el-checkbox__inner:hover {
  border: 1px solid transparent;
  border-radius: unset;
}

.dx.dx-active .el-checkbox__inner {
  width: 100%;
  height: 100%;
  background-color: #7395dc;
}

.dx.dx-active .el-checkbox__inner:after {
  transform: rotate(45deg) scaleY(1);
  left: 5px;
  top: 2px;
}
</style>
