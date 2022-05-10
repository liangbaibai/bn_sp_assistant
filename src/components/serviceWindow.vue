<template>
  <div>
    <div class="window-w" v-if="show">
      <div class="header">
        <span class="title">在线客服</span>
        <div class="close-btn" @click="onCloseWindow">
          <i class="el-icon-close"></i>
        </div>
      </div>

      <div class="main-w">
        <div class="service-i">
          <img src="@/assets/image/window-i1.png" alt="" />
          <div class="content-r">
            <div class="title">热线服务</div>
            <div class="desc">可通过热线直接联系</div>
            <div class="contact-way">
              <span class="key">联系热线：</span>
              <span class="phone">（020）8362 0723</span>
            </div>
          </div>
        </div>
        <div class="service-i">
          <img src="@/assets/image/window-i1.png" alt="" />
          <div class="content-r">
            <div class="title">售后服务</div>
            <div class="desc">可通过热线直接联系</div>
            <div class="contact-way">
              <span class="key">联系热线：</span>
              <span class="phone">（020）8362 0723</span>
            </div>
          </div>
        </div>
        <div class="service-i">
          <img src="@/assets/image/window-i2.png" alt="" />
          <div class="content-r">
            <div class="title">在线服务</div>
            <div class="contact-online">在线咨询</div>
          </div>
        </div>
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 380px;
  height: 400px;
  margin: auto;
  background-color: #fff;
  z-index: 111;
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px;
    color: #333;
    font-size: 16px;
    .title{
        margin: 0 auto;
        transform: translateX(10px);
    }
    .close-btn{
        cursor: pointer;
        &>i{
            font-size: 23px;
        }
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
    &>img{
      width: 122px;
      height: 80px;
    }
  }
  .content-r {
      margin: 0 0 0 18px;
    .title {
      font-size: 14px;
      color: #333;
    }
    .desc {
        margin: 5px 0;
      font-size: 12px;
      color: #666;
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
  .contact-way {
    white-space: nowrap;
    font-size: 12px;
    .key {
      color: #666;
    }
    .phone {
      color: #00479d;
    }
  }
}
</style>