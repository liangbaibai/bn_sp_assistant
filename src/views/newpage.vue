<template>
  <div class="newpage-w" id="newpage-w">
    <div class="main-w">
      <van-tabs
        v-model="tabActive"
        title-active-color="#30C159"
        color="#30C159"
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
          <div class="tab-block-1 tab-content">
            <div class="tab-img">
              <img v-if="bgTitle == '企业资讯'" src="@/assets/image/qyzx_qy_bn.png" alt="" />
              <img v-else src="@/assets/image/qyzx_jk_bn.png" alt="" />
              <div class="img-content">
                <p class="img-content-p">{{bgTitle}}</p>
                <p class="t-2">The enterprise information</p>
              </div>
            </div>
            <div class="dynamic-main grid-contain">
              <div class="new-i-w" v-for="item in tableList.data" @click="onDetailClick(item)">
                <img :src="item.titleImg" alt="" />
                <div class="content">
                  <div class="top">
                    <div class="title">{{item.title}}</div>
                    <div class="desc">
                      {{item.brief}}
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="date">{{item.publishDatetime}}</div>
                  </div>
                </div>
              </div>
              <el-pagination
                  background
                  @current-change="handleSizeChange"
                  :current-page="pageInfo.skip"
                  :page-size="pageInfo.limit"
                  layout="total,prev, pager, next, jumper"
                  :total="tableList.total"
                  class="newPagination"
              >
              </el-pagination>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { index } from "@/utils/mixins";
import NewDetail from './newDetail'
import { categoryData, articleData } from '@/request/api/new'

