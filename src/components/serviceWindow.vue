<template>
  <div>
    <div class="window-w" v-if="show">
      <div class="window-w-c">
        <div class="header">
          <div>
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
                <span class="phone">（020）8362 0723</span>
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
                <span class="phone">（020）8362 0723</span>
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
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  components: {
    maskmodal,
  },

  methods: {
    onCloseWindow() {
      this.$emit("onClose");
    },
  },
};
</script>

<style lang="scss">
.window-w {
  position: fixed;
  top: 30%;
  bottom: 0;
  left: 40%;
  right: 0;
  z-index: 111;
  width: 400px;
  height: 360px;
  .window-w-c {
    width: 400px;
    height: 360px;
    background: #FFFFFF;
    border-radius: 10px;
  }
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 5px;
    color: #333;
    padding-top: 29px;
    .title{
      margin: 0 auto;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    .text {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
    }
  }
  .close-btn{
    width: 36px;
    height: 36px;
    background: #EEEEEE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 20px;
    &>i{
      font-size: 23px;
    }
  }

  .main-w {
    display: flex;
    flex-direction: column;
    padding: 26px 39px 0 39px;
  }

  .service-i {
    display: flex;
    align-items: center;
    margin: 0 0 26px 0;
    &-icon {
      position: relative;
      width: 62px;
      height: 62px;
      &-c {
        width: 62px;
        height: 62px;
        background: #1C93FD;
        box-shadow: 0px 2px 6px 0px rgba(189, 224, 255, 0.72);
        border-radius: 50%;
        z-index: 55;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        &.s {
          background: #FB8726;
          box-shadow: 0px 2px 6px 0px rgba(255, 191, 137, 0.72);
        }
      }
      &-t {
        width: 43px;
        height: 43px;
        background: #89D5F6;
        border-radius: 50%;
        z-index: 11;
        position: absolute;
        top: 2px;
        left: -4px;
        &.s {
          background: #FFD17F;
        }
      }
      &-b {
        width: 25px;
        height: 25px;
        background: #89D5F6;
        border-radius: 50%;
        z-index: 99;
        position: absolute;
        bottom: 0px;
        right: -4px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.s {
          background: #FFB226;
        }
      }
    }
    &>img{
      width: 122px;
      height: 80px;
    }
  }
  .content-r {
      margin: 0 0 0 18px;
    .title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin-bottom: 12px;
    }
    .desc {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #999999;
      line-height: 20px;
      .phone {
        color: #30C159;
      }
    }
    .contact-online{
        cursor: pointer;
        margin: 5px 0 0 0;
        padding: 7px 15px;
        font-size: 12px;
        background-color: #23AC38;
        color: #fff;
        border-radius: 3px;
    }
  }
}
</style>