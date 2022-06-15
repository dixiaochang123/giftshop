<template>
  <div class="text-box">
    <div class="text-inner">
      <div class="item">
        <div class="item-img" ref="canvas">
          <img class="img" v-if="productOnlineDialogInfoPandC1.url" :src="productOnlineDialogInfoPandC1.url" alt="">
          <!-- <img class="img" v-if="productOnlineDialogInfoPandC1.url" src="../../assets/img/slices/2.png" alt=""> -->
          <vue-drag-resize h="100" x="170" y="200" parentLimitation v-if="remark">{{remark}}</vue-drag-resize>
          <vue-drag-resize x="200" y="270" parentLimitation v-if="LogoContent[0].imgUrl" w="120" h="120">
            <!-- <img v-if="LogoContent[0].imgUrl" :src="LogoContent[0].imgUrl"  crossorigin="https://image.tongtanggift.com" alt="" width="100%" height="100%"> -->
            <img v-if="LogoContent[0].imgUrl" :src="LogoContent[0].imgUrl"  crossorigin="anonymous" alt="" width="100%" height="100%">
          </vue-drag-resize>
          <vue-drag-resize x="200" y="270" parentLimitation v-if="LogoContent1[0].imgUrl" w="120" h="120">
            <!-- <img v-if="LogoContent[0].imgUrl" :src="LogoContent[0].imgUrl"  crossorigin="https://image.tongtanggift.com" alt="" width="100%" height="100%"> -->
            <img v-if="LogoContent1[0].imgUrl" :src="LogoContent1[0].imgUrl"  crossorigin="anonymous" alt="" width="100%" height="100%">
          </vue-drag-resize>
        </div>
        <div>
          <div class="item-control">
            <span class="span">文字</span>
            <el-input :autosize="{ minRows: 3, maxRows: 5}" v-model.trim="remark" show-word-limit type="textarea" :maxlength="maxlength" tabindex></el-input>
          </div>
          <div class="item-control1" v-for="(item, index) in LogoContent" :key="index">
            <span class="span">LOGO</span>
            <div>

              <div class="upload-img" v-if="item.imgUrl" :style="{ 'background-image': 'url(' + item.imgUrl + ')' }">
                <i class="el-icon-close" @click="item.imgUrl = ''"></i>
              </div>
              <el-upload accept="png" v-else action="##" :show-file-list="false" :limit="1" :on-change="(file, fileList) => uploadLogo(file, fileList, index)" :file-list="item.fileList" :auto-upload="false">
                <div class="upload-box">
                  <i class="el-icon-picture-outline"></i>
                  <span>LOGO 2</span>
                </div>
              </el-upload>
              <div class="tips">
                *注：请上传png格式，且尺寸不低于68
              </div>
            </div>
          </div>
          <div class="item-control1" v-for="(item, index) in LogoContent1" :key="index">
            <span class="span">LOGO</span>
            <div>

              <div class="upload-img" v-if="item.imgUrl" :style="{ 'background-image': 'url(' + item.imgUrl + ')' }">
                <i class="el-icon-close" @click="item.imgUrl = ''"></i>
              </div>
              <el-upload accept="png" v-else action="##" :show-file-list="false" :limit="1" :on-change="(file, fileList) => uploadLogo1(file, fileList, index)" :file-list="item.fileList" :auto-upload="false">
                <div class="upload-box">
                  <i class="el-icon-picture-outline"></i>
                  <span>LOGO 2</span>
                </div>
              </el-upload>
              <div class="tips">
                *注：请上传png格式，且尺寸不低于68
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import html2Canvas from "html2canvas";
import VueDragResize from "vue-drag-resize";
export default {
  components: {
    VueDragResize,
  },
  props: ["productOnlineDialogInfoPandC1"],
  data() {
    return {
      remark: "",
      maxlength: 16,
      LogoContent: [
        {
          imgUrl: "",
          fileList: [],
        },
      ],
      LogoContent1: [
        {
          imgUrl: "",
          fileList: [],
        },
      ],
      imgUrl: "",
      url: "",
    };
  },
  methods: {
    uploadLogo(file, fileList, index) {
      console.log(file, fileList, index);
      this.LogoContent[index].imgUrl = URL.createObjectURL(file.raw);
    },
    uploadLogo1(file, fileList, index) {
      console.log(file, fileList, index);
      this.LogoContent1[index].imgUrl = URL.createObjectURL(file.raw);
    },
    html2CanvasChange() {
      html2Canvas(this.$refs.canvas, {
        useCORS: true /*使用跨域*/,
      }).then((canvas) => {
        let dataurl = canvas.toDataURL("image/jpg");
        let file = this.base64toFile(dataurl, "file");
        var formData = new FormData();
        formData.append("file", file);
        this.url = dataurl;
        this.uploadImgByForm(formData);
      });
    },
    uploadImgByForm(formData) {
      console.log(formData, formData.getAll("file"));
      $.ajax({
        url: "https://shop.tongtanggift.com/hzld-file/file/uploadFile",
        type: "POST",
        data: formData,
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        success: function (response, status, xhr) {
          console.log(response);
        },
      });
    },
    base64toFile(dataurl, filename = "file") {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let suffix = mime.split("/")[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}
.text-box {
  .text-inner {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 20px;
    &::-webkit-scrollbar {
      background-color: #f8f8f8;
      height: 12px;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(216, 216, 216);
      border-radius: 100px;
      cursor: pointer;
    }
    .item {
      margin-right: 50px;
      display: flex;
      &:last-child {
        margin-right: 0;
      }
      .item-img {
        width: 560px;
        height: 560px;
        border-radius: 10px;
        background-color: #fff;
        margin-bottom: 58px;
        position: relative;
        margin-right: 90px;
        > img {
          width: 100%;
          height: 100%;
        }
      }

      .item-control {
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
        > .span {
          width: 60px;
          margin-right: 48px;
        }
      }
    }
  }
}
@font-face {
	font-family: 'DOUYU';
	src: url('../../assets/css/字魂4551号-元气满满体.ttf');
	font-weight: normal;
	font-style: normal;
  color:rgb(209,102,46)
}
/deep/ .content-container {
  font-size: 18px;
  line-height: 100px;
  text-align: center;
  font-family: DOUYU;
}
/deep/ .el-textarea__inner {
  width: 311px;
  // min-height: 80px;
  border-radius: 4px;
  border: 1px solid #bcbec6;
  font-size: 18px;
  /deep/ .el-textarea /deep/ .el-input__count {
    right: 60px;
  }
}
/deep/ .el-input__count {
  right: 60px;
}
.item-control1 {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  margin-bottom: 65px;
  > .span {
    width: 60px;
    margin-right: 48px;
  }
  .upload-box {
    border: 1px dashed #bcbec6;
    height: rpx2multiple(120);
    color: #73757d;
    font-size: rpx2multiple(18);
    width: rpx2multiple(120);
    border-radius: 8px;
    margin-bottom: rpx2multiple(30);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: rpx2multiple(30);
      margin-bottom: rpx2multiple(10);
    }
  }

  .tips {
    font-size: rpx2multiple(18);
    color: #bcbec6;
  }

  .upload-img {
    height: rpx2multiple(120);
    width: rpx2multiple(120);
    border-radius: 8px;
    margin-bottom: rpx2multiple(20);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    i {
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      border-radius: 100px;
      width: rpx2multiple(32);
      height: rpx2multiple(32);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: -16px;
      top: -16px;
    }
  }
}
</style>
