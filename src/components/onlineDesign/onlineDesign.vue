<template>
<div class="onlineBox">
    <!-- <el-button type="primary" @click="isShowModel=true">在线设计</el-button> -->
    <el-dialog :visible="dialogOnlineDesign" custom-class="on-lineDesign" fullscreen append-to-body :show-close="false">
        <div class="onlineBox-container">
            <div class="onlineBox-inner">
                <div class="header">
                    <div class="close-btn" @click="closeOnlineBox">
                        <img src="~@/assets/img/slices/close-icon.png" alt="">
                    </div>
                    <div class="tab-list-2-1">
                        <div @click="activeindex = index" v-for="(item, index) in specialtab" :key="item" :class="[index == activeindex ? 'active' : '',!open?'disabled':'']">{{ item }}</div>
                    </div>
                    <el-button class="form-btn" @click="save">保存</el-button>
                </div>
                <div class="online-body">
                    <!-- 颜色 -->
                    <template v-if="activeindex==0">
                        <onlineDesignColor :productOnlineDialogInfoColor="productOnlineDialogInfoColor"></onlineDesignColor>
                    </template>
                    <!-- 文字 -->
                    <template v-if="activeindex==1" >
                        <onlineDesignText :productOnlineDialogInfoText="productOnlineDialogInfoText"></onlineDesignText>
                    </template>
                    <!-- logo -->
                    <template v-if="activeindex==2">
                        <onlineDesignLogo :productOnlineDialogInfo="productOnlineDialogInfo"></onlineDesignLogo>
                    </template>
                    <!-- 图案 -->
                    <template v-if="activeindex==3">
                        <onlineDesignPic :productOnlineDialogInfo="productOnlineDialogInfo"></onlineDesignPic>
                    </template>
                    <!-- 暂不支持 -->
                    <div class="noorder-box" v-if="1==2">
                        <img src="~@/assets/img/slices/no-surport.png" alt="">
                        <p>本商品暂不支持～</p>
                    </div>
                </div>
            </div>
        </div>
    </el-dialog>
    <!-- 在线设计弹窗未保存提示 -->
    <el-dialog :visible="dialogSave" width="674px" custom-class="saveModel">
        <div class="saveBox">
            <div class="header">
                <img src="~@/assets/img/slices/close-icon.png" @click="dialogSave=false" class="close-btn" alt="">
            </div>
            <div class="content">
                您还未保存设计方案，关闭后此方案不会保存 <br>
                您确定要关闭吗？
            </div>
            <div class="btn-box">
                <el-button class="submit" @click="notSave">是的，我不需要保存</el-button>
                <el-button class="cancel" @click="dialogSave=false" type="text">取消</el-button>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
import onlineDesignColor from '@/components/onlineDesign/onlineDesignColor'
import onlineDesignText from '@/components/onlineDesign/onlineDesignText'
import onlineDesignLogo from '@/components/onlineDesign/onlineDesignLogo'
import onlineDesignPic from '@/components/onlineDesign/onlineDesignPic'
export default {
    components: {
        onlineDesignColor,
        onlineDesignText,
        onlineDesignLogo,
        onlineDesignPic
    },
    props:['dialogOnlineDesign','productOnlineDialogInfo'],
    data() {
        return {
            open:true,
            activeindex: 0,
            // specialtab: ['颜色', '文字', 'LOGO', '图案'],
            specialtab: ['颜色', '正面', '背面'],
            isShowModel: true,
            dialogSave: false,
            productOnlineDialogInfoColor:[],
            productOnlineDialogInfoText:[],
        }
    },
    watch:{
        productOnlineDialogInfo(val) {
            let productOnlineDialogInfoColor = val.list.filter(item=>item.typeId==1);
            let productOnlineDialogInfoText = val.list.filter(item=>item.typeId==1);
            productOnlineDialogInfoColor.map(item=>{
                item['color'] = item.color.replace(/-/g, ',')
            })
            this.productOnlineDialogInfoColor = productOnlineDialogInfoColor
            this.productOnlineDialogInfoText = productOnlineDialogInfoText
            console.log('this.productOnlineDialogInfoText',this.productOnlineDialogInfoText)


        }

    },
    methods: {
        //关闭在线设计
        closeOnlineBox() {
            this.dialogSave = true
            //this.isShowModel = false
        },
        save() {
            this.$parent.closeOnlineBox()
        },
        notSave() {
            this.dialogSave = false;
            this.$parent.closeOnlineBox()
        }
    }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1) + px;
}
.onlineBox {
    width: rpx2multiple(1380);
    margin: rpx2multiple(92) auto 0;
    font-family: PingFangSC-Regular, PingFang SC;
}

