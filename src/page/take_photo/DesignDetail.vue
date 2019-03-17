<template>
  <div class="DesignDetail" v-if="pageShow">
    <x-header class="x-header" :left-options="{backText: ''}">详情
      <!-- <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
        <badge class="message-badge" :text="messageBadge"></badge>
        <i class="iconfont icon-xiaoxi"></i>
      </router-link>-->
    </x-header>
    <div class="content-box">
      <div
        class="design-list"
        v-for="(designItem,designItemIndex) in designList"
        :key="designItemIndex"
      >
        <flexbox class="flexbox">
          <flexbox-item :span="1.7">
            <img class="avatar" :src="designItem.users_logos" alt="">
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
              <div class="direc">{{designItem.time}}</div>
            </div>
          </flexbox-item>
          <flexbox-item
            class="x-button-box"
            :span="3"
            v-if="userInfo&&designItem.userid != userInfo.id"
          >
            <x-button
              v-show="designItem.followed"
              class="x-button"
              mini
              :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
              @click.native.stop="follow(designItem)"
            >已关注</x-button>
            <x-button
              v-show="!designItem.followed"
              @click.native.stop="follow(designItem)"
              class="x-button no-follow"
              mini
            >关注</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item class="desc">{{designItem.descriptions}}</flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item>
            <swiper
              height="calc(300 *2 / 7.5 * 1vw)"
              class="swiper"
              loop
              :list="designItem.designImgList"
            ></swiper>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
            <div class="design-item-menus">
              <span
                @click.stop="liking(designItem)"
                class="design-item-praise"
                :class="designItem.score == 5 ? 'liked' : ''"
              >
                <i class="iconfont icon-dianzan"></i>
                {{designItem.praisesnums}}
              </span>
              <span @click.stop="bading(designItem)" class="design-item-comment">
                <i class="iconfont icon-chaping"></i>
                {{designItem.commentsnums}}
              </span>
              <span class="design-item-menu">
                <i class="iconfont icon-gengduo"></i>
              </span>
            </div>
          </flexbox-item>
        </flexbox>
        <div class="avatar-list">
          <flexbox>
            <flexbox-item class="avatar-item-box" :span="9">
              <img
                class="avatar-item"
                v-for="(avatarItem,index) in designItem.avatarList"
                :key="index"
                :src="avatarItem.users_logos || 'static/img/default-avatar.png'"
                alt=""
              >
              <span v-if="designItem.avatarList.length>6">{{designItem.avatarList.length - 6}}</span>
            </flexbox-item>
            <flexbox-item :span="3">
              <x-button class="avatar-btn" mini @click.native="togglePopup('reward')">赞赏</x-button>
            </flexbox-item>
          </flexbox>
        </div>
        <div v-if="!designItem.commentCount" style="text-align: center;color: #ccc;">暂时还没有人评论呢</div>
        <div v-if="designItem.commentCount" class="comment-title">{{designItem.commentCount}}条评论</div>
        <div
          v-if="designItem.commentCount"
          class="comment-box"
          v-for="(commentItem,index) in designItem.commentList"
          :key="index"
        >
          <flexbox class="flexbox">
            <flexbox-item :span="1.7">
              <img class="avatar" :src="commentItem.avatar" alt="">
            </flexbox-item>
            <flexbox-item :span="7.3">
              <div>
                <div class="username">{{commentItem.username}}</div>
                <div class="direc">{{commentItem.direc}}</div>
              </div>
            </flexbox-item>
            <flexbox-item class="x-button-box" :span="3">
              <span class="design-item-comment">
                <i class="iconfont icon-dianzan"></i>
                {{commentItem.praise}}
              </span>
            </flexbox-item>
          </flexbox>
          <flexbox class="design-item-box">
            <flexbox-item :span="1.7"></flexbox-item>
            <flexbox-item :span="10.3" class="desc">{{commentItem.comments}}</flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
    <div class="comment-box">
      <x-input class="comment-input" v-model="comment" placeholder="你的评论可以一针见血"></x-input>
      <x-button class="comment-commit" mini>提交</x-button>
    </div>
    <div>
      <popup
        v-model="popup.popupState"
        height="calc(270 *2 / 7.5 * 1vw)"
        :show-mask="false"
        style="background-color:#fff;border-radius:calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0;"
        class="reward-popup"
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
  Badge,
  Popup,
  Card,
  Cell,
  XInput
} from "vux";
import util from "../../util";

