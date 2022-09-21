<template>
  <div class="video-w" >
    <video
        ref="videoRef"
        :src="src"
        controls
        autoplay
        muted
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
    this.getVideoCover(this.src)
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
    chooseVideo(e) {
      let that = this
      let file = e;
      let blob = new Blob([file]), // 文件转化成二进制文件
        url = URL.createObjectURL(blob); //转化成url
      let firstFrame = null
      //创建video标签
      let videoElement = document.createElement("video");
      videoElement.src = url
      videoElement = this.$refs.videoRef
      this.$refs.videoRef.addEventListener("canplay", function() {
        let canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        console.log('截取视频第一帧：111', canvas.width,canvas.height)
        canvas.getContext("2d").drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        firstFrame = canvas.toDataURL("image/png") //第一帧图片url
        // document.getElementById("firstV").src = firstFrame
      })
    },
    getVideoCover(file) {
      const imgWidth=240,imgHeight=160;  // 定义生成图片的宽高，其他宽高需求可以自己改
      let blob = new Blob([file]) // 文件转化成二进制文件
      let fileUrl = URL.createObjectURL(blob);
      let videoElement = document.createElement("video");
      videoElement.src = fileUrl;
      videoElement = this.$refs.videoRef
      console.log('截取视频第一帧：111', videoElement)
      this.$refs.videoRef.addEventListener("loadedmetadata",()=>{
        console.log('截取视频第一帧：1', )
        let { videoWidth, videoHeight } = videoElement;  // 获取video的宽高
        console.log('截取视频第一帧：2', videoWidth, videoHeight)
        let x = 0, y = 0, width = 0, height = 0;
        // 计算缩小后图片的宽高以及canvas绘制的位置信息
        if (videoWidth / videoHeight >= 1.5) {
          width = imgWidth ;
          height = videoHeight;
          x = 0;
          y = (imgHeight- height) / 2;
        } else {
          height = imgHeight;
          width = videoWidth;
          y = 0;
          x = (imgWidth - width) / 2;
        }
        let canvas = document.createElement("canvas");
        canvas.width = videoWidth ;
        canvas.height = videoHeight;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, videoWidth , videoHeight);
        ctx.drawImage(videoElement, x, y, width, height);
        console.log('截取视频第一帧：3', canvas)
        let src = canvas.toDataURL("image/png"); // 完成base64图片的创建
        console.log('截取视频第一帧：4', src)
      })
    },
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
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
    width: torem(75px);
    height: torem(75px);
    -webkit-box-shadow: 0 0 torem(5px) #ccc;
    box-shadow: 0 0 torem(5px) #ccc;
    border-radius: 50%;
    position: relative;
    z-index: 5;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    position: absolute;
    top: 39%;
    left: 44.5%;
    background: rgba(255, 255, 255, 0.2);
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
