<template>
  <div class="ReleaseImgEdit">
    <i slot="left" @click="back" class="iconfont icon-danchuangguanbi"></i>
    <div class="img-box">
      <x-img class="select-img" default-src="src/assets/img/test/img.png" alt></x-img>
      <div class="img-list">
        <flexbox>
          <flexbox-item :span="2.4" v-for="(src,index) in imgList.list" :key="index">
            <div class="img-item-box">
              <img :src="src" alt>
              <i class="iconfont icon-danchuangguanbi"></i>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="edit-btn-box">
      <div class="go-take-photo">点击继续拍照</div>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <i class="iconfont icon-lvjing"></i>
            滤镜
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <i class="iconfont icon-xiangji"></i>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <i class="iconfont icon-xiayibu"></i>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
      imgList: {
        index: 0,
        list: [
          "src/assets/img/test/img.png",
          "src/assets/img/test/img.png",
          "src/assets/img/test/img.png",
          "src/assets/img/test/img.png",
          "src/assets/img/test/img.png",
          "src/assets/img/test/img.png"
        ]
      }
    };
  },
  created: function() {},
  methods: {
    back() {
      this.$router.back();
    }
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    XImg
  }
};
</script>

<style lang="less">
.ReleaseImgEdit {
  .icon-danchuangguanbi {
    position: fixed;
    top: calc(10 *2 / 7.5 * 1vw);
    left: calc(10 *2 / 7.5 * 1vw);
    z-index: 1000;
  }
  .img-box {
    height: 70vh;
    position: relative;
    .select-img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  .edit-btn-box {
    height: 30vh;
  }
  .img-list {
    width: 100%;
    padding-top: calc(13 *2 / 7.5 * 1vw);
    padding-left: calc(13 *2 / 7.5 * 1vw);
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    overflow: scroll;
    img {
      width: calc(60 *2 / 7.5 * 1vw);
      height: calc(60 *2 / 7.5 * 1vw);
    }
    .vux-flexbox-item {
      width: max-content;
      margin-left: 0 !important;
    }
    .img-item-box {
      width: max-content;
      height: max-content;
      position: relative;
    }
    .icon-danchuangguanbi {
      width: calc(27 *2 / 7.5 * 1vw);
      height: calc(27 *2 / 7.5 * 1vw);
      background-color: rgb(252, 97, 66);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: calc(12 *2 / 7.5 * 1vw);
      transform: scale(0.6);
      position: absolute;
      top: -calc(13 *2 / 7.5 * 1vw);
      left: -calc(13 *2 / 7.5 * 1vw);
    }
  }
  .flex-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(13 *2 / 7.5 * 1vw);
    color: rgb(51,51,51);
  }
  .go-take-photo {
    text-align: center;
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(185,185,185);
    padding: calc(20 *2 / 7.5 * 1vw) 0;
  }
  .icon-lvjing {
    font-size: calc(23 *2 / 7.5 * 1vw);
  }
  .icon-xiangji {
    font-size: calc(23 *2 / 7.5 * 1vw);
    color: rgb(185,185,185) !important;
    width: calc(76 *2 / 7.5 * 1vw);
    height: calc(75 *2 / 7.5 * 1vw);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: calc(5 *2 / 7.5 * 1vw) solid rgb(252,97,66);
  }
  .icon-xiayibu {
    width: calc(49 *2 / 7.5 * 1vw);
    height: calc(49 *2 / 7.5 * 1vw);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: calc(2 *2 / 7.5 * 1vw) solid rgb(51,51,51);
  }
}
</style>
