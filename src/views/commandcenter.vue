<template>
  <div class="commandcenter-w">
    <div class="banner-w">
      <img src="@/assets/image/c-b-1.png" alt="" />
    </div>

    <div class="main-w ">
      <van-tabs
        v-model="tabActive"
        title-active-color="#6EF7E4"
        line-height="0"
        scrollspy
        sticky
        ref="tabs"
      >
        <van-tab title-class="tab_title" name="全国指挥中心">
          <div slot="title" class="tab-title-w">
            <div   :class="
                tabActive === '全国指挥中心'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">全国指挥中心</div>
          </div>
          <div class="tab-block">
            <div class="tab-c-w">
              <div class="view-l" >
                <div class="content">
                  <img src="@/assets/image/c-c-1.png" alt="" />
                </div>
              </div>
              <div class="view-desc" >
                <div class="name">全国指挥中心</div>
                <div class="desc">
                  实时查看所有发生救援的通知 进行护理人员调度、
                  健康数据异常提醒、内部管理…
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="社区指挥中心">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '社区指挥中心'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">社区指挥中心</div>
          </div>
          <div class="tab-block">
            <div class="tab-c-w" >
              
              <div class="view-desc" >
                <div class="name">社区指挥中心</div>
                <div class="desc">
                  同时收到救援警报， 并马上进行救援行动 可接受全国指挥中心订单，
                  提升经营效益
                </div>
              </div>
              <div class="view-l" >
                <div class="content">
                  <img src="@/assets/image/c-c-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="养老院指挥中心">
          <div slot="title" class="tab-title-w">
            <div   :class="
                tabActive === '养老院指挥中心'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">养老院指挥中心</div>
          </div>
          <div class="tab-block">
            <div class="tab-c-w">
              <div class="view-l" >
                <div class="content">
                  <img src="@/assets/image/c-c-3.png" alt="" />
                </div>
              </div>
              <div class="view-desc" >
                <div class="name">养老院指挥中心</div>
                <div class="desc">
                  提升养老院服务效率与质量 优先体验百年医养系列智能设备
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
.commandcenter-w {
  background-color: #fff;

  .van-sticky,
  .van-tabs__nav {
    background-color: transparent;
  }
  .van-sticky {
    width: 1000px;
    padding: 26px 0;
    margin: 0 auto;
    background-color: #0b1126;

  }

  .tab_title {
    color: #fff;
  }

  .tab-title-w {
    .tab-title {
      border-color: #6ef7e4;
    }
  }
  

  .main-w {
    background: url("../assets/image/c-c-bg.png") 100% 100% / cover no-repeat;
    padding: 65px 0 ;
    .tab-block {
      width: 1000px;
      margin: 78px auto;
      background-color: #172738;
    }
  }

  .tab-c-w {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 39px 13px 52px 13px;

    .view-l {
      padding: 32px;
      background: url("../assets/image/kuang.png") center center / contain
        no-repeat;
      .content {
        padding: 26px 47px;
        background-color: #223a48;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-sizing: border-box;
      }
    }
    .view-desc {
      width: 30%;
      padding: 0 26px;
      text-align: center;
      .name {
        font-size: 18px;
        color: #6ef7e4;
      }
      .desc {
        margin: 18px 0 0 0;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        line-height: 32px;
      }
    }
  }
}
</style>
