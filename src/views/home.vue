<template>
  <div class="home-w">
    <div class="home-c ">
      <div class="video-w">
        <!-- <my-video></my-video> -->
        <img src="@/assets/image/h-b-1.png" alt="" />
        <div class="mask"></div>
      </div>
      <!-- 内容 -->
      <div class="content-w grid-contain">
        <!-- 医养服务 -->
        <div class="yyfw">
          <div class="yyfw_t">医养服务</div>
          <div class="yyfw_subt">the medical nursing services</div>
          <div class="yyfw_c">
            <div class="yyfw_c_i" v-for="item in medicalCareList">
              <div class="img" :style="{backgroundImage: `url(${item.img})`}"></div>
              <div class="info">
                <div class="info_t">{{item.title}}</div>
                <div class="info_t1">{{item.text}}</div>
              </div>
              <div class="hover">
                <i class="iconfont icon-guanwang-shouyetubiao" style="color: #ffffff;font-size: 33px;"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- 智能产品 -->
        <div class="zncp">
          <div class="zncp_t">智能产品</div>
          <div class="zncp_subt">intelligent product</div>
          <div class="zncp_c">
            <div class="zncp_c_i"
                 :style="{width: index == 0 ? '793px' : index == 1 ? '389px' : '590px', backgroundImage: `url(${item.img})`}"
                 v-for="(item,index) in smartProductList">
<!--              <div class="zncp_c_i_img" :style="{backgroundImage: `url(${item.img})`}"></div>-->
              <div class="zncp_c_i_info">
                <div class="zncp_c_i_info_a">产品</div>
                <div class="zncp_c_i_info_t">{{item.title}}</div>
                <div class="zncp_c_i_info_t1">{{item.text}}</div>
                <div class="hover">了解更多<i class="el-icon-arrow-right" style="color: #30C159;font-weight: bold;"/></div>
              </div>
            </div>
          </div>
          <div class="zncp_c">
            <div class="zncp_c_i" v-for="(item,index) in smartProductList2" :style="{backgroundImage: `url(${item.img})`}">
<!--              <div class="zncp_c_i_img" :style="{backgroundImage: `url(${item.img})`}"></div>-->
              <div class="zncp_c_i_info">
                <div class="zncp_c_i_info_a">产品</div>
                <div class="zncp_c_i_info_t">{{item.title}}</div>
                <div class="zncp_c_i_info_t1">{{item.text}}</div>
                <div class="hover">了解更多<i class="el-icon-arrow-right" style="color: #30C159;font-weight: bold;"/></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 血压健康综合管理解决方案-->
        <div class="jjfa">
          <div class="jjfa_c">
            <div class="jjfa_c_img"></div>
            <div class="jjfa_c_info">
              <div class="jjfa_c_info_t">血压健康综合管理解决方案</div>
              <div class="jjfa_c_info_t1">血压动态监测丨血压异常干预丨血压管理周报</div>
              <div class="jjfa_c_info_b">查看详情</div>
            </div>
          </div>
        </div>
        <!-- 新闻与活动 -->
        <div class="xwhd">
          <div class="xwhd_t">新闻与活动</div>
          <div class="xwhd_subt">news and events</div>
          <div class="xwhd_c">
            <div class="xwhd_c_bottom">
              <div class="xwhd_c_bottom_i">
                <div class="xwhd_c_top">
                  <div class="triangle"></div>
                  <div class="xwhd_c_top_b">最新资讯</div>
                </div>
                <div class="xwhd_c_bottom_i_img" :style="{backgroundImage: `url(${newestInformation.titleImg})`}"></div>
                <div class="xwhd_c_bottom_i_info">
                  <div class="xwhd_c_bottom_i_info_t">{{newestInformation.title}}</div>
                  <div class="xwhd_c_bottom_i_info_t1">{{newestInformation.brief}}</div>
                </div>
              </div>
              <div class="xwhd_c_bottom_i">
                <div class="xwhd_c_top">
                  <div class="triangle"></div>
                  <div class="xwhd_c_top_b">最新活动</div>
                </div>
                <div class="xwhd_c_bottom_i_img" :style="{backgroundImage: `url(${newestActivity.titleImg})`}"></div>
                <div class="xwhd_c_bottom_i_info">
                  <div class="xwhd_c_bottom_i_info_t">{{newestActivity.title}}</div>
                  <div class="xwhd_c_bottom_i_info_t1">{{newestActivity.brief}}</div>
                </div>
              </div>
              <div class="xwhd_c_bottom_i">
                <div class="xwhd_c_top s">
                  <div class="triangle"></div>
                  <div class="xwhd_c_top_b">其他资讯</div>
                </div>
                <div class="xwhd_c_bottom_list">
                  <div class="xwhd_c_bottom_list_c" v-for="item in otherInformationList">
                    <div class="xwhd_c_bottom_list_c_id">
                      <div>{{item.date}}</div>
                      <div class="xwhd_c_bottom_list_c_id_s">{{item.time}}</div>
                    </div>
                    <div class="xwhd_c_bottom_list_c_t">
                      <div>{{item.title}}</div>
                    </div>
                  </div>
                </div>
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div class="xwhd_bottom">
            <div class="xwhd_bottom_b" @click="toNew(1)">更多咨询</div>
            <div class="xwhd_bottom_b" @click="toNew(2)">更多活动</div>
          </div>
        </div>
      </div>
    </div>
    <div class="back-top">
      <div class="back-top-f" @click="onContactClick"><i class="iconfont icon-kefu" style="font-size: 57px; color: #fff;"></i></div>
      <div class="back-top-s" @click="toTop"><i class="el-icon-arrow-up" style="font-weight: bold;font-size: 55px"></i></div>
    </div>
    <serviceWindow :show="openService" @onClose="onCloseService"/>
  </div>
