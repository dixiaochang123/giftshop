<template>
  <div>
    <div class="shopping_haeder">
      <div class="logo" @click="handleClicklogo"><img src="../../assets/img/slices/logo.png" alt=""></div>
      <div class="container">
        <div style="position: relative;flex: 1;height:100%;align-items: center; justify-content: flex-end;display: flex;">
          <div v-if="searchShow" class="searchs animate__animated" ref="searchs">
            <el-autocomplete placeholder="请输入内容" v-model="hotsearch" :fetch-suggestions="fetchSuggestions" popper-class="search-header-popover-class" class="input-with-select search-header" ref="autocomplete">
              <i @click="handleSearchsToggle(false)" slot="prepend" class="el-icon-close"></i>
              <div style="color: #2D2E33;font-size: 20px;margin-bottom: 11px;">最近搜索</div>
              <div class="search-header-popover-class__results-container">
                <template >
                  <div v-for="item in hotsearchSuggestions" :class="{active:hotsearch===item.value}" :key="item.value" @click.stop="setHotsearch(item)">
                    {{ item.value }}
                  </div>
                </template>
              </div>
            </el-autocomplete>
            <div style="cursor: pointer;" class="icon-search"></div>
          </div>
          <div style="cursor: pointer;" v-if="!searchShow" class="icon-search" @click="handleSearchsToggle(true)"></div>
        </div>

        <div style="cursor: pointer;" class="icon-cat" @click="handleclickMycart"></div>
        <el-dropdown class="el-dropdown-cgdd" style="cursor: pointer;" @command="jumpOrderPage">
          <div class="icon-order"></div>
          <el-dropdown-menu slot="dropdown" placement="bottom-end">
            <el-dropdown-item  class="cgdd" :command="{index:0,name:'常规订单'}">
            <div @mouseenter="changguiIcon=true" @mouseleave="changguiIcon=false">
              <img v-show="changguiIcon==false" style="vertical-align: text-top;" src="../../assets/img/slices/常规订单.png" alt="" srcset="">
              <img v-show="changguiIcon==true" style="vertical-align: text-top;" src="../../assets/img/slices/常规订单-hover.png" alt="" srcset="">
              常规订单
            </div>
            </el-dropdown-item>
            <el-dropdown-item class="cgdd" :command="{index:1,name:'打样订单'}">
            <div @mouseenter="dayangIcon=true" @mouseleave="dayangIcon=false">
            <img v-if="dayangIcon==false" style="vertical-align: text-top;" src="../../assets/img/slices/打样订单.png" alt="" srcset="">
            <img v-if="dayangIcon==true" style="vertical-align: text-top;" src="../../assets/img/slices/打样订单-hover.png" alt="" srcset="">
            打样订单</div></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div style="cursor: pointer;margin-right: 40px;" class="icon-design" @click="viewMyDesign"></div>
        <el-dropdown :hide-on-click="false" style="display: flex;align-items: center;" placement="bottom-end" @command="onCommand">
          <img v-if="true" style="border-radius: 50%;cursor: pointer;" width="60px" height="60px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" srcset="">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="account">
              <div style="color: #2D2E33;font-weight: 500;font-size: 16px;">
                <span>喵大人gx</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided command="account">
              <div style="color: #71737B;font-size: 16px;">
                <i class="el-icon-user" style="font-size: 18px;"></i>
                <span style="padding-left:10px;">账号管理</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="address">
              <div style="color: #71737B;font-size: 16px;">
                <i class="el-icon-location-information" style="font-size: 18px;"></i>
                <span style="padding-left:10px;">地址信息</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item command="invoice">
              <div style="color: #71737B;font-size: 16px;">
                <i class="el-icon-tickets" style="font-size: 18px;"></i>
                <span style="padding-left:10px;">发票信息</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item divided command="logout">
              <div style="color: #71737B;font-size: 16px;">
                <i class="el-icon-switch-button" style="font-size: 18px;"></i>
                <span style="padding-left:10px;">退出登陆</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

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
      changguiIcon:false,
      dayangIcon:false,
      searchShow: false,
      activeIndex: "1",
      activeIndex2: "1",
      hotsearch: "",
      hotsearchSuggestions: [
        {
          value: "金属徽章",
        },
        {
          value: "亚克力徽章",
        },
        {
          value: "树脂徽章",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    setHotsearch(item) {
      document
        .querySelectorAll(".search-header-popover-class>div>div>ul>li")
        [this.hotsearchSuggestions.indexOf(item)].click();
    },
    fetchSuggestions(query, callback) {
      callback(this.hotsearchSuggestions);
    },
    onCommand(command) {
      switch (command) {
        case "account":
        case "address":
        case "invoice":
          this.$router.push({
            path: "/shoppingMall/user/userCenter2",
            query: {
              current: {
                account: 0,
                address: 1,
                invoice: 2,
              }[command],
            },
          });
          break;
        default:
          //TODO: 退出登录
          this.$router.push({
            path: "/login",
          });
          break;
      }
    },
    handleClicklogo() {
      this.$router.push({
        path: "/shoppingMall/Home",
      });
    },
    viewMyDesign() {
      this.$router.push({
        path: "/shoppingMall/design/undetermined",
      });
    },
    jumpOrderPage(command) {
      console.log(command);
      if (command.index == 1) {
        this.$router.push({
          name: "Proofing",
          query: {
            index: command.index,
          },
        });
      } else {
        this.$router.push({
          name: "Ordercenter",
          query: {
            index: command.index,
          },
        });
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
      this.$refs.searchs.classList[val ? "add" : "remove"](
        "animate__fadeInRight__1"
      );
      this.$refs.searchs.classList[val ? "remove" : "add"](
        "animate__fadeOutRight__1"
      );
    },
    handleSearchsToggle(flag) {
      if (flag) {
        this.searchShow = true;
        this.$nextTick(() => this.toggleSearchsClasses(true));
      } else {
        this.$refs.autocomplete.close();
        this.$nextTick(() => {
          this.toggleSearchsClasses(false);
          setTimeout(() => {
            this.searchShow = false;
          }, 800);
        });
      }
    },
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
  // background-color: rgba(255, 255, 255, 0.8);
  background-color: #2D2E33;

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
      width: 100%;
      height: 100%;
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
      transition: all 0.3s ease-in-out;
      height: 100%;
    }

    .searchshide {
      display: none;
      transition: all 2s ease-in-out;
    }

    .input-with-select {
      //width: 380px;

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
      background: url("../../assets/img/slices/icon-search.png") no-repeat
        center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-search-1.png") no-repeat
          center center;
        background-size: 100% 100%;
      }
    }

    .icon-cat {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      margin-right: 40px;
      //   margin: 0 20px;
      background: url("../../assets/img/slices/icon-cat.png") no-repeat center
        center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-cat-1.png") no-repeat
          center center;
        background-size: 100% 100%;
      }
    }

    .icon-order {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      //   margin-left: 40px;
      background: url("../../assets/img/slices/icon-order.png") no-repeat center
        center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-order-1.png") no-repeat
          center center;
        background-size: 100% 100%;
      }
    }

    .icon-design {
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      margin-left: 40px;
      background: url("../../assets/img/slices/icon-design.png") no-repeat
        center center;
      background-size: 100% 100%;

      &:hover {
        background: url("../../assets/img/slices/icon-design-1.png") no-repeat
          center center;
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
        background: url("../../assets/img/slices/icon-search.png") no-repeat
          center center;
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

<style lang="scss" scoped>
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
    transform: translateX(-230px);
  }
}

