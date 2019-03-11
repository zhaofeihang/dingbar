<template>
  <div class="ReportOpinion">
    <x-header class="x-header" :left-options="{backText: ''}">意见反馈</x-header>
    <div class="content-box">
      <div class="edit-box">
        <x-textarea :height="185" v-model="editValue" placeholder="写下您的意见或建议，我们将用心聆听，做得更好！"></x-textarea>
        <grid class="img-list" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item class="img-item" v-for="(img,index) in imgList" :key="index">
            <x-img class="add-img" :default-src="img.src"></x-img>
          </grid-item>
        </grid>
      </div>
      <div class="commit">
        <x-button :class="{active:editValue}" class="commit-btn">提交反馈</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, XTextarea, XButton, XImg, Grid, GridItem } from "vux";

export default {
  data() {
    return {
      imgList: [
        {
          src: "src/assets/img/icon/add-img.png",
        }
      ],
      editValue: "",
    };
  },
  components: {
    XHeader,
    XTextarea,
    XButton,
    XImg,
    Grid,
    GridItem
  },
  created: function() {},
  methods: {}
};
</script>

<style lang="less">
.ReportOpinion {
  .x-header {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .edit-box {
    border-radius: calc(10 *2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    padding: 5vw;
    box-sizing: border-box;
    margin: calc(15 *2 / 7.5 * 1vw) 0 !important;
  }
  .vux-x-textarea {
    padding: 0;
  }
  .add-img {
    display: block;
    width: calc(75 *2 / 7.5 * 1vw);
    height: calc(75 *2 / 7.5 * 1vw);
  }
  .img-item {
    padding: 0;
    margin-top: calc(20 *2 / 7.5 * 1vw);
  }
  .img-list::before,.img-item::after {
    display: none;
  }
  .commit-btn {
    background-color: rgb(196, 196, 196);
    color: #fff;
  }
  .active {
    background-color: rgb(252, 97, 66);
  }
}
</style>