</template>

<script>
import { articleHome } from '@/request/api/new'
import myVideo from "@/components/video.vue";
import myFooter from "@/components/footer.vue";
import serviceWindow from '@/components/serviceWindow'
import moment from 'moment'

export default {
  props: {},
  components: {
    myVideo,
    myFooter,
    serviceWindow
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.getArticleData()
  },

  updated() {},

  data() {
    return {
      openService:false,
      medicalCareList: [{
        title: '长护险',
        text: '7年磨一剑，专注居家养老服务;5大服务保障体系，18项服务标准;;三甲医院专家教在线指导，千名专业护理人员倾情服务',
        img: require('../assets/image/medicalCarebg1.png')
      },{
        title: '护理服务 首选百年医养',
        text: '方便 省心 专业',
        img: require('../assets/image/medicalCarebg2.png')
      },{
        title: '居家陪护 五大保障',
        text: '品牌口碑好丨统一标准丨细化管理丨服务人员背景清晰',
        img: require('../assets/image/medicalCarebg3.png')
      }], // 医养服务
      smartProductList: [{
        title: '医疗级健康监测手表',
        text: '血压测量精准|心脑血管疾病预警|定位精准 电子围栏|一键救援 双向通话',
        img: require('../assets/image/smartProductBg1.png'),
      }, {
        title: '百年医养&乐心手环',
        text: '24H全天候守护长者',
        img: require('../assets/image/smartProductBg2.png'),
      }], // 智能产品
      smartProductList2: [{
        title: '百年医养&乐心血压计',
        text: '全自动双管血压计；双管，量血压才更准！',
        img: require('../assets/image/smartProductBg3.png'),
      },{
        title: '百年医养&乐心体脂秤',
        text: '秤要精准 也要颜值',
        img: require('../assets/image/smartProductBg4.png'),
      },],
      newestInformation: [], // 最新资讯
      newestActivity: [], // 最新活动
      otherInformationList: [], // 其他资讯列表
      otherInformationData: [], // 其他资讯列表
    };
  },

  methods: {
    getArticleData() {
      const params = {}
      articleHome(params).then(res => {
        console.log('获取资讯信息:', res)
        if (res.code == 0) {
          this.newestInformation = res.data.newestInformation
          this.newestActivity = res.data.newestActivity
          let monthsShort = moment.monthsShort()
          let months = 0
          let monthsText = ''
          let list = res.data.otherInformationList.slice(0,12)
          this.otherInformationList = list.map(item => {
            months = moment(item.publishDatetime).format('M') - 1
            monthsText = monthsShort[months]
            return {
              categoryId: item.categoryId,
              id: item.id,
              publishDatetime: item.publishDatetime,
              time: monthsText,
              date: moment(item.publishDatetime).format('DD'),
              title: item.title,
            }
          })
          console.log('改变日期：', this.otherInformationList)
        }
      })
    },
    onDetailClick(name, id) {
      this.$router.push({
        path: "/" + name,
        query: {
          id: id,
        },
      });
    },
    //立即咨询 click
    onContactClick(){
      console.log('onContactClick')
      this.openService = true
    },
    //关闭服务窗口 click
    onCloseService(){
      this.openService = false
    },
    // 返回顶部
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    // 跳转咨询
    toNew(type) {
      if (type == 1) {
        this.$router.push({
          path: 'new?id=企业资讯'
        })
      } else {
        this.$router.push({
          path: 'new?id=健康资讯'
        })
      }
    }
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
  height: 886px;

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
  /*padding: 5% 0 10% 0;*/
  .yyfw {
    background: #F4F4F4;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 112px;
    &_t {
      font-size: 34px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: 28px;
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: 15px;
      margin-bottom: 60px;
    }
    &_c {
      display: flex;
      align-items: center;
      justify-content: center;
      &_i {
        width: 386px;
        height: 374px;
        background: #FFFFFF;
        border-radius: 10px;
        margin-right: 20px;
        position: relative;
        .img {
          width: 100%;
          height: 240px;
          border-radius: 10px 10px 0px 0px;
          background: center center no-repeat;
          background-size: auto;
        }
        .info {
          text-align: left;
          padding: 20px 11px;
          .info_t {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: 15px;
          }
          .info_t1 {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
          }
        }
      }
      .hover {
        display: none
      }
      &_i:hover {
        box-shadow: 0px 12px 18px -1px hsl(0deg 0% 49% / 35%);
      }
      &_i:hover .hover {
        display: block;
        position: absolute;
        left: 45%;
        bottom: -21px;
        width: 43px;
        height: 43px;
        text-align: center;
        line-height: 43px;
        background: #30C159;
        box-shadow: 0px 2px 8px 0px rgba(48, 193, 89, 0.35);
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .zncp {
    background: #ffffff;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 112px;
    &_t {
      font-size: 34px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: 28px;
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: 15px;
      margin-bottom: 60px;
    }
    &_c {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      &_i {
        width: 590px;
        height: 400px;
        position: relative;
        margin-right: 18px;
        border-radius: 10px;
        background: center center no-repeat;
        background-image: url('../assets/image/medicalCarebg1.png');
        background-size: auto;
        display: block;
        &_info {
          position: absolute;
          bottom: 23px;
          left: 19px;
          text-align: left;
          &_a {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            margin-bottom: 13px;
          }
          &_t {
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: 8px;
          }
          &_t1 {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }
      .hover {
        display: none;
      }
      &_i:hover {
        box-shadow: 0 0 0 0 #333, inset 0 0 0 0 #423880, inset 0 -224px 118px -107px #5f534a, inset 0px 0px 0 0 #5f534a;
      }
      &_i:hover .hover {
        display: block;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #30C159;
        cursor: pointer;
        margin-top: 15px;
      }
    }
  }
  .jjfa {
    &_c {
      width: 100%;
      height: 400px;
      position: relative;
      &_img {
        width: 100%;
        height: 400px;
        background: url('../assets/image/solutionBg1.png') center center no-repeat;
        background-size: auto;
      }
      &_info {
        position: absolute;
        left: 20%;
        top: 30%;
        &_t {
          font-size: 42px;
          font-family: OPPOSans;
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: 18px;
        }
        &_t1 {
          font-size: 16px;
          font-family: OPPOSans;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: 29px;
        }
        &_b {
          width: 122px;
          height: 40px;
          background: #FFFFFF;
          border: 1px solid #FFFFFF;
          border-radius: 20px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #39C460;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .xwhd {
    background: #F4F4F4;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 112px;
    &_t {
      font-size: 34px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: 28px;
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: 15px;
      margin-bottom: 60px;
    }
    &_c {
      &_top {
        width: 100%;
        border-bottom: 1px solid #EEEEEE;
        margin-bottom: 19px;
        position: relative;
        .triangle {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #fff;
          position: absolute;
          left: 13%;
          bottom: 0;
        }
        &.s {
          margin-bottom: 0px;
        }
        &_b {
          width: 120px;
          height: 46px;
          background: #30C159;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
      &_bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        &_i {
          width: 386px;
          height: 472px;
          background: #F4F4F4;
          border-radius: 10px;
          margin-right: 20px;
          &_img {
            width: 100%;
            height: 240px;
            border-radius: 10px 10px 0px 0px;
            background: center center no-repeat;
            background-size: auto;
          }
          &_info {
            height: 167px;
            text-align: left;
            padding: 20px 11px;
            background: #FFFFFF;
            border-radius: 10px;
            &_t {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              margin-bottom: 15px;
            }
            &_t1 {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
            }
          }
        }
        &_list {
          width: 386px;
          height: 396px;
          background: #FFFFFF;
          border-radius: 0px 0px 10px 10px;
          &_c {
            height: 97px;
            padding: 28px 30px;
            display: flex;
            align-items: center;
            text-align: left;
            border-bottom: 1px solid #EEEEEE;
            &_id {
              font-size: 28px;
              font-family: Arial;
              font-weight: bold;
              color: #666666;
              &_s {
                font-size: 20px;
                color: #999999;
              }
            }
            &_t {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              margin-left: 11px;
            }
          }
          &_c:last-child {
            border-bottom: none;
          }
        }
        .point {
          width: 12px;
          height: 12px;
          background: #30C159;
          border-radius: 50%;
          margin-top: 18px;
        }
      }
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      &_b {
        width: 122px;
        height: 40px;
        border: 1px solid #333333;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-right: 57px;
      }
      &_b:hover {
        color: #ffffff;
        border: 1px solid #30C159;
        background: #30C159;
        border-radius: 20px;
        cursor: pointer;
      }
    }
  }
}
  .back-top {
    position: fixed;
    right: 0;
    bottom: 20%;
    .back-top-f {
      width: 80px;
      height: 80px;
      background: #57cb78;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .back-top-s {
      width: 80px;
      height: 80px;
      background: #ababab;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
