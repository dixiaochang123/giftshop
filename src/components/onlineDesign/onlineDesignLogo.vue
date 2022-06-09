<template>
<div class="text-box">
    <div class="text-inner">
        <div class="item" v-for="(item, index) in LogoContent" :key="index">
            <div class="item-img">
                <vue-drag-resize parentLimitation v-if="item.imgUrl" h="80" w="200">
                    <img :src="item.imgUrl" alt="" width="100%"  height="100%">
                </vue-drag-resize>
            </div>
            <div class="item-control">
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
                    *注：LOGO尺寸为212*80px，格式为png
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
            LogoContent: [{
                imgUrl: '',
                fileList: [],
            }, {
                imgUrl: '',
                fileList: [],
            }, {
                imgUrl: '',
                fileList: [],
            }, {
                imgUrl: '',
                fileList: [],
            }]
        }
    },
    methods: {
        uploadLogo(file, fileList, index) {
            console.log(file, fileList, index);
            this.LogoContent[index].imgUrl = URL.createObjectURL(file.raw)
        }
    }
}
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
        padding-bottom: rpx2multiple(20);
        &::-webkit-scrollbar {
            background-color: #f8f8f8;
            height: rpx2multiple(12);
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
            margin-right: rpx2multiple(50);

            &:last-child {
                margin-right: 0;
            }

            .item-img {
                width: rpx2multiple(480);
                height: rpx2multiple(480);
                border-radius: 10px;
                background-color: #fff;
                margin-bottom: rpx2multiple(28);
                position: relative;
            }

            .item-control {
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
        }
    }
}
</style>
