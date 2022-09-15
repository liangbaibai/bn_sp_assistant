<template>
  <div class="medicalservices-w" id="medicalservices-w">
    <div class="banner-w">
      <img src="@/assets/image/m-b-1.png" alt="" />
    </div>
    <div class="main-w" id="main-w">
      <van-tabs
          v-model="tabActive"
          title-active-color="#29A93E"
          color="#29A93E"
          line-height="0"
          ref="tabs"
          sticky
          id="tabsId"
          @click="onTabsClick"
      >
        <van-tab title-class="tab_title" name="长护险">
          <div slot="title" class="tab-title-w">
            <div
                :class="
                tabActive === '长护险'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              长护险
            </div>
          </div>
          <chx v-show="showTabChx"/>
        </van-tab>
        <van-tab title-class="tab_title" name="陪护">
          <div slot="title" class="tab-title-w">
            <div
                :class="
                tabActive === '陪护'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              陪护
            </div>
          </div>
          <ph v-show="showTabPh"/>
        </van-tab>
        <van-tab title-class="tab_title" name="护理">
          <div slot="title" class="tab-title-w">
            <div
                :class="
                tabActive === '护理'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              护理
            </div>
          </div>
          <hl v-show="showTabHl"/>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import { index } from "@/utils/mixins";

import chx from './medicalservices/chx'
import ph from './medicalservices/ph'
import hl from './medicalservices/hl'

export default {
  mixins: [index],

  props: {},
  components: {
    chx,
    ph,
    hl
  },
  created() {
    let path = this.$route.query.id
    if (path == '长护险') {
      this.showTabChx = true
      this.tabActive = '长护险'
    } else if (path == '陪护') {
      this.showTabPh = true
      this.tabActive = '陪护'
    } else if (path == '护理') {
      this.showTabHl = true
      this.tabActive = '护理'
    }
  },
  mounted() {
    this.scrollToCmtList()
    setTimeout(() => {
      let mechanismDetailInfo = document.getElementById('medicalservices-w')
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
      showTabChx: true,
      showTabPh: false,
      showTabHl: false,
    };
  },
  computed: {

  },
  methods: {
    onTabsClick(tab, event) {
      console.log('点击：1',tab);
      if(tab == '长护险') {
        this.showTabChx = true
        this.showTabPh = false
        this.showTabHl = false
      } else if (tab == '陪护') {
        this.showTabPh = true
        this.showTabChx = false
        this.showTabHl = false
      } else if (tab == '护理') {
        this.showTabHl = true
        this.showTabChx = false
        this.showTabPh = false
      }
    },
    // 实现滚动条平滑滚动的方法
    scrollToCmtList() {
      // 1.1 返回文档在垂直方向已滚动的像素值
      const now = window.scrollY
      // 1.2 目标位置（文章信息区域的高度）
      let dist = document.querySelector('.banner-w').offsetHeight
      // 1.3 可滚动高度 = 整个文档的高度 - 浏览器窗口的视口（viewport）高度
      const avalibleHeight = document.documentElement.scrollHeight - window.innerHeight

      // 2.1 如果【目标高度】 大于 【可滚动的高度】
      if (dist > avalibleHeight) {
        // 2.2 就把目标高度，设置为可滚动的高度
        dist = avalibleHeight
      }

      // 3. 动态计算出步长值
      const step = (dist - now) / 10

      setTimeout(() => {
        // 4.2 如果当前的滚动的距离不大于 1px，则直接滚动到目标位置，并退出递归
        if (Math.abs(step) <= 1) {
          return window.scrollTo(0, dist)
        }
        // 4.1 每隔 10ms 执行一次滚动，并递归地进行下一次的滚动
        window.scrollTo(0, now + step)
        this.scrollToCmtList()
      }, 10)
    }
  },
  watch: {
    $route: {
      deep: true,
      handler(newVal, oldVal) {
        console.log('跳转监听路由：', newVal)
        if (newVal.query.id == '长护险') {
          this.showTabChx = true
          this.showTabPh = false
          this.showTabHl = false
          this.tabActive = '长护险'
        } else if (newVal.query.id == '陪护') {
          this.showTabPh = true
          this.showTabChx = false
          this.showTabHl = false
          this.tabActive = '陪护'
        } else if (newVal.query.id == '护理') {
          this.showTabHl = true
          this.showTabChx = false
          this.showTabPh = false
          this.tabActive = '护理'
        }
        this.scrollToCmtList()
      }
    },
    tabActive(val) {
      console.log('监听tab:', val)
    }
  }
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .medicalservices-w {
    background-color: #fff;
    overflow-y: scroll;
    height: 100%;
    max-height: 100vh;
    .banner-w {
      .el-carousel__container {
        height: torem(500px);
      }
      .el-carousel__button {
        width: torem(10px);
        height: torem(10px);
        background: #30C159;
        border-radius: 50%;
      }
      .el-carousel--horizontal {
        position: relative;
      }
      .el-carousel__indicators--outside {
        position: absolute;
        bottom: torem(4px);
      }
      .el-carousel__indicator.is-active button {
        opacity: 1;
        background: #30C159;
      }
      .el-carousel__indicators--outside button {
        opacity: 1;
        background: #FFFFFF;
      }
    }
    .main-w {
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
        border-bottom: torem(8px) solid #30C159;
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #30C159;
      }
      .van-tabs--line .van-tabs__wrap .van-tabs__nav--line {
        width: 50%;
        margin: 0 auto;
      }
      .van-tab__text--ellipsis {
        margin-bottom: torem(-5px);
      }
      .van-sticky {
        padding-bottom: 0px;
        padding-top: torem(26px);
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
    img {
      width: 100%;
      height: 100%;
    }
  }
  /*修改滚动条样式*/
  .medicalservices-w::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .medicalservices-w::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .medicalservices-w::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .medicalservices-w::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .medicalservices-w::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
  .pro_introduce-2 {
    .detail {
      width: 70%;
    }
  }
  .pro_introduce-3 {
    .tab-content {
      /*margin: 52px 0 0 0;*/
      .tab-img:nth-child(2){
        margin: torem(45px) 0;
      }
    }
  }

  .tab-img {
  }


  /*服务内容*/
  .service-content {
    /*padding: 65px 0;*/
    background-color: #fff;
    .title-w {
      padding: 0 35%;
      text-align: center;
      .line {
        width: torem(6px);
        height: torem(18px);
        background: #30C159;
        border-radius: torem(3px);
        margin: 0 auto;
      }
      .name {
        margin: torem(15px) 0;
        color: #333;
        font-size: torem(22px);
        font-weight: bold;
      }
      .desc {
        font-size: torem(10px);
        color: #666;
        line-height: torem(24px);
      }
    }
    .detail {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0 0 torem(10px);
      margin: 52px auto;
    }
  }

  /*立即咨询*/
  .consult-btn {
    width: torem(286px);
    margin: 0 auto;
    padding: torem(10px) 0;
    text-align: center;
    font-size: torem(16px);
    letter-spacing: torem(2px);
    color: #fff;
    background-color: #29a93e;
    border-radius: calc(100vh - 1%);
    cursor: pointer;
  }
</style>
