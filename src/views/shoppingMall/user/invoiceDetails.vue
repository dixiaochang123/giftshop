<template>
<div class="user-box">
    <div class="top-box">
        <div class="left">
            <div class="account-inner">
                <el-form label-width="180px" class="demo-ruleForm">
                    <el-form-item label="发票抬头">
                        <el-input placeholder="请输入发票抬头"></el-input>
                    </el-form-item>
                    <el-form-item label="纳税人识别号">
                        <el-input placeholder="请输入纳税人识别号"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input placeholder="请输入地址"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input placeholder="请输入电话"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行">
                        <el-input placeholder="请输入开户行"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行帐号">
                        <el-input placeholder="请输入开户行帐号"></el-input>
                    </el-form-item>
                    <el-form-item label="发票接收邮箱">
                        <el-input placeholder="请输入发票接收邮箱"></el-input>
                    </el-form-item>
                    <div class="form-tips">
                        <label>
                        </label>
                        <el-button class="form-btn">修改</el-button>
                    </div>
                </el-form>
            </div>
        </div>
        <img class="bg-img" src="../../../assets/img/slices/invoicedetails-img.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.user-box {
    .top-box {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-bottom: 90px;

        .left {
            width: 100%;

            .nav-title {
                font-size: 22px;
                font-weight: 500;
                color: #2D2E33;
                padding-bottom: 35px;
            }
        }

        .bg-img {
            flex-shrink: 0;
            height: 100%;
            margin-left: 150px;
        }

        .account-inner {
            /deep/ .el-form-item__label {
                font-size: 18px;
                color: #73757D;
                padding-right: 60px;
            }

            .el-form-item {
                margin-bottom: 36px;
            }

            /deep/ .el-cascader {
                width: 100%;
            }

            /deep/ .el-input__inner {
                font-size: 18px;
                height: 52px;
                line-height: 52px;
                width: 100%;
            }

            .form-tips {
                display: flex;
                justify-content: space-between;
                align-items: center;

                label {
                    span {
                        margin-right: 10px;
                    }
                }
            }

            .form-btn {
                height: 42px;
                border-radius: 4px;
                width: 100%;
                background-color: #FF946B;
                border: none;
                font-size: 18px;
                color: #fff;
                width: 112px;
                margin-left: 20px;
                flex-shrink: 0;
            }
        }
    }
}
</style>
