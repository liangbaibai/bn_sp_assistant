<template>
  <div class="home-w">
    <div class="home-c ">
      <div class="video-w">
<!--        <img src="@/assets/image/w-b-1.png" alt="" />-->
        <video
            :src="'http://1253484761.vod2.myqcloud.com/9d41b30bvodcq1253484761/57362113387702306239961417/f0.mp4'"
            autoplay
            muted
            x-webkit-airplay="true"
            playsinline="true"
            webkit-playsinline="true"
            loop
            width="100%">
        </video>

        <div class="mask"></div>
        <div class="plays" @click="checkVideo"></div>
        <div class="info">
          <div class="t1">智能健康监护 就选百来俏</div>
          <div class="t2">全新品牌代言人</div>
          <div class="t2">虎艳芬《外来媳妇本地郎》二嫂 饰演者</div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content-w grid-contain">
        <!-- 医养服务 -->
        <div class="yyfw">
          <div class="yyfw_t">医养服务</div>
          <div class="yyfw_subt">the medical nursing services</div>
          <div class="yyfw_c">
            <div class="yyfw_c_i" v-for="(item,index) in medicalCareList" @click="toCare(index)">
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
                 v-for="(item,index) in smartProductList" @click="toProduct(1,index)">
              <div class="zncp_c_i_info">
<!--                <div class="zncp_c_i_info_a">产品</div>-->
                <div class="zncp_c_i_info_t">{{item.title}}</div>
                <div class="zncp_c_i_info_t1">{{item.text}}</div>
                <div class="hover">了解更多<i class="el-icon-arrow-right" style="color: #30C159;font-weight: bold;"/></div>
              </div>
            </div>
          </div>
          <div class="zncp_c">
            <div class="zncp_c_i" v-for="(item,index) in smartProductList2" @click="toProduct(2,index)" :style="{backgroundImage: `url(${item.img})`}">
              <div class="zncp_c_i_info">
<!--                <div class="zncp_c_i_info_a">产品</div>-->
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
              <div class="jjfa_c_info_b" @click="toProgram()">查看详情</div>
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
                <div class="xwhd_c_bottom_i_h" @click="toDetail(newestInformation)">
                  <div class="xwhd_c_bottom_i_img" :style="{backgroundImage: `url(${newestInformation.titleImg})`}"></div>
                  <div class="xwhd_c_bottom_i_info">
                    <div class="xwhd_c_bottom_i_info_t">{{newestInformation.title}}</div>
                    <div class="xwhd_c_bottom_i_info_t1">{{newestInformation.brief}}</div>
                    <div class="xwhd_c_bottom_i_info_t2">{{newestActivity.publishDatetime}}</div>
                  </div>
                </div>
              </div>
              <div class="xwhd_c_bottom_i">
                <div class="xwhd_c_top">
                  <div class="triangle"></div>
                  <div class="xwhd_c_top_b">最新活动</div>
                </div>
                <div class="xwhd_c_bottom_i_h" @click="toDetail(newestActivity)">
                  <div class="xwhd_c_bottom_i_img" :style="{backgroundImage: `url(${newestActivity.titleImg})`}"></div>
                  <div class="xwhd_c_bottom_i_info">
                    <div class="xwhd_c_bottom_i_info_t">{{newestActivity.title}}</div>
                    <div class="xwhd_c_bottom_i_info_t1">{{newestActivity.brief}}</div>
                    <div class="xwhd_c_bottom_i_info_t2">{{newestActivity.publishDatetime}}</div>
                  </div>
                </div>
              </div>
              <div class="xwhd_c_bottom_i">
                <div class="xwhd_c_top s">
                  <div class="triangle"></div>
                  <div class="xwhd_c_top_b">其他资讯</div>
                </div>
                <div class="xwhd_c_bottom_list">
                  <div class="xwhd_c_bottom_list_c" v-for="item in otherInformation" @click="toDetail(item)">
                    <div class="xwhd_c_bottom_list_c_id">
                      <div>{{item.date}}</div>
                      <div class="xwhd_c_bottom_list_c_id_s">{{item.time}}</div>
                    </div>
                    <div class="xwhd_c_bottom_list_c_t">
                      <div>{{item.title}}</div>
                    </div>
                  </div>
                </div>
                <div class="pointInfo">
                  <div v-for="(item, index) in otherInformationData" :class="{point: checkOtherIndex == index, pointC: checkOtherIndex != index}" @click="clickOtherInfo(item, index)"></div>
                </div>
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
    <el-dialog
        title=""
        :visible.sync="showVideo"
        append-to-body
        label-position="left"
        width="1000px"
        class="previewDialog"
        :before-close="handleVideoClose">
      <my-video :src="videoStr"></my-video>
    </el-dialog>
  </div>
