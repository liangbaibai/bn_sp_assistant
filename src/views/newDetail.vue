<template>
  <div class="new-detail-w">
    <div class="content grid-contain">
      <div class="title">十岁后有这些特征，注定长寿</div>

      <div class="new-info">
        <div class="avator-name">百年医养</div>
        <div class="date">2020-07-04</div>
      </div>

      <div class="new-content">
        <p>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        </p>
        <img src="@/assets/image/n-detail-1.png" alt="" />
        <p>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { myRequest } from "@/request/index";
import { data_desc } from "@/request/api/base";
export default {
  props: {},
  components: {},
  created() {},

  computed: {},

  mounted() {},

  data() {
    return {};
  },

  methods: {},
};
</script>


<style lang="scss">
.new-detail-w {
  padding: 26px 0 78px 0;
  background: #f4f4f4;
  .content {
    display: flex;
    flex-direction: column;
    padding: 39px 39px 130px 39px;
    background-color: #fff;
    .title{
      color: #333;
      font-weight: bold;
    }
    .new-info{
      display: flex;
      align-items: center;
      margin: 13px 0 26px 0;
      font-size: 12px;
      .avator-name{
        color: #0071BD;
      }
      .date{
        margin: 0 0 0 26px;
        color: #999;
      }
    }
    .new-content{
      font-size: 12px;
      img{
        margin: 21px 0;
      }
    }
  }
}
</style>