export default {
  data() {
    return {
      pageShow: false,
      userInfo: null,
      messageBadge: "80",
      designList: [],
      comment: "",
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
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      confirmReward: "",
    };
  },
  created: async function() {
    this.$vux.loading.show({
      text: "Loading"
    });
    /**
     * 获取设计师详情
     */
    let disnId = this.$route.query.id;
    let userInfo = localStorage.getItem("userInfo");
    let detailsUrl;
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      detailsUrl = `/materials/details?sources_id=${disnId}&loginid=${
        this.userInfo.id
      }`;
    } else {
      detailsUrl = `/materials/details?sources_id=${disnId}`;
    }
    this.designList[0] = await util.getData({
      url: detailsUrl,
      method: "get"
    });
    this.designList[0].designImgList = [];
    this.designList[0].images.forEach((item, index) => {
      this.designList[0].designImgList.push({
        img: item.thumbs
      });
    });
    //获取评论列表
    this.designList[0].commentList = await util.getData({
      url: `/materials/commentslists?sources_id=${disnId}&pages=1&rowsmaxs=10`,
      method: "get"
    });
    //获取点赞头像列表
    this.designList[0].avatarList = await util.getData({
      url: `/materials/praiserslists?sources_id=${disnId}`,
      method: "get"
    });
    //获取评论总数字
    this.designList[0].commentCount = await util.getData({
      url: `/materials/commenttotals?sources_id=${disnId}`,
      method: "get"
    });
    //处理数据
    this.designList.forEach((item, index) => {
      item.sex = item.gender == 1 ? "boy" : "girl";
    });
    this.$vux.loading.hide();
    this.pageShow = true;
  },
  mounted: function() {},
  methods: {
    show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    async follow(users) {
      let types = users.followed ? 0 : 1;
      if (this.userInfo) {
        let data = await util.request({
          url: `/materials/usersfollows`,
          method: "post",
          param: {
            users_mains_id: users.userid,
            loginid: this.userInfo.id,
            types: types
          }
        });
        if (data.return_code == "success") {
          users.followed = types;
        }
        this.$vux.toast.show({
          text: data.return_data
        });
      } else {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
      }
    },
    //点赞
    async liking(users) {
      if (this.userInfo) {
        if (users.score == 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "不能重复点赞"
          });
          return false;
        }
        let data = await util.request({
          url: `/materials/scores`,
          method: "post",
          param: {
            users_mains_id: users.userid,
            loginid: this.userInfo.id,
            types: 1,
            scores: 5,
            targets_id: users.sources_id
          }
        });
        if (data.return_code == "success") {
          this.$vux.toast.show({
            text: data.return_data
          });
        } else {
          this.$vux.alert.show({
            title: "提示",
            content: data.return_data
          });
        }
      } else {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
      }
    },
    async bading(users) {
      if (this.userInfo) {
        if (users.score == 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "已经给过好评了"
          });
        } else if (users.score == 1) {
          this.$vux.alert.show({
            title: "提示",
            content: "不能重复差评"
          });
        } else {
          let data = await util.request({
            url: `/materials/scores`,
            method: "post",
            param: {
              users_mains_id: users.userid,
              loginid: this.userInfo.id,
              types: 1,
              scores: 1,
              targets_id: users.sources_id
            }
          });
          if (data.return_code == "success") {
            this.$vux.toast.show({
              text: data.return_data
            });
          } else {
            this.$vux.alert.show({
              title: "提示",
              content: data.return_data
            });
          }
        }
      } else {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
      }
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
  },
  components: {
    XHeader,
    Swiper,
    XButton,
    Flexbox,
    FlexboxItem,
    XImg,
    Badge,
    Popup,
    Card,
    Cell,
    XInput
  }
};
</script>

