<template>
  <div class="medicalservices-w">
   
     <div class="banner-w">
      <img src="@/assets/image/experts-b-1.png" alt="" />
    </div>

    <div class="main-w">
      <van-tabs
        v-model="tabActive"
        title-active-color="#29A93E"
        color="#29A93E"
        line-height="0"
        scrollspy
        sticky
        ref="tabs"
      >
        <van-tab title-class="tab_title" name="王文辉">
          <div slot="title" class="tab-title-w">
            <div :class="
                tabActive === '王文辉'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">王文辉</div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img"><img src="@/assets/image/experts-1.png" alt=""></div>
          </div>
        </van-tab>


         <van-tab title-class="tab_title" name="陈少臣">
          <div slot="title" class="tab-title-w">
            <div :class="
                tabActive === '陈少臣'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">陈少臣</div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img"><img src="@/assets/image/experts-2.png" alt=""></div>
          </div>
        </van-tab>

         <van-tab title-class="tab_title" name="徐永淦">
          <div slot="title" class="tab-title-w">
            <div :class="
                tabActive === '徐永淦'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">徐永淦</div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img"><img src="@/assets/image/experts-3.png" alt=""></div>
          </div>
        </van-tab>

         <van-tab title-class="tab_title" name="刘恩">
          <div slot="title" class="tab-title-w">
            <div :class="
                tabActive === '刘恩'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">刘恩</div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img"><img src="@/assets/image/experts-4.png" alt=""></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>


<script>
import { index } from "@/utils/mixins";

import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";
export default {
  mixins: [index],

  props: {},
  components: {  },
  created() {
  },

  computed: {},

  mounted() {},

  data() {
    return {
      tabActive: "",

    };
  },

  methods: {

  },
};
</script>


<style lang="scss">
.medicalservices-w {
  background-color: #fff;
  .van-tabs--line .van-tabs__wrap {
    width: 30%;
  }

  .tab-block-1{
    margin: 0 0 52px 0;
  }

  .main-w{
    padding: 0 0 78px 0;
  }
}
</style>
