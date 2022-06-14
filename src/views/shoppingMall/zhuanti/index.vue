<template>
	<div>


		<div class="cate-filter">
			<CateFilter :categories="categories" @choose="onChooseCategory" :bgcolor="bgcolor" />
		</div>

		<!--类型-->
		<div class="page_type page_type11" style="border-bottom: none;height: auto;">
			<div class="container">
				<div class="type_name" style="color: #2D2E33;font-weight: 500;">{{title}}</div>

			</div>
		</div>
			<div class="container">
				<div class="navtab">
					<ul>
						<li v-for="(item,index) in navtab[title]" :key="item" @click="tabqh(index)" :class="{active:tabbq==index}">{{item}}</li>


						<!-- <li @click="tabqh(1)" :class="{active:tabbq==1}"> 周年庆</li>
						<li @click="tabqh(2)" :class="{active:tabbq==2}">生日纪念</li>
						<li @click="tabqh(3)" :class="{active:tabbq==3}">入职纪念</li>
						<li @click="tabqh(4)" :class="{active:tabbq==4}">新婚庆贺</li>
						<li @click="tabqh(5)" :class="{active:tabbq==5}">亲子主题</li>
						<li @click="tabqh(6)" :class="{active:tabbq==6}">颁奖典礼</li>
						<li @click="tabqh(7)" :class="{active:tabbq==7}">员工关怀</li> -->

					</ul>
				</div>

			</div>

		<div class="container product-list">
			<div class="type_list">
        <div class="product-box">
          <div class="product-item" v-for="item in 15" :key="item.id">
            <router-link to="/shoppingMall/detail/detail">
              <div class="product-content">
                <div class="product-img">
                  <img style="width: 100%" src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt="">
                </div>
                <div class="product-desc">
                  <p>
                    <span>¥ {{`108`}}</span>
                    <span class="product-orderQuantity">{{orderQuantity}}起订</span>
                  </p>
                  <span>
                    创意现代简约
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <el-pagination class="product-pagination" background layout="prev, pager, next,jumper" :total="1000">
      </el-pagination>
		</div>
	</div>
</template>

<script>
	import { productCatalogueList, productPage } from "@/request/modules/index.js";
	import CateFilter from "@/components/cateFilter/CateFilter";
	import Categories from "@/components/cateFilter/categories.js";
	export default {
		components: {
			CateFilter
		},
		data() {
			return {
				bgcolor:true,
				tabbq: 0,
				categories: Categories,
				title:'',
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
				orderQuantity: 100,
				navtab:{
					'节日庆典':['春节','中秋节','端午节','重阳节','儿童节','妇女节','圣诞节','教师节','程序员节'],
					'公司福利':['周年庆','生日纪念','入职纪念','新婚庆贺','亲子主题','颁奖典礼','员工关怀'],
					'IP衍生':['公仔','T恤','钥匙扣','毯子','抱枕','手机壳'],
					'活动物资':['外宣活动','司庆活动'],
					'企业周边':['文化衫','包装袋','工牌','伴手礼'],
					'日常办公':['笔记本','书写笔','桌面收纳'],
					'商务礼赠':['日常拜访','高端礼赠'],
					'价格分区':['1-100','100-300','300-500','500以上'],
				}
			}
		},
		mounted() {
			this.title = this.$route.query.title
			this.productCatalogueList();
		},
		methods: {
			productCatalogueList() {
      productCatalogueList({ data: {} })
        .then((res) => {
          let { code, data } = res.data;
          if (code == 200) {
            data.map((item) => {
              Categories.map((k) => {
                if (k.name == item.name) {
                  item["icon"] = k.icon;
                  item["activeIcon"] = k.activeIcon;
                }
              });
            });
            this.categories = data;
            console.log(code, this.categories);
          }
        })
        .catch((error) => console.log(error));
    },
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
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../../assets/css/shoppingMall/vaseDetail";

	.cate-filter {
		// margin-top: rpx2multiple(96);
		width: 100%;
		//min-height: 176px;
		position: fixed;
		top: 96px;
		z-index: 1000;
	}
	.page_type11 {
		margin-top: rpx2multiple(276);
	}

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
		cursor: pointer;
	}

	.navtab ul .active {
		background: #7395DC;
		color: #FFFFFF;
	}
	.product-box {
  margin-bottom: 30px;
  .product-item {
    width: 20%;
    padding: 10px;
    margin-bottom: 40px;
    display: inline-block;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #fff;
    transition: all 0.5s;
    .product-content {
      .product-img {
        border-radius: 12px;
        overflow: hidden;
      }
      .product-desc {
        color: #2d2e33;
        font-size: 14px;
        font-weight: 700;
        > span {
          display: inline-block;
          margin-top: 10px;
        }
      }
    }
  }
  .product-item:hover {
    border-radius: 12px;
    border: 1px solid #7395dc;
    box-shadow: 12px 14px 49px 0px rgba(206, 206, 206, 0.54);
  }
}
</style>