<style lang="less">
.DesignDetail {
  .x-header {
    background-color: rgb(249, 249, 249);
  }
  .content-box {
    padding-bottom: calc(49 * 2 / 7.5 * 1vw);
  }
  .icon-xiaoxi {
    font-size: calc(25 * 2 / 7.5 * 1vw);
  }
  .design-list {
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    padding: calc(15 * 2 / 7.5 * 1vw) 5vw calc(5 * 2 / 7.5 * 1vw) 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: calc(40 * 2 / 7.5 * 1vw);
    height: calc(40 * 2 / 7.5 * 1vw);
    border-radius: 50%;
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 * 2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 * 2 / 7.5 * 1vw);
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
    font-size: calc(12 * 2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: calc(60 * 2 / 7.5 * 1vw);
    height: calc(30 * 2 / 7.5 * 1vw);
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
  .weui-btn + .weui-btn {
    margin-top: 0;
  }
  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }

  .desc {
    padding: 0 5vw;
    box-sizing: border-box;
    margin-bottom: calc(5 * 2 / 7.5 * 1vw);
  }

  .design-item-box {
    box-sizing: border-box;
    font-size: calc(16 * 2 / 7.5 * 1vw);
  }
  .design-item-menus,
  .design-item-menus .iconfont::before {
    color: rgb(185, 185, 185);
  }
  .design-item-menus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: calc(15 * 2 / 7.5 * 1vw) 0;
    padding: 0 5vw;
    .design-item-comment {
      margin-right: calc(55 * 2 / 7.5 * 1vw);
    }
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
    width: calc(15 * 2 / 7.5 * 1vw) !important;
    background-color: #fff !important;
  }
  .liked,
  .liked .icon-dianzan::before {
    color: rgb(252, 97, 66) !important;
  }
  //赞赏
  .avatar-list {
    .avatar-item-box {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .avatar-item,
    span {
      display: inline-block;
      width: calc(25 * 2 / 7.5 * 1vw);
      height: calc(25 * 2 / 7.5 * 1vw);
      line-height: calc(25 * 2 / 7.5 * 1vw);
      border-radius: 50%;
      margin-left: calc(5 * 2 / 7.5 * 1vw);
    }
    span {
      color: rgb(192, 192, 192);
      background-color: rgb(242, 242, 242);
      text-align: center;
    }
    .avatar-btn {
      display: block;
      border: calc(1 * 2 / 7.5 * 1vw) solid rgb(252, 97, 66);
      background-color: #fff;
      color: rgb(252, 97, 66);
      margin: auto;
      margin-right: 0;
    }
  }
  //评论
  .comment-title {
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .comment-title,
  .avatar-list {
    padding: calc(10 * 2 / 7.5 * 1vw) 5vw;
  }
  .comment-box .username,
  .comment-title {
    color: rgb(153, 153, 153);
  }
  .icon-dianzan {
    margin-right: -calc(8 * 2 / 7.5 * 1vw);
    font-size: calc(19 * 2 / 7.5 * 1vw);
  }
  .design-item-comment,
  .design-item-comment .iconfont {
    color: rgb(185, 185, 185) !important;
  }

  .comment-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(49 * 2 / 7.5 * 1vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(8 * 2 / 7.5 * 1vw);
    box-sizing: border-box;
    .comment-input {
      width: 75vw;
      height: calc(33 * 2 / 7.5 * 1vw);
      background-color: rgb(241, 241, 241);
      padding: 0;
      padding-left: calc(10 * 2 / 7.5 * 1vw);
      border-radius: calc(5 * 2 / 7.5 * 1vw);
    }
    .comment-commit {
      height: calc(33 * 2 / 7.5 * 1vw);
      background-color: rgb(252, 97, 66);
      color: #fff;
      margin-right: 0;
      border: none;
      box-sizing: border-box;
    }
  }
  //赞赏
  .reward-popup {
    box-shadow: 0 0 calc(10 * 2 / 7.5 * 1vw) rgba(0,0,0,0.2);
  }
  .reward-box {
    .reward-title-box {
      height: calc(45 * 2 / 7.5 * 1vw);
      position: relative;
      border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
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
        font-size: calc(15 * 2 / 7.5 * 1vw);
      }
      .icon-danchuangguanbi {
        display: inline-block;
        width: max-content;
        height: max-content;
        position: absolute;
        top: 0;
        right: calc(20 * 2 / 7.5 * 1vw);
        bottom: 0;
        margin: auto;
        font-size: calc(11 * 2 / 7.5 * 1vw);
      }
    }
    .reward-content-box {
      padding: calc(30 * 2 / 7.5 * 1vw) calc(40 * 2 / 7.5 * 1vw);
      .reward-item {
        color: rgb(252, 97, 66);
        span {
          display: inline-block;
          width: calc(80 * 2 / 7.5 * 1vw);
          height: calc(40 * 2 / 7.5 * 1vw);
          line-height: calc(40 * 2 / 7.5 * 1vw);
          border: calc(1 * 2 / 7.5 * 1vw) solid rgb(252, 97, 66);
          box-sizing: border-box;
          border-radius: calc(5 * 2 / 7.5 * 1vw);
          text-align: center;
          margin-bottom: calc(15 * 2 / 7.5 * 1vw);
        }
      }
      .selected span {
        background-color: rgb(252, 97, 66);
        color: #fff;
      }
      .reward-input {
        background-color: rgb(241, 241, 241);
        border-radius: calc(5 * 2 / 7.5 * 1vw);
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
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    margin: calc(10 * 2 / 7.5 * 1vw) 0 !important;
    font-size: calc(14 * 2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
    .weui-cell {
      padding: calc(10 * 2 / 7.5 * 1vw) 0;
    }
  }
  .card::before,
  .card::after {
    display: none;
  }
  .iconfont {
    font-size: calc(25 * 2 / 7.5 * 1vw);
  }
  .icon-weixin {
    color: rgb(37, 155, 36) !important;
  }
  .icon-zhifubao {
    color: rgb(16, 149, 218) !important;
  }
  .back-reward {
    margin-left: calc(20 * 2 / 7.5 * 1vw) !important;
    font-size: calc(11 * 2 / 7.5 * 1vw) !important;
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
