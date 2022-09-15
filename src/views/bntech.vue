<template>
  <div class="bntech-w" id="bntech-w">
    <div class="banner-w">
      <div class="top">
        <div class="t1">百年AI人工智能技术</div>
        <div class="t2">血压检测管理解决方案血压检测管理解决方案</div>
      </div>
    </div>

    <div class="main-w grid-contain">
      <van-tabs
        v-model="tabActive"
        title-active-color="#29A93E"
        color="#29A93E"
        line-height="0"
        scrollspy
        sticky
        id="tabsId"
        ref="tabs"
      >
        <van-tab title-class="tab_title" name="硬件与软件">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '硬件与软件'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">硬件与软件</div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="view-l">
              <img src="@/assets/image/b-c-1.png" alt="" />
            </div>
            <div class="view-r">
              <div class="name"><div class="line"></div> 硬件与软件</div>
              <div class="desc">
                基于手表、手环、血压仪、体脂称等相关设备收集用户的健康数据、配合大数据、人工智能给用户最合理的一份健康报告；
              </div>
              <div class="desc">
                同时可以第一时间预知健康异常的用户，并及时提醒用户以及家属。同时配合百年的安全系统，第一时间预知危险信息，如最新爆发的疫情、危险交通路况、橙色天气预警等。
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="AI人工智能">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === 'AI人工智能'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">AI人工智能</div>
          </div>
          <div class="tab-block-1 tab-content">
           
            <div class="view-r">
              <div class="name"><div class="line"></div>AI人工智能</div>
              <div class="desc">
                基于8维（环境温度、手腕温度、时间、步数、心率、血压、体脂、时间）的数据信息进行建模、配合大数据进行训练，及时的预知用户的健康状态、以及未来走势
              </div>
            </div>
             <div class="view-l">
              <img src="@/assets/image/b-c-2.png" alt="" />
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="专利">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '专利'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">专利</div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="view-l">
              <img src="@/assets/image/b-c-3.png" alt="" />
            </div>
            <div class="view-r">
              <div class="name"><div class="line"></div>专利</div>
              <div class="desc">
                公司自主研发的血压测量与监测引擎，引擎运用产品内置血压示波光学芯片模组，利用光学绿光检测体循环动脉血压（即血液在血管内流动所作用于体循环的压力）。
              </div>
              <div class="desc">
                <div>血压算法引擎B-pumping</div>
                <div>跌倒算法引擎B-SteadyFall</div>
                <div>睡眠算法引擎B-Exactsleep</div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="软著">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '软著'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">软著</div>
          </div>
          <div class="tab-block-1 tab-content">
          
            <div class="view-r">
              <div class="name"><div class="line"></div>软著</div>
              <div class="desc">
                百年医养APP（用户端）是居家医养一站式服务平台，拥有一键救援、健康体征远程全监测、远程防丢定位、健康周报等功能，并为长者提供优质、专业的居家照护全套服务。
              </div>
              <div class="desc">
                百年医养APP（医护端）采用先进的互联网、物联网、大数据、云计算、人工智能等技术，为全国的居家护理人员提供学习交流、培训成长、职业升级、在线接单、订单分配、团队管理、长护险护理等增值服务。
              </div>
            </div>
              <div class="view-l">
              <img src="@/assets/image/b-c-4.png" alt="" />
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
  created() {
    let path = this.$route.query.id
    if (path == '硬件与软件') {
      this.showTabChx = true
      this.tabActive = '硬件与软件'
    } else if (path == 'AI人工智能') {
      this.showTabPh = true
      this.tabActive = 'AI人工智能'
    } else if (path == '专利') {
      this.showTabHl = true
      this.tabActive = '专利'
    } else if (path == '软著') {
      this.showTabHl = true
      this.tabActive = '软著'
    }
  },

  computed: {},

  mounted() {
    setTimeout(() => {
      let mechanismDetailInfo = document.getElementById('bntech-w')
      let myNav = document.querySelector('.van-sticky')
      console.log("页面滚动1", mechanismDetailInfo);
      mechanismDetailInfo.addEventListener("scroll", function (e) {
        let scrollTop = e.target.scrollTop;
        let clientHeight = e.target.clientHeight;
        let scrollHeight = e.target.scrollHeight;
        console.log("页面滚动2", scrollTop,clientHeight,scrollHeight);
        if (scrollTop > 0) {
          let process = document.getElementById('header-w')
          let ylWatchTop = document.querySelector('.van-sticky')
          process.style.display = 'none'
          ylWatchTop.style.top = '0'
          process.style.zIndex = '9999 !important'
        } else {
          let process = document.getElementById('header-w')
          let ylWatchTop = document.querySelector('.van-sticky')
          process.style.display = 'block'
          ylWatchTop.style.top = 73 / 30 * 32 + 'px'
        }
      })
    },500)
  },

  data() {
    return {
      tabActive:'',
    };
  },

  methods: {},
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .bntech-w {
    background-color: #fff;
    overflow-y: scroll;
    height: 100%;
    max-height: 100vh;
    .banner-w {
      width: torem(1920px);
      height: torem(500px);
      background: url("../assets/image/b-b-01.png") 100% 100% no-repeat;
      background-size: cover;
      position: relative;
      .top {
        position: absolute;
        top: torem(203px);
        left: torem(399px);
        .t1 {
          font-size: torem(36px);
          font-family: "Microsoft YaHei";
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: torem(18px);
        }
        .t2 {
          font-size: torem(16px);
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: #FFFFFF;
        }
      }
    }
    .van-tabs--line .van-tabs__wrap {
      width: 50%;
    }

    .main-w {
      width: 1000px;
      margin: 0 auto;
      padding: 0 0 torem(78px) 0;
      .van-tabs--line .van-tabs__wrap {
        width: 60%;
        border-bottom: torem(1px) solid #F4F4F4;
      }
      .tab-title-w .tab-title--border {
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #30C159;
      }
      .tab-title-w .tab-title {
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: torem(28px);
      }
      .tab-title_line {
        width: 100%;
        height: torem(4px);
        border-radius: torem(5px);
        background: #23ac38;
        position: absolute;
      }
      .tab-title-w .tab-title--border {
        margin: 0;
        border-bottom: torem(4px) solid #30C159;
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #30C159;
      }
      .van-tabs--line .van-tabs__wrap .van-tabs__nav--line {
        width: 100%;
        margin: 0 auto;
      }
      .van-sticky {
        padding-bottom: 0px;
        padding-top: torem(26px);
        border-bottom: 1px solid #F4F4F4;
      }
      .van-tab--active {
        margin-bottom: torem(-8px);
      }
      .van-sticky--fixed {
        top: torem(73px);
      }
      .van-tabs__content {
        margin-top: torem(43px);
      }
    }
    .tab-content {
      display: flex;
      align-items: center;
      margin: torem(52px) 0;
    }
    .view-l {
      img {
        width: torem(775px);
        height: auto;
      }
    }
    .view-r {
      width: auto;
      min-width: torem(476px);
      min-height: torem(331px);
      padding: torem(55px) torem(75px);
      color: #333;
      background: #f4f4f4;
      .name {
        display: flex;
        align-items: center;
        font-size: torem(18px);
        font-family: "Microsoft YaHei";
        font-weight: bold;
        color: #333333;
        .line{
          width: torem(6px);
          height: torem(18px);
          background: #30C159;
          border-radius: torem(3px);
          margin: 0 torem(5px) 0 0;
        }
      }
      .desc {
        margin: torem(18px) 0;
        margin-bottom: torem(20px);
        line-height: torem(20px);
        font-size: torem(14px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  /*修改滚动条样式*/
  .bntech-w::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .bntech-w::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .bntech-w::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .bntech-w::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .bntech-w::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
</style>
