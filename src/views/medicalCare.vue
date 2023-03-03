<template>
  <div class="operating-w">
    <div class="banner-w">
      <img src="@/assets/image/yypt_bg.png" alt="" class="banner-w_img">
      <div class="banner-w_top">
        <div class="banner-w_top_l">
          <div class="banner-w_top_l_t">医养管家APP</div>
          <div class="banner-w_top_l_p">医养管家监护管理平台</div>
          <div class="banner-w_top_l_h">百年医养管家可通过医养管家APP关联用户，实时查看用户健康趋势数据、管理用户健康状态、统计分析高风险用户，并提供健康指导等服务内容。
            医养管家可在平台上管理自己的下线管家，也可给用户分享对应的优质服务和商品给有需求的用户。</div>
        </div>
        <div class="banner-w_top_r">
          <img src="@/assets/image/mCare_d_p1.png" alt="" class="banner-w_imgs">
        </div>
      </div>
    </div>
    <div class="main-w">
      <div class="main-w_top">
        <div class="main-w-img-r left" style="display: flex;align-items: center;justify-content: center;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
        </div>
        <div class="main-w_top_p">主要服务</div>
        <div class="main-w_top_h">用户健康监护、健康周报分析、上门护理服务、陪诊、中医理疗、推拿按摩</div>
      </div>
    </div>
    <div class="main-w">
      <div class="carouselBox">
        <el-carousel :loop="false" :autoplay="false" class="carousel">
          <el-carousel-item class="el-car-item" v-for="(list, index) in dataList" :key="index">
            <div v-for="(imgList,index1) in list" :key="index1" class="divSrc">
              <img class="img" :src="imgList.img" />
              <div class="title">{{imgList.title}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main-w-img">
      <div class="main-w-img-r bg">
        <div class="" style="position: absolute;top: 38%;right: 26%;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
          <div class="main-w-img-r-c">
            <div class="main-w-img-r-c-t">用户管理</div>
            <div class="main-w-img-r-c-p">医养管家能够实时查看附近用户的健康状态，实现对用户健康状态的全程了解、知悉。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-w-img-right">
      <div class="main-w-img-right-r bg">
        <div style="position:absolute;top: 15%;left: 3%;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
          <div class="main-w-img-right-r-c">
            <div class="main-w-img-right-r-c-t">护士、护工人员救援响应</div>
            <div class="main-w-img-right-r-c-p">长护险申报一体化平台，能提供从报名、资料审查、进度查询、结果公示等全流程在线支持，一个云端账号即可实现全程轻松操作。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-w-img">
      <div class="main-w-img-r bg1">
        <div class="" style="position: absolute;top: 32%;right: 26%;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
          <div class="main-w-img-r-c">
            <div class="main-w-img-r-c-t">用户详情分析</div>
            <div class="main-w-img-r-c-p">一个医养管家可同时管理多名用户，并通过对每位用户的实时趋势数据、历史趋势数据对比，实现对用户数量及高危风险用户的数据统计。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-w-img-right">
      <div class="main-w-img-right-r bg1">
        <div style="position:absolute;top: 18%;left: 0%;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
          <div class="main-w-img-right-r-c">
            <div class="main-w-img-right-r-c-t">优质资讯定向推送</div>
            <div class="main-w-img-right-r-c-p">医养管家可以把图文、产品和服务通过平台的消息功能、微信好友，朋友圈分享给自己的客户。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-w-img">
      <div class="main-w-img-r bg2">
        <div class="" style="position: absolute;top: 29%;right: 26%;">
          <img src="@/assets/image/yypt_icon.png" alt="" class="yypt_icon">
          <div class="main-w-img-r-c">
            <div class="main-w-img-r-c-t">管理下级医养管家</div>
            <div class="main-w-img-r-c-p">医养管家可以搜索和查看下级管家的数据，包括关联用户数量、上月新关联用户量、图文分享次数、成交金额等信息。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'operatingCare',
    data() {
      return {
        dataList: [{
          img: require('../assets/image/zyrw04.png'),
          title: '用户健康监护'
        }, {
          img: require('../assets/image/zyrw05.png'),
          title: '健康周报分析'
        }, {
          img: require('../assets/image/zyrw06.png'),
          title: '上门护理服务'
        },{
          img: require('../assets/image/zyrw01.png'),
          title: '陪诊'
        }, {
          img: require('../assets/image/zyrw02.png'),
          title: '中医理疗'
        }, {
          img: require('../assets/image/zyrw03.png'),
          title: '推拿按摩'
        }, ]
      }
    },
    mounted() {
      this.byEvents()
    },
    methods: {
      byEvents() {
        let newDataList = [];
        let current = 0
        if (this.dataList && this.dataList.length > 0) {
          for (let i = 0; i <= this.dataList.length - 1; i++) {
            if (i % 3 !== 0 || i === 0) {	//数据处理成几张展示
              if (!newDataList[current]) {
                newDataList.push([this.dataList[i]])
              } else {
                newDataList[current].push(this.dataList[i])
              }
            } else {
              current++
              newDataList.push([this.dataList[i]])
            }
          }
        }
        this.dataList = [...newDataList]
      },
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
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
            font-size: torem(42px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            line-height: torem(69px);
            text-shadow: 0px torem(4px) torem(8px) rgba(169, 169, 169, 0.35);
            margin-bottom: torem(54px);
          }

          &_p {
            font-size: torem(24px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            margin-bottom: torem(13px);
          }

          &_h {
            width: torem(405px);
            height: auto;
            font-size: torem(14px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            line-height: torem(25px);
            margin-bottom: torem(45px);
          }

          &_btn {
            width: torem(176px);
            height: torem(61px);
            display: flex;
            align-items: center;
            justify-content: center;
            background: #333333;
            border-radius: torem(31px);
            color: #ffffff;
            font-size: torem(16px);

            &.an {
              margin-left: torem(41px);
              background: #42C253;
            }

            &_icon {
              width: torem(29px);
              height: torem(35px);
              margin-right: torem(10px);

              &.an {
                width: torem(32px);
                height: torem(36px);
              }
            }
          }

          &_qrCode {
            width: torem(130px);
            height: torem(156px);
            background: #FFFFFF;
            border-radius: torem(5px);
            padding: torem(10px) torem(9px);
            text-align: center;
            margin-top: torem(33px);
            &_img {
              width: torem(112px);
              height: torem(112px);
            }

            &_t {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #333333;
              margin-top: torem(6px);
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
    .banner-w_imgs {
      width: torem(407px);
      height: torem(782px);
      margin-top: torem(30px);
    }
    .main-w {
      margin-top: torem(184px);
      padding-bottom: torem(41px);
      &_top {
        text-align: center;
        &_t {
          font-size: torem(32px);
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #666666;
          margin-bottom: torem(35px);
        }
        &_line {
          width: torem(60px);
          height: torem(8px);
          background: #333333;
          margin: torem(21px) auto;
        }
        &_p {
          font-size: torem(32px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin: 0 auto;
          margin-bottom: torem(22px);
        }
        &_h {
          width: torem(771px);
          height: auto;
          font-size: torem(16px);
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
      padding-top: torem(97px);
      padding-bottom: torem(74px);
      background: linear-gradient(5deg, #F7FBFE, #FFFFFF);
      &-r {
        &.bg {
          width: 100%;
          height: torem(953px);
          background: url("../assets/image/mCare_d_p2.png") no-repeat;
          background-size: cover;
          position: relative;
        }
        &.bg1 {
          width: 100%;
          height: torem(953px);
          background: url("../assets/image/mCare_d_p4.png") no-repeat;
          background-size: cover;
          position: relative;
        }
        &.bg2 {
          width: 100%;
          height: torem(953px);
          background: url("../assets/image/mCare_d_p6.png") no-repeat;
          background-size: cover;
          position: relative;
        }
        &.left {
          margin-left: 0;
          margin-bottom: torem(12px);
        }
        &-c {
          margin-top: torem(15px);
          &-t {
            font-size: torem(36px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(36px);
          }
          &-p {
            width: torem(340px);
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-align: left;
            letter-spacing: torem(1px);
          }
        }
      }
    }
    .yyCare_d_p1 {
      width: torem(650px);
      height: auto;
    }
    .yypt_icon {
      width: torem(95px);
      height: torem(12px);
    }
    .yyCare_d_p2 {
      width: torem(488px);
      height: auto;
    }
    .yyCare_d_p3 {
      width: torem(467px);
      height: auto;
    }
    .main-w-img-right {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: torem(97px);
      padding-bottom: torem(74px);
      background: #FFFFFF;
      &-r {
        &.bg {
          width: torem(1029px);
          height: torem(953px);
          background: url("../assets/image/mCare_d_p3.png") no-repeat;
          background-size: auto;
          position: relative;
          margin: 0 auto;
        }
        &.bg1 {
          width: torem(1029px);
          height: torem(953px);
          background: url("../assets/image/mCare_d_p5.png") no-repeat;
          background-size: auto;
          position: relative;
          margin: 0 auto;
        }
        &-c {
          margin-top: torem(15px);
          &-t {
            font-size: torem(36px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(36px);
          }
          &-p {
            width: torem(340px);
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-align: left;
            letter-spacing: torem(1px);
          }
        }
      }
    }
    .main-w-img-btm {
      width: 100%;
      height: torem(960px);
      background: url('../assets/image/yyCare_d_p4.png') center center no-repeat;
      position: relative;
      &-r {
        position: absolute;
        left: 22%;
        top: 20%;
        &-c {
          margin-top: torem(15px);
          &-t {
            font-size: torem(36px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(36px);
          }
          &-p {
            width: torem(396px);
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            text-align: left;
            letter-spacing: torem(1px);
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .carouselBox {
    margin: 0 auto;
    width: torem(1200px);
    height: auto;
    background-color: #ffffff;
    .carousel{
      width: 100%;
      height: auto;
      .el-car-item {
        width: 100%;
        height: torem(280px);
        display: flex;
        .divSrc{
          width: torem(373px);
          height: torem(280px);
          border-radius: torem(5px);
          cursor: pointer;
          margin-right: torem(20px);
          position: relative;
          .img {
            width: torem(373px);
            height: torem(280px);
          }
          .title {
            font-size: torem(14px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            bottom: torem(12px);
            left: torem(10px);
          }
        }
      }
      .el-carousel__arrow--left {
        left: torem(-17px);
      }
      .el-carousel__arrow--right, .el-notification.right {
        right: torem(3px);
        display: block !important;
      }
      .el-carousel__container {
        margin-left: torem(23px);
      }
      .el-carousel__arrow i {
        cursor: pointer;
        color: #666666;
        font-size: torem(25px);
        font-weight: bold;
      }
      .el-carousel__arrow{
        width: torem(29px);
        height: torem(47px);
        background: #FFFFFF;
        box-shadow: 0px torem(4px) torem(8px) 0px rgba(187,187,187,0.33);
        border-radius: torem(5px);
        display: block !important;
      }
      .el-carousel__arrow:hover{
        width: torem(29px);
        height: torem(47px);
        background: #FFFFFF;
        box-shadow: 0px torem(4px) torem(8px) 0px rgba(187,187,187,0.33);
        border-radius: torem(5px);
        display: block !important;
      }
    }
    .el-car-item {
      width: 100%;
      display: flex;

      .img {
        width: torem(373px);
        height: torem(280px);
        border-radius: torem(5px);
        cursor: pointer;
      }
    }
  }
</style>
