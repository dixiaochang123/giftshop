<template>
  <div class="backtop">
    <div class="help">
      <div>
        <div class="kefu"></div>
        <p>联系客服</p>
      </div>
      <div>
        <div class="phon"></div>
        <p>联系电话</p>
      </div>
      <div>
        <div class="feishu"></div>
        <p>飞书账号</p>
      </div>
      <div>
        <div class="caozuo"></div>
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
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

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
  @return ($px / 1.3) + px;
}
.backtop {
  width: rpx2multiple(88);
  position: fixed;
  right: 50px;
  bottom: 100px;
  z-index: 100000000;
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
    width: rpx2multiple(60);
    border-bottom: solid 1px #7395dc;
    &:last-of-type {
      border: none;
    }
    > div {
      margin: rpx2multiple(20) auto 0;
    }
  }
  .kefu {
    width: rpx2multiple(36);
    height: rpx2multiple(36);
    background: url("../assets/img/slices/kefu.png") no-repeat center center;
    background-size: contain;
  }
  .phon {
    width: rpx2multiple(29);
    height: rpx2multiple(29);
    background: url("../assets/img/slices/phon.png") no-repeat center center;
    background-size: contain;
  }
  .feishu {
    width: rpx2multiple(36);
    height: rpx2multiple(36);
    background: url("../assets/img/slices/feishu.png") no-repeat center center;
    background-size: contain;
  }
  .caozuo {
    width: rpx2multiple(32);
    height: rpx2multiple(32);
    background: url("../assets/img/slices/caozuo.png") no-repeat center center;
    background-size: contain;
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
  height: rpx2multiple(88);
  background: #ffffff;
  border-radius: rpx2multiple(8);
  border: 1px solid #7395dc;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: rpx2multiple(25);
  box-sizing: border-box;
  margin-top: rpx2multiple(20);
  div {
    width: rpx2multiple(36);
    height: rpx2multiple(36);
    background: url("../assets/img/slices/top.png") no-repeat center center;
    background-size: contain;
  }
}
</style>
