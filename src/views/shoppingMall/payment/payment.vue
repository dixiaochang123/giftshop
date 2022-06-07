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
						<img src="assets/logo.png" />
						<div class="info">
							<div class="name">愿时光停在花</div>
							<div class="js">母亲节真诚礼至特别巨献妈妈的礼物</div>
						</div>
					</div>
					<div style="width: 220px;text-align: center;">￥30.00</div>
					<div style="width: 220px;text-align: center;">100</div>
					<div style="width: 220px;text-align: center;">￥00.00</div>
					<div style="font-size: 28px;font-weight: 500;color: #2D2E33;width: 220px;text-align: center;">
						￥3000.00元</div>
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
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3952e7959c2f481ca11628dbd2a938f2edb607f151ef253b87a0b18fa1ce9fc2" />
					<div class="tt">对公转账</div>
				</div>

				<div class="tsxx">请7天内上订单中心，上传对公支付凭证，超时订单将自动取消</div>
			</div>
			<div class="fkfs">

				<div class="zffs">
					<div class="dx" @click="zffs=2" :class="{active:zffs==2}"></div>
					<img
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1db3786ec66ef1cde7799c116c7abda29cb482067e5934cf87f4cabbe6faa1a" />
					<div class="tt">支付宝</div>
				</div>

				<div class="zfje"><span>支付</span>￥3000.00</div>
			</div>
			<div class="fkfs">

				<div class="zffs">
					<div class="dx" @click="zffs=3" :class="{active:zffs==3}"></div>
					<img
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng469920132fabdaa5a1874fc50c3a67687480ce260641cec8e462f2229a169e79" />
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
			<div class="tjdd">确认付款</div>
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
			}


		},
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

	.fkfs {
		height: 80px;
		background: #FFFFFF;
		border-radius: 8px;
		border: 1px solid #BCBEC6;
		display: flex;
		align-items: center;
		width: 100%;
		margin-bottom: 36px;
		justify-content: space-between;
	}

	.zffs {
		display: flex;
		align-items: center;

	}

	.fkfs .dx {
		border-radius: 2px;
		width: 16px;
		height: 16px;
		border: 1px solid rgba(115, 117, 125, 1);
		min-width: 16px;
		margin-left: 24px;
		margin-right: 80px;
	}

	.fkfs .active {
		width: 16px;
		height: 16px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38e71a23fbbf2cc1c7323e2ea35ca0734c1b19186a6c2733ffda061d17333f6b) 100% no-repeat;
	}

	.fkfs img {
		width: 32px;
		height: 32px;
		margin-right: 5px;
	}

	.fkfs .tsxx {
		height: 16px;
		font-size: 18px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #BCBEC6;
		line-height: 16px;
		margin-right: 15px;
	}

	.fkfs .zfje {
		height: 40px;
		font-size: 28px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #2D2E33;
		line-height: 40px;
		margin-right: 15px;

	}

	.fkfs .zfje span {
		height: 16px;
		font-size: 18px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #73757D;
		line-height: 16px;
		margin-right: 20px;
	}

	/* 支付框样式 */
	.am_payPwd {
		display: inline-block;

		width: 800px;
		height: 50px;

	}

	/* 支付框样式 */
	.shortInput {
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #BCBEC6;
		text-align: center;
		font-size: 20px;
		float: left;
		width: 40px;
		height: 40px;
		color: #333;
		outline: #ff0067;
	}

	/* 支付框样式 */
	.shortInput:not(:last-child) {
		margin-right: 10px;
	}

	.spend-pay-button {
		margin: 20px auto 20px 70px;
	}

	.spend-pay-1 {
		margin-top: 15px;
		position: relative;
	}

	.spend-pay-2 {
		font-size: 14px;
		font-weight: 550;
		display: inline-block;
		position: absolute;
		top: 0;
	}

	.spend-pay-3 {
		display: inline-block;
		font-size: 10px;
		color: #cccccc;
	}

	.spend-pay-4 {
		margin-left: 5px;
		display: inline-block;
		font-size: 18px;
		color: #7395DC;
		line-height: 50px;
	}

	/* 去支付按钮样式 */
	.spend-pay-5 .el-button--medium {
		padding: 10px 35px;
		border-radius: 17px;
	}

	.zfxx {
		width: 538px;
		height: 179px;
		background: #FFFFFF;
		border-radius: 8px;
		border: 1px solid #BCBEC6;
		padding: 15px 25px;
		box-sizing: border-box;
	}

	.zfxx .xx {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.zfxx .xx .t1 {
		width: 100px;
		margin-top: 20px;
		margin-right: 20px;
		color: #73757D;
	}

	.zfxx .xx .t2 {
		width: 100%;
		margin-top: 20px;
		margin-right: 20px;
	}

	.dgzf .tsxx {
		height: 25px;
		font-size: 18px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #BCBEC6;
		line-height: 25px;
		margin-top: 15px;
	}
</style>
