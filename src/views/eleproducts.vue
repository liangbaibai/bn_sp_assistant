<template>
  <div class="eleproducts-w">
    <div class="banner-w">
      <img src="@/assets/image/e-b-1.png" alt="" />
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
        <van-tab title-class="tab_title" name="手表">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '手表'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">手表</div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img"><img src="@/assets/image/e-c-1.png" alt=""></div>
          </div>
        </van-tab>


        <van-tab title-class="tab_title" name="手环">
          <div slot="title" class="tab-title-w">
            <div  :class="
                tabActive === '手环'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              ">手环</div>
          </div>
          <div class="tab-block-2">
                        <div class="tab-img"><img src="@/assets/image/e-c-2.png" alt=""></div>
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
  components: {},
  created() {},

  computed: {},

  mounted() {},

  data() {
    return {
      tabActive: "",
    };
  },

  methods: {},
};
</script>


<style lang="scss">
.eleproducts-w {
  background-color: #fff;
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }

  .tab-block-1{
    margin: 0 0 52px 0;
  }

  .main-w{
    padding: 0 0 78px 0;
  }
}
</style>
