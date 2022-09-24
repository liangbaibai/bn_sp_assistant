<template>
  <div class="walkbn-w bg-fff" id="walkbn-w">
    <div class="banner-w">
      <div class="top">
        <div class="t1">走进百年</div>
        <div class="t2">About BAINIAN</div>
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
        ref="tabs"
      >
        <van-tab title-class="tab_title" name="旗下品牌">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '旗下品牌'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              旗下品牌
            </div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="title-img">
              <div class="t1">旗下品牌</div>
              <div class="t2">The company brand</div>
            </div>
            <div class="brand-s">
              <div class="brand-i">
                <div class="img">
                  <img src="@/assets/image/k-c-1.png" alt="" />
                </div>
                <div class="desc">
                  百年医养是百年大健康旗下的居家养老服务品牌。我们目前拥有百年医养居家陪护、医院陪护、护理、长护险，居家医养一站式服务平台-百年医养APP，以及智慧养老解决方案等一系列业务。
                </div>
              </div>
              <div class="brand-i">
                <div class="img">
                  <img src="@/assets/image/k-c-2.png" alt="" />
                </div>
                <div class="desc">
                  百来俏是百年大健康旗下的智能养老硬件设备品牌。我们坚持自主研发和前瞻性技术的持续投入，通过全系列智能穿戴设备及家庭医疗产品，为长者带来创新、领先、可信赖的产品。
                </div>
              </div>
              <img src="@/assets/image/k-c-bg.png" alt="" class="brand-s-img">
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="百年文化">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '百年文化'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              百年文化
            </div>
          </div>
          <div class="tab-block-2 tab-content top1">
            <div class="title-img">
              <div class="t1">百年文化</div>
              <div class="t2">BAINIAN culture</div>
            </div>
            <div class="w-culture-swipe">
              <div class="content">
                <div style="position: relative">
                  <img :src="bgImg" alt="" class="bgImg">
                  <div class="square"></div>
                  <div class="squareLeft"></div>
                </div>
                <div class="contentLeft">
                  <div class="colon"><span>"</span></div>
                  <div class="num">{{checkContent.num}}</div>
                  <div class="title">{{checkContent.title}}</div>
                  <div class="info">{{checkContent.content}}</div>
                </div>
              </div>
              <div class="timeline">
                <div class="timelineContent">
                  <div class="timelineContentLine">
                    <div class="flex" v-for="(item,index) in w_data.culture">
                      <div style="flex:1"></div>
                      <div
                          :class="checkIndex == index ? 'dotBig' : 'dotBigTwo'"
                          @mousemove="mousemoves($event,item,index)"
                          @click="checkCulture(item,index)">
                        <div :class="checkIndex == index ? 'dot' : 'dotTwo'"></div>
                      </div>
                      <div class="item"></div>
                    </div>
                  </div>
                  <div class="timelineInfo">
                    <div class="flex" v-for="(item,index) in w_data.culture">
                      <div class="item1"></div>
                      <div
                          class="text"
                          :style="{color: checkIndex == index ? '#30C159' : '#333333'}"
                          @mousemove="mousemoves($event,item,index)"
                          @click="checkCulture(item,index)">{{item.title}}</div>
                      <div class="item1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title-class="tab_title" name="荣誉证书">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '荣誉证书'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              荣誉证书
            </div>
          </div>
          <div class="tab-block-3 tab-content top2">
            <div >
              <img src="@/assets/image/w-c-4.png" class="ryzs-img" alt="" />
            </div>
          </div>
        </van-tab>
        <van-tab title-class="tab_title" name="公司活动">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '公司活动'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              公司活动
            </div>
          </div>
          <div class="tab-block-5 tab-content">
            <div class="title-img">
              <div class="t1">公司活动</div>
              <div class="t2">Company activities</div>
            </div>

            <div class="w-activity-c">
              <div class="content-c">
                <div class="w-activity-c-l">
                  <div class="w-activity-c-l-top">
                    <div>
                      <div class="t1">Review activities</div>
                      <div class="t2">活动回顾</div>
                    </div>
                    <div class="t3">01</div>
                    <img src="@/assets/image/line_type.png" class="line_type" alt="">
                  </div>
                  <div class="w-activity-c-l-botm">
                    <div class="left">
                      <div class="t1">
                        <div>百年大健康携手家和家政，</div>
                        <div>参与“安心家政 爱满羊城”活动！</div>
                      </div>
                      <div class="t2">2022/06/18</div>
                      <div class="t3">
                        2022年6月18日，为推动家政服务业高质量发展，提升“南粤家政”羊城行动的影响力，提高家政行业的关注度和认可度，由广州市妇女联合会联合广州市商务局、广州市市人力资源和社会保障局、天河区人民政府主办，广州市妇女儿童发展中心、广州市家庭服务联合会承办的“安心家政 爱满羊城”首届广州安心家政服务月活动在海心沙广场启动，主办方同时为市民推出“安心家政”品牌展，展示“南粤家政”羊城行动启动以来的主要实效成果。
                      </div>
                      <div class="botm-line"></div>
                      <div style="display: flex;align-items: center">
                        <div class="t5">01</div>
                        <div class="t6"> /01</div>
                      </div>
                    </div>
                    <div class="right">
                      <el-carousel trigger="click" class="carouselImg" height="464px" :indicator-position="none">
                        <el-carousel-item v-for="item in 1" :key="item">
                          <img src="@/assets/image/w-c-6.png" alt="" />
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-c-r">
                <div class="w-activity-c-l">
                  <div class="w-activity-c-l-top">
                    <div style="text-align: left;">
                      <div class="t1">Review activities</div>
                      <div class="t2">活动回顾</div>
                    </div>
                    <div class="t3">02</div>
                    <img src="@/assets/image/line_type.png" class="line_type" alt="">
                  </div>
                  <div class="w-activity-c-l-botm">
                    <div class="left">
                      <div class="t1">
                        <div>践行初心丨情暖花山</div>
                        <div>百年医养慰问低保、低收、特困、失能人员！</div>
                      </div>
                      <div class="t2">2021/10/18</div>
                      <div class="t3">
                        为弘扬中华民族传统美德，营造尊老、敬老、爱老、助老的良好风尚，2021年10月18日，广东百年医疗健康科技发展有限公司（简称百年医养）一行人，在总经理陈苏的带领下，对广州市花都区花山镇南村的低保、低收、特困、失能人员开展了“践行初心 情暖花山”慰问活动，向老人们致以最诚挚的问候和祝福。
                      </div>
                      <div class="botm-line"></div>
                      <div style="display: flex;align-items: center">
                        <div class="t5">01</div>
                        <div class="t6"> /01</div>
                      </div>
                    </div>
                    <div class="right">
                      <el-carousel trigger="click" class="carouselImg" height="464px" :indicator-position="none">
                        <el-carousel-item v-for="item in 1" :key="item">
                          <img src="@/assets/image/w-c-s1.png" alt="" />
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-c">
                <div class="w-activity-c-l">
                  <div class="w-activity-c-l-top">
                    <div>
                      <div class="t1">Review activities</div>
                      <div class="t2">活动回顾</div>
                    </div>
                    <div class="t3">03</div>
                    <img src="@/assets/image/line_type.png" class="line_type" alt="">
                  </div>
                  <div class="w-activity-c-l-botm">
                    <div class="left">
                      <div class="t1">
                        <div>百年大健康走访慰问颐年养老院</div>
                      </div>
                      <div class="t2">2020/10/24</div>
                      <div class="t3">
                        带着对老人的尊敬与关怀，广东百年医疗健康科技发展有限公司（以下简称百年大健康）总经理陈苏率公司全体员工，于10月24日走访慰问了广州颐年养老院近200位老人，并开展了“浓情重阳 敬老爱老”公益演出活动。
                      </div>
                      <div class="botm-line"></div>
                      <div style="display: flex;align-items: center">
                        <div class="t5">01</div>
                        <div class="t6"> /01</div>
                      </div>
                    </div>
                    <div class="right">
                      <el-carousel trigger="click" class="carouselImg" height="464px" :indicator-position="none">
                        <el-carousel-item v-for="item in 1" :key="item">
                          <img src="@/assets/image/w-c-s2.png" alt="" />
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-c-r">
                <div class="w-activity-c-l">
                  <div class="w-activity-c-l-top">
                    <div style="text-align: left;">
                      <div class="t1">Review activities</div>
                      <div class="t2">活动回顾</div>
                    </div>
                    <div class="t3">04</div>
                    <img src="@/assets/image/line_type.png" class="line_type" alt="">
                  </div>
                  <div class="w-activity-c-l-botm">
                    <div class="left">
                      <div class="t1">
                        <div>百年大健康携手家和家政，</div>
                        <div>亮相“南粤家政 羊城超市”！</div>
                      </div>
                      <div class="t2">2020/09/27</div>
                      <div class="t3">
                        9 月 27 日，广州市总工会、团市委、市妇联、市人社局等联合举办的 " 粤菜师傅 "" 广东技工 "" 南粤家政 " 交流会在广州市青年文化宫启动。百年大健康携手家和家政，亮相“南粤家政 羊城超市”。
                      </div>
                      <div class="botm-line"></div>
                      <div style="display: flex;align-items: center">
                        <div class="t5">01</div>
                        <div class="t6"> /01</div>
                      </div>
                    </div>
                    <div class="right">
                      <el-carousel trigger="click" class="carouselImg" height="464px" :indicator-position="none">
                        <el-carousel-item v-for="item in 1" :key="item">
                          <img src="@/assets/image/w-c-s3.png" alt="" />
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div class="swipe-c-w">
                <div class="swipe-w">
                  <el-carousel trigger="click" height="338px">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/w-c-6.png" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="content-detail">
                  <div class="title">百年大健康走访慰问颐年养老院</div>
                  <div class="line"></div>
                  <div class="desc">
                    带着对老人的尊敬与关怀，广东百年医疗健康科技发展有限公司（以下简称百年大健康）总经理陈苏率公司全体员工，于10月24日走访慰问了广州颐年养老院近200位老人，并开展了“浓情重阳
                    敬老爱老”公益演出活动。
                  </div>
                </div>
              </div>
              <div class="swipe-c-w">
                <div class="content-detail" style="margin: 0 -16px 0 0">
                  <div class="title">
                    百年大健康携手家和家政， 亮相“南粤家政 羊城超市”！
                  </div>
                  <div class="line"></div>
                  <div class="desc">
                    9 月 27
                    日，广州市总工会、团市委、市妇联、市人社局等联合举办的 "
                    粤菜师傅 "" 广东技工 "" 南粤家政 "
                    交流会在广州市青年文化宫启动。百年大健康携手家和家政，亮相“南粤家政
                    羊城超市”。
                  </div>
                </div>
                <div class="swipe-w">
                  <el-carousel trigger="click" height="338px">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="@/assets/image/w-c-7.png" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>-->
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import { index } from "@/utils/mixins";
import { getElement, debounce } from "@/utils/util";
import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";
export default {
  mixins: [index],
  mounted() {
    setTimeout(() => {
      let mechanismDetailInfo = document.getElementById('walkbn-w')
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
      tabActive: "",
      w_data: {
        culture: [
          {
            num: '01',
            title: "企业文化",
            content:
              "关注老人健康、快乐、幸福的晚年生活，维护老人的权益。我们百年大健康、医养平台等所有参与者，包括消费者、商家、第三方服务供应商、公益组织和其他人士，都享有成长或获益的机会。我们更加推崇和弘扬孝道文化这一我国优秀文化传统。并且始终如一地关注和满足老人的需求！",
            img: require("@/assets/image/w-c-3.png"),
          },
          {
            num: '02',
            title: "企业愿景",
            content:
              "致力成为长者无忧智能健康生活的引领者。 影响和带动全社会关爱呵护我们成长的父母长辈。",
            img: require("@/assets/image/w-c-12.png"),
          },
          {
            num: '03',
            title: "公司理念",
            content: "让每一位老人得到贴身又贴心服务， 安享愉悦晚年生活",
            img: require("@/assets/image/w-c-8.png"),
          },
          {
            num: '04',
            title: "服务理念",
            content: "专业无忧 快捷贴心 省心安心",
            img: require("@/assets/image/w-c-9.png"),
          },
          {
            num: '05',
            title: "公司价值观",
            content: "用户第一 \n 亲和友善 \n 尊老敬业 \n 弘扬孝道",
            img: require("@/assets/image/w-c-10.png"),
          },
          {
            num: '06',
            title: "公司精神",
            content:
              "不怕累不嫌弃，守护温暖这片夕阳 \n 不怕苦能承受任何委屈，含泪微笑点燃希望 \n 不怕挫折始终做为爱的事业的引领人。\n 做有善心的人，做良心的机构，\n 呵护老人是我们的责任 \n 他们的现在，代表着我们的未来",
            img: require("@/assets/image/w-c-11.png"),
          },
        ], //百年文化
      },
      cultureIndex: 0,
      bgImg: require("@/assets/image/w-c-3.png"),
      checkContent: {
        num: '01',
        title: "企业文化",
        content:
          "关注老人健康、快乐、幸福的晚年生活，维护老人的权益。我们百年大健康、医养平台等所有参与者，包括消费者、商家、第三方服务供应商、公益组织和其他人士，都享有成长或获益的机会。我们更加推崇和弘扬孝道文化这一我国优秀文化传统。并且始终如一地关注和满足老人的需求！",
        img: require("@/assets/image/w-c-3.png"),
      },
      checkIndex: 0
    };
  },

  methods: {
    checkCulture(item,index) {
      this.bgImg = item.img
      this.checkContent = item
      this.checkIndex = index
    },
    mousemoves(event,item,index) {
      console.log('鼠标经过：', item)
      this.bgImg = item.img
      this.checkContent = item
      this.checkIndex = index
    }
  },

  updated() {},
};
</script>


<style lang="scss" >
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .walkbn-w {
    background-color: #fff;
    height: 100%;
    .banner-w {
      width: 100vw;
      height: torem(500px);
      background: url("../assets/image/w-b-1.png") 100% 100% no-repeat;
      background-size: cover;
      position: relative;
      .top {
        position: absolute;
        text-align: center;
        top: torem(220px);
        left: torem(860px);
        .t1 {
          font-size: torem(36px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin-bottom: torem(10px);
        }
        .t2 {
          font-size: torem(22px);
          font-family: OPPOSans;
          font-weight: 400;
          color: #999999;
          text-transform: uppercase;
        }
      }
    }
    .van-tabs--line .van-tabs__wrap {
      width: 51%;
    }
    .van-tab__pane {
      padding: torem(52px) 0;
    }
/*    .tab-block-1 {
      padding: torem(52px) 0;
    }*/

    .main-w {
      width: 100%;
      margin: 0 auto;
      padding: 0 0 torem(78px) 0;
      .tab-title--border{
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #30C159;
        border-bottom: torem(4px) solid #30C159;
      }
      .van-sticky {
        z-index: 9999;
        padding-bottom: 0px;
        padding-top: torem(26px);
      }
      .van-sticky--fixed {
        top: torem(73px);
      }
    }
    .tab-content {
      // margin: 0 20%;
      &.top {
        margin-top: torem(90px);
      }
      &.top1 {
        margin-top: torem(90px);
      }
      &.top2 {
        margin-top: torem(72px);
      }
      .ryzs-img {
        width: 100vw;
        height: auto;
      }
      .title-img {
        margin: torem(52px) auto;
        text-align: center;
        .t1 {
          font-size: torem(28px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin-bottom: 5px;
        }
        .t2 {
          font-size: torem(16px);
          font-family: Arial;
          font-weight: 400;
          color: #999999;
          text-transform: uppercase;
        }
        img {
          width: torem(286px);
          margin: 0 auto;
        }
      }
    }
    .brand-s {
      display: flex;
      justify-content: center;
      margin: torem(52px) 0 0 0;
      position: relative;
      .brand-s-img {
        width: 100vw;
        height: auto;
        position: absolute;
        top: torem(240px);
      }
    }
    .brand-i {
      width: torem(420px);
      color: #333;
      .img {
        width: torem(420px);
        height: torem(280px);
        background: #F4F4F4;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: torem(242px);
          height: auto;
        }
      }
      .name {
        margin: torem(12px) 0;
        font-size: torem(14px);
        font-weight: bold;
      }
      .desc {
        text-align: center;
        line-height: torem(24px);
        font-size: torem(12px);
        margin: torem(21px) torem(24px);
      }
    }
    .brand-i:nth-child(1) {
      margin-right: torem(126px);
    }
  }
  /*修改滚动条样式*/
  .walkbn-w::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .walkbn-w::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .walkbn-w::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .walkbn-w::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .walkbn-w::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
  /*百年文化*/
  .w-culture-swipe {
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      .bgImg {
        background-size: contain;
        background-repeat: no-repeat;
        width: torem(640px);
        height: torem(480px);
        position: relative;
        z-index: 888;
      }
      .square {
        position: absolute;
        top: torem(-20px);
        right: torem(-20px);
        width: torem(100px);
        height: torem(100px);
        background: #30C159;
      }
      .squareLeft {
        position: absolute;
        left: torem(-20px);
        bottom: torem(-20px);
        width: torem(100px);
        height: torem(100px);
        background: #30C159;
      }
      .contentLeft {
        width: torem(324px);
        margin-left: torem(109px);
        .colon {
          font-size: torem(51px);
          font-family: "Microsoft YaHei";
          font-weight: bold;
          color: #333333;
          margin-bottom: torem(-20px);
        }
        .num {
          font-size: torem(60px);
          font-family: "Microsoft YaHei";
          font-weight: bold;
          color: #333333;
        }
        .title {
          font-size: torem(20px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #30C159;
          margin-top: torem(8px);
        }
        .info {
          font-size: torem(14px);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          line-height: torem(28px);
          margin-top: torem(10px);
        }
      }
    }
    .timeline {
      margin-top: torem(105px);
      .timelineContent{
        width: 100vw;
        height: torem(50px);
        border:0px solid red;
        .timelineContentLine {
          width: 100vw;
          padding: 0 torem(350px);
          display:flex;
          justify-content: center;
          height: torem(4px);
          background: linear-gradient(to right, rgba(238, 238, 238, 0.1), rgba(238, 238, 238, 0.3), rgba(238, 238, 238, 0.6), #EEEEEE, rgba(238, 238, 238, 0.6), rgba(238, 238, 238, 0.3), rgba(238, 238, 238, 0.1));
        }
        .flex {
          /*flex: 1;*/
          display:flex;
          width: torem(166px);
        }
      }
      .timelineInfo {
        display:flex;
        justify-content: center;
        margin-top: torem(10px);
        padding: 0 torem(350px);
        .text {
          font-size: torem(14px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin-top: torem(5px);
          cursor: pointer;
        }
      }
      .dotBig{
        cursor: pointer;
        border: torem(1px) solid #30C159;
        width: torem(19px);
        height: torem(19px);
        border-radius: 50%;
        background: white;
        margin: 0 auto;
        margin-bottom: torem(-6px);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: torem(-7px);
        .dot{
          background: #30C159;
          width: torem(10px);
          height: torem(10px);
          border-radius: 50%;
          /*margin: auto;*/
        }
      }
      .dotBigTwo {
        cursor: pointer;
        border: torem(1px) solid #999999;
        width: torem(13px);
        height: torem(13px);
        border-radius: 50%;
        background: white;
        margin: 0 auto;
        margin-bottom: torem(-6px);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: torem(-7px);
        .dotTwo {
          background: #999999;
          width: torem(7px);
          height: torem(7px);
          border-radius: 50%;
          /*margin: auto;*/
        }
      }
      .item{
        flex:1;
        /*border-bottom:1px solid #cdcdcd;*/
      }
      .item1{
        flex:1;
        border-bottom:0px solid #cdcdcd;
      }
    }
  }
  /*公司活动*/
  .w-activity-c {
    .swipe-c-w {
      display: flex;
      position: relative;
      align-items: center;
      margin: 0 0 torem(78px) 0;
    }
    .swipe-w {
      position: relative;
      z-index: 1;
      width: torem(572px);
    }
    .content-detail {
      position: relative;
      z-index: 2;
      width: torem(338px);
      margin: 0 0 0 torem(-16px);
      padding: torem(52px) torem(26px) torem(52px) torem(39px);
      background: #f4f4f4;
      .title {
        font-size: torem(14px);
        font-weight: bold;
      }
      .desc {
        line-height: torem(24px);
        font-size: torem(12px);
      }
    }
    .content-c {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: torem(135px);
      margin-left: torem(-70px);
      .w-activity-c-l {
        .w-activity-c-l-top {
          display: flex;
          align-items: center;
          position: relative;
          width: torem(438px);
          padding-left: torem(34px);
          .t1 {
            font-size: torem(20px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            text-transform: uppercase;
          }
          .t2 {
            font-size: torem(22px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #30C159;
          }
          .t3 {
            font-size: torem(50px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #30C159;
            margin-left: torem(76px);
          }
        }
        .w-activity-c-l-botm {
          width: torem(1137px);
          height: torem(400px);
          background: #FAFAFA;
          margin-top: torem(75px);
          position: relative;
          .left {
            width: torem(438px);
            padding: torem(21px) torem(35px);
            .t1 {
              font-size: torem(18px);
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              line-height: torem(28px);
              margin-bottom: torem(8px);
            }
            .t2 {
              font-size: torem(14px);
              font-family: Arial;
              font-weight: 400;
              color: #30C159;
              margin-bottom: torem(15px);
            }
            .t3 {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              line-height: torem(23px);
            }
            .botm-line {
              width: torem(44px);
              height: torem(4px);
              background: #666666;
              border-radius: torem(2px);
              margin-top: torem(35px);
              margin-bottom: torem(20px);
            }
            .t5 {
              font-size: torem(20px);
              font-family: Arial;
              font-weight: 400;
              color: #333333;
              margin-right: torem(5px);
            }
            .t6 {
              font-size: torem(14px);
              color: #999999;
            }
          }
          .right {
            position: absolute;
            right: torem(-70px);
            top: torem(-140px);
            width: torem(769px);
            height: torem(464px);
            .carouselImg {
              height: torem(464px);
            }
            .el-carousel--horizontal {
              overflow: hidden !important;
            }
            .el-carousel__arrow--left {
              left: 0;
              border-radius: 0;
              top: 97%;
              background: rgba(0, 0, 0, 0.5);
            }
            .el-carousel__arrow--right {
              left: torem(36px);
              border-radius: 0;
              top: 97%;
              background: rgba(0, 0, 0, 0.5);
            }
          }
        }
        .line_type {
          width: torem(110px);
          height: auto;
          position: absolute;
          top: 0;
          right: torem(153px);
          z-index: 9999;
        }
      }
    }
    .content-c-r {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: torem(135px);
      margin-right: torem(-90px);
      .w-activity-c-l {

        .w-activity-c-l-top {
          display: flex;
          align-items: center;
          position: relative;
          text-align: right;
          justify-content: flex-end;
          padding-right: torem(34px);
          .t1 {
            font-size: torem(20px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            text-transform: uppercase;
          }
          .t2 {
            font-size: torem(22px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #30C159;
          }
          .t3 {
            font-size: torem(50px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #30C159;
            margin-left: torem(96px);
          }
        }
        .w-activity-c-l-botm {
          width: torem(1137px);
          height: torem(400px);
          background: #FAFAFA;
          margin-top: torem(75px);
          position: relative;
          .left {
            width: torem(438px);
            padding: torem(21px) torem(35px);
            position: absolute;
            right: 0;
            .t1 {
              font-size: torem(18px);
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              line-height: torem(28px);
              margin-bottom: torem(8px);
            }
            .t2 {
              font-size: torem(14px);
              font-family: Arial;
              font-weight: 400;
              color: #30C159;
              margin-bottom: torem(15px);
            }
            .t3 {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              line-height: torem(23px);
            }
            .botm-line {
              width: torem(44px);
              height: torem(4px);
              background: #666666;
              border-radius: torem(2px);
              margin-top: torem(35px);
              margin-bottom: torem(20px);
            }
            .t5 {
              font-size: torem(20px);
              font-family: Arial;
              font-weight: 400;
              color: #333333;
              margin-right: torem(5px);
            }
            .t6 {
              font-size: torem(14px);
              color: #999999;
            }
          }
          .right {
            position: absolute;
            left: torem(-70px);
            top: torem(-140px);
            width: torem(769px);
            height: torem(464px);
            .carouselImg {
              height: torem(464px);
            }
            .el-carousel--horizontal {
              overflow: hidden !important;
            }
            .el-carousel__arrow--left {
              left: 0;
              border-radius: 0;
              top: 97%;
              background: rgba(0, 0, 0, 0.5);
            }
            .el-carousel__arrow--right {
              left: torem(36px);
              border-radius: 0;
              top: 97%;
              background: rgba(0, 0, 0, 0.5);
            }
          }
        }
        .line_type {
          width: torem(110px);
          height: auto;
          position: absolute;
          top: 0;
          right: torem(189px);
          transform: rotate(180deg);
          z-index: 9999;
        }
      }
    }
  }
  .walkbn-w {
    .line {
      width: torem(39px);
      height: torem(2.5px);
      margin: torem(18px) 0 torem(12px) 0;
      background-color: #29a93e;
      border-radius: torem(2px);
    }
    .tab-block-3 {
      margin: 0;
    }
    .tab-block-4 {
      .content-w {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin: 0;
        color: #333;
      }
      .view-img {
        width: 58%;
      }
      .detail {
        width: 42%;

        margin: 0 0 0 torem(78px);
        padding: 0 torem(52px) 0 0;
      }
      .title {
        font-size: torem(14px);
        font-weight: bold;
      }
      .line {
      }
      .desc {
        font-size: torem(12px);
        line-height: torem(20px);
      }
    }
  }
</style>