/deep/ .el-dialog__header {
    display: none !important;
    padding: 0;
}

/deep/ .el-dialog__body {
    padding: 0;
    height: 100%;
}

/deep/ .el-dialog {
    background-color: transparent;
    overflow-x: hidden;
    box-shadow: none;
}

.on-lineDesign {
    .onlineBox-container {
        // background-color: #fff;
        // background-image: linear-gradient(-180deg,rgba(0,0,0,.08),rgba(255,255,255,1));
        background-color: rgba($color: #ffffff, $alpha: 0.9);
        // opacity: 0.15;
        backdrop-filter: blur(50px);
        min-height: 100vh;
        height: 100%;
        width: inherit;

        .onlineBox-inner {
            max-width: rpx2multiple(1380);
            margin: 0 auto;
            display: flex;
            flex-direction: column;

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: rpx2multiple(60) 0;

                .close-btn {
                    cursor: pointer;
                }

                .form-btn {
                    width: 112px;
                    height: 42px;
                    background: #FF946B;
                    border-radius: 4px;
                    color: #fff;
                    font-size: 18px;
                    text-align: center;
                    cursor: pointer;
                }

                .tab-list-2-1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    div {
                        margin: 0 48px;
                        font-size: 24px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #73757D;
                        position: relative;
                        cursor: pointer;
                        text-align: center;
                        width: 72px;

                        &.active::after {
                            content: "";
                            width: 72px;
                            height: 6px;
                            background: #7395DC;
                            position: absolute;
                            bottom: -10px;
                            left: 0;
                            right: 0;
                            margin: auto;
                        }

                        &:hover {
                            opacity: .8;
                        }
                    }
                }
            }

            .online-body {
                flex: 1;
                overflow-y: auto;
                height: 100%;
                // padding-top: 30px;
                .noorder-box {
                    width: 428px;
                    height: 496px;
                    background: #FFFFFF;
                    box-shadow: 0px 10px 40px 0px rgba(129, 135, 150, 0.2);
                    border-radius: 23px;
                    border: 1px solid #F6F9FE;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    color: #000;
                    margin-top: 27px;
                    margin: 40px auto 40px;
                }
            }
        }
    }

}

.saveModel {
    .saveBox {
        background: linear-gradient(164deg, #FFE8DF 0%, #FFFFFF 100%);
        border-radius: rpx2multiple(12);
        padding: rpx2multiple(30);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: rpx2multiple(196);
            height: rpx2multiple(196);
            background: linear-gradient(147deg, #FFFFFF 0%, #7395DC 100%);
            opacity: 0.3;
            filter: blur(50px);
            bottom: 0;
            right: 0;
        }

        .header {
            display: flex;
            justify-content: flex-end;

            img {
                cursor: pointer;
                width: rpx2multiple(30);
            }
        }

        .content {
            padding: rpx2multiple(40) 0 rpx2multiple(50);
            text-align: center;
            font-weight: 400;
            color: #2D2E33;
            line-height: rpx2multiple(40);
            font-size: rpx2multiple(22);
        }

        .btn-box {
            .el-button {
                display: block;
                margin: 0 auto;
                border: none;

                &.submit {
                    width: rpx2multiple(320);
                    height: rpx2multiple(52);
                    background: #7395DC;
                    color: #FFFFFF;
                    font-size: rpx2multiple(22);
                    border-radius: rpx2multiple(260);
                }

                &.cancel {
                    color: #73757D;
                    margin-top: rpx2multiple(20);
                    line-height: rpx2multiple(30);
                    font-weight: 400;
                    font-size: rpx2multiple(22);
                }
            }
        }
    }
}
 .disabled{
    pointer-events:none
 }
</style>
