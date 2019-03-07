<template>
  <div class="TakePhoto">
    <x-header class="x-header" :left-options="{showBack: false}">随手拍
      <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
        <badge class="message-badge" :text="messageBadge"></badge>
        <i class="iconfont icon-xiaoxi"></i>
      </router-link>
    </x-header>
    <div class="tab-box">
      <div class="tab-title">热门话题</div>
      <div class="tab-list">
        <span
          v-for="(tabItem,index) in tab.tabList"
          :key="index"
          @click="seleted(tabItem.topics_id)"
          :class="tab.id == tabItem.topics_id?'active':''"
        >{{tabItem.tits}}</span>
      </div>
    </div>
    <div class="content-box">
      <swiper class="swiper" loop :list="baseList"></swiper>
      <div
        class="design-list"
        v-for="(designItem,designItemIndex) in designList"
        :key="designItemIndex"
        @click="toDetail(designItem)"
      >
        <flexbox class="flexbox">
          <flexbox-item :span="1.7">
            <img class="avatar" :src="designItem.users_logos" alt>
          </flexbox-item>
          <flexbox-item :span="7.3">
            <div>
              <div class="username">
                {{designItem.nicknames}}
                <i
                  v-if="designItem.sex == 'girl'"
                  class="iconfont icon-nvsheng"
                ></i>
                <i v-else class="iconfont icon-nansheng"></i>
              </div>
              <div class="direc">{{designItem.dates}}</div>
            </div>
          </flexbox-item>
          <flexbox-item class="x-button-box" :span="3">
            <x-button
              v-if="designItem.followed"
              class="x-button"
              mini
              :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
            >已关注</x-button>
            <x-button v-else class="x-button no-follow" mini>关注</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3">{{designItem.descriptions}}</flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3" class="design-item" :class="designItem.class">
            <img
              class="design-item-img"
              v-for="(designImg,designImgIndex) in designItem.images"
              :key="designImgIndex"
              :src="designImg.thumbs"
              @click.stop="show(designImgIndex,designItem.previewList)"
            >
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item :span="1.7"></flexbox-item>
          <flexbox-item :span="10.3">
            <div class="design-item-menus">
              <span class="design-item-praise">
                <i class="iconfont icon-dianzan"></i>
                {{designItem.praisesnums}}
              </span>
              <span class="design-item-comment">
                <i class="iconfont icon-pinglun"></i>
                {{designItem.commentsnums}}
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
          v-model="previewList.index"
        ></swiper>
        <span @click="imgCollect" class="preview-icon shoucang">
          <i class="iconfont icon-shoucang collected"></i>
        </span>
        <span class="preview-icon xiazai">
          <i class="iconfont icon-xiazai"></i>
        </span>
        <span class="preview-icon shang" @click="togglePopup('reward')">
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
    <div>
      <popup
        v-model="popup.popupState"
        height="270px"
        :show-mask="false"
        style="background-color:#fff;border-radius:20px 20px 0 0;"
      >
        <div class="reward-box">
          <div class="reward-title-box">
            <span v-show="popup.type=='pay'" class="back-reward" @click="backSelectReward">返回</span>
            <span v-if="popup.type=='reward'">选择打赏金额</span>
            <span v-else>选择支付方式</span>
            <i @click="togglePopup('reward')" class="iconfont icon-danchuangguanbi"></i>
          </div>
          <div v-if="popup.type=='reward'" class="reward-content-box">
            <flexbox wrap="wrap" class="reward-content">
              <flexbox-item :span="4" v-for="(reward,index) in rewards.list" :key="index">
                <div class="reward-item" :class="{selected: index==rewards.seleted}">
                  <span @click="rewardSelected(index)">{{reward}}元</span>
                </div>
              </flexbox-item>
            </flexbox>
            <x-input
              v-model="confirmReward"
              class="reward-input"
              is-type="number"
              placeholder="输入打赏金额"
            >
              <span
                v-show="confirmReward"
                @click="toPay"
                style="font-size:12px;color:rgb(252,97,66);"
                slot="right"
              >确认</span>
            </x-input>
          </div>
          <div v-else class="select-pay">
            <div style="text-align:center;color:rgb(252,97,66);">{{confirmReward}}元</div>
            <card class="card">
              <div slot="content">
                <div v-for="(cell,index) in cellArr" :key="index" @click="selectPay(cell)">
                  <cell :title="cell.title">
                    <i slot="icon" class="iconfont" :class="cell.lefticonclass"></i>
                    <i slot="default" class="iconfont" :class="cell.righticonclass"></i>
                  </cell>
                </div>
              </div>
            </card>
            <x-button class="pay-commit">立即支付</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  Swiper,
  XButton,
  Flexbox,
  FlexboxItem,
  XImg,
  Popup,
  XInput,
  Card,
  Cell,
  Badge
} from "vux";
import util from "../util";

