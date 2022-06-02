<template>
  <div class="video-w" >
    <video
        ref="videoRef"
        :src="src"
        controls
        @play="videoIsPlay = true;"
        @pause="videoIsPlay = false;"
        @ended="videoIsPlay = false;"
        style="width: 100%">
    </video>
    <div class="play" v-show="!videoIsPlay" @click="changeVideoStatus()"></div>
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

  },

  data() {
    return {
      videoIsPlay: false,
    };
  },

  methods: {
    changeVideoStatus() {
      const video = this.$refs.videoRef;
      if(video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
  },
};
</script>

<style lang="scss" >
  @function torem($px){//$px为需要转换的字号
    @return $px / 30px * 1rem; //100px为根字体大小
  }
.video-w {
  position: relative;
  width: auto;
  z-index: 1;
  .play {
    width: torem(100px);
    height: torem(100px);
    -webkit-box-shadow: 0 0 torem(5px) #ccc;
    box-shadow: 0 0 torem(5px) #ccc;
    border-radius: 50%;
    position: relative;
    z-index: 5;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .play:hover {
    box-shadow: 0 0 torem(30px) #ccc;
  }

  .play::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(20% 0, 100% 50%, 20% 100%);
    background: #5c5c5c;
    transform: scale(0.4);
  }
}
</style>
