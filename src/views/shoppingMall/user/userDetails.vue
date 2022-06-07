<template>
<div class="user-box">
    <div class="left">
        <div class="user-img">
            <el-upload action="##">
                <div class="user-img-upload">
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar" />
                    <span class="user-img-tips">修改头像</span>
                </div>
            </el-upload>
        </div>
        <div class="account-inner">
            <el-form label-width="160px" class="demo-ruleForm">
                <el-form-item label="用户名">
                    <div class="form-flex">
                        <el-input value="喵大人" placeholder="请输入用户名"></el-input>
                        <el-button class="form-btn">修改</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="手机号">
                    <div class="form-flex">
                        <el-input value="15288888888" placeholder="请输入手机号"></el-input>
                        <el-button class="form-btn">修改</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="企业名称">
                    <div class="form-flex">
                        <el-input value="北京春湘科技有限公司" placeholder="请输入企业名称"></el-input>
                        <el-button class="form-btn">修改</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="登陆密码">
                    <div class="form-flex">
                        <el-input type="textarea" value="密码要求至少包含字母，符号或数字中的两项且长度超过8位" placeholder="请输入登陆密码"></el-input>
                        <el-button class="form-btn">修改</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <img class="bg-img" src="../../../assets/img/slices/userdetails-img.png" alt="">
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.user-box {
    display: flex;
    justify-content: space-between;
    font-family: PingFangSC-Regular, PingFang SC;
    .left{
        width: 100%;
    }
    .bg-img {
        flex-shrink: 0;
        height: 100%;
        margin-left: 150px;
    }

    .user-img {
        margin: 0 auto;
        width: fit-content;

        .user-img-upload {
            margin: 0 auto 48px;
            border-radius: 100px;
            position: relative;
            overflow: hidden;

            .user-img-tips {
                position: absolute;
                width: 100%;
                height: 100%;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: rgba(0, 0, 0, .5);
                z-index: 2;
                top: 0;
                left: 0;
            }

            img {
                width: 112px;
                height: 112px;
            }
        }
    }

    .account-inner {
        padding-bottom: 130px;
        /deep/ .el-form-item__label {
            font-size: 18px;
            color: #73757D;
            padding-right: 60px;
            box-sizing: border-box;
        }
        .el-form-item{
            padding-bottom: 30px;
        }
        /deep/ .el-input__inner {
            font-size: 18px;
            height: 52px;
            line-height: 52px;
            border: none;
        }

        /deep/ .el-textarea__inner {
            font-size: 18px;
            border: none;
            font-family: PingFangSC-Regular, PingFang SC;
            resize: none;
            &::placeholder {
                font-family: PingFangSC-Regular, PingFang SC;
            }
        }
        .form-flex{
            display: flex;
            align-items: flex-start;
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
</style>
