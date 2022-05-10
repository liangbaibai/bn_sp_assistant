<template>
  <div class="medicalservices-w">
    <div class="banner-w">
      <el-carousel height="494px" :autoplay="false" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item">
          <img src="@/assets/image/m-b-1.png" alt="" />
        </el-carousel-item>
      </el-carousel>
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
            <div class="pro_introduce-1">
              <div class="tab-img">
                <img src="@/assets/image/m-c-1.png" alt="" />
              </div>
              <div class="data-w">
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
              <div class="service-content grid-contain">
                <div class="title-w">
                  <div class="line"></div>
                  <div class="name">服务内容</div>
                  <div class="desc">
                    床上擦浴、床上洗头、伤口护理、鼻胃管护理+口腔护理、等专业护理套餐服务。
                  </div>
                </div>
                <div class="detail">
                  <img src="@/assets/image/m-c-2.png" alt="" />
                </div>
                <div class="consult-btn" @click="onContactClick">立即咨询</a></div>
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
              <div class="tab-img">
                <img src="@/assets/image/m-c-3.png" alt="" />
              </div>
              <div class="data-w">
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
              <div class="service-content grid-contain">
                <div class="title-w">
                  <div class="line"></div>

                  <div class="name">服务内容</div>
                  <div class="desc"></div>
                </div>

                <div class="detail">
                  <img src="@/assets/image/m-c-4.png" alt="" />
                </div>

                <div class="consult-btn" @click="onContactClick">立即咨询</div>
              </div>
            </div>
          </div>
        </van-tab>

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
            <div class="pro_introduce-3">
              <div class="tab-img">
                <img src="@/assets/image/m-c-5.png" alt="" />
              </div>
              <div class="data-w">
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

              <div class="tab-content">
                <div class="tab-img">
                  <img src="@/assets/image/m-c-6.png" alt="" />
                </div>
                <div class="tab-img ">
                  <img src="@/assets/image/m-c-7.png" alt="" />
                </div>
                <div class="tab-img grid-contain">
                  <img src="@/assets/image/m-c-8.png" alt="" />
                </div>
              </div>

              <div class="service-content grid-contain">
                <div class="consult-btn" @click="onContactClick">立即咨询</div>
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
  img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__arrow{
    width: 52px;
    height: 52px;
    font-size: 26px;
  }
  .el-carousel__arrow--left{
    left: 26px;
  }
  .el-carousel__arrow--right{
    right: 26px;
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #29a93e;
  }
  .van-tabs--line .van-tabs__wrap {
    width: 30%;
  }
}

.pro_introduce-2 {
  .detail {
    width: 70%;
  }
}
.pro_introduce-3 {
  .tab-content {
    margin: 52px 0 0 0;
    .tab-img:nth-child(2){
      margin: 45px 0;
    }
  }
}

.tab-img {
}

/*数据统计区域*/
.data-w {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25%;
  background-color: #29a93e;
  .data-i {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 70px;
      margin: 0 0 13px 0;
    }
    .num {
      color: #fff;
      font-size: 32px;
    }
    .desc {
      color: #ccc;
      font-size: 12px;
    }
  }
}

/*服务内容*/
.service-content {
  padding: 65px 0;
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
