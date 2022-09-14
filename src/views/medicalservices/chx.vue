<template>
  <div class="tab-block">
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
    <serviceWindow :show="openService" @onClose="onCloseService"/>
  </div>
</template>

<script>
  import serviceWindow from '@/components/serviceWindow.vue'
  export default {
    name: "chx",
    data() {
      return {
        openService: false,
        chxDetailImg: [
          require('@/assets/image/chx_d_1.png'),
          require('@/assets/image/chx_d_2.png'),
          require('@/assets/image/chx_d_3.png')
        ], // 长护险详情图片
      }
    },
    components: {serviceWindow},
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
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .tab-block {
    /*数据统计区域*/
    .data-w {
      padding: torem(61px) 25%;
      background: url("../../assets/image/yiyang_bg.png") center center no-repeat;
      background-size: cover;
      height: torem(400px);
      .data-w-c {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: torem(45px);
      }
      .data-w-btn {
        width: torem(240px);
        height: torem(48px);
        background: linear-gradient(5deg, #FFFFFF, #FFFFFF);
        box-shadow: 0px torem(8px) torem(12px) 0px rgba(48, 193, 89, 0.35);
        border-radius: torem(24px);
        font-size: torem(16px);
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
          width: torem(114px);
          margin: 0 0 torem(13px) 0;
        }
        .num {
          color: #fff;
          font-size: torem(42px);
        }
        .desc {
          color: #FFFFFF;
          font-size: torem(16px);
        }
      }
    }
  }
</style>