export default {
  data() {
    return {
      messageBadge: "80",
      cellArr: [
        {
          title: "微信",
          lefticonclass: "icon-weixin",
          righticonclass: "icon-xuanzhong"
        },
        {
          title: "支付宝",
          lefticonclass: "icon-zhifubao",
          righticonclass: "icon-weixuanzhong"
        }
      ],
      popup: {
        popupState: false,
        type: "reward"
      },
      previewList: {
        list: [],
        index: 0
      },
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      confirmReward: "",
      tab: {
        tabList: [],
        id: 0
      },
      baseList: [],
      designList: []
    };
  },
  created: function() {},
  mounted: async function() {
    this.$vux.loading.show({
      text: "Loading"
    });
    /*
     ** 话题列表
     */
    this.tab.tabList = await util.getData({
      url: "/materials/topicslists",
      method: "post"
    });
    this.tab.id = this.tab.tabList[0].topics_id;
    /*
     ** 轮播图
     */
    this.bannerList = await util.getData({
      url: "/materials/bannerslists",
      method: "post"
    });
    this.bannerList.forEach((item, index) => {
      item = {
        img: item.thumbs
      };
      this.baseList.push(item);
    });
    /*
     ** 随手拍列表
     */
    this.designList = await util.getData({
      url: `/materials/postslists?topics_id=${this.tab.id}&pages=1&rowsmax=10`,
      method: "get"
    });
    //处理随手拍列表数据
    this.designList.forEach((item, index) => {
      //提取预览图片集
      item.previewList = [];
      item.images.forEach(img => {
        item.previewList.push({
          img: img.previews
        });
      });
      //判断性别
      item.sex = item.gender == 1 ? "boy" : "girl";
      //根据图片数量布局
      switch (item.previewList.length) {
        case 1:
          item.class = "one-img";
          break;
        case 2:
          item.class = "two-img";
          break;
        case 3:
          item.class = "three-img";
          break;
        case 4:
          item.class = "four-img";
          break;
        case 5:
          item.class = "five-img";
          break;
        case 6:
          item.class = "fix-img";
          break;
        case 7:
          item.class = "seven-img";
          break;
        case 8:
          item.class = "eight-img";
          break;
        case 9:
          item.class = "nine-img";
          break;

        default:
          break;
      }
    });
    this.$vux.loading.hide();
  },
  methods: {
    //话题目录切换
    async seleted(id) {
      this.tab.id = id;
      this.$vux.loading.show({
        text: "Loading"
      });
      /*
       ** 随手拍列表
       */
      this.designList = await util.getData({
        url: `/materials/postslists?topics_id=${
          this.tab.id
        }&pages=1&rowsmax=10`,
        method: "get"
      });
      //处理随手拍列表数据
      this.designList.forEach((item, index) => {
        //提取预览图片集
        item.previewList = [];
        item.images.forEach(img => {
          item.previewList.push({
            img: img.previews
          });
        });
        //判断性别
        item.sex = item.gender == 1 ? "boy" : "girl";
        //根据图片数量布局
        switch (item.previewList.length) {
          case 1:
            item.class = "one-img";
            break;
          case 2:
            item.class = "two-img";
            break;
          case 3:
            item.class = "three-img";
            break;
          case 4:
            item.class = "four-img";
            break;
          case 5:
            item.class = "five-img";
            break;
          case 6:
            item.class = "fix-img";
            break;
          case 7:
            item.class = "seven-img";
            break;
          case 8:
            item.class = "eight-img";
            break;
          case 9:
            item.class = "nine-img";
            break;

          default:
            break;
        }
      });
      this.$vux.loading.hide();
    },
    show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    previewClose() {
      this.previewList.list = [];
    },
    imgCollect() {},
    toDetail(designItem) {
      this.$router.push({
        path: "/page/take_photo/DesignDetail",
        query: { id: designItem.sources_id }
      });
    },
    togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    toPay() {
      this.popup.type = "pay";
    },
    backSelectReward() {
      this.confirmReward = "";
      this.popup.type = "reward";
    },
    selectPay(cell) {
      this.cellArr.forEach((item, index) => {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    }
  },
  components: {
    XHeader,
    Swiper,
    XButton,
    Flexbox,
    FlexboxItem,
    XImg,
    Popup,
    XInput,
    Card,
    Cell,
    Badge
  },
  watch: {}
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
    border-radius: 50%;
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
    overflow: hidden;
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
    z-index: 500;
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
  .reward-box {
    .reward-title-box {
      height: 45px;
      position: relative;
      border-bottom: 1px solid rgb(229, 229, 229);
      span {
        display: inline-block;
        width: max-content;
        height: max-content;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        font-size: 15px;
      }
      .icon-danchuangguanbi {
        display: inline-block;
        width: max-content;
        height: max-content;
        position: absolute;
        top: 0;
        right: 20px;
        bottom: 0;
        margin: auto;
        font-size: 11px;
      }
    }
    .reward-content-box {
      padding: 30px 40px;
      .reward-item {
        color: rgb(252, 97, 66);
        span {
          display: inline-block;
          width: 80px;
          height: 40px;
          line-height: 40px;
          border: 1px solid rgb(252, 97, 66);
          box-sizing: border-box;
          border-radius: 5px;
          text-align: center;
          margin-bottom: 15px;
        }
      }
      .selected span {
        background-color: rgb(252, 97, 66);
        color: #fff;
      }
      .reward-input {
        background-color: rgb(241, 241, 241);
        border-radius: 5px;
      }
      .reward-input::before {
        display: none;
      }
    }
  }
  //选择付款账户
  .select-pay {
    padding: 0 5vw;
  }
  .card {
    border-radius: 10px;
    margin: 10px 0 !important;
    font-size: 14px;
    color: rgb(51, 51, 51);
    .weui-cell {
      padding: 10px 0;
    }
  }
  .card::before,
  .card::after {
    display: none;
  }
  .iconfont {
    font-size: 25px;
  }
  .icon-weixin {
    color: rgb(37, 155, 36) !important;
  }
  .icon-zhifubao {
    color: rgb(16, 149, 218) !important;
  }
  .back-reward {
    margin-left: 20px !important;
    font-size: 11px !important;
  }
  .icon-xuanzhong::before {
    color: rgb(252, 97, 66);
  }
  .icon-weixuanzhong::before {
    color: rgb(197, 197, 197);
  }
  .pay-commit {
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
}
</style>
