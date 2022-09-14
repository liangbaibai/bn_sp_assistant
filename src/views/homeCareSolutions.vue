<template>
  <div class="homeCareSolutions">
    <div class="banner-w">
      <img src="@/assets/image/zzuj_bn.png" alt="" />
      <div class="banner-w_i">
        <div class="banner-w_i_t">长者居家监护解决方案</div>
        <div class="banner-w_i_t s">血压检测管理解决方案血压检测管理解决方案</div>
        <div class="banner-w_i_btn" @click="onContactClick">服务咨询</div>
      </div>
    </div>
    <div class="main-w">
      <div class="main-w_c">
        <div class="main-w_c_t">方案特点</div>
        <div class="main-w_c_t1">
          <div class="main-w_c_t1_p">智能健康监护</div>
          <div class="main-w_c_t1_p">适老设施改造</div>
          <div>医养服务上门</div>
        </div>
        <div v-for="item in list">
          <div class="main-w_c_t2">
            <div class="main-w_c_t2_p m" v-for="its in item.data"><div class="main-w_c_t2 point"></div><div>{{its}}</div></div>
          </div>
          <div class="main-w_c_t2_line"></div>
        </div>
        <div class="main-w_c_t3">
          <img src="@/assets/image/znjj_d_s_1.png" alt="" class="main-w_c_t3_img">
        </div>
        <div class="main-w_c_t4">
          <img src="@/assets/image/znjj_d_s_2.png" alt="" class="main-w_c_t4_img">
        </div>
        <div class="main-w_c_t5">
          <img src="@/assets/image/znjj_d_s_3.png" alt="" class="main-w_c_t5_img">
        </div>
      </div>
    </div>
    <serviceWindow :show="openService" @onClose="onCloseService"/>
  </div>
</template>

<script>
  import serviceWindow from '@/components/serviceWindow'
  export default {
    name: 'homeCareSolutions',
    data() {
      return {
        list: [{
          data: ['安防监控','智能看护','远程看家','紧急救援',]
        },{
          data: ['语音对讲','护理上门','居家陪护','护士服务',]
        },{
          data: ['适老改造','康复护理','定期巡访','医养结合',]
        }],
        openService:false,
      }
    },
    components: {
      serviceWindow
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
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .homeCareSolutions {
    background: #FFFFFF;
    .banner-w {
      position: relative;
      &_i {
        position: absolute;
        left: 20.5%;
        top: 29%;
        &_t {
          font-size: torem(36px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin-bottom: torem(18px);
          &.s {
            font-size: torem(16px);
            font-weight: 400;
            color: #666666;
          }
        }
        &_btn {
          width: torem(122px);
          height: torem(40px);
          background: #30C159;
          border-radius: torem(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: torem(14px);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          margin-top: torem(40px);
          cursor: pointer;
        }
      }
    }
    .main-w {
      &_c {
        text-align: center;
        padding-top: torem(66px);
        &_t {
          font-size: torem(28px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          margin-bottom: torem(53px);
        }
        &_t1 {
          font-size: torem(20px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #30C159;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: torem(44px);
          &_p {
            margin-right: torem(63px);
          }
        }
        &_t2 {
          display: flex;
          align-items: center;
          justify-content: center;
          &_p {
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            display: flex;
            align-items: center;
            &.m {
              margin-right: torem(128px)
            }
            &.m:nth-last-child(1) {
              margin-right: 0
            }
          }
          &_line {
            width: 46%;
            height: torem(1px);
            background: #F4F4F4;
            margin: torem(29px) auto;
          }
          &.point {
            width: torem(8px);
            height: torem(8px);
            background: #DDDDDD;
            border-radius: 50%;
            margin-right: torem(4px);
          }
        }
        &_t3 {
          margin-top: torem(91px);
          width: 100%;
          height: torem(960px);
          background: #FFFFFF;
          background: url('../assets/image/znjj_d_1.png') center center no-repeat;
          background-size: cover;
          position: relative;
          &_img {
            position: absolute;
            width: torem(921px);
            height: auto;
            top: 14%;
            left: 19%;
          }
        }
        &_t4 {
          width: 100%;
          height: torem(960px);
          background: #FFFFFF;
          background: url('../assets/image/znjj_d_2.png') center center no-repeat;
          background-size: cover;
          position: relative;
          &_img {
            position: absolute;
            width: torem(637px);
            height: auto;
            top: 20%;
            right: 19%;
          }
        }
        &_t5 {
          width: 100%;
          height: torem(960px);
          background: #FFFFFF;
          background: url('../assets/image/znjj_d_3.png') center center no-repeat;
          background-size: cover;
          position: relative;
          margin-top: torem(-61px);
          &_img {
            position: absolute;
            width: torem(938px);
            height: auto;
            top: 17%;
            left: 19%;
          }
        }
      }
    }
  }
</style>