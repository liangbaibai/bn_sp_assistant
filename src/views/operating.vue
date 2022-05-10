<template>
  <div class="operating-w">
    <div class="main-w">
      <van-tabs
        v-model="tabActive"
        title-active-color="#29A93E"
        color="#29A93E"
        line-height="0"
        scrollspy
        sticky
        ref="tabs"
      >
        <van-tab title-class="tab_title" name="客户端">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '客户端'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              客户端
            </div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="bg-img">
              <img src="@/assets/image/o-bg-1.png" alt="" />
            </div>
            <div class="content">
              <div class="app-name">百年医养APP客户端</div>
              <div class="line"></div>
              <div class="brief">居家医养一站式服务平台</div>
              <div class="desc">
                百年医养客户端APP，可为用户提供一键救援、健康体征全监测、安全区域监测、健康周报以及上门医养等服务，让长者在家中得到日常的专业护理和指导。
              </div>
              <div class="download-w">
                <div class="qr-code-w">
                  <img src="@/assets/image/ewm01.png" alt="" />
                  <div class="desc">扫一扫下载APP</div>
                </div>
                <div class="btn-w">
                  <div class="ios">
                    <span
                      ><img src="@/assets/image/ios-icon.png" alt=""
                    /></span>
                    <span>IOS下载</span>
                  </div>
                  <div class="android">
                    <span
                      ><img src="@/assets/image/android-icon.png" alt=""
                    /></span>
                    <span>安卓下载</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="医护端">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '医护端'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              医护端
            </div>
          </div>
          <div class="tab-block-2 tab-content">
            <div class="bg-img">
              <img src="@/assets/image/o-bg-2.png" alt="" />
            </div>

            <div class="content">
              <div class="app-name">百年医养APP医护端</div>
              <div class="line"></div>
              <div class="brief">专为医护人员打造的信息服务平台</div>
              <div class="desc">
                百年医养医护端APP，能帮助医护人员提升职业技能与收入，为长者提供全方位的居家医护服务，使得传统的居家照护难题得到有效的解决。
              </div>
              <div class="download-w">
                <div class="qr-code-w">
                  <img src="@/assets/image/ewm02.png" alt="" />
                  <div class="desc">扫一扫下载APP</div>
                </div>
                <div class="btn-w">
                  <div class="android">
                    <span
                      ><img src="@/assets/image/android-icon.png" alt=""
                    /></span>
                    <span>安卓下载</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
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
    };
  },

  methods: {},
};
</script>


<style lang="scss">
.operating-w {
  background-color: #fff;
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }
  .main-w {
    margin: 0 0 130px 0;
  }

  .tab-content {
    .content {
      display: flex;
      flex-direction: column;
      width: 1000px;
      margin: 0 auto;
      color: #fff;
      .app-name {
        font-weight: bold;
      }
      .line {
        width: 58px;
        height: 3px;
        margin: 39px 0 0 0;
        background: #ffffff;
      }
      .brief {
        margin: 13px 0;
        font-size: 17px;
        font-weight: bold;
      }
      & > .desc {
        margin: 0 0 26px 0;
        font-size: 12px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  .tab-block-1 {
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 76px 121px 45px 563px;
    }
  }
  .tab-block-2 {
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 76px 563px 45px 61px;
    }
  }

  .download-w {
    display: flex;
    align-items: center;
    height: 124px;
    .qr-code-w {
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      & > .desc {
        font-size: 12px;
        color: #333;
      }
    }
    .btn-w {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      font-size: 12px;
      padding: 8px 0 10px 26px;
      & > div {
        display: flex;
        align-items: center;
        border: 1px solid #fff;
        padding: 7px 20px;
      }
    }

    .ios,.android{
      img{
        width: 30px;
        height: 30px;
        margin: 0 2px 0 0;
      }
    }
  }
}
</style>
