<template>
  <div class="TakePhoto">
    <x-header class="x-header" :left-options="{showBack: false}">随手拍</x-header>
    <div class="tab-box">
      <div class="tab-title">热门话题</div>
      <div class="tab-list">
        <span
          v-for="(tabItem,index) in tab.tabList"
          :key="index"
          @click="seleted(index)"
          :class="tab.index == index?'active':''"
        >{{tabItem.text}}</span>
      </div>
    </div>
    <div class="content-box">
      <swiper class="swiper" loop :list="baseList"></swiper>
      <div
        class="design-list"
        v-for="(designItem,designItemIndex) in designList"
        :key="designItemIndex"
        @click="toDetail(designItemIndex)"
      >
        <flexbox class="flexbox">
          <flexbox-item :span="1.7">
            <img class="avatar" :src="designItem.avatar" alt>
          </flexbox-item>
          <flexbox-item :span="7.3">
            <div>
              <div class="username">
                {{designItem.username}}
                <i
                  v-if="designItem.sex == 'girl'"
                  class="iconfont icon-nvsheng"
                ></i>
                <i v-else class="iconfont icon-nansheng"></i>
              </div>
              <div class="direc">{{designItem.direc}}</div>
            </div>
          </flexbox-item>
          <flexbox-item class="x-button-box" :span="3">
            <x-button
              v-if="designItem.follow"
              class="x-button"
              mini
              :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
            >已关注</x-button>
            <x-button v-else class="x-button no-follow" mini>关注</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3">有念念不忘的美好，有爱而不得的疼痛。</flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3" class="design-item" :class="designItem.class">
            <img
              class="design-item-img"
              v-for="(designImg,designImgIndex) in designItem.designImgList"
              :key="designImgIndex"
              :src="designImg.img"
              @click.stop="show(designImgIndex,designItem.designImgList)"
            >
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3">
            <div class="design-item-menus">
              <span class="design-item-praise">
                <i class="iconfont icon-dianzan"></i>
                {{designItem.praise}}
              </span>
              <span class="design-item-comment">
                <i class="iconfont icon-pinglun"></i>
                {{designItem.comment}}
              </span>
              <span class="design-item-menu">
                <i class="iconfont icon-gengduo"></i>
              </span>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="preview" v-show="previewList.list.length">
      <div class="preview-swiper-box">
        <swiper
          dots-class="test"
          dots-position="center"
          loop
          height="504px"
          class="previewSwiper"
          :list="previewList.list"
        ></swiper>
        <span @click="imgCollect" class="preview-icon shoucang">
          <i class="iconfont icon-shoucang collected"></i>
        </span>
        <span class="preview-icon xiazai">
          <i class="iconfont icon-xiazai"></i>
        </span>
        <span class="preview-icon shang">
          <i class="iconfont icon-shang"></i>
        </span>
        <span class="preview-icon fenxiang">
          <i class="iconfont icon-fenxiang"></i>
        </span>
        <span @click="previewClose" class="preview-icon guanbi">
          <i class="iconfont icon-guanbi"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Swiper, XButton, Flexbox, FlexboxItem, XImg } from "vux";

export default {
  data() {
    return {
      previewList: {
        list: [],
        index: 0
      },
      tab: {
        tabList: [
          {
            text: "全部"
          },
          {
            text: "#缘分天空"
          },
          {
            text: "#天下美食"
          },
          {
            text: "#萌宠萌宝"
          },
          {
            text: "#缘分天空"
          },
          {
            text: "#天下美食"
          },
          {
            text: '#萌宠萌宝"'
          }
        ],
        index: 0
      },
      baseList: [
        {
          url: "javascript:",
          img: "src/assets/img/test/img.png",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "src/assets/img/test/img.png",
          title: "送你一辆车"
        },
        {
          url: "javascript:",
          img: "src/assets/img/test/img.png", // 404
          title: "送你一次旅行",
          fallbackImg: "src/assets/img/test/img.png"
        }
      ],
      designList: [
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "one-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png",
              state: false
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "2019-02-21 11:10:52",
          follow: false,
          class: "two-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "three-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "four-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "five-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "fix-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "seven-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "eight-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          class: "nine-img",
          praise: 70152,
          comment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ]
        }
      ]
    };
  },
  created: function() {},
  methods: {
    seleted(index) {
      this.tab.index = index;
    },
    show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    previewClose() {
      this.previewList.list = [];
    },
    imgCollect() {},
    toDetail(designItemIndex) {
      this.$router.push({path: '/page/take_photo/DesignDetail',params:{ id:'1'}});
    }
  },
  components: {
    XHeader,
    Swiper,
    XButton,
    Flexbox,
    FlexboxItem,
    XImg
  }
};
</script>

