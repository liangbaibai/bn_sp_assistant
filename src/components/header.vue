<template>
  <div :class="'header-w '+ $route.meta.headerClass">
    <div class="header-c grid-contain">
      <div class="logo-w" @click="onLogoClick"><img :src="logo" alt="" /></div>
      <div class="nav-w">
        <el-dropdown
          v-for="(item, i) in navList"
          :key="i"
          :hide-on-click="false"
          trigger="hover"
          :show-timeout="100"
          :hide-timeout="100"
          @click.native="onDropClick(item)"
        >
          <span>
            {{ item.title }}
          </span>
          <el-dropdown-menu slot="dropdown" style="margin: 20px 0 0 0">
            <!-- 正常条形布局 -->
            <div class="l-normal-w" v-if="item.layoutType === 'normal'">
              <el-dropdown-item
                v-for="(menuI, i) in item.menu"
                :key="i"
                @click.native="onMenuItemClick(item, menuI)"
              >
                {{ menuI.name }}
              </el-dropdown-item>
            </div>
            <!-- 图片形布局 -->
            <div class="l-picture-w" v-if="item.layoutType === 'picture'">
              <el-dropdown-item
                v-for="(menuI, i) in item.menu"
                :key="i"
                @click.native="onMenuItemClick(item, menuI)"
              >
                <div class="picture-i">
                  <img :src="menuI.img" alt="" />
                  <span class="name">{{ menuI.name }}</span>
                </div>
              </el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
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

  mounted() {},

  data() {
    return {
      logo: "",

      navList: [
        {
          title: "医养服务",
          layoutType: "normal",
          name: "medicalservices",
          menu: [
            {
              name: "护理",
              id: "护理",
            },
            {
              name: "陪护",
              id: "陪护",
            },
            {
              name: "长护险",
              id: "长护险",
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
            },
            {
              name: "手环",
              img: require("@/assets/image/e-n-2.png"),
              id: "手环",
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
            },
            {
              name: "血压仪",
              img: require("@/assets/image/nav-f-2.png"),
              id: "血压仪",
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
            },
            {
              name: "社区指挥中心",
              id: "社区指挥中心",
            },
            {
              name: "养老院指挥中心",
              id: "养老院指挥中心",
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
            },
            {
              name: "医护端",
              img: require("@/assets/image/ewm02.png"),
              id: "医护端",
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
            },
            {
              name: "AI人工智能",
              id: "AI人工智能",
            },
            {
              name: "专利",
              id: "专利",
            },
            {
              name: "软著",
              id: "软著",
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
            },
            {
              name: "健康资讯",
              id: "健康资讯",
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
            },
            {
              name: "百年文化",
              id: "百年文化",
            },
            {
              name: "荣誉证书",
              id: "荣誉证书",
            },
            {
              name: "合作伙伴",
              id: "合作伙伴",
            },
            {
              name: "公司活动",
              id: "公司活动",
            },
          ],
        },
      ],
      navIndex: null,
    };
  },

  methods: {
    //nav项 click
    onDropClick(item) {
      this.$router.push({
        path: "/" + item.name,
      });
    },

    //菜单项 click
    onMenuItemClick(navItem, menuItem) {
      this.$router.push({
        path: "/" + navItem.name,
        query: {
          id: menuItem.id,
        },
      });
    },
    //logo click
    onLogoClick() {
      this.$router.push("/");
    },
  },

  updated() {
    this.logo = require("@/assets/image/" +
      (this.$route.meta.headerLogo || "logo.png"));
  },
};
</script>

<style lang="scss" >
.header-w {
  
  .header-c{
position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 26px 0;
  }
  .logo-w {
    width: 142px;
    cursor: pointer;
  }
}

.nav-w {
  display: flex;
  align-items: center;
  font-size: 14px;
  & > div {
    margin: 12px;
    box-sizing: border-box;
    cursor: pointer;
    & > span {
      padding: 0 0 10px 0;
      &:hover {
        border-bottom: 2px solid #23ac38;
        box-sizing: border-box;
        color: #23ac38;
      }
    }
  }
  .el-dropdown {
    color: #333;
    font-size: 14px;
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
