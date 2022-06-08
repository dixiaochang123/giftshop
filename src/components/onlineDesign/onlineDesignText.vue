<template>
    <div class="text-box">
        <div class="text-inner">
            <div class="item" v-for="item in textContent">
                <div class="item-img">
                    <vue-drag-resize parentLimitation v-if="item.remark">{{item.remark}}</vue-drag-resize>
                </div>
                <div class="item-control">
                    <div class="item-btn">
                        <span>文字一</span>
                        <div>
                            <i class="el-icon-refresh-right"></i>
                            <a>还原</a>
                        </div>
                    </div>
                    <el-input v-model.trim="item.remark" show-word-limit type="textarea" :maxlength="item.maxlength" tabindex></el-input>
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
            textContent:[{remark:'静待花开静待花开静待花开静待花开静待花开',maxlength:16},{remark:'静待花开',maxlength:4},{remark:'静待花开',maxlength:4},{remark:'静待花开',maxlength:4}]
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
            &:last-child{
                margin-right: 0;
            }
            .item-img {
                width: 480px;
                height: 480px;
                border-radius: 10px;
                background-color: #fff;
                margin-bottom: 58px;
                position: relative;
            }

            .item-control {
                .item-btn {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 15px;
                    color: #73757D;
                }
            }
        }
    }
}
</style>
