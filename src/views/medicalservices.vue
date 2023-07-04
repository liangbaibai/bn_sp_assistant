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
        <van-tab v-for="(item,index) in tabList" title-class="tab_title" :name="item.name">
          <div slot="title" class="tab-title-w">
            <div class="tab-title" :style="{borderBottom: tabActive == item.name ? '5px solid #30C159' : ''}">{{item.name}}</div>
          </div>
          <chx v-show="showTabChx"/>
          <ph v-show="showTabPh"/>
          <hl v-show="showTabHl"/>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import { index } from "@/utils/mixins";
import { outsideContent } from '@/request/api/base'

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
    this.getOutsideContent()
    let path = this.$route.query.id
    console.log('path', path)
    if (path == '长护险') {
      this.showTabChx = true
    } else if (path == '陪护') {
      this.showTabPh = true
    } else if (path == '护理') {
      this.showTabHl = true
    }
    this.tabActive = path
  },
  mounted() {
    this.scrollToCmtList()
    setTimeout(() => {
      window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        console.log('页面滚动：', scrollTop)
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
      }
    },500)
  },

  data() {
    return {
      tabActive: "",
      showTabChx: true,
      showTabPh: false,
      showTabHl: false,
      tabList: [], //
    };
  },
  computed: {

  },
  methods: {
    // 获取内容
    getOutsideContent() {
      const params = {
        contentMenuId: 2, // 菜单id
        platform: 1, //  平台: 1.pc电脑 2.mp手机
      }
      outsideContent(params).then(res => {
        console.log('获取内容：1', res.data.children)
        if (res.code == 0) {
          this.tabList = res.data.children.map(item => {
            let reg = /[\u4e00-\u9fa5]/g;
            return {
              name: item.url.match(reg).join("")
            }
          })
          console.log('获取内容：', this.tabList)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
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
    height: 100%;
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
      .tab-title-w .tab-title {
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
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
</style>
