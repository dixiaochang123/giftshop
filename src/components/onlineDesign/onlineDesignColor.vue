<template>
<div class="color-box">
    <slider ref="slider" :options="options" @slide="slide">
        <slideritem v-for="(item, index) in 4" :key="index">
        </slideritem>
    </slider>
    <div class="color-btn">
        <div class="item" :class="current == 0 ? 'active' : ''" @click="changeSlide(0)">
            <div class="i-btn">
                <i style="background-color: #fff;"></i>
            </div>
            <p>白色</p>
        </div>
        <div class="item" :class="current == 1 ? 'active' : ''" @click="changeSlide(1)">
            <div class="i-btn"><i style="background-color: #FF9B6B;"></i></div>

            <p>橘色</p>
        </div>
        <div class="item" :class="current == 2 ? 'active' : ''" @click="changeSlide(2)">
            <div class="i-btn"><i style="background-color: #9CD7FA;"></i></div>

            <p>蓝色</p>
        </div>
        <div class="item" :class="current == 3 ? 'active' : ''" @click="changeSlide(3)">
            <div class="i-btn"><i style="background-color: #90E3CF;"></i></div>
            <p>绿色</p>
        </div>
        <el-popover placement="right" trigger="hover" content="请联系客服">
            <div class="item" slot="reference">
                 <div class="i-btn"><i style="background-color: #BCBEC6;"></i></div>
                <p>自定义</p>
            </div>
        </el-popover>
    </div>
</div>
</template>

<script>
import html2canvas from 'html2canvas'
import {
    slider,
    slideritem
} from 'vue-concise-slider'
export default {
    components: {
        slider,
        slideritem
    },
    data() {
        return {
            current: 0,
            options: {
                centeredSlides: true,
                pagination: false,
            }
        }
    },
    methods: {
        changeSlide(index) {
            this.current = index;
            this.$refs.slider.$emit('slideTo', index)
        },
        slide(slide) {
            this.current = slide.currentPage
        }
    }
}
</script>

<style lang="scss" scoped>
@function rpx2multiple($px) {
  @return ($px / 1.2) + px;
}
.color-box {
    /deep/ .slider-item {
        margin: rpx2multiple(30) 0 rpx2multiple(80);
        width: rpx2multiple(420);
        height: rpx2multiple(420);
        background-color: #999;
        margin-right: rpx2multiple(50);
        border-radius: 10px;
    }

    /deep/ .slider-active {
        width: rpx2multiple(480) !important;
        height: rpx2multiple(480) !important;
        background: #FFFFFF;
        box-shadow: 0px 42px 45px 0px rgba(129, 135, 150, 0.2);
        border-radius: 12px;
        border: 2px solid #7395DC;
    }

    .color-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        .item {
            margin: 0 40px;
            cursor: pointer;
            font-size: 18px;
            text-align: center;
            color: #73757D;

            &.active {
                .i-btn {
                    border-color: #7395DC;
                }
            }

            &:hover {
                opacity: .8;
            }
        }

        .i-btn {
            width: 26px;
            height: 26px;
            margin: 0 auto;
            border: 1px solid #FFFFFF;
            border-radius: 100px;
        }

        i {
            width: 24px;
            height: 24px;
            display: block;
            border-radius: 100px;
            border: 1px solid #f1f1f1;

        }
    }
}
</style>
