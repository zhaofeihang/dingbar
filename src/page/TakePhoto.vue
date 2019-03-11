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
            <x-button
              v-else
              @click.native.stop="follow(designItem.userid)"
              class="x-button no-follow"
              mini
            >关注</x-button>
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
          height="calc(504 *2 / 7.5 * 1vw)"
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
        height="calc(270 *2 / 7.5 * 1vw)"
        :show-mask="false"
        style="background-color:#fff;border-radius:calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0;"
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
                style="font-size:calc(12 *2 / 7.5 * 1vw);color:rgb(252,97,66);"
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
    },
    async follow(userId) {
      let userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        let data = await util.getData({
          url: `/materials/usersfollows`,
          method: "post",
          param: {
            users_mains_id: userId,
            loginid: JSON.parse(userInfo).id,
          }
        });
      }
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
    padding: calc(60 *2 / 7.5 * 1vw) 5vw;
    padding-top: 0;
  }
  .tab-box {
    display: flex;
    align-items: center;
    width: 95vw;
    height: calc(40 *2 / 7.5 * 1vw);
    line-height: calc(40 *2 / 7.5 * 1vw);
    font-size: calc(15 *2 / 7.5 * 1vw);
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid #eee;
    margin-left: 5vw;
    .tab-list {
      color: rgb(185, 185, 185);
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
      margin: 0 calc(10 *2 / 7.5 * 1vw);
    }
    span:first-child {
      margin-left: calc(20 *2 / 7.5 * 1vw);
    }
    .tab-title {
      font-size: calc(17 *2 / 7.5 * 1vw);
      font-weight: 550;
      margin: 0;
    }
    .active {
      color: rgb(252, 97, 66);
      border-bottom: calc(3 *2 / 7.5 * 1vw) solid rgb(252, 97, 66);
    }
  }
  .swiper {
    border-radius: calc(10 *2 / 7.5 * 1vw);
    margin: calc(10 *2 / 7.5 * 1vw) 0;
  }
  .design-list {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    padding-top: calc(15 *2 / 7.5 * 1vw);
    padding-bottom: calc(12 *2 / 7.5 * 1vw);
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: calc(40 *2 / 7.5 * 1vw);
    height: calc(40 *2 / 7.5 * 1vw);
    border-radius: 50%;
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 *2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 *2 / 7.5 * 1vw);
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
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: calc(15 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: calc(60 *2 / 7.5 * 1vw);
    height: calc(30 *2 / 7.5 * 1vw);
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
    font-size: calc(16 *2 / 7.5 * 1vw);
  }
  //设计师上传的图片列表
  .design-item {
    margin: calc(10 *2 / 7.5 * 1vw) 0;
    width: 100%;
  }
  .one-img {
    height: calc(190 *2 / 7.5 * 1vw);
    overflow: hidden;
    .design-item-img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
    }
  }
  .two-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(190 *2 / 7.5 * 1vw);
    .design-item-img {
      display: block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      height: 100%;
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(2) {
      width: calc(93 *2 / 7.5 * 1vw);
    }
  }
  .three-img {
    height: calc(190 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      width: calc(190 *2 / 7.5 * 1vw);
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      height: calc(93 *2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      height: calc(93 *2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(3) {
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(190 *2 / 7.5 * 1vw);
      right: 0;
      top: 0;
    }
  }
  .four-img {
    height: calc(190 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(4) {
      width: calc(190 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
      right: 0;
      bottom: 0;
    }
  }
  .five-img {
    height: calc(190 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
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
    height: calc(289 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
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
      width: calc(190 *2 / 7.5 * 1vw);
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      width: calc(190 *2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(6) {
      right: 0;
      bottom: 0;
    }
  }
  .seven-img {
    height: calc(289 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
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
      width: calc(190 *2 / 7.5 * 1vw);
      right: 0;
      bottom: 0;
    }
  }
  .eight-img {
    height: calc(289 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
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
      width: calc(190 *2 / 7.5 * 1vw);
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
    height: calc(387 *2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 *2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 *2 / 7.5 * 1vw);
      height: calc(93 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 *2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      top: calc(98 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(4) {
      height: calc(190 *2 / 7.5 * 1vw);
      top: calc(98 *2 / 7.5 * 1vw);
      left: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      top: calc(98 *2 / 7.5 * 1vw);
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(6) {
      left: 0;
      bottom: calc(98 *2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(7) {
      right: 0;
      bottom: calc(98 *2 / 7.5 * 1vw);
      margin: auto;
    }
    .design-item-img:nth-child(8) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(9) {
      width: calc(190 *2 / 7.5 * 1vw);
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
    margin-bottom: calc(15 *2 / 7.5 * 1vw);
    .design-item-comment {
      margin-right: calc(55 *2 / 7.5 * 1vw);
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
      box-shadow: 0 0 calc(5 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .iconfont {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .guanbi {
      width: calc(29 *2 / 7.5 * 1vw);
      height: calc(29 *2 / 7.5 * 1vw);
      left: 0;
      right: 0;
      bottom: -calc(49 *2 / 7.5 * 1vw);
      margin: auto;
      .icon-guanbi::before {
        font-size: calc(29 *2 / 7.5 * 1vw);
        color: #fff;
      }
    }
    .shoucang {
      width: calc(44 *2 / 7.5 * 1vw);
      height: calc(44 *2 / 7.5 * 1vw);
      background-color: #fff;
      top: calc(20 *2 / 7.5 * 1vw);
      right: calc(20 *2 / 7.5 * 1vw);
      .icon-shoucang::before {
        font-size: calc(18 *2 / 7.5 * 1vw);
        color: rgb(197, 197, 197);
      }
    }
    .collected::before {
      color: rgb(252, 97, 66) !important;
    }
    .xiazai {
      width: calc(44 *2 / 7.5 * 1vw);
      height: calc(44 *2 / 7.5 * 1vw);
      background-color: #fff;
      left: calc(40 *2 / 7.5 * 1vw);
      bottom: calc(30 *2 / 7.5 * 1vw);
      .icon-xiazai::before {
        font-size: calc(18 *2 / 7.5 * 1vw);
        color: rgb(252, 97, 66);
      }
    }
    .shang {
      width: calc(60 *2 / 7.5 * 1vw);
      height: calc(60 *2 / 7.5 * 1vw);
      background-color: #fff;
      left: 0;
      right: 0;
      bottom: calc(20 *2 / 7.5 * 1vw);
      margin: auto;
      .icon-shang {
        width: calc(35 *2 / 7.5 * 1vw);
        height: calc(35 *2 / 7.5 * 1vw);
        border-radius: 50%;
        background-color: rgb(252, 97, 66);
      }
      .icon-shang::before {
        font-size: calc(16 *2 / 7.5 * 1vw);
        color: #fff;
      }
    }
    .fenxiang {
      width: calc(44 *2 / 7.5 * 1vw);
      height: calc(44 *2 / 7.5 * 1vw);
      background-color: #fff;
      right: calc(40 *2 / 7.5 * 1vw);
      bottom: calc(27 *2 / 7.5 * 1vw);
      .icon-fenxiang::before {
        font-size: calc(17 *2 / 7.5 * 1vw);
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
    width: calc(15 *2 / 7.5 * 1vw) !important;
    background-color: #fff !important;
  }
  .previewSwiper {
    width: 100%;
    height: 100%;
    border-radius: calc(10 *2 / 7.5 * 1vw);
  }
  .reward-box {
    .reward-title-box {
      height: calc(45 *2 / 7.5 * 1vw);
      position: relative;
      border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
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
        font-size: calc(15 *2 / 7.5 * 1vw);
      }
      .icon-danchuangguanbi {
        display: inline-block;
        width: max-content;
        height: max-content;
        position: absolute;
        top: 0;
        right: calc(20 *2 / 7.5 * 1vw);
        bottom: 0;
        margin: auto;
        font-size: calc(11 *2 / 7.5 * 1vw);
      }
    }
    .reward-content-box {
      padding: calc(30 *2 / 7.5 * 1vw) calc(40 *2 / 7.5 * 1vw);
      .reward-item {
        color: rgb(252, 97, 66);
        span {
          display: inline-block;
          width: calc(80 *2 / 7.5 * 1vw);
          height: calc(40 *2 / 7.5 * 1vw);
          line-height: calc(40 *2 / 7.5 * 1vw);
          border: calc(1 *2 / 7.5 * 1vw) solid rgb(252, 97, 66);
          box-sizing: border-box;
          border-radius: calc(5 *2 / 7.5 * 1vw);
          text-align: center;
          margin-bottom: calc(15 *2 / 7.5 * 1vw);
        }
      }
      .selected span {
        background-color: rgb(252, 97, 66);
        color: #fff;
      }
      .reward-input {
        background-color: rgb(241, 241, 241);
        border-radius: calc(5 *2 / 7.5 * 1vw);
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
    border-radius: calc(10 *2 / 7.5 * 1vw);
    margin: calc(10 *2 / 7.5 * 1vw) 0 !important;
    font-size: calc(14 *2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
    .weui-cell {
      padding: calc(10 *2 / 7.5 * 1vw) 0;
    }
  }
  .card::before,
  .card::after {
    display: none;
  }
  .iconfont {
    font-size: calc(25 *2 / 7.5 * 1vw);
  }
  .icon-weixin {
    color: rgb(37, 155, 36) !important;
  }
  .icon-zhifubao {
    color: rgb(16, 149, 218) !important;
  }
  .back-reward {
    margin-left: calc(20 *2 / 7.5 * 1vw) !important;
    font-size: calc(11 *2 / 7.5 * 1vw) !important;
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
