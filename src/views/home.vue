<template>
  <div class="home-w">

    <div class="home-c ">
      <div class="video-w">
        <!-- <my-video></my-video> -->
        <img src="@/assets/image/h-b-1.png" alt="" />
        <div class="mask"></div>
      </div>

      <div class="content-w grid-contain">
        <div class="top display--flex" v-if="anmiIndex === null">
          <div class="anim-i-c msg-w">
            <div class="title">{{ homeData.topContent.title }}</div>
            <div class="desc">
              {{ homeData.topContent.desc }}
            </div>
            <div class="detail-btn" @click="onDetailClick('medicalservices')">
              查看详情
            </div>
          </div>
          <div
            class="anim-i"
            @mouseenter="onAnmiMouseEnter(i)"
            v-for="(item, i) in homeData.topContent.imgs"
            :key="i"
          >
            <img :src="item" alt="" />
          </div>
        </div>

        <div
          class="hover-top display--flex"
          v-else
          @mouseleave="onAnmiMouseLeave"
        >
          <div class="img">
            <img :src="homeData.hoverData[anmiIndex].img" alt="" />
          </div>
          <div class="desc-w">
            <div class="content">
              <div class="quotes"></div>
              <div class="name">
                <span class="c-29A93E">{{
                  homeData.hoverData[anmiIndex].title
                }}</span>
                <!-- <span class="c-0071BD">护理</span> -->
              </div>
              <div class="title-desc">
                {{ homeData.hoverData[anmiIndex].desc }}
              </div>
              <div class="cut-line"></div>
              <div class="servie">
                {{ homeData.hoverData[anmiIndex].serveContent }}
              </div>
            </div>

            <div class="display--flex justify__content--flex-end">
              <div
                class="detail-btn"
                @click="
                  onDetailClick(
                    'medicalservices',
                    homeData.hoverData[anmiIndex].id
                  )
                "
              >
                查看详情
              </div>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div
            class="msg-w anim-i"
            v-for="(item, i) in homeData.bottomNav"
            :style="{
              background: `url(${item.img}) 100% 100% / cover no-repeat`,
            }"
            :key="i"
          >
            <div class="title">{{ item.title }}</div>
            <div class="desc">
              {{ item.desc }}
            </div>
            <div class="detail-btn" @click="onDetailClick(item.path)">
              查看详情
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { myRequest } from "@/request/index";
import { data_list } from "@/request/api/base";
import myVideo from "@/components/video.vue";
import myFooter from "@/components/footer.vue";

export default {
  props: {},
  components: {
    myVideo,
    myFooter,
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {},

  updated() {},

  data() {
    return {
      anmiIndex: null,

      homeData: {
        topContent: {
          title: "医养服务",
          desc: "为长者提供居家/医院等不同场景的个性化医养服务。",

          imgs: [
            require("@/assets/image/h-c-1.png"),
            require("@/assets/image/h-c-2.png"),
            require("@/assets/image/h-c-3.png"),
          ],
        },
        hoverData: [
          {
            title: "专业护理",
            desc:
              "多年来积累了丰富的护理服务经验, 在行业中树立了良好的品牌形象和口碑",
            serveContent:
              "床上擦浴、床上洗头、伤口护理、鼻胃管护理+口腔护理、等专业护理套餐服务。",
            img: require("@/assets/image/h-2-1.png"),
            id: "护理",
          },
          {
            title: "专业陪护",
            desc:
              "五大服务保障：品牌口碑好、统一标准、细化管理、服务人员背景清晰、智能一体",
            serveContent: "居家陪护和医院陪护",
            img: require("@/assets/image/h-2-2.png"),
            id: "陪护",
          },
          {
            title: "长期护理保险",
            desc: "居住在广州的广州职工或居民医保参保人员",
            serveContent: "广州医保惠民新政策",
            img: require("@/assets/image/h-2-3.png"),
            id: "长护险",
          },
        ],
        bottomNav: [
          {
            title: "智慧养老解决方案",
            desc: "健康数据和医养服务相结合；集救援、照护等功能于一体。",
            path: "commandcenter",
            img: require("@/assets/image/h-c-4.png"),
          },
          {
            title: "新闻资讯",
            desc: "百年大健康推出健康百年讲坛，助力养老事业全方位发展",
            path: "new",
            img: require("@/assets/image/h-c-5.png"),
          },
          {
            title: "顾问团队",
            desc: "与知名三甲医院、行业权威专家教授，开展深度合作",
            path: "consultantteam",
            img: require("@/assets/image/h-c-6.png"),
          },
        ],
      },
    };
  },

  methods: {
    onAnmiMouseEnter(index) {
      this.anmiIndex = index;
    },
    onAnmiMouseLeave() {
      this.anmiIndex = null;
    },
    onDetailClick(name, id) {
      this.$router.push({
        path: "/" + name,
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.detail-btn {
  padding: 7px 18px;
  font-size: 13px;
  color: #fff;
  border-radius: calc(100vh - 1px);
  background-color: #29a93e;
  cursor: pointer;
}
.home-w {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.video-w {
  position: relative;
  width: 100%;
  height: 600px;

  & > img,
  .mask {
    position: absolute;
    top: 0;
    left: 0;
  }
  & > .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.content-w {
  display: flex;
  flex-wrap: wrap;
  padding: 5% 0 10% 0;
  & > div {
    // border: 0.5px solid #000;
  }

  .top {
    height: 338px;

    width: 100%;
    .anim-i-c {
      width: 37%;
      padding: 10% 0 10% 5%;
      border-radius: 9px;
      background: #f0f0f0;
      transition: width 0.4s ease-in-out;
    }
    .anim-i {
      width: 21%;
    }
  }

  .hover-top {
    height: 338px;
    width: 100%;

    & > div {
      width: 50%;
    }
    .img {
      transition: all 0.4s ease-in-out;
    }
    .desc-w {
      padding: 44px 31px 5px 78px;
      font-size: 13px;
      color: #666;
      background: #f0f0f0;

      .content {
        width: 58%;
        margin: 0 0 30px 0;

        .quotes {
          width: 16px;
          height: 12px;
          margin: 0 0 21px 0;
          background: url("../assets/image/dian.png") 100% 100% / cover
            no-repeat;
        }
        .name {
          font-size: 18px;
          font-weight: bold;
          & > span {
            letter-spacing: 2px;
          }
        }
        .title-desc {
          margin: 8px 0 26px 0;
          line-height: 23px;
        }
        .cut-line {
        }
        .servie {
          margin: 8px 0 0 0;
          line-height: 23px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    height: 221px;
    width: 100%;
    margin: 30px 0 0 0;
    & > div {
      width: 100%;
      flex-shrink: 2;
    }
    .anim-i {
      padding: 20px 0 0 10px;
      &:nth-child(2) {
        margin: 0 15px;
      }
    }
  }

  .msg-w {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-size: 18px;
      color: #29a93e;
      font-weight: bold;
    }
    .desc {
      width: 55%;
      margin: 10px 0;
      font-size: 13px;
      line-height: 23px;
      color: #666;
    }
  }
}
</style>
