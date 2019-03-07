<template>
  <div class="Release">
    <x-header class="x-header" :left-options="{backText: ''}">发布</x-header>
    <div class="img-list">
      <grid class="grid" :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item class="grid-item" v-for="(item, index) in imgList" :key="index">
          <img class="previewer-demo-img" :src="item.src">
        </grid-item>
      </grid>
      <x-textarea class="x-textarea" :height="30" v-model="desc" placeholder="说点什么"></x-textarea>
      <div class="commit-btn-box">
        <x-button class="commit-btn" :class="btnClass">下一步</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Grid, GridItem,XTextarea,XButton } from "vux";

export default {
  data() {
    return {
      desc: "",
      btnClass: "",
      imgList: [
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  components: {
    XHeader,
    Grid,
    GridItem,
    XTextarea,
    XButton
  },
  watch: {
    desc(desc) {
      if(desc) {
        this.btnClass = "active";
      }else {
        this.btnClass = "";
      }
    }
  },
};
</script>

<style lang="less">
.Release {
  .grid {
    padding: 6px 3px;
  }
  .grid-item {
    padding: 0 3px;
  }
  .weui-grids:before,.grid-item::after {
    display: none;
  }
  .previewer-demo-img {
    width: 23vw;
    height: 23vw;
    object-fit: cover;
  }
  .x-textarea {
    font-size: 13px;
  }
  .x-textarea::before {
    display: none;
  }
  .x-textarea::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
  }
  .commit-btn-box {
    padding: 0 15px;
    box-sizing: border-box;
    position: fixed;
    bottom: 15px;
    left: 0;
    right: 0;
    margin: auto;
    .commit-btn {
      background-color: rgb(196,196,196);
      color: #fff;
    }
    .commit-btn.active {
      background-color: rgb(252,97,66);
    }
  }
}
</style>
