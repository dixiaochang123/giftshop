<template>
  <div class="mycart">
    <div class="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>付款</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="xiadan">
      <div class="title">
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
            <img src="../../../assets/img/slices/banner-1.png"/>
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


      <div class="title">
        收获人信息
      </div>

      <div class="shrxx">
        <div class="sj">喵大人</div>
        <div class="sj">15258888888</div>
        <div class="dzxx">北京市昌平区沙河镇宏福苑小区1号楼9单元309</div>
      </div>
      <div class="title">
        支付方式
      </div>
      <div class="fkfs">

        <div class="zffs">
          <div class="dx" @click="zffs=1" :class="{active:zffs==1}"></div>
          <img
              src="../../../assets/img/slices/duigongicon.png"/>
          <div class="tt">对公转账</div>
        </div>

        <div class="tsxx">请7天内上订单中心，上传对公支付凭证，超时订单将自动取消</div>
      </div>
      <div class="fkfs">

        <div class="zffs">
          <div class="dx" @click="zffs=2" :class="{active:zffs==2}"></div>
          <img
              src="../../../assets/img/slices/zhifubaoicon.png"/>
          <div class="tt">支付宝</div>
        </div>

        <div class="zfje"><span>支付</span>￥3000.00</div>
      </div>
      <div class="fkfs">

        <div class="zffs">
          <div class="dx" @click="zffs=3" :class="{active:zffs==3}"></div>
          <img
              src="../../../assets/img/slices/weixinicon.png"/>
          <div class="tt">微信</div>
        </div>


      </div>
      <div class="dgzf" v-show="zffs==1">
        <div class="title">
          对公支付信息
        </div>
        <div class="zfxx">
          <div class="xx">
            <span class="t1">公司名称</span>
            <span class="t2">北京春湘科技有限公司</span>
          </div>
          <div class="xx">
            <span class="t1">开户行</span>
            <span class="t2">XXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
          <div class="xx">
            <span class="t1">银行卡号</span>
            <span class="t2">XXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
        </div>
        <div class="tsxx">请在7天内到订单中心上传对公支付凭证，超时订单将自动取消</div>
      </div>
      <div class="zfmm" v-show="zffs==2">
        <div class="title">
          支付宝支付密码
        </div>
        <div class="spend-pay-1">

          <!-- 支付框 -->
          <div class='am_payPwd' :id="`ids_${id}`">
            <input type="password" autocomplete="new-password" maxlength="1" @input="changeInput"
                   @click="changePwd" v-model="pwdList[i]" @keyup="keyUp($event)"
                   @keydown="oldPwdList = pwdList.length" class="shortInput" v-for="(v, i) in 6" :key="i">
            <div class="spend-pay-4">忘记密码？</div>
          </div>
          <!--后一篇文章说明 autocomplete="new-password"作用-->
          <!-- 结束 -->
        </div>
        <div>
          <div class="spend-pay-3">请输入6位数字支付密码</div>

        </div>

      </div>
      <div class="tjdd" @click="save">确认付款</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'payment',
  data() {
    return {
      zffs: 1,
      //支付框
      pwdList: [],
      oldPwdList: [],
      isDelete: false,
      ipt: '',
      //结束
    };
  },
  //支付框
  props: {
    id: String, // 当一个页面有多个密码输入框时，用id来区分
    default: '1'
  },
  //结束
  mounted() {
    //支付框　
    this.ipt = document.querySelectorAll(`#ids_${this.id} .shortInput`)
  },

  methods: {
    //   支付框
    keyUp(ev) {
      let index = this.pwdList.length
      if (!index) return
      if (ev.keyCode === 8) {
        this.isDelete = true
        if (this.oldPwdList === this.pwdList.length) {
          if (index === this.pwdList.length) {
            this.pwdList.pop()
          }
          index--
        } else {
          index > 0 && index--
        }
        this.ipt[index].focus()
      } else if (this.isDelete && index === this.pwdList.length && /^\d$/.test(ev.key)) {
        this.isDelete = false
        this.pwdList.pop()
        this.pwdList.push(ev.key)
        this.ipt[this.pwdList.length] && this.ipt[this.pwdList.length].focus()
      }
      this.$emit('getPwd', this.pwdList.join(''))
    },
    //支付框
    changePwd() {
      let index = this.pwdList.length
      index === 6 && index--
      this.ipt[index].focus()
    },
    //支付框
    changeInput() {
      let index = this.pwdList.length
      let val = this.pwdList[index - 1]
      if (!/[0-9]/.test(val)) {
        this.pwdList.pop()
        return
      }
      if (!val) {
        this.pwdList.pop()
        index--
        if (index > 0) this.ipt[index - 1].focus()
      } else {
        if (index < 6) this.ipt[index].focus()
      }
    },
    save() {
      this.$router.push({
        name:'Ordercenter'
      })
    }


  },
}
</script>

