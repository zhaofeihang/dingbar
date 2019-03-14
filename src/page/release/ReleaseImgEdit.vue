<template>
  <div class="ReleaseImgEdit">
    <i slot="left" @click="back" class="iconfont icon-danchuangguanbi back"></i>
    <div class="img-box">
      <x-img class="select-img" :default-src="imgList.currentImg" alt></x-img>
      <div class="img-list">
        <flexbox>
          <flexbox-item :span="2.4" v-for="(src,index) in imgList.list" :key="index">
            <div class="img-item-box">
              <img @click="selectImg(index)" :class="imgList.index == index ? 'selectImg':''" :src="src" alt>
              <i @click="deleteImg(index)" class="iconfont icon-danchuangguanbi"></i>
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
            <i @click="takePhoto" class="iconfont icon-xiangji"></i>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <i @click="next" class="iconfont icon-xiayibu"></i>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg, Flexbox, FlexboxItem } from "vux";
import { openAlbum, takePicture } from "../../../static/cordovaplugin.js";

export default {
  data() {
    return {
      imgList: {
        index: 0,
        currentImg: '',
        list: [
          'static/img/img.png',
          'static/img/img.png',
          'static/img/img.png',
          'static/img/img.png',
          'static/img/img.png'
        ]
      }
    };
  },
  created: function() {
    // let params = this.$route.params;
    // if(params) {
    //   this.imgList.list = params.photos;
    //   this.imgList.currentImg = this.imgList.list[0];
    // }
  },
  methods: {
    back() {
      this.$router.back();
    },
    //切换图片
    selectImg(index) {
      this.imgList.index = index;
      this.imgList.currentImg = this.imgList.list[index];
    },
    //删除图片
    deleteImg(index) {
      this.imgList.list.splice(index,1);
      if(this.imgList.list.length<=0) {
        this.$router.back();
      }
      if(index == this.imgList.index) {
        this.imgList.currentImg = this.imgList.list[0];
        this.imgList.index = 0;
      }
    },
    //继续拍照
    async takePhoto() {
      if(this.imgList.list.length>=9) {
        this.$vux.alert.show({
          title: "提示",
          content: "单次发布最多9张"
        });
      }else {
        let photo = await takePicture();
        this.imgList.list.push(photo);
      }
    },
    //下一步
    next() {
      this.$router.push({
        path: '/page/release/Release',
        name: 'Release',
        params: {
          photos: this.imgList.list
        }
      });
      sessionStorage.setItem('photos', JSON.stringify(this.imgList.list));
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
  .icon-danchuangguanbi.back {
    color: #fff;
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
      object-fit: cover;
    }
    .selectImg {
      border: calc(4 *2 / 7.5 * 1vw) solid rgb(252, 97, 66);
      box-sizing: border-box;
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
      top: calc(-13 *2 / 7.5 * 1vw);
      left: calc(-13 *2 / 7.5 * 1vw);
      overflow: auto;
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
