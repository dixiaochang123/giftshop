<template>
	<div>


		<div class="cate-filter" style="margin-top: 100px;">
			<CateFilter :categories="categories" @choose="onChooseCategory" />
		</div>

		<!--类型-->
		<div class="page_type" style="border-bottom: none;height: auto;">
			<div class="container">
				<div class="type_name">公司福利</div>

			</div>
			<div class="container">
				<div class="navtab">
					<ul>
						<li @click="tabqh(1)" :class="{active:tabbq==1}"> 周年庆</li>
						<li @click="tabqh(2)" :class="{active:tabbq==2}">生日纪念</li>
						<li @click="tabqh(3)" :class="{active:tabbq==3}">入职纪念</li>
						<li @click="tabqh(4)" :class="{active:tabbq==4}">新婚庆贺</li>
						<li @click="tabqh(5)" :class="{active:tabbq==5}">亲子主题</li>
						<li @click="tabqh(6)" :class="{active:tabbq==6}">颁奖典礼</li>
						<li @click="tabqh(7)" :class="{active:tabbq==7}">员工关怀</li>

					</ul>
				</div>

			</div>
		</div>

		<div class="container product-list">
			<div class="type_list">
				<el-row :gutter="20">
					<el-col :span="6" v-for="item in 12" :key="item.id">
						<div class="grid-content">
							<div class="vase_item">
								<dl>
									<router-link to="/shoppingMall/detail/detail">
										<dt><img src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt=""></dt>
									</router-link>
									<dd class="price">
										<span>&yen;17.90</span>
										<span class="button" v-if="false">
											<el-button size="small" type="danger" @click="showDetail">极速购买</el-button>
										</span>
										<span class="product-orderQuantity">{{orderQuantity}}起订</span>
									</dd>
									<dd class="product-name">【最家】创意现代简约白瓷干花花瓶摆件</dd>
								</dl>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<el-pagination class="product-pagination" background layout="prev, pager, next,jumper" :total="1000">
			</el-pagination>
		</div>
		<fast-detail ref="FastDetail"></fast-detail>
	</div>
</template>

<script>
	import FastDetail from "../detail/fastDetailModal.vue";
	import CateFilter from "@/components/cateFilter/CateFilter";
	import Categories from "@/components/cateFilter/categories.js";
	export default {
		components: {
			FastDetail,
			CateFilter
		},
		data() {
			return {
				tabbq: 1,
				categories: Categories,
				options: [{
					value: '选项1',
					label: '新品上市'
				}, {
					value: '选项2',
					label: '销量从高到低'
				}, {
					value: '选项3',
					label: '销量从低到高'
				}, {
					value: '选项4',
					label: '价格从低到高'
				}, {
					value: '选项5',
					label: '价格从高到低'
				}],
				value: '',
				orderQuantity: 100
			}
		},
		mounted() {},
		methods: {
		//tab切换
			tabqh(zhi){
				this.tabbq=zhi
			},
			// 选择了某个第三级分类
			onChooseCategory(data, index) {
				console.log(data, index);
				// alert(`您选择了分类${data.name}，三级索引${index}`);
				console.log(data, index)
				this.$router.push({
					name: 'VaseDetail',
					query: {
						...data
					}
				})
			},
			//快速浏览
			showDetail() {
				this.$refs.FastDetail.show();
			}
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../../assets/css/shoppingMall/vaseDetail";

	.product-list {
		margin-bottom: 20px;
	}

	.vase_item {
		.product-name {
			margin-left: 0;
			font-size: 14px;
			font-weight: bold;
			line-height: 26px;
		}
	}

	.product-orderQuantity {
		float: right;
		font-size: 12px;
		color: #BCBEC6;
		padding-right: 10px;
	}

	.product-pagination {
		// display:inline-block;
		text-align: center;
		margin: 0 auto;

		/deep/ .el-pager {
			.active {
				background-color: #FF946B !important;
			}
		}
	}

	.navtab {
		height: 42px;
		margin-bottom: 15px;
	}

	.navtab ul li {
		display: inline-block;
		height: 42px;
		background: #F1F2F4;
		border-radius: 4px;
		padding: 0 20px;
		line-height: 42px;
		margin-right: 15px;
		font-size: 14px;
	}

	.navtab ul .active {
		background: #7395DC;
		color: #FFFFFF;
	}
</style>
