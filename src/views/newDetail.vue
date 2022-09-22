<template>
  <div class="new-detail-w">
    <div class="main-w">
      <van-tabs
          v-model="tabActive"
          title-active-color="#29A93E"
          color="#29A93E"
          line-height="0"
          sticky
          animated
          ref="tabs"
      >
        <van-tab v-for="item in categoryList" title-class="tab_title" :name="item.name">
          <div slot="title" class="tab-title-w">
            <div
                :class="
                tabActive === item.name
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
                @click="onSwitchNew(item)"
            >
              {{item.name}}
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="content grid-contain">
      <div class="title">{{articleDetailData.title}}</div>

      <div class="new-info">
        <div class="avator-name">文章来源：<span class="avator-name c">{{articleDetailData.source}}</span></div>
        <div class="date">{{articleDetailData.publishDatetime}}</div>
      </div>

      <div class="new-content">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>


<script>
  import { articleDetail, categoryData } from '@/request/api/new'

export default {
  props: {
    articleInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    unescape(html) {
      return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
    }
  },
  components: {},
  created() {

  },
  computed: {},

  mounted() {
    this.tabActive = this.$route.query.id
    console.log('详情参数：', this.$route)
    this.getCategoryList()
    this.getDetail()
  },

  data() {
    return {
      tabActive: "",
      categoryList: [], // 资讯分类
      articleDetailData: {}, // 资讯详情
      content: '',
    };
  },
  methods: {
    // 获取资讯分类
    getCategoryList() {
      const params = {}
      categoryData(params).then(res => {
        console.log('获取资讯分类：', res)
        if (res.code == 0) {
          this.categoryList = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    onDetailClick(item) {
      this.$router.push({
        name: "newdetail",
        params: {
          id: item.id,
        },
      });
    },
    //切换tab项 click
    onSwitchNew(item) {
      console.log('切换分类：', item.categoryId)
      this.$router.push({
        path: '/new?id=' + item.name
      })
    },
    getDetail() {
      const params = {
        id: this.$route.params.id
        // id: this.articleInfo.id
      }
      console.log('获取资讯参数:', this.$route)
      articleDetail(params).then(res => {
        console.log('获取资讯详情:', res)
        if (res.code == 0) {
          this.articleDetailData = res.data

          this.content = this.articleDetailData.content.replace(this.articleDetailData.content ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#39;/g, "\'")
            .replace(/<\s/g, "<")
          console.log('打印转换：', this.content)
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  },
  watch: {
    $route: {
      deep: true,
      handler(newVal, oldVal) {
        this.tabActive = newVal.query.id
      }
    }
  }
};
</script>


<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.new-detail-w {
  padding: torem(26px) 0 torem(78px) 0;
  padding-top: 0;
  background: #f4f4f4;
  .main-w {
    background: #f4f4f4;
    .tab-title-w .tab-title--border {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: bold !important;
      color: #30C159 !important;
    }
    .tab-title-w .tab-title {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    .tab-title-w .tab-title--border {
      border-bottom: torem(3px) solid #23ac38;
    }
  }
  .van-sticky {
    padding: 0;
    border: torem(1px) solid #EEEEEE;
  }
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: torem(39px) torem(39px) torem(130px) torem(39px);
    background-color: #fff;
    .title{
      color: #333;
      font-size: torem(40px);
      font-family: Microsoft YaHei;
      font-weight: bold;
      text-align: center;
    }
    .new-info{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: torem(13px) 0 torem(26px) 0;
      font-size: torem(12px);
      .avator-name{
        font-size: torem(14px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        &.c {
          color: #30C159;
        }
      }
      .date{
        margin: 0 0 0 torem(26px);
        font-size: torem(14px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
      }
    }
    .new-content{
      width: torem(1200px);
      /*padding: 3% 10% 0 10%;*/
      margin: 0 auto;
      font-size: torem(12px);
      img {
        margin:torem(21px) 0;
        width: auto;
        height: auto;
      }
    }
  }
}
</style>
