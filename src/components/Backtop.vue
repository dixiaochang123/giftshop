<template>
  <div class="backtop">
    <div class="help">
      <div class="kefu">
          <div></div>
          <p>联系客服</p>
        </div>
      <el-tooltip effect="light" content="电话：（+86）183 1089 7920" popper-class="backtop-item-popper-class" placement="left">
        <div class="phon">
          <div></div>
          <p>联系电话</p>
        </div>
      </el-tooltip>
      <el-tooltip effect="light" content="账号：183 1089 7920" popper-class="backtop-item-popper-class" placement="left">
        <div class="feishu">
          <div></div>
          <p>飞书账号</p>
        </div>
      </el-tooltip>
      <div class="caozuo">
          <div></div>
          <p>操作指南</p>
      </div>

    </div>
    <div @click="backtopclick" class="backtop_icon">
      <div></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Backtop",
  methods: {
    backtopclick() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);

          window.scrollTo(0, currentScroll - currentScroll / 5);
        }
      })();
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 350px;
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}

.backtop {
  width: rpx2multiple(64);
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 1000;
}

.help {
  width: 100%;
  height: rpx2multiple(412);
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #7395dc;

  > div {
    text-align: center;
    margin: 0 auto;
    width: rpx2multiple(48);
    border-bottom: solid 1px rgba($color: #7395dc, $alpha: 0.3);
    cursor: pointer;

    &:last-of-type {
      border: none;
    }

    > div {
      margin: rpx2multiple(20) auto 0;
    }
  }

  .kefu {
    > div {
      width: rpx2multiple(30);
      height: rpx2multiple(30);
      background: url("../assets/img/slices/kefu.png") no-repeat center center;
      background-size: 100% 100%;
    }

    &:hover {
      > div {
        background: url("../assets/img/slices/kefu-hover.png") no-repeat center
          center;
        background-size: 100% 100%;
      }

      p {
        color: #7395dc;
      }
    }
  }

  .phon {
    > div {
      width: rpx2multiple(30);
      height: rpx2multiple(30);
      background: url("../assets/img/slices/phon.png") no-repeat center center;
      background-size: 100% 100%;
    }

    &:hover {
      > div {
        background: url("../assets/img/slices/phon-hover.png") no-repeat center
          center;
        background-size: 100% 100%;
      }

      p {
        color: #7395dc;
      }
    }
  }

  .feishu {
    > div {
      width: rpx2multiple(30);
      height: rpx2multiple(30);
      background: url("../assets/img/slices/feishu.png") no-repeat center center;
      background-size: 100% 100%;
    }

    &:hover {
      > div {
        background: url("../assets/img/slices/feishu-hover.png") no-repeat
          center center;
        background-size: 100% 100%;
      }

      p {
        color: #7395dc;
      }
    }
  }

  .caozuo {
    > div {
      width: rpx2multiple(30);
      height: rpx2multiple(30);
      background: url("../assets/img/slices/caozuo.png") no-repeat center center;
      background-size: 100% 100%;
    }

    &:hover {
      > div {
        background: url("../assets/img/slices/caozuo-hover.png") no-repeat
          center center;
        background-size: 100% 100%;
      }

      p {
        color: #7395dc;
      }
    }
  }

  p {
    height: rpx2multiple(17);
    font-size: rpx2multiple(12);
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2d2e33;
    // line-height: rpx2multiple(17);
    margin: 0;
    padding: rpx2multiple(12) 0 rpx2multiple(20);
    white-space: nowrap;
  }
}

.backtop_icon {
  width: 100%;
  height: rpx2multiple(64);
  background: #ffffff;
  border-radius: rpx2multiple(8);
  border: 1px solid #7395dc;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: rpx2multiple(18);
  box-sizing: border-box;
  margin-top: rpx2multiple(12);
  cursor: pointer;

  div {
    width: rpx2multiple(30);
    height: rpx2multiple(30);
    background: url("../assets/img/slices/top.png") no-repeat center center;
    background-size: 100% 100%;
  }

  &:hover {
    div {
      background: url("../assets/img/slices/top-hover.png") no-repeat center
        center;
      background-size: 100% 100%;
    }
  }
}
</style>
<style>
.backtop-item-popper-class.el-tooltip__popper {
  transform: translateX(-20px);
  padding: 14px 18px;
  font-weight: bold;
  font-size: 16px;
}

.backtop-item-popper-class.el-tooltip__popper.is-light {
  border: none;
  background: #f1f2f4;
}

.backtop-item-popper-class.el-tooltip__popper.is-light[x-placement^="left"]
  .popper__arrow {
  border-left-color: #f1f2f4;
}

.backtop-item-popper-class.el-tooltip__popper.is-light[x-placement^="left"]
  .popper__arrow::after {
  border-left-color: #f1f2f4;
}
</style>
