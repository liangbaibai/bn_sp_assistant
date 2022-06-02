<template>
  <div class="walkbn-w bg-fff">
    <div class="banner-w">
      <img src="@/assets/image/w-b-1.png" alt="" />
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
        <van-tab title-class="tab_title" name="品牌专区">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '品牌专区'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              品牌专区
            </div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="title-img">
              <img src="@/assets/image/w-t-5.png" alt="" />
            </div>
            <div class="brand-s">
              <div class="brand-i">
                <img src="@/assets/image/k-c-1.png" alt="" />
                <div class="name">百年医养</div>
                <div class="desc">
                  百年医养是百年大健康旗下的居家养老服务品牌。我们目前拥有百年医养居家陪护、医院陪护、护理、长护险，居家医养一站式服务平台-百年医养APP，以及智慧养老解决方案等一系列业务。
                   
                </div>
              </div>
              <div class="brand-i">
                <img src="@/assets/image/k-c-2.png" alt="" />
                <div class="name">百狐</div>
                <div class="desc">
                  百狐是百年大健康旗下的智能养老硬件设备品牌。我们坚持自主研发和前瞻性技术的持续投入，通过全系列智能穿戴设备及家庭医疗产品，为长者带来创新、领先、可信赖的产品。
                   
                </div>
              </div>
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
          <div class="tab-block-2 tab-content">
            <div class="title-img">
              <img src="@/assets/image/w-t-4.png" alt="" />
            </div>
            <div class="w-culture-swipe">
              <div class="swipe-i">
                <div class="quotes"></div>
                <div class="num">
                  {{
                    "0" +
                    (cultureIndex === 0 ? w_data.culture.length : cultureIndex)
                  }}
                </div>
                <div class="name">
                  {{
                    w_data.culture[
                      cultureIndex < 1
                        ? w_data.culture.length - 1
                        : cultureIndex - 1
                    ].title
                  }}
                </div>
                <div class="desc">
                  {{
                    w_data.culture[
                      cultureIndex < 1
                        ? w_data.culture.length - 1
                        : cultureIndex - 1
                    ].content
                  }}
                </div>
              </div>
              <div class="swipe-i active">
                <div class="view-l">
                  <img :src="w_data.culture[cultureIndex].img" alt="" />
                </div>
                <div class="view-r">
                  <div class="quotes"></div>
                  <div class="num">{{ "0" + (cultureIndex + 1) }}</div>
                  <div class="name">
                    {{ w_data.culture[cultureIndex].title }}
                  </div>
                  <div class="desc">
                    {{ w_data.culture[cultureIndex].content }}
                  </div>
                </div>

                <div class="prev" @click="onCulturePrevClick"></div>
                <div class="next" @click="onCultureNextClick"></div>
              </div>
              <div class="swipe-i">
                <div class="quotes"></div>
                <div class="num">
                  {{
                    "0" +
                    (cultureIndex >= w_data.culture.length - 1
                      ? 1
                      : cultureIndex + 2)
                  }}
                </div>
                <div class="name">
                  {{
                    w_data.culture[
                      cultureIndex >= w_data.culture.length - 1
                        ? 1
                        : cultureIndex + 1
                    ].title
                  }}
                </div>
                <div class="desc">
                  {{
                    w_data.culture[
                      cultureIndex >= w_data.culture.length - 1
                        ? 1
                        : cultureIndex + 1
                    ].content
                  }}
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
          <div class="tab-block-3 tab-content">
            <div class="title-img">
              <img src="@/assets/image/w-t-1.png" alt="" />
            </div>
            <div class="tab-img">
              <img src="@/assets/image/w-c-4.png" alt="" />
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="合作伙伴">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '合作伙伴'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              合作伙伴
            </div>
          </div>
          <div class="tab-block-4 tab-content">
            <div class="title-img">
              <img src="@/assets/image/w-t-2.png" alt="" />
            </div>

            <div class="content-w">
              <div class="view-img">
                <img src="@/assets/image/w-c-5.png" alt="" />
              </div>
              <div class="detail">
                <div class="title">广东乐心医疗电子股份有限公司</div>
                <div class="line"></div>
                <div class="desc">
                  百年大健康携手广东乐心医疗电子股份有限公司，针对我国老年人智能健康管理需求，推出了血压计、体脂称、手环等百年医养系列长者智能设备。我们相信百年大健康与乐心医疗的强强联手，在双方的合作共赢下，百年医养品牌未来会继续做精做强。
                </div>
              </div>
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
              <img src="@/assets/image/w-t-3.png" alt="" />
            </div>

            <div class="w-activity-c">
              <div class="swipe-c-w">
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
import { getElement, debounce } from "@/utils/util";
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

      w_data: {
        culture: [
          {
            title: "企业文化",
            content:
              "关注老人健康、快乐、幸福的晚年生活，维护老人的权益。我们百年大健康、医养平台等所有参与者，包括消费者、商家、第三方服务供应商、公益组织和其他人士，都享有成长或获益的机会。我们更加推崇和弘扬孝道文化这一我国优秀文化传统。并且始终如一地关注和满足老人的需求！",
            img: require("@/assets/image/w-c-3.png"),
          },
          {
            title: "企业愿景",
            content:
              "致力成为长者无忧智能健康生活的引领者。 影响和带动全社会关爱呵护我们成长的父母长辈。",
            img: require("@/assets/image/w-c-12.png"),
          },
          {
            title: "公司理念",
            content: "让每一位老人得到贴身又贴心服务， 安享愉悦晚年生活",
            img: require("@/assets/image/w-c-8.png"),
          },
          {
            title: "服务理念",
            content: "专业无忧 快捷贴心 省心安心",
            img: require("@/assets/image/w-c-9.png"),
          },
          {
            title: "公司价值观",
            content: "用户第一 \n 亲和友善 \n 尊老敬业 \n 弘扬孝道",
            img: require("@/assets/image/w-c-10.png"),
          },
          {
            title: "公司精神",
            content:
              "不怕累不嫌弃，守护温暖这片夕阳 \n 不怕苦能承受任何委屈，含泪微笑点燃希望 \n 不怕挫折始终做为爱的事业的引领人。\n 做有善心的人，做良心的机构，\n 呵护老人是我们的责任 \n 他们的现在，代表着我们的未来",
            img: require("@/assets/image/w-c-11.png"),
          },
        ], //百年文化
      },

      cultureIndex: 0,
    };
  },

  methods: {
    onCulturePrevClick() {
      if (this.cultureIndex > 0) {
        this.cultureIndex--;
      } else {
        this.cultureIndex = this.w_data.culture.length - 1;
      }
    },
    onCultureNextClick() {
      if (this.cultureIndex < this.w_data.culture.length - 1) {
        this.cultureIndex++;
      } else {
        this.cultureIndex = 0;
      }
    },
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
  .van-tabs--line .van-tabs__wrap {
    width: 65%;
  }

  .tab-block-1 {
    margin: 0 0 torem(52px) 0;
  }

  .main-w {
    width: 1000px;
    margin: 0 auto;
    padding: 0 0 torem(78px) 0;
  }

  .tab-content {
    // margin: 0 20%;

    .title-img {
      margin: torem(52px) 0;
      img {
        width: torem(286px);
        margin: 0 auto;
      }
    }
  }
  .brand-s {
    display: flex;
    justify-content: space-around;
    margin: torem(52px) 0 0 0;
  }
  .brand-i {
    width: torem(260px);
    color: #333;
    & > img {
      width: 100%;
      height: auto;
    }
    .name {
      margin: torem(12px) 0;
      font-size: torem(14px);
      font-weight: bold;
    }
    .desc {
      line-height: torem(24px);
      font-size: torem(12px);
    }
  }
}
/*百年文化*/
.w-culture-swipe {
  display: flex;
  align-items: center;
  height: torem(377px);
  .swipe-i {
    width: 20%;
    height: 100%;
    padding: torem(65px) torem(26px) 0 torem(18px);
    background-color: #f4f4f4;
    .quotes {
      width: torem(16px);
      height: torem(12px);
      background: url("../assets/image/dian.png") 100% 100% / cover no-repeat;
    }
    .num {
      margin: torem(13px) 0 torem(5px);
      color: #ccc;
      font-size: torem(52px);
    }
    .name {
      margin: 0 0 torem(12px) 0;
      font-size: torem(14px);
      color: #333;
      font-weight: bold;
    }
    .desc {
      display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
      -webkit-box-orient: vertical; /*值必须为vertical*/
      -webkit-line-clamp: 8; /*值为数字，表示一共显示几行*/
      overflow: hidden;
      line-height: torem(22px);
      color: #666;
      font-size: torem(12px);
    }
  }
  .active {
    display: flex;
    position: relative;
    align-items: center;
    width: 60%;
    padding: torem(18px);
    background-color: #29a93e;
    .quotes {
      background: url("../assets/image/dian-while.png") 100% 100% / cover
        no-repeat;
    }
    .prev,
    .next {
      position: absolute;
      top: 0;
      bottom: 0;
      width: torem(26px);
      height: torem(26px);
      margin: auto;
      cursor: pointer;
    }
    .prev {
      left: 0;
      transform: translateX(-50%);
      background: url("../assets/image/prev.png") 100% 100% / cover no-repeat;
    }
    .next {
      right: 0;
      transform: translateX(50%);
      background: url("../assets/image/next.png") 100% 100% / cover no-repeat;
    }
  }
  .view-l {
    height: 100%;
    width: 54%;

  }
  .view-r {
    width: 46%;
    height: 100%;
    margin: 0 0 0 torem(21px);
    padding: torem(26px) 0;

    .num {
      color: rgba(255, 255, 255, 0.5);
    }
    .name {
      color: #fff;
    }
    .desc {
      display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
      -webkit-box-orient: vertical; /*值必须为vertical*/
      -webkit-line-clamp: 8; /*值为数字，表示一共显示几行*/
      overflow: hidden;
      height: 60%;
      color: rgba(255, 255, 255, 0.9);
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
