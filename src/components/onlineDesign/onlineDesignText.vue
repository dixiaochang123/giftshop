<template>
    <div class="text-box">
        <div class="text-inner">
            <div class="item">
                <div class="item-img">
                    <img class="img" src="https://image.tongtanggift.com/oss/cxkj/b-T恤-潮流款-在线设计\设计图/黑色正面底图.jpg" alt="">
                    <vue-drag-resize h="100" x="170" y="250" parentLimitation v-if="remark">{{remark}}</vue-drag-resize>
                </div>
                <div>

                    <div class="item-control">
                        <span>文字一</span>
                        <el-input :autosize="{ minRows: 5, maxRows: 8}" v-model.trim="remark" show-word-limit type="textarea" :maxlength="maxlength" tabindex></el-input>
                    </div>
                    <div class="item-control1">
                        <div class="upload-img" >
                            <i class="el-icon-close"></i>
                        </div>
                        <el-upload accept="png"  action="##" :show-file-list="false" :limit="1" :on-change="(file, fileList) => uploadLogo(file, fileList)" :file-list="LogoContent[0].fileList" :auto-upload="false">
                            <div class="upload-box">
                                <i class="el-icon-picture-outline"></i>
                                <span>LOGO 1</span>
                            </div>
                        </el-upload>
                        <div class="tips">
                            *注：LOGO尺寸为212*80px，格式为png
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';
export default {
    components: {
        VueDragResize
    },
    data() {
        return {
            remark:'静待花开静待花开静待花开静待花开静待花开',
            maxlength:16,
            LogoContent:[
               {
                 imgUrl: '',
                fileList: []
                }
            ]
        }
    },
    methods:{
        uploadLogo(file, fileList) {
            console.log(file, fileList, index);
            this.LogoContent[0].imgUrl = URL.createObjectURL(file.raw)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.text-box {
    .text-inner {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 20px;
        &::-webkit-scrollbar{
            background-color: #f8f8f8;
            height: 12px;
        }
        &::-webkit-scrollbar-button{
            display: none;
        }
        &::-webkit-scrollbar-thumb{
            background-color: rgb(216, 216, 216);
            border-radius: 100px;
            cursor: pointer;
        }
        .item {
            margin-right: 50px;
            display: flex;
            &:last-child{
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
                    >span {
                        width:60px;
                        margin-right: 48px;
                    }
               
            }
        }
    }
}
/deep/ .el-textarea__inner {
   width: 311px;
    // min-height: 80px;
    border-radius: 4px;
    border: 1px solid #BCBEC6;
}
.item-control1 {
                .upload-box {
                    border: 1px dashed #BCBEC6;
                    line-height: rpx2multiple(80);
                    height: rpx2multiple(80);
                    color: #73757D;
                    font-size: rpx2multiple(18);
                    width: rpx2multiple(480);
                    border-radius: 8px;
                    margin-bottom: rpx2multiple(30);
                }

                .tips {
                    font-size: rpx2multiple(18);
                    color: #BCBEC6;
                }

                .upload-img {
                    height: rpx2multiple(80);
                    width: rpx2multiple(480);
                    border-radius: 8px;
                    margin-bottom: rpx2multiple(30);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;

                    i {
                        background-color: rgba(0, 0, 0, .5);
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
