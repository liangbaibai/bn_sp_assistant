<template>
  <div>
    <div class="back-top">
      <div class="back-top-f" @click="onContactClick"><i class="iconfont icon-kefu" :class="{iconkefu: true}"></i></div>
      <div class="back-top-s" @click="toTop"><i class="el-icon-arrow-up" :class="{arrowup: true}"></i></div>
    </div>
    <serviceWindow :show="openService" @onClose="onCloseService"/>
  </div>
</template>

<script>
  import serviceWindow from '@/components/serviceWindow'
  export default {
    name: "backTop",
    data() {
      return {
        openService: false
      }
    },
    components: {
      serviceWindow
    },
    methods: {
      //立即咨询 click
      onContactClick() {
        console.log('onContactClick')
        this.openService = true
      },
      //关闭服务窗口 click
      onCloseService(){
        this.openService = false
      },
      // 返回顶部
      toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    }
  }
</script>

<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .back-top {
    position: fixed;
    right: 0;
    bottom: 20%;
  /*z-index: 9999;*/
  .back-top-f {
    width: torem(60px);
    height: torem(60px);
    background: #57cb78;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconkefu {
    font-size: torem(57px);
    color: #fff;
  }
  .arrowup {
    font-weight: bold;
    font-size: torem(50px);
  }
  .back-top-s {
    width: torem(60px);
    height: torem(60px);
    background: #ababab;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
</style>