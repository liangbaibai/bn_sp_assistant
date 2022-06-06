<template>
  <div :class="'header-w '+ $route.meta.headerClass">
    <div class="header-c grid-contain">
      <div class="nav-w">
        <div class="logo-w" @click="onLogoClick"><img src="@/assets/image/webLogo.png" alt="" /></div>
        <el-tabs ref="tabsMenu" id="tabsMenuPane" v-model="indexCheckTitle" @tab-click="tabClick">
          <el-tab-pane v-for="(item, i) in navList" :key="i" :label="item.title" :name="item.title">
            <!-- 左侧菜单二级 -->
            <el-tabs id="tabsMenuPaneChild" :style="{height: item.layoutType == 'picture' ? '130px' : '73px'}" class="menu-contain-left" tab-position="top" v-model="indexCheckTitleChild" ref="tabsMenuChild" @tab-click="tabChildClick">
              <el-tab-pane v-for="(menuSecond, x) in item.menu" :key="menuSecond.name" :label="menuSecond.name" :name="menuSecond.url">
               <div slot="label" v-if="item.layoutType == 'picture'" class="tabLabel">
                 <img :src="menuSecond.img" alt="">
                 <div>{{menuSecond.name}}</div>
               </div>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "@/request/api/base";
import {} from "@/assets/js/index";

export default {
  props: {},
  created() {
    console.log('获取当前路由：', this.$route)
  },
  components: {},

  computed: {},

  mounted() {
    this.$nextTick(() => {
      this.$refs.tabsMenu.$refs.nav.$nextTick(() => {
          // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
          let target = document.getElementById('tabsMenuPane').firstChild.firstChild.firstChild.firstChild.getElementsByClassName("el-tabs__item is-top");
          let targetChild = document.getElementById('tabsMenuPane').lastChild
          let that = this;
          for (let i = 0; i < target.length; i++) {
            target[i].addEventListener("mouseover", () => {
              // 切换左侧默认选项为第一个
              targetChild.addEventListener("mouseleave", () => {
                targetChild.style.display = 'none'
              })
              that.$refs.tabsMenu.handleTabClick(1, String(i));
            });
            target[i].addEventListener("mouseenter", () => {
              targetChild.style.display = 'block'
              targetChild.children[i].style.display = 'block'
              that.indexCheckTitle = that.navList[i].title
            })
          }
        });
    });
    console.log('获取vuex"', this.$store.state.tabMenu.menuIndex)
    this.indexCheckTitle = sessionStorage.getItem('routeName')
  },

  data() {
    return {
      navList: [
        {
          title: "医养服务",
          layoutType: "normal",
          name: "medicalservices",
          menu: [
            {
              name: "长护险",
              id: "长护险",
              url: "medicalservices?id=长护险",
            }, {
              name: "陪护",
              id: "陪护",
              url: "medicalservices?id=陪护",
            }, {
              name: "护理",
              id: "护理",
              url: "medicalservices?id=护理",
            },
          ],
        },
        {
          title: "产品生态",
          layoutType: "picture",
          name: "eleproducts",
          menu: [
            {
              name: "手表",
              img: require("@/assets/image/tab_img_sb.png"),
              id: "手表",
              url: "eleproducts/ylWatch",
            },
            {
              name: "手环",
              img: require("@/assets/image/tab_img_sh.png"),
              id: "手环",
              url: "eleproducts/lxWatch",
            },{
              name: "体脂秤",
              img: require("@/assets/image/tab_img_tzc.png"),
              id: "体脂秤",
              url: "eleproducts/weighingScale",
            },
            {
              name: "血压仪",
              img: require("@/assets/image/tab_img_xyy.png"),
              id: "血压仪",
              url: "eleproducts/bloodPressure",
            },
          ],
        },
        {
          title: "智慧养老方案",
          layoutType: "normal",
          name: "commandcenter",
          menu: [
            {
              name: "血压健康综合管理解决方案",
              id: "血压健康综合管理解决方案",
              url: "commandcenter",
            },
            {
              name: "长者居家监护解决方案",
              id: "长者居家监护解决方案",
              url: "homeCareSolutions",
            },
          ],
        },
        {
          title: "运营平台",
          layoutType: "normal",
          name: "operating",
          menu: [
            {
              name: "客户端",
              img: require("@/assets/image/ewm01.png"),
              id: "客户端",
              url: "operating",
            },
            {
              name: "医护端",
              img: require("@/assets/image/ewm02.png"),
              id: "医护端",
              url: "operatingCare",
            },
          ],
        },
        {
          title: "百年技术",
          layoutType: "normal",
          name: "bntech",
          menu: [
            {
              name: "硬件与软件",
              id: "硬件与软件",
              url: "bntech?id=硬件与软件",
            },
            {
              name: "AI人工智能",
              id: "AI人工智能",
              url: "bntech?id=AI人工智能",
            },
            {
              name: "专利",
              id: "专利",
              url: "bntech?id=专利",
            },
            {
              name: "软著",
              id: "软著",
              url: "bntech?id=软著",
            },
          ],
        },
        {
          title: "企业动态",
          layoutType: "normal",
          name: "new",
          menu: [
            {
              name: "企业资讯",
              id: "企业资讯",
              url: "new?id=企业资讯",
            },
            {
              name: "健康资讯",
              id: "健康资讯",
              url: "new?id=健康资讯",
            },
          ],
        },
        {
          title: "走进百年",
          layoutType: "normal",
          name: "walkbn",
          menu: [
            {
              name: "品牌专区",
              id: "品牌专区",
              url: "walkbn?id=品牌专区",
            },
            {
              name: "百年文化",
              id: "百年文化",
              url: "walkbn?id=百年文化",
            },
            {
              name: "荣誉证书",
              id: "荣誉证书",
              url: "walkbn?id=荣誉证书",
            },
            {
              name: "合作伙伴",
              id: "合作伙伴",
              url: "walkbn?id=合作伙伴",
            },
            {
              name: "公司活动",
              id: "公司活动",
              url: "walkbn?id=公司活动",
            },
          ],
        },
      ],
      navIndex: null,
      indexCheckTitle: '', // tabs
      indexCheckTitleChild: '', // tabs二级菜单
      indexCheckName: '', // tabs
      menuSecondary: '', // 二级菜单
    };
  },
  methods: {
    // 选中tab
    tabClick(tab, event) {
      this.navList.forEach((item,index) => {
        if (tab.label == item.title) {
          console.log('选中一级：', item, index)
          this.indexCheckTitleChild = item.menu[0].url
          this.menuSecondary = item.menu
          this.indexCheckTitle = item.title
          this.indexCheckName = item.name
          sessionStorage.setItem('routeName', this.indexCheckTitle)
          this.$router.push({
            path: "/" + item.name,
          });
        }
      })
    },
    // 二级菜单点击
    tabChildClick(tab, event) {
      this.indexCheckTitleChild = tab.paneName
      console.log('选中二级：', tab)
      this.$router.push({
        path: '/' + tab.paneName,
      });
    },
    //logo click
    onLogoClick() {
      this.$router.push("/");
    },
    getPath(){
      console.log(this.$route.path);
    },
  },
  watch: {
    indexCheckTitleChild(val) {
      console.log('监听二级变化：1', val)
      this.$store.commit('tabMenu/setMenuIndex', val)
    },
    $route: {
      deep: true,
      handler(newVal, oldVal) {
        console.log('监听路由变化：header', newVal)
        // new?id=健康资讯
        console.log('监听路由变化：header1', this.indexCheckTitleChild)
        this.indexCheckTitle = newVal.meta.title
        let data = newVal.path.replace('/','').replace(/[\\]/g,'')
        if (newVal.query.id) {
          this.indexCheckTitleChild = data + '?id=' + newVal.query.id
          if (newVal.query.id == '健康资讯' || newVal.query.id == '企业资讯') {
            this.indexCheckTitleChild = 'new?id=' + newVal.query.id
          }
          console.log('监听路由变化：2', data)
        } else {
          this.indexCheckTitleChild = data
          console.log('监听路由变化：3', data)
        }
        this.$store.commit('tabMenu/setMenuIndex', newVal.path)
      }
    }
  }
};
</script>

