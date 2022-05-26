<template>
  <div class="new-detail-w">
    <div class="content grid-contain">
      <div class="title">{{articleDetailData.title}}</div>

      <div class="new-info">
        <div class="avator-name">文章来源：<span class="avator-name c">{{articleDetailData.source}}</span></div>
        <div class="date">{{articleDetailData.publishDatetime}}</div>
      </div>

      <div class="new-content">
        <div v-html="articleDetailData.content"></div>
      </div>
    </div>
  </div>
</template>


<script>
  import { articleDetail } from '@/request/api/new'

export default {
  props: {
    articleInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  created() {

  },

  computed: {},

  mounted() {
    this.getDetail()
  },

  data() {
    return {
      articleDetailData: {}, // 资讯详情
    };
  },

  methods: {
    getDetail() {
      const params = {
        id: this.articleInfo.id
      }
      articleDetail(params).then(res => {
        console.log('获取资讯详情:', res)
        if (res.code == 0) {
          this.articleDetailData = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  },
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
      font-size: 40px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      text-align: center;
    }
    .new-info{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 13px 0 26px 0;
      font-size: 12px;
      .avator-name{
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        &.c {
          color: #30C159;
        }
      }
      .date{
        margin: 0 0 0 26px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
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
