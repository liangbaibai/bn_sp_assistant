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
              <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(1)">立即购买</div>
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
              <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(2)">立即购买</div>
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
              <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(3)">立即购买</div>
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
              <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(4)">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { index } from "@/utils/mixins";

export default {
  mixins: [index],

  props: {},
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
    },
    // 跳转天猫购买
    toBuy(type) {
      if (type == 1) {
        // 医疗级健康监测手表
        window.open('https://detail.tmall.com/item.htm?spm=a220o.1000855.w4023-24145098805.3.15e7acaeTHpvD3&id=663449498011&sku_properties=149204407:3269303;204252002:1904313917')
      } else if (type == 2) {
        // 乐心手表
        window.open('https://detail.tmall.com/item.htm?spm=a1z10.1-b.w4004-24145098791.4.8bc41015MTAlOJ&id=667456271317')
      } else if (type == 3) {
        // 全自动双管血压计
        window.open('https://bailaiqiao.tmall.com/?spm=a220o.1000855.1997427133.d4918061.398b7286shY1m0')
      } else if (type == 4) {
        // 体重秤
        window.open('https://bailaiqiao.tmall.com/?spm=a220o.1000855.1997427133.d4918061.398b7286shY1m0')
      }
    }
  },
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.eleproducts-w {
  background-color: #fff;
  .banner-w {
    .el-carousel__container {
      height: torem(500px);
    }
    .el-carousel__button {
      width: torem(10px);
      height: torem(10px);
      background: #30C159;
      border-radius: 50%;
    }
    .el-carousel--horizontal {
      position: relative;
    }
    .el-carousel__indicators--outside {
      position: absolute;
      bottom: torem(4px);
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
    margin: 0 0 torem(52px) 0;
  }

  .main-w{
    padding: 0 0 torem(78px) 0;
  }
  .eleproducts-c {
    background: #F6F6F6;
    padding: torem(72px) 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &_d {
      &_yl {
        background: #FFFFFF;
        border-radius: torem(20px);
        padding: torem(81px) torem(114px);
        margin-bottom: torem(21px);
        display: flex;
        justify-content: space-between;
        &.pd {
          padding-right: 0;
        }
        &_left {
          &_ig {
            width: torem(124px);
            height: torem(41px);
            margin-bottom: torem(40px);
            &.lx {
              width: torem(219px);
              height: torem(32px);
            }
          }
          &_ti {
            font-size: torem(38px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(20px);
          }
          &_te {
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            line-height: torem(24px);
            &.m {
              margin-bottom: torem(66px);
            }
            .mg {
              line-height: torem(20px);
              margin-right: torem(20px);
            }
          }
          &_bn {
            display: flex;
            align-items: center;
            &_b {
              width: torem(108px);
              height: torem(48px);
              background: linear-gradient(1deg, #30C159, #32d960);
              border-radius: torem(24px);
              color: #FFFFFF;
              font-size: torem(16px);
              display: flex;
              align-items: center;
              justify-content: center;
              &.c {
                border: torem(2px) solid #CCCCCC;
                border-radius: torem(24px);
                color: #333333;
                background: #ffffff;
                margin-left: torem(40px);
              }
            }
            &_b:hover {
              box-shadow: 0px torem(8px) torem(12px) 0px rgba(48, 193, 89, 0.35);
              cursor: pointer;
              &.c:hover {
                box-shadow: 0px torem(8px) torem(12px) 0px rgba(204, 204, 204, 0.35);
              }
            }
          }
        }
        &_right {
          margin-top: torem(-80px);
          &.l {
            margin-left: torem(-114px);
          }
          &_ig {

          }
        }
      }
    }
  }
}
</style>