</template>

<script>
import { articleHome } from '@/request/api/new'
import myVideo from '@/components/video'
import myFooter from '@/components/footer'
import moment from 'moment'

export default {
  props: {},
  components: {
    myVideo,
    myFooter
  },
  created() {},
  mounted() {
    this.getArticleData()
  },

  updated() {},

  data() {
    return {
      videoStr: 'http://1253484761.vod2.myqcloud.com/9d41b30bvodcq1253484761/7033e149387702301233726239/f0.mp4',
      medicalCareList: [/*{
        title: '长护险',
        text: '7年磨一剑，专注居家养老服务;5大服务保障体系，18项服务标准;三甲医院专家教在线指导，千名专业护理人员倾情服务',
        img: require('../assets/image/medicalCarebg1.png')
      },*/{
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
        title: '智能健康监护手表 ST6 Pro',
        text: '智慧助老 安全守护',
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
      otherInformation: [],
      checkOtherIndex: 0, // 选中其他资讯
      showVideo: false, // 是否展开视频播放
    };
  },
  computed: {

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
          this.otherInformationData = this.splitArray(this.otherInformationList,4)
          this.otherInformation = this.otherInformationData[0]
          console.log('改变日期：', this.otherInformationData)
        }
      })
    },
    splitArray(arr, len){
      let a_len = arr.length;
      let result = [];
      for(let i = 0;i < a_len; i += len) {
        result.push(arr.slice(i,i+len));
      }
      return result;
    },
    onDetailClick(name, id) {
      this.$router.push({
        path: "/" + name,
        query: {
          id: id,
        },
      });
    },
    // 选中分页
    clickOtherInfo(type,index) {
      this.checkOtherIndex = index
    },
    // 跳转医养
    toCare(type) {
      if (type == 0) {
        this.$router.push({
          path: 'medicalservices?id=长护险'
        })
      } else if (type == 1) {
        this.$router.push({
          path: 'medicalservices?id=护理'
        })
      } else if (type == 2) {
        this.$router.push({
          path: 'medicalservices?id=陪护'
        })
      }
    },
    // 跳转产品
    toProduct(type, index) {
      if (type == 1 && index == 0) {
        this.$router.push({
          path: 'eleproducts/ylWatch'
        })
      } else if (type == 1 && index == 1) {
        this.$router.push({
          path: 'eleproducts/lxWatch'
        })
      } else if (type == 2 && index == 0) {
        this.$router.push({
          path: 'eleproducts/bloodPressure'
        })
      } else if (type == 2 && index == 1) {
        this.$router.push({
          path: 'eleproducts/weighingScale'
        })
      }
    },
    // 跳转解决方案
    toProgram() {
      this.$router.push({
        path: 'commandcenter'
      })
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
    },
    // 跳转咨询详情
    toDetail(detail) {
      if (detail.categoryId == 1) {
        // 企业资讯
        this.$router.push({
          name: "newdetail",
          params: {
            id: detail.id,
          },
          query: {
            id: '企业资讯'
          }
        })
      } else if (detail.categoryId == 2) {
        // 健康资讯
        this.$router.push({
          name: "newdetail",
          params: {
            id: detail.id,
          },
          query: {
            id: '健康资讯'
          }
        })
      }
    },
    // 展开视频弹窗
    checkVideo() {
      this.showVideo = true
    },
    // 关闭视频
    handleVideoClose() {
      this.showVideo = false
    }
  },
  watch: {
    checkOtherIndex(val) {
      console.log('监听数据：', val)
      let data = this.otherInformationData.find((item, index) => index == val)
      console.log('监听数据：2', data)
      this.otherInformation = data
      console.log('监听数据：3', this.otherInformation)
    }
  }
};
</script>

