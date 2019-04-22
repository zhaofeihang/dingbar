<template>
  <div class="ReportOpinion">
    <x-header class="x-header" :left-options="{backText: ''}">意见反馈</x-header>
    <div class="content-box">
      <div class="edit-box">
        <x-textarea :height="185" v-model="editValue" placeholder="写下您的意见或建议，我们将用心聆听，做得更好！"></x-textarea>
        <grid class="img-list" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item class="img-item" v-for="(img,index) in imgList" :key="index">
            <x-img @click.native="addImg" class="add-img" :default-src="img.src"></x-img>
          </grid-item>
        </grid>
      </div>
      <div class="commit">
        <x-button @click.native="commit" :class="{active:editValue}" class="commit-btn">提交反馈</x-button>
      </div>
    </div>
    <popup class="popup" v-model="popupState">
      <div @click="takePhoto">拍摄</div>
      <div @click="selectAlbum">相册</div>
    </popup>
  </div>
</template>

<script>
import { XHeader, XTextarea, XButton, XImg, Grid, GridItem, Popup } from "vux";
import { openAlbum, takePicture } from "../../cordovaplugin";
import util from "../../util";

export default {
  data() {
    return {
      popupState: false,
      imgList: [
        {
          src: "static/img/icon/add-img.png"
        }
      ],
      editValue: "",
      imgs: ''
    };
  },
  components: {
    XHeader,
    XTextarea,
    XButton,
    XImg,
    Grid,
    GridItem,
    Popup
  },
  created: function() {},
  methods: {
    //拍照
    async takePhoto() {
      let photo = await takePicture();
      if (photo) {
        this.imgList.push({
          src: photo
        });
        let img = await util.convertImg(photo, 100, 100);
        this.imgs = this.imgs+'||'+img;
      }
      this.popupState = false;
    },
    //相册
    async selectAlbum() {
      let photo = await openAlbum(1);
      if (photo) {
        this.imgList.push({
          src: photo
        });
        let img = await util.convertImg(photo, 100, 100);
        this.imgs = this.imgs+'||'+img;
      }
      this.popupState = false;
    },
    //添加图片
    addImg() {
      if (this.imgList.length > 5) {
        this.$vux.alert.show({
          title: '提示',
          conbtent: '最多只能添加5张图片'
        });
        return false;
      }
      this.popupState = true;
    },
    //提交反馈
    async commit() {
      if(!this.editValue) {
        return false;
      }
      let data = await util.getData({
        url: `/materials/feedback`,
        method: 'post',
        param: {
          contents: this.editValue,
          updata: this.imgs.substring(2)
        }
      });
      this.$vux.toast.show({
        text: data,
        onHide: () => {
          this.$router.go(-1);
        }
      });
    }
  }
};
</script>

<style lang="less">
.ReportOpinion {
  .x-header {
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .edit-box {
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 * 2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    padding: 5vw;
    box-sizing: border-box;
    margin: calc(15 * 2 / 7.5 * 1vw) 0 !important;
  }
  .vux-x-textarea {
    padding: 0;
  }
  .add-img {
    display: block;
    width: calc(75 * 2 / 7.5 * 1vw);
    height: calc(75 * 2 / 7.5 * 1vw);
  }
  .img-item {
    padding: 0;
    margin-top: calc(20 * 2 / 7.5 * 1vw);
    object-fit: cover;
  }
  .img-list::before,
  .img-item::after {
    display: none;
  }
  .commit-btn {
    background-color: rgb(196, 196, 196);
    color: #fff;
  }
  .active {
    background-color: rgb(252, 97, 66);
  }
  //选择获取图片方式
  .popup {
    text-align: center;
    font-size: calc(15 * 2 / 7.5 * 1vw);
    background-color: rgba(0, 0, 0, 0);
    color: rgb(252, 97, 66);
    padding-bottom: calc(20 * 2 / 7.5 * 1vw);
    div {
      background-color: #fff;
      width: 90vw;
      height: calc(44 * 2 / 7.5 * 1vw);
      line-height: calc(44 * 2 / 7.5 * 1vw);
      margin: auto;
      margin-top: calc(10 * 2 / 7.5 * 1vw);
      border-radius: calc(5 * 2 / 7.5 * 1vw);
    }
  }
}
</style>