<style lang="scss">
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.mycart {
  width: rpx2multiple(1380);
  margin: rpx2multiple(92) auto 0;
}

.Breadcrumb {
  height: rpx2multiple(100);
}

.el-breadcrumb {
  font-size: rpx2multiple(14);
  height: rpx2multiple(100);
  line-height: rpx2multiple(100);
}

.el-breadcrumb__inner {
  font-size: rpx2multiple(15);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757d;
}

.el-breadcrumb__inner.is-link {
  font-size: rpx2multiple(23.33333);
  font-weight: 400;
}

.xiadan {
  width: rpx2multiple(1380);
  margin: 0px auto;
  display: block;
}

.xiadan .title {
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: rpx2multiple(30);
  margin-top: rpx2multiple(10);
  margin-bottom: rpx2multiple(16);
}

.spqdtop {
  height: rpx2multiple(64);
  background: #F6F9FE;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #BCBEC6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.spqdnr {
  height: rpx2multiple(166);
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
  width: rpx2multiple(100);
  height: rpx2multiple(100);
  margin-right: rpx2multiple(15);
  margin-left: rpx2multiple(56);
}

.spxx .name {
  font-weight: 500;
  color: #2D2E33;
  font-size: rpx2multiple(22);
}

.spxx .js {
  font-size: rpx2multiple(14);
  margin-top: rpx2multiple(16);
  font-weight: 400;
  color: #73757D;
}

.psfs {
  display: flex;
  align-items: center;
  margin: rpx2multiple(50) 0;
}

.psfs select {
  width: rpx2multiple(230);
  height: rpx2multiple(42);
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #BCBEC6;
  margin-left: rpx2multiple(60);
  margin-right: rpx2multiple(40);
}

.psfs .tit2 {
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757D;
  line-height: rpx2multiple(25);
}

.sjfa .lb {
  width: rpx2multiple(280);
  height: rpx2multiple(325);
  background: #FFFFFF;
  box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
  border-radius: 8px;
  float: left;
  margin-right: rpx2multiple(20);
}

.sjfa .lb img {
  width: rpx2multiple(256);
  height: rpx2multiple(256);
  display: block;
  margin: rpx2multiple(12) auto;
}

.sjfa .lb .tt {
  display: block;
  width: 100%;
  text-align: center;
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: rpx2multiple(25);
}

.sjfa {
  display: flex;
  width: 100%;
}

.shrxx {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 8px 31px 0px rgba(178, 187, 206, 0.45);
  border-radius: 8px;
  width: 100%;
  padding: 31px 21px;
  box-sizing: border-box;
}

.shrxx img {
  width: rpx2multiple(16);
  height: rpx2multiple(16);
  margin-left: rpx2multiple(24);
  margin-right: rpx2multiple(30);
}

.shrxx .sj {
  height: rpx2multiple(25);
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: rpx2multiple(25);
  margin-right: rpx2multiple(35);
}

.shrxx .sj + .dzxx {
  margin-left: rpx2multiple(35);
}

.dz {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: rpx2multiple(15);
}

.dz .qhdz {
  width: rpx2multiple(112);
  height: rpx2multiple(42);
  border-radius: 4px;
  border: 1px solid #FF946B;
  line-height: rpx2multiple(42);
  color: #FF946B;
  text-align: center;
  cursor: pointer;
}

.dz .dzgl {
  width: rpx2multiple(112);
  height: rpx2multiple(42);
  line-height: rpx2multiple(42);
  text-align: center;
  margin-left: rpx2multiple(20);
  cursor: pointer;
}

.liyan {
  display: flex;
}

.liyan textarea {
  width: rpx2multiple(634);
  height: rpx2multiple(120);
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #BCBEC6;
  margin-left: rpx2multiple(60);
  padding: 10px;
}

.jgyf .jg {
  display: flex;
  align-items: center;
  justify-content: end;
}

.jgyf .jg .t1 {
  height: rpx2multiple(30);
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: rpx2multiple(30);
  width: rpx2multiple(100);
  text-align: left;
  margin-bottom: rpx2multiple(44);
}

.jgyf .jg .t2 {
  height: rpx2multiple(30);
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: rpx2multiple(44);
  font-weight: 500;
  color: #2D2E33;
  line-height: rpx2multiple(30);
  margin-left: rpx2multiple(124);
  width: rpx2multiple(150);
  text-align: right;
  margin-right: rpx2multiple(20);
}

.fkxx {
  width: 100%;
  height: rpx2multiple(131);
  background: #F6F9FE;
  border-radius: 8px;
  padding: rpx2multiple(20);
  box-sizing: border-box;
}

