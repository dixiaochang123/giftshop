<template>
<div class="account-box" :style="{backgroundImage:'url('+require('@/assets/img/slices/banner-2.png')+')'}">
    <div class="account-form">
        <div class="title-nav">
            <div class="nav-item active">
                欢迎使用一点礼至
            </div>
        </div>
        <!-- 短信登陆 -->
        <div class="account-inner">
            <el-form label-width="160px" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="手机号" required prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="请输入手机号" maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" required prop="companyName">
                    <el-input v-model="ruleForm.companyName" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="您的角色" required prop="role">
                    <el-select v-model="ruleForm.role" placeholder="请选择角色">
                        <el-option label="管理员" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="密码" required prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" required prop="repassword">
                    <el-input v-model="ruleForm.repassword" placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item label="验证码" required prop="code">
                    <div class="getcode">
                        <el-input v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
                        <el-button class="btn" v-if="codeDisabled" @click="getCode">{{this.countdown}}s</el-button>
                        <el-button class="btn" v-else @click="getCode">获取验证码</el-button>
                    </div>
                </el-form-item>
                <el-button class="form-btn" @click="submitForm('ruleForm')">
                    注册
                </el-button>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        let validatePhone = (rule, value, callback) => {
            /*console.log(rule);
            console.log(value);
            console.log(callback);*/
            if (!value) {
                callback(new Error('手机号不能为空'));
            }
            if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error('手机号不正确'));
            }
            callback();
        };
        return {
            ruleForm: {
                phone: '',
                companyName: '',
                role: '',
                password: '',
                repassword: '',
                code: ''
            },
            rules: {
                phone: [{
                    required: true,
                    validator: validatePhone,
                    trigger: ['blur', 'change']
                }],
                companyName: [{
                    required: true,
                    message: '请输入企业名称',
                    trigger: 'blur'
                }],
                role: [{
                    required: true,
                    message: '请选择角色',
                    trigger: 'change'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
                repassword: [{
                    required: true,
                    message: '请输入确认密码',
                    trigger: 'blur'
                }],
                code: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }],
            },
            countdown: 60,
            codeDisabled: false,
            timer: null
        }
    },
    methods: {
        //注册账号
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //获取验证码
        getCode(code) {
            if (!this.ruleForm.phone) {
                this.$message.warning('请输入手机号码！')
                return
            }
            if (!/^1[3456789]\d{9}$/.test(this.ruleForm.phone)) {
                this.$message.error('请输入正确的手机号码！')
                return
            }
            if (!this.timer) {
                this.timer = setInterval(() => {
                    if (this.countdown > 0 && this.countdown <= 60) {
                        this.countdown--;
                        if (this.countdown === 0) {
                            clearInterval(this.timer);
                            this.codeDisabled = false
                        } else {
                            this.codeDisabled = true
                        }
                    }
                }, 1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.account-box {
    font-family: PingFangSC-Regular, PingFang SC;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    overflow-y: auto;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .account-form {
        width: 636px;
        background: #FFFFFF;
        box-shadow: 0px 50px 120px 0px rgba(0, 0, 0, 0.37);
        border-radius: 12px;
        box-sizing: border-box;
        padding: 40px;

        .title-nav {
            display: flex;
            padding-bottom: 40px;

            .nav-item {
                font-size: 32px;
                font-weight: 500;
                color: #bcbec6;
                margin-right: 70px;
                padding-bottom: 16px;
                position: relative;
                cursor: pointer;

                &:hover {
                    opacity: .8;
                }

                &.active {
                    color: #2D2E33;
                }
            }
        }

        .account-inner {
            .getcode {
                display: flex;
                align-items: center;

                .btn {
                    width: 124px;
                    height: 52px;
                    background: #F1F2F4;
                    border-radius: 4px;
                    margin-left: 20px;
                    font-size: 18px;
                    border: none;
                    color: #BCBEC6;
                }
            }

            .el-select {
                width: 100%;
            }

            /deep/ .el-form-item__label {
                font-size: 18px;
                color: #73757D;
                padding-right: 60px;
                box-sizing: border-box;
            }

            /deep/ .el-input__inner {
                font-size: 18px;
                height: 52px;
                line-height: 52px;
            }

            .form-btn {
                height: 52px;
                background: #E6E7EB;
                border-radius: 4px;
                width: 100%;
                margin: 20px 0 10px;
                background-color: #E6E7EB;
                border: none;
                font-size: 18px;
                color: #73757D;
            }
        }
    }
}
</style>
