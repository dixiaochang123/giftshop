<template>
  <div>
    <div class="dibu">
      <div class="container">
        <div class="left">
          <div class="icon-text">
            <img width="494px" height="110px" src="../../assets/img/slices/slogan.png" alt="" sizes="" srcset="">
            <!-- <div>
              <img src="../../assets/img/slices/icon-design-1.png" alt="" sizes="" srcset="">
              <div>年轻</div>
            </div>
            <div style="width:100px;"></div>
            <div>
              <img src="../../assets/img/slices/icon-design-1.png" alt="" sizes="" srcset="">
              <div>专业</div>
            </div>
            <div style="width:100px;"></div>
            <div>
              <img src="../../assets/img/slices/icon-design-1.png" alt="" sizes="" srcset="">
              <div>高效</div>
            </div> -->
          </div>
          <div class="foot-text">
            <p>©2018-2021 &nbsp; &nbsp;版权所有 &nbsp;北京春湘科技有限公司 &nbsp; &nbsp; 京ICP备19049540号-1</p>
            <p>部分设计元素由客户提供，本站服务案例展示</p>
          </div>
        </div>
        <div class="bd"></div>
        <div class="right">
            <p class="p1"><span>操作指南</span><span>售后服务</span><span>帮助中心</span></p>
            <p><span>账户注销</span><span>问题反馈</span><span>官网</span></p>
            <p><span>密码找回</span><span>投诉建议</span><span>常见Q&A</span></p>
            <p><span>下单流程</span><span>在线客服</span><span>帮助中心</span></p>

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
$height: 350px;
.dibu {
  height: $height;
  background: #f2f3f9;
  .container {
    p {
      margin: 0;
      padding: 0;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
    }
  }
}

.container {
  width: 1200px;
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
        span {
            display: inline-block;
            width:100px;
        }
  }
  .p1 {
    //   height: 33px;
    //   line-height: 33px;
      padding-bottom: 40px !important;
      span {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #73757D;
      }
  }
  
}
</style>
