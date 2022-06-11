<template>
<div class="userBox">
    <div class="Breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="tabs">
        <div class="title-nav">
            <div class="nav-item" :class="current==0?'active':''" @click="changeCurrent(0,'')">
                账号管理
            </div>
            <div class="nav-item" :class="current==1?'active':''" @click="changeCurrent(1,'addressDetails')">
                地址信息
            </div>
            <div class="nav-item" :class="current==2?'active':''" @click="changeCurrent(2,'invoiceDetails')">
                发票信息
            </div>
        </div>
        <div class="nav-content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            current: 0
        }
    },
    mounted() {
        this.current = this.$route.query.current || 0
    },
    methods: {
        //标题切换
        changeCurrent(index,route) {
            this.current = index;
            this.$router.push(`/shoppingMall/user/userCenter2/${route}`)
        }
    }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple1($px, $nub) {
    @return ($px / $nub)+px;
}

@function rpx2multiple($px) {
    @return ($px / 1)+px;
}

.userBox {
    width: rpx2multiple(1380);
    margin: rpx2multiple(92) auto 0;
    font-family: PingFangSC-Regular, PingFang SC;

    .Breadcrumb {
        height: rpx2multiple(120);
        overflow: hidden;
    }

    .el-breadcrumb {
        font-size: rpx2multiple(14);
        height: rpx2multiple(120);
        line-height: rpx2multiple(120);
    }

    /deep/ .el-breadcrumb__inner {
        font-size: rpx2multiple(18);
        font-weight: 400;
        color: #73757d;
    }

    /deep/ .el-breadcrumb__inner.is-link {
        font-size: rpx2multiple(28);
    }

    .tabs {
        width: 100%;
        margin: 0 auto;

        .title-nav {
            font-size: rpx2multiple(24);
            font-weight: 500;
            line-height: rpx2multiple(33);
            color: #73757D;
            display: flex;

            .nav-item {
                margin-right: rpx2multiple(100);
                position: relative;
                padding-bottom: rpx2multiple(14);
                margin-bottom: rpx2multiple(78);
                margin-top: rpx2multiple(20);
                cursor: pointer;

                &:hover {
                    opacity: .8;
                }

                &.active {
                    color: #2D2E33;

                    &::after {
                        content: '';
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 0;
                        position: absolute;
                        width: rpx2multiple(72);
                        height: 6px;
                        background: #7395DC;
                    }
                }
            }
        }
    }
}
</style>