<style lang="less">
.TakePhoto {
  .x-header {
    background-color: rgb(249, 249, 249);
  }
  .content-box {
    padding: 60px 5vw;
    padding-top: 0;
  }
  .tab-box {
    display: flex;
    align-items: center;
    width: 95vw;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border-bottom: 1px solid #eee;
    margin-left: 5vw;
    .tab-list {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      overflow: scroll;
      position: relative;
    }
    span,
    .tab-title {
      display: inline-block;
      width: max-content;
      white-space: nowrap;
      height: 100%;
      margin: 0 10px;
    }
    span:first-child {
      margin-left: 20px;
    }
    .tab-title {
      font-size: 17px;
      font-weight: 550;
      margin: 0;
    }
    .active {
      color: rgb(252, 97, 66);
      border-bottom: 3px solid rgb(252, 97, 66);
    }
  }
  .swiper {
    border-radius: 10px;
    margin: 10px 0;
  }
  .design-list {
    border-bottom: 1px solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 12px;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: 40px;
    height: 40px;
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: 15px;
    color: rgb(255, 108, 152) !important;
    margin-left: -10px;
  }
  .icon-nansheng {
    color: rgb(75, 157, 255) !important;
  }
  .direc,
  .username {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: 15px;
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: 60px;
    height: 30px;
    padding: 0;
    margin: 0;
  }
  .no-follow {
    color: rgb(525, 97, 66);
    background-color: #fff;
  }
  .no-follow::after {
    border-color: rgb(525, 97, 66);
  }
  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }

  .design-item-box {
    box-sizing: border-box;
    font-size: 16px;
  }
  //设计师上传的图片列表
  .design-item {
    margin: 10px 0;
    width: 100%;
  }
  .one-img {
    height: 190px;
    .design-item-img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .two-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 190px;
    .design-item-img {
      display: block;
      border-radius: 5px;
      object-fit: cover;
      height: 100%;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
    }
    .design-item-img:nth-child(2) {
      width: 93px;
    }
  }
  .three-img {
    height: 190px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      width: 190px;
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      height: 93px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      height: 93px;
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(3) {
      width: 93px;
      height: 190px;
      right: 0;
      top: 0;
    }
  }
  .four-img {
    height: 190px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
      height: 93px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      width: 93px;
      height: 93px;
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      width: 93px;
      height: 93px;
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(4) {
      width: 190px;
      height: 93px;
      right: 0;
      bottom: 0;
    }
  }
  .five-img {
    height: 190px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
      width: 93px;
      height: 93px;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(4) {
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      right: 0;
      bottom: 0;
    }
  }
  .fix-img {
    height: 289px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
      width: 93px;
      height: 93px;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    .design-item-img:nth-child(4) {
      width: 190px;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      width: 190px;
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(6) {
      right: 0;
      bottom: 0;
    }
  }
  .seven-img {
    height: 289px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
      width: 93px;
      height: 93px;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    .design-item-img:nth-child(4) {
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    .design-item-img:nth-child(6) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(7) {
      width: 190px;
      right: 0;
      bottom: 0;
    }
  }
  .eight-img {
    height: 289px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
      width: 93px;
      height: 93px;
    }
    .design-item-img:nth-child(1) {
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
    }
    .design-item-img:nth-child(3) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(4) {
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      width: 190px;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    .design-item-img:nth-child(6) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(7) {
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .design-item-img:nth-child(8) {
      right: 0;
      bottom: 0;
    }
  }
  .nine-img {
    height: 387px;
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: 5px;
      object-fit: cover;
      position: absolute;
      width: 93px;
      height: 93px;
    }
    .design-item-img:nth-child(1) {
      width: 190px;
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      top: 98px;
    }
    .design-item-img:nth-child(4) {
      height: 190px;
      top: 98px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      top: 98px;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(6) {
      left: 0;
      bottom: 98px;
    }
    .design-item-img:nth-child(7) {
      right: 0;
      bottom: 98px;
      margin: auto;
    }
    .design-item-img:nth-child(8) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(9) {
      width: 190px;
      right: 0;
      bottom: 0;
    }
  }
  .design-item-menus,
  .design-item-menus .iconfont::before {
    color: rgb(185, 185, 185);
  }
  .design-item-menus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    .design-item-comment {
      margin-right: 55px;
    }
  }
  //预览图片
  .preview {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .preview-icon {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .iconfont {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .guanbi {
      width: 29px;
      height: 29px;
      left: 0;
      right: 0;
      bottom: -49px;
      margin: auto;
      .icon-guanbi::before {
        font-size: 29px;
        color: #fff;
      }
    }
    .shoucang {
      width: 44px;
      height: 44px;
      background-color: #fff;
      top: 20px;
      right: 20px;
      .icon-shoucang::before {
        font-size: 18px;
        color: rgb(197, 197, 197);
      }
    }
    .collected::before {
      color: rgb(252, 97, 66) !important;
    }
    .xiazai {
      width: 44px;
      height: 44px;
      background-color: #fff;
      left: 40px;
      bottom: 30px;
      .icon-xiazai::before {
        font-size: 18px;
        color: rgb(252, 97, 66);
      }
    }
    .shang {
      width: 60px;
      height: 60px;
      background-color: #fff;
      left: 0;
      right: 0;
      bottom: 20px;
      margin: auto;
      .icon-shang {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: rgb(252, 97, 66);
      }
      .icon-shang::before {
        font-size: 16px;
        color: #fff;
      }
    }
    .fenxiang {
      width: 44px;
      height: 44px;
      background-color: #fff;
      right: 40px;
      bottom: 27px;
      .icon-fenxiang::before {
        font-size: 17px;
        color: rgb(252, 97, 66);
      }
    }
  }

  .preview-swiper-box {
    width: 90vw;
    height: 70vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .vux-indicator {
    bottom: 0 !important;
    a:first-child {
      margin-left: 0;
    }
  }
  .vux-icon-dot {
    background-color: rgb(153, 137, 134);
  }
  .vux-icon-dot.active {
    width: 15px !important;
    background-color: #fff !important;
  }
  .previewSwiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
</style>
