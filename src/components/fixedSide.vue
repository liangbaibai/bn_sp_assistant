<template>
  <div class="fixedSide">
    <div class="fixedSide-w" :style="{ right: !isWindowScroll ? '-4rem' : '' }">
      <div class="side-i" @click.stop="showPhoneView = true">
        <img src="@/assets/image/phone.png" alt="" />
      </div>
      <div class="side-i">
        <img src="@/assets/image/kefu.png" alt="" />
      </div>
      <div class="side-i" @click="scrollTop">
        <img src="@/assets/image/up.png" alt="" />
      </div>
    </div>

    <van-popup
      v-model="showPhoneView"
      position="bottom"
      :style="{ height: 'auto' }"
    >
      <div class="phone-p-w">
        <div class="phone-t-w">
          <div class="phone-num">（020）8362 0723</div>
          <a href="tel:（020）8362 0723" class="phone-btn"> 拨打电话 </a>
        </div>
        <div class="cancal-btn" @click.stop="showPhoneView = false">取消</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { myRequest } from "@/request/index";
export default {
  props: {},
  created() {},

  watch: {
    showPhoneView: function () {
      //当side无任何操作时，继续执行防抖函数
      this.debounce();
    },
  },

  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.debounce();
      },
      true
    );
  },

  data() {
    return {
      showPhoneView: false,

      isWindowScroll: false,
      timer: null, //窗口滚动定时器
    };
  },

  methods: {
    //滚动到顶部 click
    scrollTop() {
      window.scrollTo({
        behavior: "auto",
        left: 0,
        top: 0,
      });
    },

    //窗口防抖 event
    debounce() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.isWindowScroll = true;
      this.timer = setTimeout(() => {
        if (this.showPhoneView) return; //表示有任何side项的操作，直接返回
        this.isWindowScroll = false;
      }, 2500);
    },
  },
};
</script>

<style lang="scss" >
.fixedSide-w {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  transition: right 0.5s;
  .side-i {
    width: 4rem;
    margin: 0 0 0.5rem 0;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #ccc;
    & > img {
      width: 100%;
    }
  }
}

.fixedSide {
  .van-popup--bottom {
    width: 90%;
    right: 0;
    margin: 0 auto;
    background-color: transparent;
  }
}

.phone-p-w {
  text-align: center;
  & > div {
    font-size: 1.5rem;
    background-color: #fff;
  }
  .phone-t-w {
    padding: 1rem 0;
    border-radius: 1rem;
    & > div {
      padding: 0.8rem 0;
    }
  }
  .phone-num,
  .cancal-btn {
    color: #999;
  }
  .cancal-btn {
    padding: 1rem 0;

    border-radius: 1rem;
    margin: 0.5rem 0;
  }
}
</style>
