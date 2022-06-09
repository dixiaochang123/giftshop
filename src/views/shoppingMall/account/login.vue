<template>
<div class="account-box" :style="{ backgroundImage: 'url(' + require('@/assets/img/slices/banner-2.png') + ')' }">
    <div class="account-form">
        <div class="title-nav">
            <div class="nav-item" :class="current == 0 ? 'active' : ''" @click="changeCurrent(0)">
                短信登陆
            </div>
            <div class="nav-item" :class="current == 1 ? 'active' : ''" @click="changeCurrent(1)">
                密码登陆
            </div>
        </div>
        <!-- 短信登陆 -->
        <div class="account-inner">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item required prop="phone">
                    <div class="form-cell">
                        <div class="name">
                            <el-dropdown placement="bottom-start">
                                <div class="el-dropdown-link">
                                    <span>
                                        中国 +86
                                    </span>
                                    <div class="icon">
                                        <i class="el-icon-arrow-up"></i>
                                        <i class="el-icon-arrow-down"></i>
                                    </div>
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>123</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="value">
                           <el-input v-model="ruleForm.phone" maxlength="11" placeholder="手机号"></el-input>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item required prop="code">
                    <div class="form-cell">
                        <div class="value">
                            <el-input v-model="ruleForm.code" maxlength="6" placeholder="输入6位短信验证码"></el-input>
                        </div>
                        <el-button class="getCode btn" v-if="codeDisabled" type="text">{{this.countdown}}s</el-button>
                         <el-button class="getCode " v-else @click="getCode" type="text">获取验证码</el-button>
                    </div>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="form-btn" @click="submitForm('ruleForm')">登陆</el-button>
            <div class="form-tips">
                <el-checkbox label="下次自动登录"></el-checkbox>
                <div class="right-box">
                    <span @click="$router.push('/resetPassword')">忘记密码</span>
                    <span>|</span>
                    <span @click="$router.push('/register')">注册</span>
                </div>
            </div>
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
            current: 0,
            ruleForm: {
                phone: '',
                code: ''
            },
            rules: {
                phone: [{
                    required: true,
                    validator: validatePhone,
                    trigger: ['blur', 'change']
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
        //标题切换
        changeCurrent(index) {
            this.current = index
        },
        //登陆账号
        submitForm(formName) {
            this.$router.push({
                name:'ShoppingTemplate'
            })
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
@function rpx2multiple($px) {
  @return ($px / 1.36480686695279) + px;
}
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
    /deep/ .el-form-item__content{
        line-height: normal;
    }
    .account-form {
        width: rpx2multiple(636);
        background: #FFFFFF;
        box-shadow: 0px rpx2multiple(50) rpx2multiple(120) 0px rgba(0, 0, 0, 0.37);
        border-radius: rpx2multiple(12);
        box-sizing: border-box;
        padding: rpx2multiple(40);

        .title-nav {
            display: flex;
            padding-bottom: rpx2multiple(20);

            .nav-item {
                font-size: rpx2multiple(24);
                font-weight: 500;
                color: #bcbec6;
                margin-right: rpx2multiple(70);
                padding-bottom: rpx2multiple(16);
                position: relative;
                cursor: pointer;

                &:hover {
                    opacity: .8;
                }

                &.active {
                    color: #2D2E33;

                    &::after {
                        width: rpx2multiple(96);
                        content: '';
                        bottom: 0;
                        left: 0;
                        position: absolute;
                        height: rpx2multiple(4);
                        background: #FF946B;
                    }
                }
            }
        }

        .account-inner {
            .form-cell {
                display: flex;
                align-items: center;
                font-size: rpx2multiple(18);
                padding: rpx2multiple(25) 0 rpx2multiple(10);
                border-bottom: 1px solid #BCBEC6;

                .name {
                    .el-dropdown-link {
                        display: flex;
                        align-items: center;
                        border-right: 1px solid #DDDEE2;
                        padding-right: rpx2multiple(60);
                        margin-right: rpx2multiple(30);
                        flex-shrink: 0;

                        span {
                            font-size: rpx2multiple(18);
                            flex-shrink: 0;
                            padding-right: rpx2multiple(20);
                        }

                        .icon {
                            i {
                                &.el-icon-arrow-up {
                                    transform: translateY(rpx2multiple(4));
                                }

                                &.el-icon-arrow-down {
                                    transform: translateY(-rpx2multiple(4));
                                }
                            }
                        }
                    }
                }
                /deep/ .el-input__inner{
                    border: none;
                    font-size: rpx2multiple(18);
                    padding: 0 0;
                }
                .value {
                    width: 100%;
                }

                .getCode {
                    font-size: rpx2multiple(18);
                    color: #7395DC;
                    flex-shrink: 0;
                    margin-left: rpx2multiple(20);
                    cursor: pointer;
                    padding: 0;
                    border: none;
                }
            }

            .form-btn {
                height: rpx2multiple(52);
                background: #E6E7EB;
                border-radius: 4px;
                width: 100%;
                margin: rpx2multiple(55) 0 rpx2multiple(20);
                background-color: #E6E7EB;
                border: none;
                font-size: rpx2multiple(18);
                color: rgba(115, 117, 125, 1);
            }

            .form-tips {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: rpx2multiple(18);
                padding-bottom: rpx2multiple(30);

                .el-checkbox {
                    /deep/ .el-checkbox__label {
                        font-size: rpx2multiple(18);
                        color: #2D2E33;
                    }

                    /deep/ .el-checkbox__inner {
                        width: rpx2multiple(16);
                        height: rpx2multiple(16);
                        transform: translateY(-2px);
                    }
                }

                .right-box {
                    color: #73757D;
                    display: flex;
                    align-items: center;

                    span {
                        margin: 0 0 0 rpx2multiple(10);
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
