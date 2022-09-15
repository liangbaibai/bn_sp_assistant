<template>
  <div class="footer-w">
    <div class="footer-c grid-contain">
      <div class="footer-main ">
        <div class="left">
          <div class="item-w">
            <div class="item-title">联系我们</div>
            <div class="item-list">
              <div class="item-i">联系热线：（020）8362 0723</div>
              <div class="item-i">公司邮箱：954437313@qq.com</div>
              <div class="item-i">公司传真:020-400-8998</div>
            </div>
          </div>

          <div class="item-w attention">
            <div class="item-title">关注我们</div>
            <div class="item-list">
              <div class="item-i">
                <img src="@/assets/image/wechat.png" alt="" />
              </div>
              <div class="item-i">
                <img src="@/assets/image/weibo.png" alt="" />
              </div>
              <div class="item-i">
                <img src="@/assets/image/aiqiyi.png" alt="" />
              </div>
              <div class="item-i">
                <img src="@/assets/image/toutiao.png" alt="" />
              </div>
              <div class="item-i">
                <img src="@/assets/image/tengxun.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item-w">
            <div class="item-title">医养服务</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('medicalservices', '护理')"
              >
                护理
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('medicalservices', '陪护')"
              >
                陪护
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('medicalservices', '长护险')"
              >
                长护险
              </div>
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">产品生态</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('eleproducts/ylWatch')"
              >
                手表
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('eleproducts/lxWatch')"
              >
                手环
              </div>
              <!-- <div class="item-i">走失定位器</div> -->
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">家庭医疗产品</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('eleproducts/weighingScale')"
              >
                体脂秤
              </div>
              <!-- <div class="item-i">防摔跤床垫</div> -->
              <div
                class="item-i"
                @click="onMenuItemClick('eleproducts/bloodPressure')"
              >
                血压仪
              </div>
              <!-- <div class="item-i">血糖仪</div> -->
              <!-- <div class="item-i">智能枕</div> -->
              <!-- <div class="item-i">智能拖鞋</div> -->
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">智慧养老方案</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('commandcenter')"
              >
                血压健康综合管理解决方案
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('homeCareSolutions')"
              >
                长者居家监护解决方案
              </div>
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">百年技术</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('bntech', '硬件与软件')"
              >
                硬件与软件
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('bntech', 'AI人工智能')"
              >
                AI人工智能
              </div>
              <div class="item-i" @click="onMenuItemClick('bntech', '专利')">
                专利
              </div>
              <div class="item-i" @click="onMenuItemClick('bntech', '软著')">
                软著
              </div>
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">企业动态</div>
            <div class="item-list">
              <div class="item-i" @click="onMenuItemClick('new', '企业资讯')">
                企业资讯
              </div>
              <div class="item-i" @click="onMenuItemClick('new', '健康资讯')">
                健康资讯
              </div>
            </div>
          </div>
          <div class="item-w">
            <div class="item-title">走进百年</div>
            <div class="item-list">
              <div
                class="item-i"
                @click="onMenuItemClick('walkbn', '百年文化')"
              >
                百年文化
              </div>
              <div
                class="item-i"
                @click="onMenuItemClick('walkbn', '荣誉证书')"
              >
                荣誉证书
              </div>
              <!--<div
                class="item-i"
                @click="onMenuItemClick('walkbn', '合作伙伴')"
              >
                合作伙伴
              </div>-->
              <div
                class="item-i"
                @click="onMenuItemClick('walkbn', '公司活动')"
              >
                公司活动
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2020.百年医疗 保留所有权利。</p>
        <p>粤ICP备20041036号</p>
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

  mounted() {},

  data() {
    return {};
  },

  methods: {
    onMenuItemClick(name, id) {
      this.$router.push({
        path: "/" + name,
        query: {
          id: id,
        },
      });
      this.$store.commit('tabMenu/setMenuIndex', "/" + name)
      // sessionStorage.setItem('routeName', name)
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" >
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.footer-w {
  background-color: #1e1e1e;
  
}
.footer-c{
//  display: flex;
//   flex-direction: column;
//   justify-content: space-between;
  padding: 2% 0;
  color: #fff;
}

.footer-main {
  display: flex;
  justify-content: center;

  .right {
    display: flex;
    margin-left: torem(97px);
    .item-w {
      margin: 0 torem(10px);
      white-space: nowrap;
      .item-i {
        cursor: pointer;
      }
    }
  }
}
.item-w {
  display: flex;
  flex-direction: column;
  .item-title {
    margin: 0 0 torem(20px) 0;
    font-size: torem(16px);
  }
  .item-list {
    font-size: torem(12px);
    color: #ccc;
    .item-i {
      margin: 0 0 torem(10px) 0;
    }
  }
}
.copyright {
  margin: 5% 0 0 0;
  text-align: center;
  font-size: torem(13px);
  color: #999;
  & > p {
    line-height: torem(26px);
  }
}

.attention {
  margin: torem(20px) 0 0 0;
  .item-list {
    display: flex;
    .item-i {
      margin: 0 torem(10px) 0 0;
    }
  }
}
</style>
