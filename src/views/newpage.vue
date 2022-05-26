<template>
  <div class="newpage-w">
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
          <div v-if="showDetail" class="tab-block-1 tab-content">
            <div class="tab-img">
              <img src="@/assets/image/qyzx_qy_bn.png" alt="" />
              <div class="img-content">
                <p class="img-content-p">{{bgTitle}}</p>
                <p class="t-2">The enterprise information</p>
              </div>
            </div>
            <div class="dynamic-main grid-contain">
              <div class="new-list-w">
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
              </div>
              <el-pagination
                  background
                  @current-change="handleCurrentChange"
                  :current-page="pageInfo.skip"
                  :page-size="pageInfo.limit"
                  layout="total,prev, pager, next, jumper"
                  :total="tableList.total"
                  class="newPagination"
              >
              </el-pagination>
            </div>
          </div>
          <NewDetail v-else :articleInfo="articleInfo"/>
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
    this.getCategoryList()
    this.getArticleList()
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
    handleSizeChange() {
      this.pageInfo.skip = val;
    },
    handleCurrentChange() {
      this.pageInfo.limit = val;
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
    getArticleList() {
      const params = {
        categoryId: this.categoryId, // 分类id
        pageIndex: this.pageInfo.skip, // 页数
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
      this.articleInfo = item
      this.showDetail = false
      /*this.$router.push({
        name: "newdetail",
        params: {
          id: 1,
        },
      });*/
    },

    //切换tab项 click
    onSwitchNew(item){
      this.bgTitle = item.name
      this.categoryId = item.categoryId
      this.$router.push({
        path: '/new?id=' + item.name
      })
    },
  },

  updated(){
  },
};
</script>

<style lang="scss">
.newpage-w {
/*  .el-pagination{
    .number{
      &:hover{
      color: #23AC38;

      }
    }
    .active{
      color: #23AC38;
    }
  }*/
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    min-width: 22px !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #30C159 !important;
  }
  .el-pagination {
    .el-pager li {
      max-width: 22px;
      width: 22px;
      height: 22px;
      background: #EEEEEE;
      border-radius: 2px;
      padding: 0;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      line-height: 22px;
    }
    .el-pagination__total {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    .el-pager li.active {
      max-width: 22px;
      min-width: 22px;
      width: 22px;
      height: 22px;
      background: #30C159 !important;
      border-radius: 2px;
      padding: 0;
    }
    .btn-prev {
      color: #CCCCCC;
      max-width: 22px;
      min-width: 22px;
      width: 22px;
      height: 22px;
      background: #EEEEEE;
      border-radius: 2px;
    }
    .btn-next {
      color: #CCCCCC;
      max-width: 22px;
      min-width: 22px;
      width: 22px;
      height: 22px;
      background: #EEEEEE;
      border-radius: 2px;
    }
    .el-pagination__jump {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
  }
  .van-sticky {
    padding: 0;
    border: 1px solid #EEEEEE;
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
        width: 390px;
        height: 130px;
        color: #fff;
        margin: auto;
        .img-content-p {
          font-size: 36px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }
        .t-2 {
          margin: 13px 0 0 0;
          font-size: 22px;
          font-family: OPPOSans;
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
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold !important;
      color: #30C159 !important;
    }
    .tab-title-w .tab-title {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    .tab-title-w .tab-title--border {
      border-bottom: 3px solid #23ac38;
    }
  }
  .dynamic-main {
    width: 1199px;
    margin: 0 auto;
    padding: 3% 0 6% 0;

    .new-list-w {
      padding: 0 39px;
      box-sizing: content-box;
      background-color: #fff;
    }
    .el-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 52px 0;
      background-color: #fff;
    }
  }

  .new-i-w {
    display: flex;
    align-items: center;
    height: 143px;
    padding: 26px 0;
    border-bottom: 1px solid #eee;
    transition: transform 0.2s ease-in-out;
    & > img {
      width: auto;
    }
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      .title {
        color: #29a93e;
      }
    }
    .title {
      margin: 0 0 26px 0;
      font-size: 14px; 
      color: #333;
      font-weight: bold;
    }
    .desc {
      font-size: 12px;
      color: #666;
    }
    .date {
      font-size: 12px;
      color: #666;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin: 0 0 0 18px;
      .top {
        margin: 26px 0 0 0;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
}
</style>
