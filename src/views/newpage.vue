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
          <div class="tab-block-1 tab-content">
            <div class="tab-img">
              <img src="@/assets/image/n-b-1.png" alt="" />
              <div class="img-content">
                <p>{{bgTitle}}</p>
                <p class="t-2">The enterprise information</p>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <el-pagination
                @current-change="handleCurrentChange"
                :page-size="10"
                layout="total,prev, pager, next, jumper"
                :total="100"
              >
              </el-pagination>
            </div>
          </div>
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
              <img src="@/assets/image/n-b-1.png" alt="" />
              <div class="img-content">
                <p>{{bgTitle}}</p>
                <p class="t-2">The enterprise information</p>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
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
                      <div class="icon">
                        <img src="@/assets/image/arrow-icon.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <el-pagination
                @current-change="handleCurrentChange"
                :page-size="10"
                layout="total,prev, pager, next, jumper"
                :total="100"
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

import { myRequest } from "@/request/index";
import { data_data_list } from "@/request/api/base";
export default {
  mixins: [index],

  props: {},
  components: {},
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

      bgTitle:'',
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
    },
  },

  updated(){
  },
};
</script>

<style lang="scss">
.newpage-w {
  .el-pagination{
    .number{
      &:hover{
      color: #23AC38;

      }
    }
    .active{
      color: #23AC38;
    }
  }
  .van-sticky {
    padding: 0;
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
        .t-2 {
          margin: 13px 0 0 0;
          color: #999;
          font-size: 18px;
        }
      }
    }
  }

  .main-w {
    background: #f4f4f4;
  }
  .dynamic-main {
    padding: 3% 0 6% 0;

    .new-list-w {
      padding: 0 39px;
      box-sizing: content-box;
      background-color: #fff;
    }
    .el-pagination {
      display: flex;
      justify-content: center;
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
