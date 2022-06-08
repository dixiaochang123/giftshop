<template>
  <div>
    <div class="shopping_haeder">
      <div class="container">
        <div
            style="position: relative;flex: 1;height:100%;align-items: center; justify-content: flex-end;display: flex;">
          <div v-if="searchShow" class="searchs animate__animated"
               ref="searchs">
            <el-input placeholder="请输入内容" v-model="hotsearch" class="input-with-select">
              <i @click="handleSearchsToggle(false)" slot="prepend" class="el-icon-close"></i>
            </el-input>
            <div class="icon-search"></div>
          </div>
          <div v-if="!searchShow" class="icon-search" @click="handleSearchsToggle(true)"></div>
        </div>

        <div class="icon-cat" @click="handleclickMycart"></div>
        <el-dropdown @command="jumpOrderPage">
          <div class="icon-order"></div>
          <el-dropdown-menu slot="dropdown" placement="bottom">
            <el-dropdown-item icon="el-icon-circle-check" command="regular">常规订单</el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit" command="proofing">打样订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="icon-design" @click="viewMyDesign"></div>
        <img v-if="true" @click="$router.push('/shoppingMall/user/userCenter2')"
             style="margin-left: 40px;border-radius: 50%;" width="60px" height="60px"
             src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
        <el-button class="icon-login" plain @click="$router.push('/login')">登陆</el-button>
        <el-button class="icon-register" @click="$router.push('/register')" type="text">注册</el-button>
        <!-- ------------- -->
        <div class="menu" v-if="false">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">
              <router-link to="#">所有商品</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/shoppingMall/detail/vase">装饰摆件</router-link>
            </el-menu-item>
            <el-menu-item index="4">布艺软饰</el-menu-item>
            <el-menu-item index="5">墙式挂壁</el-menu-item>
            <el-menu-item index="6">蜡艺香薰</el-menu-item>
            <el-menu-item index="7">创意家居</el-menu-item>
          </el-menu>
        </div>
        <div class="login" v-if="false">
          <div class="icon-search">
            <!-- <img width="32px" height="32px" src="@~/img/slices/icon-search.png" alt="" sizes="" srcset=""> -->
          </div>

          <!-- <div class="search">
                       <el-input
                               placeholder="热门搜索"
                               prefix-icon="el-icon-search"
                               v-model="hotsearch">
                       </el-input>
                   </div>

                    <div class="shopping_cart">
                        <div class="mine" @click="goUserCenter">
                            <el-avatar :size="'small'" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
                        </div>
                        <div class="cart">
                            <i class="el-icon-shopping-cart-2"></i>
                        </div>
                        <div class="erCode">3</div>
                    </div> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchShow: false,
      activeIndex: "1",
      activeIndex2: "1",
      hotsearch: "",
    };
  },
  mounted() {
  },
  methods: {
    viewMyDesign() {
      this.$router.push({
        path: "/shoppingMall/design/undetermined"
      });
    },
    jumpOrderPage(command) {
      this.$router.push({
        path: ({
          "regular": "/shoppingMall/ordercenter/ordercenter",
          "proofing": "/shoppingMall/ordercenter/proofing"
        })[command]
      });

    },
    goUserCenter() {
      this.$router.push("/shoppingMall/user/usercenter");
    },
    handleclickMycart() {
      this.$router.push({
        name: "Mycart",
        query: {
          name: "mycart",
        },
      });
    },
    toggleSearchsClasses(val) {
      this.$refs.searchs.classList[val ? "add" : "remove"]("animate__fadeInRight__1");
      this.$refs.searchs.classList[val ? "remove" : "add"]("animate__fadeOutRight__1");
    },
    handleSearchsToggle(flag) {
      if (flag) {
        this.searchShow = true;
        this.$nextTick(() => this.toggleSearchsClasses(true));
      } else {
        this.toggleSearchsClasses(false);
        setTimeout(() => {
          this.searchShow = false;
        }, 800);
      }
    }
  },
};
</script>

<style lang="scss">
.el-menu {
  background-color: transparent !important;
}

.el-avatar--small {
  margin-top: 18px !important;
}

.el-menu-item {
  a {
    text-decoration: none !important;
  }
}
</style>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1.2) + px;
}

.shopping_haeder {
  width: 100%;
  height: 92px;
  line-height: 92px;
  position: fixed;
  top: 0;
  z-index: 110;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 12px;
  background-color: rgba(255, 255, 255, 0.8);
  background-color: #000;

  .container {
    // width: 1200px;
    height: 100%;
    // margin: 0 auto;
    margin-right: rpx2multiple(65);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    .searchs {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      transition: all .3s ease-in-out;
      height: 100%;
    }

    .searchshide {
      display: none;
      transition: all 2s ease-in-out;
    }

    .input-with-select {
      width: 380px;

      .el-icon-close {
        font-size: rpx2multiple(32);
      }

      /deep/ .el-input-group__prepend {
        background-color: transparent;
        color: #ffffff;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: none;
        padding: 0 20px;
      }

      /deep/ .el-input__inner {
        background-color: transparent;
        border: none;
        color: #ffffff;
        font-size: rpx2multiple(24);
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 55px;
      }
    }

    .icon-search {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      margin-left: 40px;
      margin-right: 40px;
      background: url("../../assets/img/slices/icon-search.png") no-repeat center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-search-1.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }

    .icon-cat {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      margin-right: 40px;
      //   margin: 0 20px;
      background: url("../../assets/img/slices/icon-cat.png") no-repeat center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-cat-1.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }

    .icon-order {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      //   margin-left: 40px;
      background: url("../../assets/img/slices/icon-order.png") no-repeat center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-order-1.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }

    .icon-design {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      margin-left: 40px;
      background: url("../../assets/img/slices/icon-design.png") no-repeat center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-design-1.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }

    .icon-login {
      width: rpx2multiple(112);
      height: rpx2multiple(48);
      margin-left: 40px;
      border-radius: 6px;
      border: 2px solid #ffffff;
      background-color: transparent;
      font-size: rpx2multiple(22);
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;

      &:hover {
        color: #7395dc;
        border: 2px solid #7395dc;
      }
    }

    .icon-register {
      font-size: rpx2multiple(22);
      margin-left: 40px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;

      &:hover {
        color: #7395dc;
      }
    }

    .menu {
      /*flex: 2;*/
    }

    .login {
      height: 100%;

      .icon-search {
        width: rpx2multiple(32);
        height: rpx2multiple(32);
        background: url("../../assets/img/slices/icon-search.png") no-repeat center center;
        background-size: 100% 100%;
        margin-right: 40px;
      }

      .search {
        width: 250px;
        float: left;
        margin-left: 60px;
      }

      .shopping_cart {
        display: flex;
        float: right;

        .mine {
          width: 60px;
        }

        .cart {
          width: 60px;

          i {
            width: 28px;
            height: 28px;
            font-size: 28px;
            padding-top: 17px;
            font-weight: bold;
            color: #c0c4cc;
          }
        }
      }
    }
  }
}
</style>

<style>
.animate__fadeInRight__1 {
  animation-name: fadeInRight__1;
}

@keyframes fadeInRight__1 {
  from {
    opacity: 0;
    transform: translateX(0);
  }

  to {
    opacity: 1;
    transform: translateX(-100px);
  }
}

@keyframes fadeOutRight__1 {
  from {
    opacity: 1;
    transform: translateX(-100px);
  }

  to {
    opacity: 0;
    transform: translateX(0);
  }
}

.animate__fadeOutRight__1 {
  animation-name: fadeOutRight__1;
}
</style>