<template>
  <div>
    <div class="dibu">
      <div class="container">
        <div class="left">
          <div class="icon-text">
            <img width="494px" height="110px" src="../../assets/img/slices/slogan.png" alt="" sizes="" srcset="">
          </div>
          <div class="foot-text">
            <p>©2018-2021 &nbsp; &nbsp;版权所有 &nbsp;北京春湘科技有限公司 &nbsp; &nbsp; 京ICP备19049540号-1</p>
            <p>部分设计元素由客户提供，本站服务案例展示</p>
          </div>
        </div>
        <div class="bd"></div>
        <div class="right">
            <p class="p1"><span>操作指南</span><span>售后服务</span><span>帮助中心</span></p>
            <p><a href="javaScript:void(0);">账户注销</a><a href="javaScript:void(0);">问题反馈</a><a href="javaScript:void(0);">官网</a></p>
            <p><a href="javaScript:void(0);">密码找回</a><a href="javaScript:void(0);">投诉建议</a><a href="javaScript:void(0);">常见Q&A</a></p>
            <p><a href="javaScript:void(0);">下单流程</a><a href="javaScript:void(0);">在线客服</a><a href="javaScript:void(0);">帮助中心</a></p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
$height: 400px;
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}
.dibu {
  height: $height;
  background: #f2f3f9;
  .container {
    p {
      margin: 0;
      padding: 0;
      font-size: 12px;
      height: 33px;
      line-height: 33px;
    }
  }
}

.container {
  width: rpx2multiple(1380);
  height: $height;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.left {
  width: 600px;
  height: $height;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 80px 0;
  .icon-text {
    font-size: 48px;
    font-family: zihun3hao-yingxiongheiti, zihun3hao;
    font-weight: normal;
    color: #bcbec6;
    display: flex;
    // > div {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    // }
    // img {
    //   width: 44px;
    //   height: 44px;
    // }
  }
  .foot-text {
    text-align: left;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73757d;
    line-height: 17px;
  }
}
.bd {
  height: 300px;
  width: 1px;
  background-color: #e0e2e8;
}
.right {
  width: calc(100% - 599px);
  height: $height;
  box-sizing: border-box;
  padding:80px 0 0 150px;
  p {
      box-sizing: border-box;
    //   width: 625px;
    //   height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #73757D;
        // line-height: 25px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 24px;
        a {
            display: inline-block;
            width:100px;
            color: #73757D;
            text-decoration:none
        }
  }
  .p1 {
    //   height: 33px;
    //   line-height: 33px;
      padding-bottom: 60px !important;
      span {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #73757D;
      }
  }
  
}
</style>
