<template>
<div class="onlineBox">
    <el-button type="primary" @click="closeOnlineBox">在线设计</el-button>
    <onlineDesign v-if="dialogOnlineDesign"></onlineDesign>
</div>
</template>

<script>
import onlineDesign from '@/components/onlineDesign/onlineDesign'
export default {
    components: {
        onlineDesign
    },
    data() {
        return {
            dialogOnlineDesign:false
        }
    },
    methods: {
        //关闭在线设计
        closeOnlineBox() {
            this.dialogOnlineDesign = true
        }
    }
}
</script>

<style lang="scss" scoped>
.onlineBox {
    width: 1200px;
    margin: 92px auto 0;
    font-family: PingFangSC-Regular, PingFang SC;
}

/deep/ .el-dialog__header {
    display: none !important;
    padding: 0;
}

/deep/ .el-dialog__body {
    padding: 0;
}

/deep/ .el-dialog {
    background-color: transparent;
    overflow: hidden;
    box-shadow: none;
}

.on-lineDesign {
    .onlineBox-container {
        background-color: #fff;
        background-image: linear-gradient(-180deg,rgba(0,0,0,.08),rgba(255,255,255,1));
        height: 100vh;
        width: inherit;

        .onlineBox-inner {
            max-width: 1580px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 60px 0;

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
                padding-top: 30px;
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
        border-radius: 12px;
        padding: 30px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 196px;
            height: 196px;
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
                width: 30px;
            }
        }

        .content {
            padding: 40px 0 50px;
            text-align: center;
            font-weight: 400;
            color: #2D2E33;
            line-height: 40px;
            font-size: 22px;
        }

        .btn-box {
            .el-button {
                display: block;
                margin: 0 auto;
                border: none;

                &.submit {
                    width: 320px;
                    height: 52px;
                    background: #7395DC;
                    color: #FFFFFF;
                    font-size: 22px;
                    border-radius: 26px;
                }

                &.cancel {
                    color: #73757D;
                    margin-top: 20px;
                    line-height: 30px;
                    font-weight: 400;
                    font-size: 22px;
                }
            }
        }
    }
}
</style>
