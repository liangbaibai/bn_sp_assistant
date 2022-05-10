<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import { top_video } from "@/request/api/base";
import { myRequest } from "@/request/index";
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";

export default {
  components: {
    myHeader,
    myFooter,
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
#app{
  
}
body{
  min-width: 1000px;
}

.grid-contain{
  width: 1000px;
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
  position: absolute;
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
  padding: 13px 0;
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
  font-size: 16px;
  .tab-title {
    padding: 0 0 5px 0;
    margin: 10px 0;
  }
  .tab-title--border{
    border-bottom: 2px solid #23ac38;
  }
}

.cut-line {
  width: 29px;
  height: 2px;
  background-color: #333;
  border-radius: 1px;
}
</style>
