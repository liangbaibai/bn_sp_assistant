<template>
  <div class="commandcenter-w">
    <div class="banner-w">
      <img src="@/assets/image/ht_bn.png" alt="" />
      <div class="banner-w_i">
        <div class="banner-w_i_t">高血压监测管理解决方案</div>
        <div class="banner-w_i_t s">血压检测管理解决方案血压检测管理解决方案</div>
        <div class="banner-w_i_btn">服务咨询</div>
      </div>
    </div>
    <div class="main-w">
      <div>
        <img src="@/assets/image/xygl__d_1.png" alt="">
        <img src="@/assets/image/xygl__d_2.png" alt="">
      </div>
      <div class="main-w_i">
        <div class="main-w_i_l">
          <div class="main-w_i_l_c">
            <i class="iconfont icon-yichangtixing" :class="{iconts: true}"></i>
          </div>
          <div class="main-w_i_l_t">245<span class="main-w_i_l_t c">万次</span></div>
          <div class="main-w_i_l_t s">血压异常提醒</div>
        </div>
        <div class="main-w_i_l">
          <div class="main-w_i_l_c">
            <i class="iconfont icon-yichangganyu" :class="{iconts: true}"></i>
          </div>
          <div class="main-w_i_l_t">12<span class="main-w_i_l_t c">万次</span></div>
          <div class="main-w_i_l_t s">血压异常干预</div>
        </div>
        <div class="main-w_i_l m">
          <div class="main-w_i_l_c">
            <i class="iconfont icon-sos" :class="{iconts: true}"></i>
          </div>
          <div class="main-w_i_l_t">3<span class="main-w_i_l_t c">万次</span></div>
          <div class="main-w_i_l_t s">SOS紧急求救</div>
        </div>
      </div>
      <div>
        <img src="@/assets/image/xygl__d_4.png" alt="">
      </div>
      <div class="main-w_c">
        <div class="main-w_c_t">方案介绍</div>
        <div class="main-w_c_i">
          <div>
            <img src="@/assets/image/xygl__d_5.png" alt="">
          </div>
          <div class="main-w_c_i_w">
            <div class="main-w_c_i_w_t">血压动态监测</div>
            <div class="main-w_c_i_w_p">
              <div>百来俏长者智能腕表W1</div>
              <div>让夜间血压变化，一目了然。</div>
              <div>10分钟检测1次血压数据</div>
              <div>1小时汇报1次血压情况</div>
              <div>24小时实时监测异常波动</div>
            </div>
            <div class="main-w_c_i_w_btn">立即咨询</div>
          </div>
        </div>
        <div class="main-w_c_i">
          <div class="main-w_c_i_w right">
            <div class="main-w_c_i_w_t">血压异常干预</div>
            <div class="main-w_c_i_w_p">
              <div>血压剧烈变化时，指挥中心AI系统自</div>
              <div>动分析识别，对智能腕表下达预警指令，</div>
              <div>同时主动实施人工干预，通知用户及家</div>
              <div>属采取合理应对措施，并做急救前预案</div>
              <div>准备。</div>
            </div>
            <div class="main-w_c_i_w_btn">立即咨询</div>
          </div>
          <div>
            <img src="@/assets/image/xygl__d_6.png" alt="">
          </div>
        </div>
        <div class="main-w_c_i">
          <div>
            <img src="@/assets/image/xygl__d_7.png" alt="">
          </div>
          <div class="main-w_c_i_w">
            <div class="main-w_c_i_w_t">血压管理周报</div>
            <div class="main-w_c_i_w_p">
              <div>血压管理周报会对用户进行高血压</div>
              <div>风险分析，制定个性化饮食、运动</div>
              <div>调节建议，并提供健康数据记录及</div>
              <div>解析，并通过智能腕表对用户生活</div>
              <div>方式进行干预（运动·吃药·出行·睡</div>
              <div>眠·疫情疫区…），来预防高血压、</div>
              <div>心脑血管疾病等意外事件发生。</div>
            </div>
            <div class="main-w_c_i_w_btn">立即咨询</div>
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

    };
  },

  methods: {},
};
</script>


<style lang="scss">
.commandcenter-w {
  background-color: #fff;
  .banner-w {
    position: relative;
    &_i {
      position: absolute;
      left: 20.5%;
      top: 29%;
      &_t {
        font-size: 36px;
        font-family: OPPOSans;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom: 18px;
        &.s {
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
      &_btn {
        width: 122px;
        height: 40px;
        background: #30C159;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }
  .main-w {
    background: #ffffff;
    &_i {
      width: 100%;
      height: 401px;
      background: url('../assets/image/xygl__d_3.png') center center no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      &_l {
        margin-right: 260px;
        text-align: center;
        &.m {
          margin-right: 0;
        }
        &_c {
          width: 96px;
          height: 96px;
          background: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .iconts {
          font-size: 74px;
          background: linear-gradient(to right, #36D8EF, #2A92E7);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0px 8px 12px rgb(49 192 211 / 35%);
        }
        &_t {
          font-size: 42px;
          font-family: Arial;
          font-weight: 400;
          color: #FFFFFF;
          &.c {
            font-size: 20px;
            margin-left: 5px;
          }
          &.s {
            font-size: 16px;
            font-family: Microsoft YaHei;
          }
        }
      }
    }
    &_c {
      text-align: center;
      padding: 60px 0;
      &_t {
        font-size: 28px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        margin-bottom: 82px;
      }
      &_i {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 119px;
        &_w {
          margin-left: 105px;
          text-align: left;
          &.right {
            margin-right: 105px;
            margin-left: 0;
          }
          &_t {
            font-size: 26px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: 30px;
          }
          &_p {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            margin-bottom: 30px;
            line-height: 28px;
            letter-spacing: 2px;
          }
          &_btn {
            width: 140px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #30C159;
            border-radius: 18px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            cursor: pointer;
          }
        }
      }
    }
  }

}
</style>
