<template>
  <div class="bntech-w" id="bntech-w">
<!--    <div class="banner-w">
      <div class="top">
        <div class="t1">百年AI人工智能技术</div>
        <div class="t2">血压检测管理解决方案</div>
      </div>
    </div>-->
    <div class="banner-w" v-if="bannerList.length > 0">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in bannerList" :key="item.url">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
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
        @click="onTabsClick"
      >
        <van-tab title-class="tab_title" v-for="item in detailData" :name="item.title">
          <div slot="title" class="tab-title-w">
            <div class="tab-title" :style="{borderBottom: tabActive == item.title ? '5px solid #30C159' : ''}">{{item.title}}</div>
          </div>
          <div class="tab-block-1 tab-content">
            <div class="view-l">
              <img :src="item.image" alt="" />
            </div>
            <div class="view-r">
              <div class="name"><div class="line"></div>{{item.title}}</div>
              <div class="desc">
                {{item.content}}
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
import { outsideImageList,outsideContent } from "@/request/api/base";

export default {
  mixins: [index],

  props: {},
  components: {},
  created() {
    this.getOutsideImageData()
    this.getOutsideContent()
    let path = this.$route.query.id
    if (path == '硬件与软件') {
      this.showTabChx = true
    } else if (path == 'AI人工智能') {
      this.showTabPh = true
    } else if (path == '专利') {
      this.showTabHl = true
    } else if (path == '软著') {
      this.showTabHl = true
    }
    this.tabActive = path
  },

  computed: {},

  mounted() {
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
      tabActive:'',
      bannerList: {},
      detailData: [],
    };
  },

  methods: {
    // 获取内容
    getOutsideContent() {
      const params = {
        contentMenuId: 6, // 菜单id
        platform: 1, //  平台: 1.pc电脑 2.mp手机
      }
      outsideContent(params).then(res => {
        console.log('获取内容：', res.data.children)
        if (res.code == 0) {
          this.detailData = res.data.children
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 获取轮播图
    getOutsideImageData() {
      const params = {
        location: 2 // 展示位置 1.产品生态-位置1 2.百年技术-位置1
      }
      outsideImageList(params).then(res => {
        console.log('获取轮播图：', res)
        if (res.code == 0) {
          this.bannerList = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    onTabsClick(tab, event) {
      console.log('点击：1',tab);
      this.tabActive = tab
    },
  },
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .bntech-w {
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
    .van-tabs--line .van-tabs__wrap {
      width: 50%;
    }

    .main-w {
      width: 100%;
      margin: 0 auto;
      padding: 0 torem(361px);
      .van-tabs--line .van-tabs__wrap {
        width: 76%;
        border-bottom: torem(1px) solid #F4F4F4;
      }
      .tab-title-w .tab-title {
        font-size: torem(20px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
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
        padding: 0 torem(361px);
        padding-top: torem(26px);
      }
      .van-tabs__content {
        margin-top: torem(43px);
      }
    }
    .van-tab__pane {
      padding: torem(52px) 0;
    }
    .tab-content {
      display: flex;
      align-items: center;
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
