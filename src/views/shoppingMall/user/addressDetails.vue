<template>
    <div class="user-box">
        <div class="top-box">
            <div class="left">
                <div class="nav-title">
                    新增收货地址
                </div>
                <div class="account-inner">
                    <el-form label-width="160px" class="demo-ruleForm">
                        <el-form-item label="地址信息">
                            <el-cascader v-model="addressInfo" :options="addressOptions"></el-cascader>
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input placeholder="请输入详细地址"></el-input>
                        </el-form-item>
                        <el-form-item label="收货人">
                            <el-input placeholder="请输入收货人"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input maxlength="11" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <div class="form-tips">
                            <label>
                                <span>设为常用地址</span>
                                <el-checkbox></el-checkbox>
                            </label>
                            <el-button class="form-btn">保存</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
            <img class="bg-img" src="../../../assets/img/slices/addressdetails-img.png" alt="">
        </div>
        <div class="bottom-box">
            <div class="nav-title">
                <span class="left">新增收货地址</span>
                <span class="right">您已创建 3 个收货地址</span>
            </div>
             <div class="item-box" v-for="(item,index) in 3" :key="index">
                <div class="item-header">
                    <div class="item-cell">
                        喵大人
                    </div>
                    <div class="item-cell">
                        北京/昌平区
                    </div>
                    <div class="item-cell-right">
                        <label>
                            <span>设为常用地址</span>
                            <el-checkbox label=""></el-checkbox>
                        </label>
                    </div>
                </div>
                <div class="item-body">
                    <div class="item-cell">
                        喵大人
                    </div>
                    <div class="item-cell">
                        15258888888
                    </div>
                    <div class="item-cell">
                        北京市昌平区沙河镇宏福苑小区1号楼9单元
                    </div>
                    <div class="item-cell">
                        000000
                    </div>
                    <div class="item-cell-right">
                        <div class="btn">
                            <i class="el-icon-edit-outline"></i>
                            <span>编辑</span>
                        </div>
                        <div class="btn">
                            <i class="el-icon-delete"></i>
                            <span @click="delAddress(item)">删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { regionData } from 'element-china-area-data'
export default {
    data() {
        return {
            addressInfo: [],
            addressOptions: regionData,
        }
    },
    methods: {
        //删除地址
        delAddress(item) {
            this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
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
        border-bottom: 1px solid rgba(115, 149, 220, .3);
        margin-bottom: 60px;

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
                margin-bottom: 30px;
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
                padding: 10px 0 40px;

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

    .bottom-box {
        padding-bottom: 100px;
        font-size: 18px;
        color: rgba(115, 117, 125, 1);

        .left {
            color: rgba(45, 46, 51, 1);
            font-weight: bold;
            margin-right: 30px;
        }

        .item-box {
            border-radius: 8px;
            border: 1px solid #BCBEC6;
            margin-top: 40px;

            .item-cell {
                margin-right: 40px;
                color: rgba(45, 46, 51, 1);
            }

            .item-cell-right {
                margin-left: auto;
                display: flex;
                align-items: center;

                label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    span {
                        margin-right: 10px;
                    }
                }

                .btn {
                    color: rgba(115, 117, 125, 1);
                    margin-left: 50px;
                    cursor: pointer;

                    &:hover {
                        opacity: .8;
                    }
                }
            }

            .item-header {
                display: flex;
                align-items: center;
                background: #F6F9FE;
                border-radius: 8px 8px 0px 0px;
                border-bottom: 1px solid #BCBEC6;
                padding: 20px 40px;
            }

            .item-body {
                display: flex;
                padding: 40px 40px;
                flex-wrap: wrap;
            }
        }
    }
}
</style>
