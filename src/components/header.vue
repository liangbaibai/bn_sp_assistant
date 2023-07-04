<template>
  <div :class="'header-w '+ $route.meta.headerClass" id="header-w">
    <div class="header-c grid-contain">
      <div class="nav-w">
        <div class="logo-w" @click="onLogoClick"><img src="@/assets/image/webLogo.png" alt="" /></div>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="item in navList" :key="item.id" @mouseover="showSubMenu(item)" @mouseleave="hideSubMenu(item)">
            <div class="topName">
              <span class="title" @click="tabClick(item)">{{ item.name }}</span>
              <div class="line1" :style="{display: navIndex == item.id ? 'block' : 'none'}"></div>
            </div>
            <div class="submenu" v-if="item.children">
              <ul :class="item.hasImage ? 'submenu-list hi' : 'submenu-list'">
                <li v-for="subItem in item.children" :key="subItem.id">
                  <div class="textInfo" @click="tabChildClick(item,subItem)">
                    <img v-if="subItem.hasImage" :src="subItem.image" class="imgs" alt="">
                    <span class="title" :style="{color: navChileIndex == subItem.id ? '#30C159' : '#333333'}">{{ subItem.name }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { navigationList, outsideRecord } from "@/request/api/base";

export default {
  props: {},
  data() {
    return {
      navList: [],
      navIndex: null,
      navChileIndex: null,
    };
  },
  created() {
    console.log('获取当前路由：', this.$route)
    this.getMenuList()
  },
  components: {},

  computed: {},

  mounted() {
  },

  methods: {
    // 记录访问
    setInterview(data) {
      const params = {
        id: data, // 菜单id
      }
      outsideRecord(params).then(res => {
        if (res.code == 0) {

        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 获取菜单列表
    getMenuList() {
      const params = {}
      navigationList(params).then(res => {
        console.log('获取菜单列表:', res)
        if (res.code == 0) {
          this.navList = JSON.parse(JSON.stringify(res.data))
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 选中tab
    tabClick(data) {
      this.navIndex = data.id
      this.navChileIndex = data.children && data.id != 9 ? data.children[0].id : null
      this.setInterview(data.id)
      this.$router.push({
        path: data.component,
      });
    },
    // 二级菜单点击
    tabChildClick(item,data) {
      console.log('二级菜单点击：', item,data)
      this.navIndex = item.id
      this.navChileIndex = data.id
      this.setInterview(data.id)
      this.$router.push({
        path: data.component,
      });
    },
    //logo click
    onLogoClick() {
      window.scrollTo(0, 0);
      this.$router.push("/");
    },
    // 鼠标移入
    showSubMenu(data){
      console.log('鼠标移入：',data);
    },
    // 鼠标移出
    hideSubMenu(data){
      console.log('鼠标移出',data);
    },
  },
  watch: {
    $route: {
      deep: true,
      handler(newVal, oldVal) {
        // console.log('监听路由变化：header', newVal.path,this.navList)
        this.navList.forEach(item => {
          let path = newVal.path + '?id=' + newVal.query.id
          console.log('监听路由变化：header', path,item)
          if (path == item.component) {
            this.navIndex = item.id
            this.navChileIndex = item.children[0].id
          }
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
  .navbar {
    background-color: #f0f0f0;
    padding: 0 20px;
  }

  .navbar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .navbar-item {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    .topName {
      position: relative;
    }
    .title {
      font-size: torem(16px);
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    .title:hover {
      color: #30C159;
    }
    .line {
      width: 100%;
      height: torem(4px);
      background: #30C159;
      border-radius: torem(2px);
      position: absolute;
      bottom: torem(5px);
      display: none;
    }
    .line1 {
      width: 100%;
      height: torem(4px);
      background: #30C159;
      border-radius: torem(2px);
      position: absolute;
      bottom: torem(5px);
      display: none;
    }
  }
  .navbar-item:hover .line1 {
    display: block;
  }
  .navbar-item:hover .submenu {
    display: block;
    width: 100%;
  }

  .submenu {
    display: none;
    position: absolute;
    top: torem(73px);
    left: 0;
    padding: 0;
    background-color: #fff;
    //box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);
  }

  .submenu-list {
    list-style-type: none;
    background: #FFFFFF;
    margin: 0;
    margin-left: torem(842px);
    display: flex;
    align-items: center;
    line-height: torem(20px);
    padding: 28px;
    &.hi {
      padding: 15px;
    }
    .textInfo {
      margin-right: 30px;
    }
    li:hover {
      .title {
        color: #30C159;
      }
    }
    li {
      margin-right: torem(38px);
      text-align: center;
    }
    .imgs {
    }
  }

</style>
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
    width: torem(149px);
    min-width: torem(149px);
    height: auto;
    cursor: pointer;
    margin-left: torem(359px);
    margin-right: 334px;
  }
}

.nav-w {
  display: flex;
  align-items: center;
  position: relative;
  .el-tabs {
    margin-bottom: torem(1px);
    position: relative;
    left: torem(825px);
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
    left: torem(-825px);
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