@keyframes fadeOutRight__1 {
  from {
    opacity: 1;
    transform: translateX(-230px);
  }

  to {
    opacity: 0;
    transform: translateX(0);
  }
}

.animate__fadeOutRight__1 {
  animation-name: fadeOutRight__1;
}

.search-header input {
  min-width: 438px;
}

.search-header-popover-class {
  background: linear-gradient(98deg, rgba(255, 255, 255, 0) 0%, #ffeee7 100%);
  padding: 27px;
  min-width: 624px;
  margin-left: -50px !important;
  margin-top: 40px !important;
}

.search-header-popover-class__results-container {
  display: flex;
}

.search-header-popover-class__results-container > * {
  padding: 7px 18px;
  margin-right: 14px;
  border-radius: 4px;
  background: #f1f2f4;
  color: #73757d;
  font-size: 18px;
}

.search-header-popover-class__results-container > *.active {
  background: #7395dc;
  color: #ffffff;
}
.search-header-popover-class.el-autocomplete-suggestion {
  width: 624px !important;
}
.search-header-popover-class.el-autocomplete-suggestion li {
  padding: 0;
  display: none;
}

.search-header-popover-class.el-autocomplete-suggestion li:nth-child(1) {
  display: block;
}

.search-header-popover-class.el-autocomplete-suggestion li.highlighted,
.search-header-popover-class.el-autocomplete-suggestion li:hover {
  background-color: transparent;
}
.el-popper,.el-dropdown-menu {
  top: 90px !important;
}
/deep/ .el-dropdown-menu__item {
  font-size: 18px;
  padding: 5px 20px;
  color: #71737B;
  > div span {
    font-size: 18px;
  }
}
/deep/ .el-dropdown-menu__item:focus, /deep/ .el-dropdown-menu__item:not(.is-disabled):hover {
    // background-color: none !important;
    color: #2D2E33;
}
/deep/ .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: transparent !important;
    > div {
      color: #2D2E33 !important;
    }
}
</style>