<style lang="scss">
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .detail-btn {
    padding: torem(7px) torem(18px);
    font-size: torem(13px);
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
    height: auto;
    .img {
      width: 100vw;
      height: torem(700px)
    }
    .plays {
      width: torem(75px);
      height: torem(75px);
      -webkit-box-shadow: 0 0 torem(5px) #FFFFFF;
      box-shadow: 0 0 torem(5px) #FFFFFF;
      border-radius: 50%;
      position: relative;
      z-index: 5;
      cursor: pointer;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      position: absolute;
      top: 40%;
      right: torem(498px);
      background: rgba(255, 255, 255, 0.2);
    }
    .plays:hover {
      box-shadow: 0 0 torem(30px) #FFFFFF;
    }
    .plays::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      clip-path: polygon(20% 0, 100% 50%, 20% 100%);
      background: #FFFFFF;
      transform: scale(0.4);
    }
    .info {
      position: absolute;
      top: 35%;
      left: torem(360px);
      .t1 {
        font-size: torem(36px);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom: torem(25px);
      }
      .t2 {
        font-size: torem(18px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: torem(25px);
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
    }
    & > .mask {
      width: 100%;
      height: 99%;
      background-color: rgba(0, 0, 0, 0.45);
    }
}
  .content-w {
  /*padding: 5% 0 10% 0;*/
  .yyfw {
    background: #F4F4F4;
    text-align: center;
    padding-top: torem(58px);
    padding-bottom: torem(112px);
    &_t {
      font-size: torem(34px);
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: torem(28px);
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: torem(15px);
      margin-bottom: torem(60px);
    }
    &_c {
      display: flex;
      align-items: center;
      justify-content: center;
      &_i {
        width: torem(386px);
        height: torem(374px);
        background: #FFFFFF;
        border-radius: torem(10px);
        margin-right: torem(20px);
        position: relative;
        .img {
          width: 100%;
          height: torem(240px);
          border-radius: torem(10px) torem(10px) 0px 0px;
          background: center center no-repeat;
          background-size: auto;
        }
        .info {
          text-align: left;
          padding: torem(20px) torem(11px);
          .info_t {
            font-size: torem(18px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            margin-bottom: torem(15px);
          }
          .info_t1 {
            font-size: torem(14px);
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
        cursor: pointer;
        box-shadow: 0px torem(12px) torem(18px) torem(-1px) hsl(0deg 0% 49% / 35%);
      }
      &_i:hover .hover {
        display: block;
        position: absolute;
        left: 45%;
        bottom: torem(-21px);
        width: torem(43px);
        height: torem(43px);
        text-align: center;
        line-height: torem(43px);
        background: #30C159;
        box-shadow: 0px torem(2px) torem(8px) 0px rgba(48, 193, 89, 0.35);
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .zncp {
    background: #ffffff;
    text-align: center;
    padding-top: torem(58px);
    padding-bottom: torem(112px);
    &_t {
      font-size: torem(34px);
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: torem(28px);
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: torem(15px);
      margin-bottom: torem(60px);
    }
    &_c {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: torem(20px);
      &_i {
        width: torem(590px);
        height: torem(400px);
        max-height: torem(400px);
        position: relative;
        margin-right: torem(18px);
        border-radius: torem(10px);
        background: center center no-repeat;
        background-image: url('../assets/image/medicalCarebg1.png');
        background-size: auto;
        display: inline-block;
        cursor: pointer;
        &_info {
          position: absolute;
          top: torem(328px);
          left: torem(19px);
          text-align: left;
          display: inline-block;
          &_a {
            font-size: torem(16px);
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            margin-bottom: torem(13px);
          }
          &_t {
            font-size: torem(20px);
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: torem(8px);
          }
          &_t1 {
            font-size: torem(14px);
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
        box-shadow: 0 0 0 0 #333, inset 0 0 0 0 #423880, inset 0 -7.4666666667rem 3.9333333333rem -3.5666666667rem rgb(0 0 0 / 68%), inset 0px 0px 0 0 rgb(0 0 0 / 59%);
      }
      &_i:hover .zncp_c_i_info {
        top: torem(300px);
      }
      &_i:hover .hover {
        display: contents;
        font-size: torem(16px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #30C159;
        cursor: pointer;
        margin-top: torem(15px);
      }
    }
  }
  .jjfa {
    &_c {
      width: 100%;
      height: torem(400px);
      position: relative;
      &_img {
        width: 100%;
        height: torem(400px);
        background: url('../assets/image/solutionBg1.png') center center no-repeat;
        background-size: auto;
      }
      &_info {
        position: absolute;
        left: 20%;
        top: 30%;
        &_t {
          font-size: torem(42px);
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: torem(18px);
        }
        &_t1 {
          font-size: torem(16px);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          margin-bottom: torem(29px);
        }
        &_b {
          width: torem(122px);
          height: torem(40px);
          border: torem(1px) solid #FFFFFF;
          border-radius: torem(20px);
          font-size: torem(16px);
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
    .jjfa_c_info_b:hover {
      width: torem(122px);
      height: torem(40px);
      background: #FFFFFF;
      border: torem(1px) solid #FFFFFF;
      border-radius: torem(20px);
      font-size: torem(16px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #39C460;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  .xwhd {
    background: #F4F4F4;
    text-align: center;
    padding-top: torem(58px);
    padding-bottom: torem(112px);
    &_t {
      font-size: torem(34px);
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &_subt {
      font-size: torem(28px);
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      text-transform: uppercase;
      margin-top: torem(15px);
      margin-bottom: torem(60px);
    }
    &_c {
      &_top {
        width: 100%;
        border-bottom: torem(1px) solid #EEEEEE;
        margin-bottom: torem(19px);
        position: relative;
        .triangle {
          width: 0;
          height: 0;
          border-left: torem(8px) solid transparent;
          border-right: torem(8px) solid transparent;
          border-bottom: torem(8px) solid #fff;
          position: absolute;
          left: 13%;
          bottom: 0;
        }
        &.s {
          margin-bottom: 0px;
        }
        &_b {
          width: torem(120px);
          height: torem(46px);
          background: #30C159;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: torem(20px);
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
          width: torem(386px);
          height: torem(472px);
          background: #F4F4F4;
          border-radius: torem(10px);
          margin-right: torem(20px);
          &_img {
            width: 100%;
            height: torem(240px);
            border-radius: torem(10px) torem(10px) 0px 0px;
            background: center center no-repeat;
            background-size: cover;
          }
          &_info {
            height: torem(167px);
            text-align: left;
            padding: torem(15px) torem(11px);
            padding-bottom: 0;
            background: #FFFFFF;
            border-radius: 0px 0px torem(10px) torem(10px);
            &_t {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              margin-bottom: torem(15px)
            }
            &_t1 {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              width: 100%;
              height: torem(60px);
              max-height: torem(60px);
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            &_t2 {
              margin-bottom: torem(20px);
              text-align: right;
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #999999;
            }
          }
        }
        &_list {
          width: torem(386px);
          height: torem(396px);
          background: #FFFFFF;
          border-radius: 0px 0px torem(10px) torem(10px);
          &_c {
            height: torem(97px);
            padding: torem(28px) torem(30px);
            display: flex;
            align-items: center;
            text-align: left;
            border-bottom: torem(1px) solid #EEEEEE;
            cursor: pointer;
            &_id {
              font-size: torem(28px);
              font-family: Arial;
              font-weight: bold;
              color: #666666;
              &_s {
                font-size: torem(20px);
                color: #999999;
              }
            }
            &_t {
              font-size: torem(14px);
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #333333;
              margin-left: torem(11px);
            }
            &_t:hover {
              color: #30C159;
            }
          }
          &_c:last-child {
            border-bottom: none;
          }
        }
        .pointInfo {
          display: flex;
          align-items: center;
        }
        .point {
          width: torem(12px);
          height: torem(12px);
          background: #30C159;
          border-radius: 50%;
          margin-top: torem(18px);
          margin-right: torem(5px);
        }
        .pointC {
          width: torem(12px);
          height: torem(12px);
          border-radius: 50%;
          margin-top: torem(18px);
          margin-right: torem(5px);
          background: #CCCCCC;
        }
      }
    }
    .xwhd_c_bottom_list:hover {
      cursor: pointer;
      box-shadow: 0px torem(12px) torem(18px) torem(-1px) hsl(0deg 0% 49% / 35%);
      border-radius: 0px 0px torem(10px) torem(10px);
    }
    .xwhd_c_bottom_i_h:hover {
      cursor: pointer;
      box-shadow: 0px torem(12px) torem(18px) torem(-1px) hsl(0deg 0% 49% / 35%);
      border-radius: 0px 0px torem(10px) torem(10px);
      .xwhd_c_bottom_i_info_t {
        color: #30C159;
      }
    }
    &_bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: torem(60px);
      &_b {
        width: torem(122px);
        height: torem(40px);
        border: torem(1px) solid #333333;
        border-radius: torem(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: torem(16px);
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        margin-right: torem(57px);
      }
      &_b:hover {
        color: #ffffff;
        border: torem(1px) solid #30C159;
        background: #30C159;
        border-radius: torem(20px);
        cursor: pointer;
      }
    }
  }
}
  .previewDialog {
    .el-dialog__header {
      padding: 0;
      top: torem(-15px);
      right: torem(-15px);
    }
    .el-dialog__body {
      padding: 0;
    }
    .el-dialog__headerbtn {
      z-index: 9999;
      width: torem(36px);
      height: torem(36px);
      background: #EEEEEE;
      border-radius: 50%;
      top: torem(-17px);
      right: torem(-14px);
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: #999999;
      font-size: torem(21px);
      font-weight: bold;
    }
  }
</style>
