<template>
  <div class="eleproducts-w">
    <div class="banner-w">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="eleproducts-c">
      <div class="eleproducts-c_d">
        <!-- 医疗级健康监测手表 -->
        <div class="eleproducts-c_d_yl">
          <div class="eleproducts-c_d_yl_left">
            <img src="../assets/image/yl_logo.png" alt="" class="eleproducts-c_d_yl_left_ig">
            <div class="eleproducts-c_d_yl_left_ti">医疗级健康监测手表</div>
            <div class="eleproducts-c_d_yl_left_te">血压测量精准；心脑血管疾病预警；</div>
            <div class="eleproducts-c_d_yl_left_te m">定位精准；电子围栏；一键救援； 双向通话</div>
            <div class="eleproducts-c_d_yl_left_bn">
              <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(1)">了解更多</div>
              <div class="eleproducts-c_d_yl_left_bn_b c">立即购买</div>
            </div>
          </div>
          <div class="eleproducts-c_d_yl_right">
            <img src="../assets/image/yl_product_w.png" alt="" class="eleproducts-c_d_yl_right_ig">
          </div>
        </div>
        <!-- 全自动双管血压计 -->
        <div class="eleproducts-c_d_yl">
          <div class="eleproducts-c_d_yl_right l">
            <img src="../assets/image/lx_product.png" alt="" class="eleproducts-c_d_yl_right_ig">
          </div>
          <div class="eleproducts-c_d_yl_left">
            <img src="../assets/image/lx_logo.png" alt="" class="eleproducts-c_d_yl_left_ig lx">
            <div class="eleproducts-c_d_yl_left_ti">全自动双管血压计</div>
            <div class="eleproducts-c_d_yl_left_te">
              <span class="mg">一键测量</span>
              <span class="mg">高清大屏</span>
              <span class="mg">语音播报</span>
            </div>
            <div class="eleproducts-c_d_yl_left_te m">
              <span class="mg">血压分析</span>
              <span class="mg">降压方案</span>
              <span class="mg">家人互联</span>
            </div>
            <div class="eleproducts-c_d_yl_left_bn">
              <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(2)">了解更多</div>
              <div class="eleproducts-c_d_yl_left_bn_b c">立即购买</div>
            </div>
          </div>
        </div>
        <!-- 乐心手环 -->
        <div class="eleproducts-c_d_yl pd">
          <div class="eleproducts-c_d_yl_left">
            <img src="../assets/image/lx_logo.png" alt="" class="eleproducts-c_d_yl_left_ig lx">
            <div class="eleproducts-c_d_yl_left_ti">24H全天候守护长者</div>
            <div class="eleproducts-c_d_yl_left_te">心率、睡眠监测；全天活动监测；手环支付；</div>
            <div class="eleproducts-c_d_yl_left_te m">天气提醒；来电拒接 ；微信短信；IP68级防水</div>
            <div class="eleproducts-c_d_yl_left_bn">
              <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(3)">了解更多</div>
              <div class="eleproducts-c_d_yl_left_bn_b c">立即购买</div>
            </div>
          </div>
          <div class="eleproducts-c_d_yl_right">
            <img src="../assets/image/lx_product_w.png" alt="" class="eleproducts-c_d_yl_right_ig">
          </div>
        </div>
        <!-- 秤要精准 也要颜值 -->
        <div class="eleproducts-c_d_yl">
          <div class="eleproducts-c_d_yl_right l">
            <img src="../assets/image/lx_product_t.png" alt="" class="eleproducts-c_d_yl_right_ig">
          </div>
          <div class="eleproducts-c_d_yl_left">
            <img src="../assets/image/lx_logo.png" alt="" class="eleproducts-c_d_yl_left_ig lx">
            <div class="eleproducts-c_d_yl_left_ti">秤要精准 也要颜值</div>
            <div class="eleproducts-c_d_yl_left_te">
              <span class="mg">上秤秒出15项数据</span>
              <span class="mg">BIA测量精准的0.1%</span>
            </div>
            <div class="eleproducts-c_d_yl_left_te">
              <span class="mg">26项数据感知身体</span>
              <span class="mg">9种形体智能分析</span>
            </div>
            <div class="eleproducts-c_d_yl_left_te m">
              <span class="mg">全身健康检测报告</span>
              <span class="mg">360圆弧美学设计</span>
            </div>
            <div class="eleproducts-c_d_yl_left_bn">
              <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(4)">了解更多</div>
              <div class="eleproducts-c_d_yl_left_bn_b c">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { index } from "@/utils/mixins";

