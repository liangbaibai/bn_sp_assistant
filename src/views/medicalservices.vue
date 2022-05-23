<template>
  <div class="medicalservices-w">
    <div class="banner-w">
      <img src="@/assets/image/m-b-1.png" alt="" />
    </div>

    <div class="main-w">
      <van-tabs
        v-model="tabActive"
        title-active-color="#29A93E"
        color="#29A93E"
        line-height="0"
        scrollspy
        sticky
        ref="tabs"
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
          <div class="tab-block">
            <div class="pro_introduce-1">
              <div class="data-w">
                <div class="data-w-c">
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon01.png" alt="" />
                    </div>
                    <div class="num">1W+</div>
                    <div class="desc">已预约人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon02.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">已服务人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon03.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">好评人数</div>
                  </div>
                </div>
                <el-button class="data-w-btn" @click="onContactClick">立即咨询</el-button>
              </div>
              <div class="service-content grid-contain">
                <div v-for="item in chxDetailImg">
                  <img :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
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

          <div class="tab-block">
            <div class="pro_introduce-2">
              <div class="data-w">
                <div class="data-w-c">
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon01.png" alt="" />
                    </div>
                    <div class="num">1W+</div>
                    <div class="desc">已预约人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon02.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">已服务人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon03.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">好评人数</div>
                  </div>
                </div>
                <el-button class="data-w-btn" @click="onContactClick">立即咨询</el-button>
              </div>
              <div class="service-content grid-contain">
                <div v-for="item in phDetailImg">
                  <img :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
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

          <div class="tab-block">
            <div class="pro_introduce-3">
              <div class="data-w">
                <div class="data-w-c">
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon01.png" alt="" />
                    </div>
                    <div class="num">1W+</div>
                    <div class="desc">已预约人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon02.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">已服务人数</div>
                  </div>
                  <div class="data-i">
                    <div class="icon">
                      <img src="@/assets/image/icon03.png" alt="" />
                    </div>
                    <div class="num">5000</div>
                    <div class="desc">好评人数</div>
                  </div>
                </div>
                <el-button class="data-w-btn" @click="onContactClick">立即咨询</el-button>
              </div>

              <div class="tab-content">
                <div v-for="item in hlDetailImg">
                  <img :src="item" alt="" />
                </div>
              </div>

              <div class="service-content grid-contain">
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <serviceWindow :show="openService" @onClose="onCloseService"/>
  </div>
</template>

<script>
import { index } from "@/utils/mixins";
import serviceWindow from '@/components/serviceWindow.vue'
import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";

export default {
  mixins: [index],

  props: {},
  components: {
    serviceWindow
  },
  created() {},

  watch: {},

  mounted() {},

  data() {
    return {
      tabActive: "",
      openService:false,
      chxDetailImg: [
        require('@/assets/image/chx_d_1.png'),
        require('@/assets/image/chx_d_2.png'),
        require('@/assets/image/chx_d_3.png')
      ], // 长护险详情图片
      hlDetailImg: [
        require('@/assets/image/hl_d_1.png'),
        require('@/assets/image/hl_d_2.png'),
      ],// 护理详情图片
      phDetailImg: [
        require('@/assets/image/ph_d_1.jpg'),
        require('@/assets/image/ph_d_2.jpg'),
        require('@/assets/image/ph_d_3.jpg'),
      ], // 陪护详情图片
    };
  },

  methods: {
    //立即咨询 click
    onContactClick(){
      console.log('onContactClick')
      this.openService = true
    },

    //关闭服务窗口 click
    onCloseService(){
      this.openService = false
    },
  },
};
</script>


<style lang="scss">
.medicalservices-w {
  background-color: #fff;
  .banner-w {
    .el-carousel__container {
      height: 500px;
    }
    .el-carousel__button {
      width: 10px;
      height: 10px;
      background: #30C159;
      border-radius: 50%;
    }
    .el-carousel--horizontal {
      position: relative;
    }
    .el-carousel__indicators--outside {
      position: absolute;
      bottom: 4px;
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
      border-bottom: 1px solid #F4F4F4;
    }
    .tab-title-w .tab-title--border {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #30C159;
    }
    .tab-title-w .tab-title {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 28px;
    }
    .tab-title_line {
      width: 100%;
      height: 4px;
      border-radius: 5px;
      background: #23ac38;
      position: absolute;
    }
    .tab-title-w .tab-title--border {
      margin: 0;
      border-bottom: 4px solid #23ac38;
    }
    .van-tabs--line .van-tabs__wrap .van-tabs__nav--line {
      width: 50%;
      margin: 0 auto;
    }
    .van-tab__text--ellipsis {
      margin-bottom: -5px;
    }
    .van-sticky {
      padding-top: 26px;
    }
    .van-tabs__content {
      margin-top: 43px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
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
      margin: 45px 0;
    }
  }
}

.tab-img {
}

/*数据统计区域*/
.data-w {
  padding: 61px 25%;
  background: url("../assets/image/yiyang_bg.png") center center no-repeat;
  background-size: cover;
  height: 400px;
  .data-w-c {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  }
  .data-w-btn {
    width: 240px;
    height: 48px;
    background: linear-gradient(5deg, #FFFFFF, #FFFFFF);
    box-shadow: 0px 8px 12px 0px rgba(48, 193, 89, 0.35);
    border-radius: 24px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #30C159;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .data-i {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 114px;
      margin: 0 0 13px 0;
    }
    .num {
      color: #fff;
      font-size: 42px;
    }
    .desc {
      color: #FFFFFF;
      font-size: 16px;
    }
  }
}

/*服务内容*/
.service-content {
  /*padding: 65px 0;*/
  background-color: #fff;
  .title-w {
    padding: 0 35%;
    text-align: center;
    .line {
      width: 40px;
      height: 3px;
      margin: 0 auto;
      background-color: #29a93e;
    }
    .name {
      margin: 15px 0;
      color: #333;
      font-size: 22px;  
      font-weight: bold;
    }
    .desc {
      font-size: 10px;
      color: #666;
      line-height: 24px;
    }
  }
  .detail {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 0 10px;
    margin: 52px auto;
  }
}

/*立即咨询*/
.consult-btn {
  width: 286px;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
  background-color: #29a93e;
  border-radius: calc(100vh - 1%);
  cursor: pointer;
}
</style>
