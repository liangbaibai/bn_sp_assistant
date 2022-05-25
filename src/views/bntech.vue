<template>
  <div class="bntech-w">
    <div class="banner-w">
      <img src="@/assets/image/b-b-01.png" alt="" />
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
                1.体温校准算法 2.心率传感器算法 3.健康演化预测算法
                4.跌倒检测算法 5.爬楼梯算法
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
  created() {},

  computed: {},

  mounted() {},

  data() {
    return {
      tabActive:'',
    };
  },

  methods: {},
};
</script>


<style lang="scss">
.bntech-w {
  background-color: #fff;
  .van-tabs--line .van-tabs__wrap {
    width: 50%;
  }

  .main-w {
    width: 1000px;
    margin: 0 auto;
    padding: 0 0 78px 0;
  }
  .tab-content {
    display: flex;
    align-items: center;
    margin: 52px 0;
  }
  .view-r {
    width: 40%;
    padding: 5%;
    color: #333;
    background: #f4f4f4;
    .name {
      display: flex;
      align-items: center;
      font-size: 14px;  //14px
      font-weight: bold;
      .line{
        width: 2px;
        height: 15px;
        margin: 0 5px 0 0;
        background-color: #29A93E;
      }
    }
    .desc {
      margin: 13px 0 0 0;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
