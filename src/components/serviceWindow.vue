<template>
  <div>
    <div class="window-w" v-if="show">
      <div class="window-w-c">
        <div class="header">
          <div style="text-align: center">
            <div class="title">请选择你想要联系的客服</div>
            <div class="text">我们将热心为您服务</div>
          </div>
        </div>
        <div class="main-w">
          <div class="service-i">
            <div class="service-i-icon">
              <div class="service-i-icon-c">
                <i class="iconfont icon-dianhua" style="font-size: 39px;color: #fff;"></i>
              </div>
              <div class="service-i-icon-t"></div>
              <div class="service-i-icon-b">
                <i class="iconfont icon-jiantou" style="font-size: 17px;color: #fff;"></i>
              </div>
            </div>
            <div class="content-r">
              <div class="title">热线服务</div>
              <div class="desc">可通过热线直接联系</div>
              <div class="desc">
                <span class="key">联系热线：</span>
                <span class="phone">{{detailData.phone}}</span>
              </div>
            </div>
          </div>
          <div class="service-i">
            <div class="service-i-icon">
              <div class="service-i-icon-c s">
                <i class="iconfont icon-dianhua" style="font-size: 39px;color: #fff;"></i>
              </div>
              <div class="service-i-icon-t s"></div>
              <div class="service-i-icon-b s">
                <i class="iconfont icon-shandian" style="font-size: 17px;color: #fff;"></i>
              </div>
            </div>
            <div class="content-r">
              <div class="title">售后服务</div>
              <div class="desc">可通过热线直接联系</div>
              <div class="desc">
                <span class="key">联系热线：</span>
                <span class="phone">{{detailData.salesPhone}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="close-btn" @click="onCloseWindow">
        <i class="el-icon-close"></i>
      </div>
    </div>

    <maskmodal :show="show" />
  </div>
</template>

<script>
import maskmodal from "@/components/maskmodal.vue";
import { outsideInfo } from "@/request/api/base";

export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      detailData: {}, // 网站信息
    }
  },
  created() {
    this.getOutsideData()
  },
  components: {
    maskmodal,
  },

  methods: {
    onCloseWindow() {
      this.$emit("onClose");
    },
    // 获取网站信息
    getOutsideData() {
      const params = {}
      outsideInfo(params).then(res => {
        console.log('获取网站信息：', res)
        if (res.code == 0) {
          this.detailData = res.data
        }
      })
    }
  },
};
</script>

<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.window-w {
  position: fixed;
  top: 30%;
  bottom: 0;
  left: 40%;
  right: 0;
  z-index: 111;
  width: torem(400px);
  height: torem(360px);
  .window-w-c {
    width: torem(400px);
    height: torem(360px);
    background: #FFFFFF;
    border-radius: torem(10px);
  }
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: torem(5px);
    color: #333;
    padding-top: torem(29px);
    .title{
      margin: 0 auto;
      font-size: torem(18px);
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    .text {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
    }
  }
  .close-btn{
    width: torem(36px);
    height: torem(36px);
    background: #EEEEEE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    margin-top: torem(20px);
    &>i{
      font-size: torem(23px);
    }
  }

  .main-w {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: torem(40px);
  }

  .service-i {
    display: flex;
    align-items: center;
    margin: 0 0 torem(35px) 0;
    &-icon {
      position: relative;
      width: torem(62px);
      height: torem(62px);
      &-c {
        width: torem(62px);
        height: torem(62px);
        background: #1C93FD;
        box-shadow: 0px torem(2px) torem(6px) 0px rgba(189, 224, 255, 0.72);
        border-radius: 50%;
        z-index: 55;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        &.s {
          background: #FB8726;
          box-shadow: 0px torem(2px) torem(6px) 0px rgba(255, 191, 137, 0.72);
        }
      }
      &-t {
        width: torem(43px);
        height: torem(43px);
        background: #89D5F6;
        border-radius: 50%;
        z-index: 11;
        position: absolute;
        top: torem(2px);
        left: torem(-4px);
        &.s {
          background: #FFD17F;
        }
      }
      &-b {
        width: torem(25px);
        height: torem(25px);
        background: #89D5F6;
        border-radius: 50%;
        z-index: 99;
        position: absolute;
        bottom: 0px;
        right: torem(-4px);
        display: flex;
        align-items: center;
        justify-content: center;
        &.s {
          background: #FFB226;
        }
      }
    }
    &>img{
      width: torem(122px);
      height: torem(80px);
    }
  }
  .content-r {
      margin: 0 0 0 torem(18px);
    .title {
      font-size: torem(16px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin-bottom: torem(12px);
    }
    .desc {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
      line-height: torem(20px);
      .phone {
        color: #30C159;
      }
    }
    .contact-online{
        cursor: pointer;
        margin: torem(5px) 0 0 0;
        padding: torem(7px) torem(15px);
        font-size: torem(12px);
        background-color: #23AC38;
        color: #fff;
        border-radius: torem(3px)
    }
  }
}
</style>
