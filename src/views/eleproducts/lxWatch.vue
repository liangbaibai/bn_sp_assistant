<template>
  <div class="lxWatch" id="lxWatch">
    <div class="lxWatch_top" id="lxWatch_top">
      <div class="lxWatch_top_t">24H全天候守护长者</div>
      <el-button class="lxWatch_top_btn" type="success" plain @click="toBuy">立即购买</el-button>
    </div>
    <div class="lxWatch_bottom">
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
    name: "lxWatch",
    data() {
      return {
        imgList: [
        require('../../assets/image/lx_w_d_i_1.jpg'),
        require('../../assets/image/lx_w_d_i_2.jpg'),
        require('../../assets/image/lx_w_d_i_3.jpg'),
        require('../../assets/image/lx_w_d_i_4.jpg'),
        require('../../assets/image/lx_w_d_i_5.jpg'),
        require('../../assets/image/lx_w_d_i_6.jpg'),
        require('../../assets/image/lx_w_d_i_7.jpg'),
        require('../../assets/image/lx_w_d_i_8.jpg'),
        require('../../assets/image/lx_w_d_i_9.jpg'),
        require('../../assets/image/lx_w_d_i_10.jpg'),
        require('../../assets/image/lx_w_d_i_11.jpg'),
        require('../../assets/image/lx_w_d_i_12.jpg'),
        require('../../assets/image/lx_w_d_i_13.jpg'),
        require('../../assets/image/lx_w_d_i_14.jpg'),
        require('../../assets/image/lx_w_d_i_15.jpg'),
        require('../../assets/image/lx_w_d_i_16.jpg'),
        require('../../assets/image/lx_w_d_i_17.jpg'),
        require('../../assets/image/lx_w_d_i_18.jpg'),
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
            let ylWatchTop = document.getElementById('lxWatch_top')
            process.style.display = 'none'
            ylWatchTop.style.top = '0'
            process.style.zIndex = '9999 !important'
          } else {
            let process = document.getElementById('header-w')
            let ylWatchTop = document.getElementById('lxWatch_top')
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
        window.open('https://detail.tmall.com/item.htm?spm=a1z10.1-b.w4004-24145098791.4.8bc41015MTAlOJ&id=667456271317')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .lxWatch {
    background: #FFFFFF;
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
  .lxWatch::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .lxWatch::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .lxWatch::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .lxWatch::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .lxWatch::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
</style>
