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
      <div class="backtop_icon">
          <div></div>
         
      </div>


    
  </div>
</template>

<script>
export default {
  name: "Backtop",
};
</script>

<style lang="scss" scoped>
$height: 350px;
.backtop {
    width: 88px;
    position: fixed;
    right: 50px;
    bottom: 100px;
    z-index: 100000000;
}
.help {
    width:100%;
    height: 412px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #7395DC;
    > div {
        text-align: center;
        margin:0 auto;
        width: 60px;
        border-bottom: solid 1px #7395DC;
        > div {
            margin:20px auto 0;
        }
    }
    .kefu {
        width:36px;
        height: 36px;
        background: url("../assets/img/slices/kefu.png") no-repeat center center;
        background-size: contain;
    }
    .phon {
        width:29px;
        height: 29px;
        background: url("../assets/img/slices/phon.png") no-repeat center center;
        background-size: contain;
    }
    .feishu {
        width:36px;
        height: 36px;
        background: url("../assets/img/slices/feishu.png") no-repeat center center;
        background-size: contain;
    }
    .caozuo {
        width:32px;
        height: 32px;
        background: url("../assets/img/slices/caozuo.png") no-repeat center center;
        background-size: contain;
    }
    p {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2D2E33;
        line-height: 17px;
        margin:0;
        padding:12px 0 20px;
    }
}
.backtop_icon {
    width:100%;
    height: 88px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #7395DC;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 25px;
    box-sizing: border-box;
    margin-top:20px;
    div {
        width: 36px;
        height: 36px;
        background: url("../assets/img/slices/top.png") no-repeat center center;
        background-size: contain;
    }
}

</style>
