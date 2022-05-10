<template>
  <div class="familyproducts-w">
    <div class="banner-w">
      <img src="@/assets/image/f-b-1.png" alt="" />
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
        <van-tab title-class="tab_title" name="体脂秤">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '体脂秤'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              体脂秤
            </div>
          </div>
          <div class="tab-block-1">
            <div class="tab-img">
              <img src="@/assets/image/f-c-1.png" alt="" />
            </div>
          </div>
        </van-tab>

        <van-tab title-class="tab_title" name="血压仪">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '血压仪'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
            >
              血压仪
            </div>
          </div>
          <div class="tab-block-2">
            <div class="tab-img">
              <img src="@/assets/image/f-c-2.png" alt="" />
            </div>
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
      tabActive:''
    };
  },

  methods: {},
};
</script>


<style lang="scss">
.familyproducts-w {
  background-color: #fff;
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }

  .tab-block-1 {
    margin: 0 0 52px 0;
  }

  .main-w {
    padding: 0 0 78px 0;
  }
}
</style>
