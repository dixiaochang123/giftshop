<template>
  <div class="mycart">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>下单页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="xiadan">
      <div class="title" style="margin-top: 0;">
        商品清单
      </div>
      <div class="spqd">
        <div class="spqdtop">
          <div style="width: 500px;text-align: center;">商品信息</div>
          <div style="width: 220px;text-align: center;">单价</div>
          <div style="width: 220px;text-align: center;">数量</div>
          <div style="width: 220px;text-align: center;">运费</div>
          <div style="width: 220px;text-align: center;">小计</div>
        </div>
        <div class="spqdnr">
          <div class="spxx" style="width: 500px;">
            <img src="assets/logo.png"/>
            <div class="info">
              <div class="name">愿时光停在花</div>
              <div class="js">母亲节真诚礼至特别巨献妈妈的礼物</div>
            </div>
          </div>
          <div style="width: 220px;text-align: center;">￥30.00</div>
          <div style="width: 220px;text-align: center;">100</div>
          <div style="width: 220px;text-align: center;">￥00.00</div>
          <div style="font-size: 28px;font-weight: 500;color: #2D2E33;width: 220px;text-align: center;">
            ￥3000.00元
          </div>
        </div>
      </div>
      <div class="psfs">
        <div class="tit title" style="margin: 0;">配送方式</div>
        <el-select style="margin: 0 25px;"></el-select>

        <div class="tit2">运费:¥0.00</div>
      </div>

      <div class="title">
        设计方案
      </div>
      <div class="sjfa">
        <div class="lb">
          <img src=""/>
          <div class="tt">方案1</div>
        </div>
        <div class="lb">
          <img src=""/>
          <div class="tt">方案2</div>
        </div>
      </div>


      <div class="title">
        收获人信息
      </div>
      <div class="dz">
        <div class="qhdz">切换地址</div>
        <div class="dzgl">地址管理</div>
      </div>
      <div class="shrxx">
        <div class="dx" @click="zffs=1" :class="{active:zffs==1}"></div>
        <div class="sj">15258888888</div>
        <div class="dzxx">北京市昌平区沙河镇宏福苑小区1号楼9单元309</div>
      </div>
      <div class="liyan" style="margin-top: 50px;">
        <div class="title" style="margin-top: 0;">留言</div>
        <textarea></textarea>
      </div>
      <div class="jgyf">
        <div class="jg">
          <div class="t1">商品金额</div>
          <div class="t2">¥3000.00元</div>
        </div>
        <div class="jg">
          <div class="t1">运费</div>
          <div class="t2">¥0.00元</div>
        </div>
      </div>
      <div class="fkxx">
        <div class="jg">
          <div class="t1">总计</div>
          <div class="t2">¥3000.00元</div>
        </div>
        <div class="jsxx">寄送至 北京市昌平区沙河镇宏福苑小区1号楼9单元309 收货人:喵大人 15258888888</div>
      </div>
      <div class="tjdd" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'order',
  data() {
    return {
      zffs: 1,

    };
  },
  methods: {
    submitOrder() {
      //TODO: 根据ids生产订单，跳转支付页
      this.$router.push({
        path: "/shoppingMall/payment/payment"
      });
    }
  }
}
</script>

<style>
.mycart {
  width: 1200px;
  margin: 92px auto 0;
}

.Breadcrumb {
  height: 100px;
}

.el-breadcrumb {
  font-size: 14px;
  height: 100px;
  line-height: 100px;
}

.el-breadcrumb__inner {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757d;
}

.el-breadcrumb__inner.is-link {
  font-size: 23.33333px;
  font-weight: 400;
}

.xiadan {
  width: 1200px;
  margin: 0px auto;
  display: block;
}

.xiadan .title {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: 30px;
  margin-top: 40px;
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
}

.spqdnr {
  height: 172px;
  background: #FFFFFF;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #BCBEC6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: none;
  width: 100%;
}

.spxx {
  display: flex;
  align-items: center;
}

.spxx img {
  width: 100px;
  height: 100px;
  margin-right: 15px;
  margin-left: 56px;
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
  margin: 50px 0;
}

.psfs select {
  width: 230px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #BCBEC6;
  margin-left: 60px;
  margin-right: 40px;
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
  height: 325px;
  background: #FFFFFF;
  box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
  border-radius: 8px;
  float: left;
  margin-right: 20px;
}

.sjfa .lb img {
  width: 256px;
  height: 256px;
  display: block;
  margin: 12px auto;
}

.sjfa .lb .tt {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: 25px;
}

.sjfa {
  display: flex;
  width: 100%;
}

.shrxx {
  display: flex;
  align-items: center;
  height: 96px;
  background: #FFFFFF;
  box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
  border-radius: 8px;
  width: 100%;
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
  margin-left: 40px;
  margin-right: 80px;
}

.dz {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 15px;
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
  margin-bottom: 44px;
}

.jgyf .jg .t2 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 44px;
  font-weight: 500;
  color: #2D2E33;
  line-height: 30px;
  margin-left: 124px;
  width: 150px;
  text-align: right;
  margin-right: 20px;
}

.fkxx {
  width: 100%;
  height: 131px;
  background: #F6F9FE;
  border-radius: 8px;
  padding: 20px;
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
  margin-bottom: 44px;
}

.fkxx .jg .t2 {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: 44px;
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

  width: 156px;
  height: 52px;
  background: #FF946B;
  border-radius: 4px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 52px;
  text-align: center;
  margin-top: 20px;
  margin-left: 1044px;
  margin-bottom: 20px;
}

.dx {
  border-radius: 2px;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(115, 117, 125, 1);
  min-width: 16px;
  margin-left: 24px;
  margin-right: 80px;
}

.active {
  width: 16px;
  height: 16px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38e71a23fbbf2cc1c7323e2ea35ca0734c1b19186a6c2733ffda061d17333f6b) 100% no-repeat;
}
</style>
