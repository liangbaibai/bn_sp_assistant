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
      <div v-for="item in phDetailImg">
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
        phDetailImg: [
          require('@/assets/image/ph_d_1.jpg'),
          require('@/assets/image/ph_d_2.jpg'),
          require('@/assets/image/ph_d_3.jpg'),
        ], // 陪护详情图片
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
  .tab-block {
    /*数据统计区域*/
    .data-w {
      padding: 61px 25%;
      background: url("../../assets/image/yiyang_bg.png") center center no-repeat;
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
  }
</style>