import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";
export default {
  mixins: [index],

  props: {},
  components: {},
  created() {},

  computed: {},

  mounted() {},

  data() {
    return {
      tabActive: "",
      bannerList: [
        require('../assets/image/e-b-n-1.png'),
        require('../assets/image/e-b-n-2.png')
      ], // banner图
    }
  },

  methods: {
    // 跳转详情页
    toDetail(type) {
      if (type == 1) {
        // 医疗级健康监测手表
        this.$router.push({
          path: '/eleproducts/ylWatch'
        })
      } else if (type == 2) {
        // 全自动双管血压计
        this.$router.push({
          path: '/eleproducts/bloodPressure'
        })
      } else if (type == 3) {
        // 全自动双管血压计
        this.$router.push({
          path: '/eleproducts/lxWatch'
        })
      } else if (type == 4) {
        // 体重秤
        this.$router.push({
          path: '/eleproducts/weighingScale'
        })
      }
    }
  },
};
</script>


<style lang="scss">
.eleproducts-w {
  background-color: #fff;
  .banner-w {
    .el-carousel__container {
      height: 500px;
    }
    .el-carousel__button {
      width: 10px;
      height: 10px;
      background: #30C159;
      border-radius: 50%;
    }
    .el-carousel--horizontal {
      position: relative;
    }
    .el-carousel__indicators--outside {
      position: absolute;
      bottom: 4px;
    }
    .el-carousel__indicator.is-active button {
      opacity: 1;
      background: #30C159;
    }
    .el-carousel__indicators--outside button {
      opacity: 1;
      background: #FFFFFF;
    }
  }
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }
  .tab-block-1{
    margin: 0 0 52px 0;
  }

  .main-w{
    padding: 0 0 78px 0;
  }
  .eleproducts-c {
    background: #F6F6F6;
    padding: 72px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &_d {
      &_yl {
        background: #FFFFFF;
        border-radius: 20px;
        padding: 81px 114px;
        margin-bottom: 21px;
        display: flex;
        justify-content: space-between;
        &.pd {
          padding-right: 0;
        }
        &_left {
          &_ig {
            width: 124px;
            height: 41px;
            margin-bottom: 40px;
            &.lx {
              width: 219px;
              height: 32px;
            }
          }
          &_ti {
            font-size: 38px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: 20px;
          }
          &_te {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
            &.m {
              margin-bottom: 66px;
            }
            .mg {
              line-height: 20px;
              margin-right: 20px;
            }
          }
          &_bn {
            display: flex;
            align-items: center;
            &_b {
              width: 108px;
              height: 48px;
              background: linear-gradient(1deg, #30C159, #32d960);
              border-radius: 24px;
              color: #FFFFFF;
              font-size: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              &.c {
                border: 2px solid #CCCCCC;
                border-radius: 24px;
                color: #333333;
                background: #ffffff;
                margin-left: 40px;
              }
            }
            &_b:hover {
              box-shadow: 0px 8px 12px 0px rgba(48, 193, 89, 0.35);
              cursor: pointer;
              &.c:hover {
                box-shadow: 0px 8px 12px 0px rgba(204, 204, 204, 0.35);
              }
            }
          }
        }
        &_right {
          margin-top: -80px;
          &.l {
            margin-left: -114px;
          }
          &_ig {

          }
        }
      }
    }
  }
}
</style>
