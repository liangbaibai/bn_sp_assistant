<template>
  <div :class="'header-w '+ $route.meta.headerClass">
    <div class="header-c grid-contain">
      <div class="nav-w">
        <div class="logo-w" @click="onLogoClick"><img src="@/assets/image/logo.png" alt="" /></div>
        <el-tabs ref="tabsMenu" id="tabsMenuPane" v-model="indexCheckTitle" @tab-click="tabClick">
          <el-tab-pane v-for="(item, i) in navList" :key="i" :label="item.title">
            <!-- 左侧菜单二级 -->
            <el-tabs id="tabsMenuPaneChild" style="height: 73px;" class="menu-contain-left" tab-position="top" v-model="indexCheckTitleChild" ref="tabsMenuChild" @tab-click="tabChildClick">
              <el-tab-pane v-for="(menuSecond, x) in item.menu" :key="x" :label="menuSecond.name" :name="menuSecond.url"></el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { myRequest } from "@/request/index";
import { getElement } from "@/utils/util";
import {} from "@/request/api/base";
import {} from "@/assets/js/index";

export default {
  props: {},
  created() {},
  components: {},

  computed: {},

  mounted() {
    this.$nextTick(() => {
        this.$refs.tabsMenu.$refs.nav.$nextTick(() => {
          // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
          let target = document.getElementById('tabsMenuPane').firstChild.firstChild.firstChild.firstChild.getElementsByClassName("el-tabs__item is-top");
          let targetChild = document.getElementById('tabsMenuPane').lastChild
          console.log('targetChild', targetChild)
          let that = this;
          for (let i = 0; i < target.length; i++) {
            target[i].addEventListener("mouseover", () => {
              console.log('进入',targetChild)
              //切换左侧默认选项为第一个
              targetChild.addEventListener("mouseleave", () => {
                console.log('移除1',targetChild)
                targetChild.style.display = 'none'
              })
              that.$refs.tabsMenu.handleTabClick(1, String(i));
            });
            target[i].addEventListener("mouseenter", () => {
              console.log('移除2',targetChild)
              targetChild.style.display = 'block'
            })
          }
        });
    });
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
              name: "护理",
              id: "护理",
              url: "medicalservices?id=护理",
            },
            {
              name: "陪护",
              id: "陪护",
              url: "medicalservices?id=陪护",
            },
            {
              name: "长护险",
              id: "长护险",
              url: "medicalservices?id=长护险",
            },
          ],
        },
        {
          title: "智能穿戴产品",
          layoutType: "picture",
          name: "eleproducts",
          menu: [
            {
              name: "手表",
              img: require("@/assets/image/e-n-1.png"),
              id: "手表",
              url: "eleproducts?id=手表",
            },
            {
              name: "手环",
              img: require("@/assets/image/e-n-2.png"),
              id: "手环",
              url: "eleproducts?id=手环",
            },
          ],
        },
        {
          title: "家庭医疗产品",
          layoutType: "picture",
          name: "familyproducts",
          menu: [
            {
              name: "体脂秤",
              img: require("@/assets/image/nav-f-1.png"),
              id: "体脂秤",
              url: "familyproducts?id=体脂秤",
            },
            {
              name: "血压仪",
              img: require("@/assets/image/nav-f-2.png"),
              id: "血压仪",
              url: "familyproducts?id=血压仪",
            },
          ],
        },
        {
          title: "智慧养老方案",
          layoutType: "normal",
          name: "commandcenter",
          menu: [
            {
              name: "全国指挥中心",
              id: "全国指挥中心",
              url: "commandcenter?id=全国指挥中心",
            },
            {
              name: "社区指挥中心",
              id: "社区指挥中心",
              url: "commandcenter?id=社区指挥中心",
            },
            {
              name: "养老院指挥中心",
              id: "养老院指挥中心",
              url: "commandcenter?id=养老院指挥中心",
            },
          ],
        },
        {
          title: "运营平台",
          layoutType: "picture",
          name: "operating",
          menu: [
            {
              name: "客户端",
              img: require("@/assets/image/ewm01.png"),
              id: "客户端",
              url: "operating?id=客户端",
            },
            {
              name: "医护端",
              img: require("@/assets/image/ewm02.png"),
              id: "医护端",
              url: "operating?id=医护端",
            },
          ],
        },
        {
          title: "|",
          layoutType: "none",
          menu: [],
          name: "",
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
      indexCheckIndex: 0, // 二级菜单选中
    };
  },
  methods: {
    // 选中tab
    tabClick(tab, event) {
      this.navList.forEach((item,index) => {
        if (tab.label == item.title) {
          this.indexCheckIndex = 0
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
      this.indexCheckIndex = tab.paneName
      this.$router.push({
        path: "/" + tab.paneName,
      });
    },
    //logo click
    onLogoClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" >
.header-w {
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100vw;
  .header-c {
    position: relative;
    /*display: flex;*/
    /*justify-content: space-evenly;*/
    /*align-items: center;*/
    z-index: 99;
    height: 73px;
    line-height: 73px;
    background: #ffffff;
  }
  .logo-w {
    width: 110px;
    min-width: 110px;
    cursor: pointer;
    position: absolute;
    left: 300px;
  }
}

.nav-w {
  display: flex;
  align-items: center;
  position: relative;
  .el-tabs {
    margin-bottom: 1px;
    position: relative;
    left: 600px;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__nav-scroll {
    padding: 0 12px;
  }
  .el-tabs__nav-wrap::after {
    background-color: #ffffff;
  }
  .el-tabs__active-bar {
    height: 4px;
    border-radius: 2px;
  }
  .el-tabs__item {
    font-size: 16px;
    padding-bottom: 45px;
    color: #333333;
    font-family: Microsoft YaHei;
  }
  .el-tabs__item.is-active {
    font-weight: bold;
  }
  .el-tabs__item.is-active {
    font-size: 16px;
    color: #30C159;
  }
  .el-tabs__active-bar {
    background-color: #30C159;
  }
  .el-tabs__content {
    position: absolute;
    top: 73px;
    z-index: 9999;
    background: #ffffff;
    width: 100vw;
    left: -600px;
  }
  .el-tabs__item:hover {
    color: #30C159;
  }
}
.tabs-c {
  width: 100%;
  height: 74px;
  background: #FFFFFF;
  text-align: center;
  .tabs-c-t {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    margin-right: 38px;
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
  box-shadow: 0px 0px 18px 0px rgba(125, 125, 125, 0.28);
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
