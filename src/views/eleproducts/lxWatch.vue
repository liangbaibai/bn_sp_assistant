<template>
  <div class="lxWatch">
    <div class="lxWatch_top">
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
        require('../../assets/image/lx_w_d_i_19.jpg'),
        require('../../assets/image/lx_w_d_i_20.jpg'),
        require('../../assets/image/lx_w_d_i_21.jpg'),
        require('../../assets/image/lx_w_d_i_22.jpg'),
      ]
      }
    },
    mounted() {
      this.topFunction()
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
  .lxWatch {
    background: #FFFFFF;
    &_top {
      height: 70px;
      line-height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-top: 1px solid #EEEEEE;
      border-bottom: 1px solid #EEEEEE;
      &_t {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
      &_btn {
        width: 122px;
        height: 40px;
        background: #30C159;
        border-radius: 20px;
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
    }
  }
</style>