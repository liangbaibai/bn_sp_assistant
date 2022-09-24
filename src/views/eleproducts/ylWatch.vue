<template>
  <div class="ylWatch" id="ylWatch">
    <div class="ylWatch_top" id="ylWatch_top">
      <div class="ylWatch_top_t">医疗级健康监测手表</div>
      <el-button class="ylWatch_top_btn" type="success" plain @click="toBuy">立即购买</el-button>
    </div>
    <div class="ylWatch_bottom">
      <div>
        <div v-for="item in imgList">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ylWatch",
    data() {
      return {
        imgList: [
          require('../../assets/image/yl_w_d_i_1.jpg'),
          require('../../assets/image/yl_w_d_i_2.jpg'),
          require('../../assets/image/yl_w_d_i_3.jpg'),
          require('../../assets/image/yl_w_d_i_4.jpg'),
          require('../../assets/image/yl_w_d_i_5.jpg'),
          require('../../assets/image/yl_w_d_i_6.jpg'),
          require('../../assets/image/yl_w_d_i_7.jpg'),
          require('../../assets/image/yl_w_d_i_8.jpg'),
          require('../../assets/image/yl_w_d_i_9.jpg'),
          require('../../assets/image/yl_w_d_i_10.jpg'),
          require('../../assets/image/yl_w_d_i_11.jpg'),
          require('../../assets/image/yl_w_d_i_12.jpg'),
          require('../../assets/image/yl_w_d_i_13.jpg'),
          require('../../assets/image/yl_w_d_i_14.jpg'),
          require('../../assets/image/yl_w_d_i_15.jpg'),
          require('../../assets/image/yl_w_d_i_16.jpg'),
          require('../../assets/image/yl_w_d_i_17.jpg'),
          require('../../assets/image/yl_w_d_i_18.jpg'),
          require('../../assets/image/yl_w_d_i_19.jpg'),
          require('../../assets/image/yl_w_d_i_20.jpg'),
          require('../../assets/image/yl_w_d_i_21.jpg'),
          require('../../assets/image/yl_w_d_i_22.jpg'),
          require('../../assets/image/yl_w_d_i_23.jpg'),
          require('../../assets/image/yl_w_d_i_24.jpg'),
          require('../../assets/image/yl_w_d_i_25.jpg'),
          require('../../assets/image/yl_w_d_i_26.jpg'),
          require('../../assets/image/yl_w_d_i_27.jpg'),
        ]
      }
    },
    mounted() {
      this.topFunction()
      setTimeout(() => {
        window.onscroll = function() {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          console.log('页面滚动：', scrollTop)
          if (scrollTop > 0) {
            let process = document.getElementById('header-w')
            let ylWatchTop = document.getElementById('ylWatch_top')
            process.style.display = 'none'
            ylWatchTop.style.top = '0'
            process.style.zIndex = '9999 !important'
          } else {
            let process = document.getElementById('header-w')
            let ylWatchTop = document.getElementById('ylWatch_top')
            process.style.display = 'block'
            ylWatchTop.style.top = 73 / 30 * 32 + 'px'
          }
        }
      },500)
    },
    methods: {
      topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      // 跳转天猫购买
      toBuy() {
        window.open('https://detail.tmall.com/item.htm?spm=a220o.1000855.w4023-24145098805.3.15e7acaeTHpvD3&id=663449498011&sku_properties=149204407:3269303;204252002:1904313917')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .ylWatch {
    background: #FFFFFF;
    padding-bottom: torem(50px);
/*    overflow-y: auto;
    height: 100vh;
    min-height: 100vh;*/
    &_top {
      position: fixed;
      width: 100vw;
      top: torem(73px);
      background: #ffffff;
      border: torem(1px) solid #EEEEEE;
      height: torem(70px);
      line-height: torem(70px);
      display: flex;
      align-items: center;
      justify-content: space-around;
      &_t {
        font-size: torem(24px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
      &_btn {
        width: torem(122px);
        height: torem(40px);
        background: #30C159;
        border-radius: torem(20px);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: torem(68px);
    }
  }
  /*修改滚动条样式*/
  .ylWatch::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .ylWatch::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .ylWatch::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .ylWatch::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .ylWatch::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
</style>