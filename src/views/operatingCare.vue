<template>
  <div class="operating-w">
    <div class="banner-w">
      <img src="@/assets/image/yypt_bg.png" alt="" class="banner-w_img">
      <div class="banner-w_top">
        <div class="banner-w_top_l">
          <div class="banner-w_top_l_t">百年医养APP医护端</div>
          <div class="banner-w_top_l_p">专为医护人员打造的信息服务平台</div>
          <div class="banner-w_top_l_h">百年医养医护端APP，能帮助医护人员提升职业技能与收入，为长者提供全方位的居家医护服务，使得传统的居家照护难题得到有效的解决</div>
          <div style="display: flex">
            <div class="banner-w_top_l_btn">
              <img src="@/assets/image/ios_web_icon.png" alt="" class="banner-w_top_l_btn_icon">
              <span>IOS下载</span>
            </div>
            <div class="banner-w_top_l_btn an">
              <img src="@/assets/image/android_web_icon.png" alt="" class="banner-w_top_l_btn_icon an">
              <span>安卓下载</span>
            </div>
          </div>
          <div class="banner-w_top_l_qrCode">
            <img src="" class="banner-w_top_l_qrCode_img">
            <div class="banner-w_top_l_qrCode_t">扫一扫下载APP</div>
          </div>
        </div>
        <div class="banner-w_top_r">
          <img src="@/assets/image/yyCare_bn_1.png" alt="" class="banner-w_imgs">
        </div>
      </div>
    </div>
    <div class="main-w">
      <div class="main-w_top">
        <div class="main-w_top_t">专门为长护险定点机构打造的评估申请平台</div>
        <div class="main-w_top_line"></div>
        <div class="main-w_top_p">百年医养（医护端）</div>
        <div class="main-w_top_h">简单、人性化的操作流程，将长护险失能评估申请所需资料自动归档整理上传，极大提高上门评估人员的工作效率，降低长护险定点机构管理运营成本，帮助传统医疗机构的医护人员提升职业技能与收入，使传统居家照护难题得到有效的解决。</div>
      </div>
    </div>
    <div class="main-w-img">
      <img src="@/assets/image/yyCare_d_p1.png" alt="" style="width: 650px; height: auto;">
      <div class="main-w-img-r">
        <img src="@/assets/image/yypt_icon.png" alt="" style="width: 95px;height: 12px;">
        <div class="main-w-img-r-c">
          <div class="main-w-img-r-c-t">长护险资料一键上传</div>
          <div class="main-w-img-r-c-p">长护险申报一体化平台，能提供从报名、资料审查、进度查询、结果公示等全流程在线支持，一个云端账号即可实现全程轻松操作。
          </div>
        </div>
      </div>
    </div>
    <div class="main-w-img-right">
      <div class="main-w-img-right-r">
        <img src="@/assets/image/yypt_icon.png" alt="" style="width: 95px;height: 12px;">
        <div class="main-w-img-right-r-c">
          <div class="main-w-img-right-r-c-t">护士、护工人员救援响应</div>
          <div class="main-w-img-right-r-c-p">长护险申报一体化平台，能提供从报名、资料审查、进度查询、结果公示等全流程在线支持，一个云端账号即可实现全程轻松操作。
          </div>
        </div>
      </div>
      <img src="@/assets/image/yyCare_d_p2.png" alt="" style="width: 488px; height: auto;">
    </div>
    <div class="main-w-img">
      <img src="@/assets/image/yyCare_d_p3.png" alt="" style="width: 467px; height: auto;">
      <div class="main-w-img-r">
        <img src="@/assets/image/yypt_icon.png" alt="" style="width: 95px;height: 12px;">
        <div class="main-w-img-r-c">
          <div class="main-w-img-r-c-t">社区服务订单分配</div>
          <div class="main-w-img-r-c-p">平台注册的护士、护工人员（兼职、全职），可以如同“滴滴司机”一样注册、上线，接受平台分配的上门护理、居家陪护、医院陪护等订单，获得可观的经济收入。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'operatingCare'
  }
</script>

<style lang="scss" scoped>
  .operating-w {
    background-color: #fff;
    .banner-w {
      position: relative;

      &_img {
        width: 100%;
        height: auto;
      }

      &_top {
        display: flex;
        align-items: center;

        &_l {
          position: absolute;
          top: 10%;
          left: 19%;

          &_t {
            font-size: 42px;
            font-family: OPPOSans;
            font-weight: bold;
            color: #333333;
            line-height: 69px;
            text-shadow: 0px 4px 8px rgba(169, 169, 169, 0.35);
            margin-bottom: 54px;
          }

          &_p {
            font-size: 24px;
            font-family: OPPOSans;
            font-weight: 400;
            color: #333333;
            margin-bottom: 13px;
          }

          &_h {
            width: 405px;
            height: auto;
            font-size: 14px;
            font-family: OPPOSans;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
            margin-bottom: 45px;
          }

          &_btn {
            width: 176px;
            height: 61px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #333333;
            border-radius: 31px;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;

            &.an {
              margin-left: 41px;
              background: #42C253;
            }

            &_icon {
              width: 29px;
              height: 35px;
              margin-right: 10px;

              &.an {
                width: 32px;
                height: 36px;
              }
            }
          }

          &_qrCode {
            width: 130px;
            height: 156px;
            background: #FFFFFF;
            border-radius: 5px;
            padding: 10px 9px;
            text-align: center;

            &_img {
              width: 112px;
              height: 112px;
            }

            &_t {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-top: 6px;
            }
          }
        }

        &_r {
          position: absolute;
          top: 0;
          right: 19%;

          &_imgs {
            /*position: absolute;*/
          }
        }
      }
    }
    .main-w {
      margin-top: 228px;
      padding-bottom: 41px;
      &_top {
        text-align: center;
        &_t {
          font-size: 32px;
          font-family: OPPOSans;
          font-weight: 300;
          color: #666666;
          margin-bottom: 35px;
        }
        &_line {
          width: 60px;
          height: 8px;
          background: #333333;
          margin: 21px auto;
        }
        &_p {
          font-size: 32px;
          font-family: OPPOSans;
          font-weight: bold;
          color: #333333;
          margin: 0 auto;
          margin-bottom: 22px;
        }
        &_h {
          width: 771px;
          height: auto;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
          margin: 0 auto;
        }
      }
    }
    .main-w-img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 97px;
      padding-bottom: 74px;
      background: linear-gradient(5deg, #F7FBFE, #f8fbfe);
      &-r {
        margin-left: 92px;
        &-c {
          margin-top: 15px;
          &-t {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: 36px;
          }
          &-p {
            width: 340px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-align: left;
            letter-spacing: 1px;
          }
        }
      }
    }
    .main-w-img-right {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 97px;
      padding-bottom: 74px;
      background: linear-gradient(5deg, #F7FBFE, #f8fbfe);
      &-r {
        margin-right: 180px;
        &-c {
          margin-top: 15px;
          &-t {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: 36px;
          }
          &-p {
            width: 340px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-align: left;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
</style>