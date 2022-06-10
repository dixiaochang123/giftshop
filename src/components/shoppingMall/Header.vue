<template>
  <div>
    <div class="shopping_haeder">
      <div class="logo" @click="handleClicklogo"><img src="../../assets/img/slices/logo.png" alt=""></div>
      <div class="container">
        <div
            style="position: relative;flex: 1;height:100%;align-items: center; justify-content: flex-end;display: flex;">
          <div v-if="searchShow" class="searchs animate__animated"
               ref="searchs">
            <el-input placeholder="请输入内容" v-model="hotsearch" class="input-with-select">
              <i @click="handleSearchsToggle(false)" slot="prepend" class="el-icon-close"></i>
            </el-input>
            <div style="cursor: pointer;" class="icon-search"></div>
          </div>
          <div style="cursor: pointer;" v-if="!searchShow" class="icon-search" @click="handleSearchsToggle(true)"></div>
        </div>

        <div style="cursor: pointer;" class="icon-cat" @click="handleclickMycart"></div>
        <el-dropdown style="cursor: pointer;" @command="jumpOrderPage">
          <div class="icon-order"></div>
          <el-dropdown-menu slot="dropdown" placement="bottom">
            <el-dropdown-item icon="el-icon-circle-check" :command="{index:0,name:'常规订单'}">常规订单</el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit" :command="{index:1,name:'打样订单'}">打样订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div style="cursor: pointer;" class="icon-design" @click="viewMyDesign"></div>
        <img  v-if="true" @click="$router.push('/shoppingMall/user/userCenter2')"
             style="margin-left: 40px;border-radius: 50%;cursor: pointer;" width="60px" height="60px"
             src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" srcset="">
        <el-button v-if="false" class="icon-login" plain @click="$router.push('/login')">登陆</el-button>
        <el-button v-if="false" class="icon-register" @click="$router.push('/register')" type="text">注册</el-button>
        <!-- ------------- -->
        <div class="login" v-if="false">
          <div style="cursor: pointer;" class="icon-search">
          </div>

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
    handleClicklogo() {
      this.$router.push({
        path: "/shoppingMall/Home"
      });
    },
    viewMyDesign() {
      this.$router.push({
        path: "/shoppingMall/design/undetermined"
      });
    },
    jumpOrderPage(command) {
      console.log(command)
      if(command.index==1) {
        this.$router.push({
          name:'Proofing',
          query:{
            index:command.index
          }
        })
      } else {
        this.$router.push({
          name:'Ordercenter',
          query:{
            index:command.index
          }
        })
      }

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
  @return ($px / 1) + px;
}

.shopping_haeder {
  width: 100%;
  height: 96px;
  line-height: 96px;
  position: fixed;
  top: 0;
  z-index: 110;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 12px;
  background-color: rgba(255, 255, 255, 0.8);
  background-color: #000;
  .logo {
    width: rpx2multiple(180);
    height: rpx2multiple(48);
    position: absolute;
    top: 50%;
    margin-top: rpx2multiple(-24);
    left: 32px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 110;
    img {
      width:100%;
      height:100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

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