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
        <van-tab title-class="tab_title" name="企业资讯">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '企业资讯'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
              @click="onSwitchNew('企业资讯')"
            >
              企业资讯
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
                <div class="new-i-w" v-for="item in tableList" @click="onDetailClick">
                  <img src="@/assets/image/n-c-1.png" alt="" />
                  <div class="content">
                    <div class="top">
                      <div class="title">{{item.title}}</div>
                      <div class="desc">
                        {{item.content}}
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="date">{{item.updateTime}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <el-pagination
                  background
                  @current-change="handleCurrentChange"
                  :page-size="10"
                  layout="total,prev, pager, next, jumper"
                  :total="100"
                  class="newPagination"
              >
              </el-pagination>
            </div>
          </div>
          <NewDetail v-else/>
        </van-tab>
        <van-tab title-class="tab_title" name="健康资讯">
          <div slot="title" class="tab-title-w">
            <div
              :class="
                tabActive === '健康资讯'
                  ? 'tab-title--border tab-title'
                  : 'tab-title'
              "
              @click="onSwitchNew('健康资讯')"
            >
              健康资讯
            </div>
          </div>
          <div class="tab-block-2 tab-content">
            <div class="tab-img">
              <img src="@/assets/image/qyzx_jk_bn.png" alt="" />
              <div class="img-content">
                <p class="img-content-p">{{bgTitle}}</p>
                <p class="t-2">Health information</p>
              </div>
            </div>
            <div class="dynamic-main grid-contain">
              <div class="new-list-w">
                <div class="new-i-w" @click="onDetailClick">
                  <img src="@/assets/image/n-c-1.png" alt="" />
                  <div class="content">
                    <div class="top">
                      <div class="title">人类新挑战：资讯过载引发生活失衡</div>
                      <div class="desc">
                        人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="date">2021-01-01</div>
                    </div>
                  </div>
                </div>
                <div class="new-i-w" @click="onDetailClick">
                  <img src="@/assets/image/n-c-1.png" alt="" />
                  <div class="content">
                    <div class="top">
                      <div class="title">人类新挑战：资讯过载引发生活失衡</div>
                      <div class="desc">
                        人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="date">2021-01-01</div>
                    </div>
                  </div>
                </div>
                <div class="new-i-w" @click="onDetailClick">
                  <img src="@/assets/image/n-c-1.png" alt="" />
                  <div class="content">
                    <div class="top">
                      <div class="title" @click="onDetailClick">
                        人类新挑战：资讯过载引发生活失衡
                      </div>
                      <div class="desc">
                        人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战人类新挑战
                      </div>
                    </div>

                    <div class="bottom">
                      <div class="date">2021-01-01</div>
                    </div>
                  </div>
                </div>
              </div>
              <el-pagination
                  background
                  @current-change="handleCurrentChange"
                  :page-size="10"
                  layout="total,prev, pager, next, jumper"
                  :total="100"
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

import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";
export default {
  mixins: [index],

  props: {},
  components: { NewDetail },
  created() {},

  computed: {},

  mounted() {
    this.bgTitle = this.$route.query.id || '企业资讯'
  },

  beforeRouteUpdate(to,from,next){
    this.bgTitle = to.query.id || '企业资讯'
    next()
  },

  data() {
    return {
      tabActive: "",
      bgTitle: '',
      showDetail: false, // 是否显示详情
      tableList: [{
        id: 0,
        title: '全国众多权威媒体争相报道虎艳芬出任百来俏品牌代言人！',
        content: '近日，全国众多权威媒体、微博大V、自媒体争相报道《外来媳妇本地郎》苏妙婵扮演者虎艳芬出任百来俏品牌代言人的盛况传统媒体、门户网站、今日头条、微博微信...',
        updateTime: '2021-01-01'
      }], // 资讯列表
    };
  },

  methods: {
    handleCurrentChange() {},

    onDetailClick() {
      this.$router.push({
        name: "newdetail",
        params: {
          id: 1,
        },
      });
    },

    //切换tab项 click
    onSwitchNew(title){
      this.bgTitle = title
      this.$router.push({
        path: '/new?id=' + title
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
