<template>
  <div class="text-box">
    <div class="text-inner">
      <div class="item">
        <div class="item-img" ref="canvas">
          <img class="img" v-if="productOnlineDialogInfoPandC1.url" :src="productOnlineDialogInfoPandC1.url" alt="">
          <vue-drag-resize h="100" x="170" y="200" parentLimitation v-if="remark">{{remark}}</vue-drag-resize>
          <vue-drag-resize x="200" y="270" parentLimitation v-if="LogoContent[0].imgUrl" w="120" h="120">
            <img v-if="LogoContent[0].imgUrl" :src="LogoContent[0].imgUrl" alt="" width="100%" height="100%">
          </vue-drag-resize>
        </div>
        <div>
          <div class="item-control">
            <span class="span">文字一</span>
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
                *注：LOGO尺寸为212*212px，格式为png
              </div>
            </div>
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
                *注：LOGO尺寸为212*212px，格式为png
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadFile } from "@/request/modules/index.js";
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
      imgUrl: "",
    };
  },
  methods: {
    uploadLogo(file, fileList, index) {
      console.log(file, fileList, index);
      this.LogoContent[index].imgUrl = URL.createObjectURL(file.raw);
    },
    html2CanvasChange() {
      html2Canvas(this.$refs.canvas, {
        useCORS: true,
      }).then((canvas) => {
        let dataurl = canvas.toDataURL('image/jpg');
        let blob = self.base64ToBlob(dataurl);
        let fileOfBlob = new File([blob],'截图.jpg'); // 重命名了
        // console.log(fileOfBlob)
        var formData = new FormData();
         formData.append('base64Imager', fileOfBlob)
        this.uploadImgByForm(formData);
      });
    },
    base64ToBlob(code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new window.Blob([uInt8Array], {
        type: contentType,
        name: "file_" + new Date().getTime() + ".jpg",
      });
    },
    uploadImgByForm(formData, callBack) {
      console.log(formData);
      // var formData = new FormData();
      // formData.append('file', file);
      $.ajax({
        url: "https://shop.tongtanggift.com/hzld-file/file/base64Imager",
        type: "POST",
        data: formData,
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        success: function (response, status, xhr) {
          console.log(response);
          callBack(response);
        },
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
/deep/ .content-container {
  font-size: 18px;
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
