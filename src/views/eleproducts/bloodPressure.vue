<template>
  <div class="bloodPressure">
    <div class="bloodPressure_top">
      <div class="bloodPressure_top_t">全自动双管血压计</div>
      <el-button class="bloodPressure_top_btn" type="success" plain>立即购买</el-button>
    </div>
    <div class="bloodPressure_bottom">
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
    name: "bloodPressure",
    data() {
      return {
        imgList: [
          require('../../assets/image/bp_d_i_1.jpg'),
          require('../../assets/image/bp_d_i_2.jpg'),
          require('../../assets/image/bp_d_i_3.jpg'),
          require('../../assets/image/bp_d_i_4.jpg'),
          require('../../assets/image/bp_d_i_5.jpg'),
          require('../../assets/image/bp_d_i_6.jpg'),
          require('../../assets/image/bp_d_i_7.jpg'),
          require('../../assets/image/bp_d_i_8.jpg'),
          require('../../assets/image/bp_d_i_9.jpg'),
          require('../../assets/image/bp_d_i_10.jpg'),
          require('../../assets/image/bp_d_i_11.jpg'),
          require('../../assets/image/bp_d_i_12.jpg'),
          require('../../assets/image/bp_d_i_13.jpg'),
          require('../../assets/image/bp_d_i_14.jpg'),
          require('../../assets/image/bp_d_i_15.jpg'),
          require('../../assets/image/bp_d_i_16.jpg'),
          require('../../assets/image/bp_d_i_17.jpg'),
          require('../../assets/image/bp_d_i_18.jpg'),
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bloodPressure {
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