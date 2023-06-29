<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
    <BackTop />
  </div>
</template>

<script>
  import BackTop from '@/components/backTop'
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";

export default {
  components: {
    myHeader,
    myFooter,
    BackTop
  },

  created() {
   

  },

  updated() {},

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
@function torem($px){//$px为需要转换的字号
  @return $px / 30px * 1rem; //100px为根字体大小
}
#app{
  background: #ffffff;
  position: relative;
}
body{
  overflow-y: scroll;
  min-width: torem(1000px);
}
/*修改滚动条样式*/
body::-webkit-scrollbar{
  width: torem(6px);
  height: torem(10px);
}
body::-webkit-scrollbar-track{
  border-radius: torem(3px);
}
body::-webkit-scrollbar-thumb{
  background: #ccc;
  border-radius: torem(3px);
}
body::-webkit-scrollbar-thumb:hover{
  background: #ccc;
  border-radius: torem(3px);
}
body::-webkit-scrollbar-corner{
  border-radius: torem(3px);
}
.el-button--success.is-plain:focus, .el-button--success.is-plain:hover {
  background: #30C159 !important;
  border-color: #30C159 !important;
  color: #FFF;
}
.grid-contain{
  /*width: 1000px;*/
  margin: 0 auto;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.margin-c {
  margin: 0 18%;
}
.padding-c {
  padding: 0 18%;
}


.home--header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  .el-dropdown{
    color: #fff;
  }
}
.origin--header{
  background-color: #fff;
}

/*重置tabs样式*/
.van-sticky {
  padding: torem(13px) 0;
  background-color: #fff;
}
.van-tabs--line .van-tabs__wrap {
  margin: 0 auto;
  .van-tabs__nav--line {
    padding: 0;
  }
}
/*自定义tab-title*/
.tab-title-w {
  font-size: torem(16px);
  .tab-title {
    font-size: torem(20px);
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    padding: 0 0 torem(5px) 0;
    margin: torem(10px) 0;
  }
  .tab-title--border{
    border-bottom: torem(2px) solid #30C159;
  }
}

.cut-line {
  width: torem(29px);
  height: torem(2px);
  background-color: #333;
  border-radius: torem(1px);
}
</style>
