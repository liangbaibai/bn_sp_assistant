<template>
  <div class="video-w" >
    <video :src="src" ref="video"></video>
    <div
      class="video-poster"
      :style="{
        background: `url() 100% 100% / cover no-repeat`,
      }"
    ></div>
    
    <div class="video-mask"></div>
    <div class="play-btn" @click.stop="onPlayClick">
      <img src="@/assets/image/play.png" alt="" />
    </div>
  </div>
</template>

<script>
import { myRequest } from "@/request/index";
import { getElement } from "@/utils/util";
import { class_list } from "@/request/api/base";

export default {
  props: {
    src: String,
    posterSrc: {
      type: String,
    },
    top:{
      type:String,
      default:''
    }
  },
  created() {},

  computed: {},

  mounted() {
    this.videoDom = document.getElementsByTagName("video")[0];
  },

  data() {
    return {
      videoDom: null,
    };
  },

  methods: {
    //播放点击 click
    onPlayClick() {
      this.videoDom.play();
    },
  },
};
</script>

<style lang="scss" >
.video-w {
  position: relative;
  width: 100%;
  z-index: 1;

  .video-poster,
  .video-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-mask {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  & > video {
    display: block;
    position: relative;
    width: 100%;
  }
  .play-btn {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 8rem;
    height: 8rem;
    & > img {
      width: 100%;
    }
  }
}
</style>