export default {
  mixins: [index],

  props: {},
  components: { NewDetail },
  created() {},

  computed: {},

  mounted() {
    this.bgTitle = this.$route.query.id || '企业资讯'
    console.log('路由：', this.bgTitle)
    if (this.bgTitle == '健康资讯') {
      this.categoryId = 2
    } else {
      this.categoryId = 1
    }
    this.getCategoryList()
    this.getArticleList()
    setTimeout(() => {
      let mechanismDetailInfo = document.getElementById('newpage-w')
      let myNav = document.querySelector('.van-sticky')
      console.log("页面滚动1", mechanismDetailInfo);
      mechanismDetailInfo.addEventListener("scroll", function (e) {
        let scrollTop = e.target.scrollTop;
        let clientHeight = e.target.clientHeight;
        let scrollHeight = e.target.scrollHeight;
        console.log("页面滚动2", scrollTop,clientHeight,scrollHeight);
        if (scrollTop > 0) {
          let process = document.getElementById('header-w')
          let ylWatchTop = document.querySelector('.van-sticky')
          process.style.display = 'none'
          ylWatchTop.style.top = '0'
          process.style.zIndex = '9999 !important'
        } else {
          let process = document.getElementById('header-w')
          let ylWatchTop = document.querySelector('.van-sticky')
          process.style.display = 'block'
          ylWatchTop.style.top = 73 / 30 * 32 + 'px'
        }
      })
    },500)
  },

  beforeRouteUpdate(to,from,next){
    this.bgTitle = to.query.id || '企业资讯'
    next()
  },

  data() {
    return {
      tabActive: "",
      bgTitle: '',
      showDetail: true, // 是否显示详情
      categoryList: [], // 资讯分类
      categoryId: 1, // 资讯分类ID
      articleList: [], // 资讯分类
      articleInfo: {}, // 资讯详情
      pageInfo: {
        skip: 1,
        limit: 4,
      },
      tableList: [], // 资讯列表
    };
  },

  methods: {
    handleSizeChange(val) {
      this.pageInfo.skip = val;
      this.getArticleList()
    },
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
    // 获取资讯分类列表
    getArticleList(type) {
      const params = {
        categoryId: this.categoryId, // 分类id
        pageIndex: type == 1 ? 1 : this.pageInfo.skip, // 页数
        pageSize: this.pageInfo.limit, // 页码
      }
      articleData(params).then(res => {
        console.log('获取资讯分类列表：', res)
        if (res.code == 0) {
          this.tableList = res
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    onDetailClick(item) {
      console.log('点击详情参数：', item)
      this.$router.push({
        name: "newdetail",
        params: {
          id: item.id,
        },
        query: {
          id: this.bgTitle
        }
      });
    },

    //切换tab项 click
    onSwitchNew(item) {
      this.bgTitle = item.name
      console.log('切换分类：', item.categoryId)
      this.$router.push({
        path: '/new?id=' + item.name,
      })
    },
  },
  watch: {
    $route: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.query.id == '企业资讯' || newVal.query.id == '企业咨讯') {
          this.categoryId = 1
          this.getArticleList(1)
          console.log('监听路由：1', newVal.query.id)
        } else {
          this.categoryId = 2
          this.getArticleList(1)
          console.log('监听路由：2', newVal.query.id)
        }
      }
    }
  }
};
</script>

<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.newpage-w {
  overflow-y: scroll;
  height: 100%;
  max-height: 100vh;
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    min-width: torem(22px) !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #30C159 !important;
  }
  .el-pagination {
    .el-pager li {
      max-width: torem(22px);
      width: torem(22px);
      height: torem(22px);
      background: #EEEEEE;
      border-radius: torem(2px);
      padding: 0;
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: torem(22px);
    }
    .el-pagination__total {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    .el-pager li.active {
      max-width: torem(22px);
      min-width: torem(22px);
      width: torem(22px);
      height: torem(22px);
      background: #30C159 !important;
      border-radius: torem(2px);
      padding: 0;
    }
    .btn-prev {
      color: #CCCCCC;
      max-width: torem(22px);
      min-width: torem(22px);
      width: torem(22px);
      height: torem(22px);
      background: #EEEEEE;
      border-radius: torem(2px);
    }
    .btn-next {
      color: #CCCCCC;
      max-width: torem(22px);
      min-width: torem(22px);
      width: torem(22px);
      height: torem(22px);
      background: #EEEEEE;
      border-radius: torem(2px)
    }
    .el-pagination__jump {
      font-size: torem(14px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    font-size: torem(14px);
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
  }
  .van-sticky {
    padding: 0;
    border: torem(1px) solid #EEEEEE;
  }
  .van-tabs--line .van-tabs__wrap {
    width: 15%;
  }

  .tab-block-1,.tab-block-2 {
    .tab-img {
      position: relative;
      .img-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: torem(390px);
        height: torem(130px);
        color: #fff;
        margin: auto;
        .img-content-p {
          font-size: torem(36px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }
        .t-2 {
          margin: torem(13px) 0 0 0;
          font-size: torem(22px);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #999999;
          text-transform: uppercase;
        }
      }
    }
  }

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
      border-bottom: torem(3px) solid #30C159;
      margin-bottom: 0;
    }
    .van-tab__text--ellipsis {
      margin-bottom: torem(-6px);
    }
  }
  .dynamic-main {
    width: torem(1199px);
    margin: 0 auto;
    padding: 3% 0 6% 0;

    .new-list-w {
      box-sizing: content-box;
      display: flex;
      align-items: center;
    }
    .el-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: torem(52px) 0;
    }
  }

  .new-i-w {
    height: torem(231px);
    margin-bottom: torem(19px);
    padding: torem(30px) torem(66px);
    background-color: #fff;

    display: flex;
    align-items: center;
    /*transition: transform 0.2s ease-in-out;*/
    & > img {
      width: torem(229px);
      height: torem(171px);
      border-radius: torem(5px);
    }
    &:hover {
      /*transform: scale(1.05);*/
      cursor: pointer;
      .title {
        color: #30C159;
      }
    }
    .title {
      margin: 0 0 torem(15px) 0;
      font-size: torem(18px);
      color: #333;
      font-weight: bold;
    }
    .desc {
      font-size: torem(14px);
      color: #999999;
    }
    .date {
      font-size: torem(12px);
      color: #666;
      font-family: "Microsoft YaHei";
      font-weight: 400;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin: 0 0 0 torem(18px);
      .top {

      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: torem(21px);
          height: torem(21px);
        }
      }
    }
  }
}
  /*修改滚动条样式*/
  .newpage-w::-webkit-scrollbar{
    width: 0px;
    /*height: 30px;*/
  }
  .newpage-w::-webkit-scrollbar-track{
    border-radius: 0px;
  }
  .newpage-w::-webkit-scrollbar-thumb{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .newpage-w::-webkit-scrollbar-thumb:hover{
    background: #D9D9D9;
    border-radius: 0px;
  }
  .newpage-w::-webkit-scrollbar-corner{
    border-radius: 0px;
  }
</style>