<style lang="scss" >
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.header-w {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100vw;
  .header-c {
    position: relative;
    /*display: flex;*/
    /*justify-content: space-evenly;*/
    /*align-items: center;*/
    z-index: 99;
    height: torem(73px);
    line-height: torem(73px);
    background: #ffffff;
  }
  .logo-w {
    width: torem(110px);
    min-width: torem(110px);
    cursor: pointer;
    position: absolute;
    left: torem(300px);
  }
}

.nav-w {
  display: flex;
  align-items: center;
  position: relative;
  .el-tabs {
    margin-bottom: torem(1px);
    position: relative;
    left: torem(600px);
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__nav-scroll {
    padding: 0 torem(12px);
  }
  .el-tabs__nav-wrap::after {
    background-color: #ffffff;
  }
  .el-tabs__active-bar {
    height: torem(4px);
    border-radius: torem(2px);
  }
  .el-tabs__item {
    font-size: torem(16px);
    padding-bottom: torem(45px);
    color: #333333;
    font-family: Microsoft YaHei;
  }
  .el-tabs__item.is-active {
    font-weight: bold;
  }
  .el-tabs__item.is-active {
    font-size: torem(16px);
    color: #30C159;
  }
  .el-tabs__active-bar {
    background-color: #30C159;
  }
  .el-tabs__content {
    position: absolute;
    top: torem(73px);
    z-index: 9999;
    background: #ffffff;
    width: 100vw;
    left: torem(-600px);
  }
  .el-tabs__item:hover {
    color: #30C159;
  }
  .tabLabel {
    margin-top: torem(15px);
    text-align: center;
    margin-right: torem(40px);
  }
}
.tabs-c {
  width: 100%;
  height: torem(74px);
  background: #FFFFFF;
  text-align: center;
  .tabs-c-t {
    font-size: torem(16px);
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    margin-right: torem(38px);
    &:hover {
      color: #30C159;
    }
  }
  .tabs-c-t-h {
    color: #30C159;
    cursor: pointer;
  }
}
.l-picture-w {
  display: flex;
  .picture-i {
    text-align: center;
  }
}

.el-dropdown-menu {
  box-shadow: 0px 0px torem(18px) 0px rgba(125, 125, 125, 0.28);
  .el-dropdown-menu__item {
    &:focus {
      color: #29a93e;
    }
    &:hover {
      color: #29a93e !important;
    }
  }
}
</style>