.fkxx .jg {
  display: flex;
  align-items: center;
  justify-content: end;
  height: rpx2multiple(60);
}

.fkxx .jg .t1 {
  height: rpx2multiple(30);
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2D2E33;
  line-height: rpx2multiple(30);
  width: rpx2multiple(100);
  text-align: left;
  margin-bottom: rpx2multiple(44);
}

.fkxx .jg .t2 {
  height: rpx2multiple(30);
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Medium, PingFang SC;
  margin-bottom: rpx2multiple(44);
  font-weight: 500;
  color: #2D2E33;
  line-height: rpx2multiple(30);
  margin-left: rpx2multiple(124);
  width: rpx2multiple(150);
  text-align: right;
}

.jsxx {
  height: rpx2multiple(22);
  font-size: rpx2multiple(16);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: rpx2multiple(22);
  display: flex;
  justify-content: end;
}

.tjdd {
  padding: 10px;
  background: #FF946B;
  border-radius: 4px;
  font-size: rpx2multiple(22);
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  margin-top: rpx2multiple(26);
  margin-left: rpx2multiple(1044);
  margin-bottom: rpx2multiple(26);
}

.fkfs {
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #BCBEC6;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: rpx2multiple(32);
  justify-content: space-between;
  padding: 21px;
  box-sizing: border-box;
}

.zffs {
  display: flex;
  align-items: center;

}

.fkfs .dx {
  border-radius: 2px;
  width: rpx2multiple(16);
  height: rpx2multiple(16);
  border: 1px solid rgba(115, 117, 125, 1);
  min-width: rpx2multiple(16);
  margin-right: rpx2multiple(59);
}

.fkfs .active {
  width: rpx2multiple(16);
  height: rpx2multiple(16);
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38e71a23fbbf2cc1c7323e2ea35ca0734c1b19186a6c2733ffda061d17333f6b) 100% no-repeat;
}

.fkfs img {
  width: rpx2multiple(21);
  height: rpx2multiple(21);
  margin-right: rpx2multiple(5);
}

.fkfs .tsxx {
  height: rpx2multiple(16);
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: rpx2multiple(16);
  margin-right: rpx2multiple(15);
}

.fkfs .zfje {
  height: rpx2multiple(40);
  font-size: rpx2multiple(24);
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2D2E33;
  line-height: rpx2multiple(40);

  display: flex;
  align-items: center;

}

.fkfs .zfje span {
  height: rpx2multiple(16);
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #73757D;
  line-height: rpx2multiple(16);
  margin-right: rpx2multiple(20);
}

/* 支付框样式 */
.am_payPwd {
  display: inline-block;

  width: rpx2multiple(800);
  height: rpx2multiple(50);

}

/* 支付框样式 */
.shortInput {
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #BCBEC6;
  text-align: center;
  font-size: rpx2multiple(20);
  float: left;
  width: rpx2multiple(40);
  height: rpx2multiple(40);
  color: #333;
  outline: #ff0067;
}

/* 支付框样式 */
.shortInput:not(:last-child) {
  margin-right: rpx2multiple(10);
}

.spend-pay-button {
  margin: rpx2multiple(20) auto rpx2multiple(20) rpx2multiple(70);
}

.spend-pay-1 {
  margin-top: rpx2multiple(15);
  position: relative;
}

.spend-pay-2 {
  font-size: rpx2multiple(14);
  font-weight: 550;
  display: inline-block;
  position: absolute;
  top: 0;
}

.spend-pay-3 {
  display: inline-block;
  font-size: rpx2multiple(10);
  color: #cccccc;
}

.spend-pay-4 {
  margin-left: 15px;
  display: inline-block;
  font-size: rpx2multiple(18);
  color: #7395DC;
  line-height: rpx2multiple(50);
}

/* 去支付按钮样式 */
.spend-pay-5 .el-button--medium {
  padding: rpx2multiple(10) rpx2multiple(35);
  border-radius: rpx2multiple(17);
}

.zfxx {
  width: rpx2multiple(538);
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #BCBEC6;
  padding: 0 rpx2multiple(26) rpx2multiple(27);
  box-sizing: border-box;
}

.zfxx .xx {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.zfxx .xx .t1 {
  width: rpx2multiple(100);
  margin-top: rpx2multiple(20);
  margin-right: rpx2multiple(20);
  color: #73757D;
}

.zfxx .xx .t2 {
  width: 100%;
  margin-top: rpx2multiple(20);
  margin-right: rpx2multiple(20);
}

.dgzf .tsxx {
  height: rpx2multiple(25);
  font-size: rpx2multiple(18);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BCBEC6;
  line-height: rpx2multiple(25);
  margin-top: rpx2multiple(15);
}
</style>
