<template>
  <div class="eleproducts-w">
    <div class="banner-w" v-if="bannerList.length > 0">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in bannerList" :key="item.url">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="eleproducts-c">
      <div class="eleproducts-c_d">
        <div v-for="item in detailData">
          <div class="eleproducts-c_d_yl" v-if="item.style == 1">
            <div class="eleproducts-c_d_yl_left">
              <img :src="item.logoImage" alt="" class="eleproducts-c_d_yl_left_ig">
              <div class="eleproducts-c_d_yl_left_ti">{{item.title}}</div>
              <div class="eleproducts-c_d_yl_left_te m" v-html="item.content"></div>
              <div class="eleproducts-c_d_yl_left_bn">
                <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(item)">了解更多</div>
                <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(item)">立即购买</div>
              </div>
            </div>
            <div class="eleproducts-c_d_yl_right">
              <img :src="item.image" alt="" class="eleproducts-c_d_yl_right_ig">
            </div>
          </div>
          <div class="eleproducts-c_d_yl" v-else>
            <div class="eleproducts-c_d_yl_right l">
              <img :src="item.image" alt="" class="eleproducts-c_d_yl_right_ig">
            </div>
            <div class="eleproducts-c_d_yl_left">
              <img :src="item.logoImage" alt="" class="eleproducts-c_d_yl_left_ig">
              <div class="eleproducts-c_d_yl_left_ti">{{item.title}}</div>
              <div class="eleproducts-c_d_yl_left_te m" v-html="item.content"></div>
              <div class="eleproducts-c_d_yl_left_bn">
                <div class="eleproducts-c_d_yl_left_bn_b" @click="toDetail(item)">了解更多</div>
                <div class="eleproducts-c_d_yl_left_bn_b c" @click="toBuy(item)">立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { index } from "@/utils/mixins";
import { outsideImageList,outsideContent } from "@/request/api/base";

export default {
  mixins: [index],

  props: {},
  created() {
    this.getOutsideContent()
    this.getOutsideImageData()
  },

  computed: {},

  mounted() {},

  data() {
    return {
      tabActive: "",
      bannerList: {}, // banner图
      detailData: [], // 产品内容
    }
  },

  methods: {
    // 获取内容
    getOutsideContent() {
      const params = {
        contentMenuId: 5, // 菜单id
        platform: 1, //  平台: 1.pc电脑 2.mp手机
      }
      outsideContent(params).then(res => {
        console.log('获取内容：', res.data.children)
        if (res.code == 0) {
          this.detailData = res.data.children
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 跳转详情页
    toDetail(data) {
      this.$router.push({
        path: data.detailsUrl
      })
    },
    // 跳转天猫购买
    toBuy(data) {
      window.open(data.buyUrl)
    },
    // 获取轮播图
    getOutsideImageData() {
      const params = {
        location: 1 // 展示位置 1.产品生态-位置1 2.百年技术-位置1
      }
      outsideImageList(params).then(res => {
        console.log('获取轮播图：', res)
        if (res.code == 0) {
          this.bannerList = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  },
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.eleproducts-w {
  background-color: #fff;
  .banner-w {
    .el-carousel__container {
      height: torem(500px);
    }
    .el-carousel__button {
      width: torem(10px);
      height: torem(10px);
      background: #30C159;
      border-radius: 50%;
    }
    .el-carousel--horizontal {
      position: relative;
    }
    .el-carousel__indicators--outside {
      position: absolute;
      bottom: torem(4px);
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
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }
  .tab-block-1{
    margin: 0 0 torem(52px) 0;
  }

  .main-w{
    padding: 0 0 torem(78px) 0;
  }
  .eleproducts-c {
    background: #F6F6F6;
    padding: torem(72px) 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &_d {
      width: torem(1200px);
      &_yl {
        background: #FFFFFF;
        border-radius: torem(20px);
        padding: torem(81px) torem(114px);
        margin-bottom: torem(21px);
        display: flex;
        justify-content: space-between;
        &.pd {
          padding-right: 0;
        }
        &_left {
          &_ig {
            width: torem(124px);
            height: torem(41px);
            margin-bottom: torem(40px);
            &.lx {
              width: torem(219px);
              height: torem(32px);
            }
          }
          &_ti {
            font-size: torem(38px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(20px);
          }
          &_te {
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            line-height: torem(24px);
            &.m {
              margin-bottom: torem(66px);
            }
            .mg {
              line-height: torem(20px);
              margin-right: torem(20px);
            }
          }
          &_bn {
            display: flex;
            align-items: center;
            &_b {
              width: torem(108px);
              height: torem(48px);
              background: linear-gradient(1deg, #30C159, #32d960);
              border-radius: torem(24px);
              color: #FFFFFF;
              font-size: torem(16px);
              display: flex;
              align-items: center;
              justify-content: center;
              &.c {
                border: torem(2px) solid #CCCCCC;
                border-radius: torem(24px);
                color: #333333;
                background: #ffffff;
                margin-left: torem(40px);
              }
            }
            &_b:hover {
              box-shadow: 0px torem(8px) torem(12px) 0px rgba(48, 193, 89, 0.35);
              cursor: pointer;
              &.c:hover {
                box-shadow: 0px torem(8px) torem(12px) 0px rgba(204, 204, 204, 0.35);
              }
            }
          }
        }
        &_right {
          margin-top: torem(-80px);
          &.l {
            margin-left: torem(-114px);
          }
          &_ig {

          }
        }
      }
    }
  }
}
</style>
