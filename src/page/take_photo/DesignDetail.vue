<template>
  <div class="DesignDetail" v-if="pageShow">
    <scroller :on-infinite="onInfinite" ref="scroller" noDataText="我是有底线的..." :class="commentCount<5 ? 'hide-scroller':''">
    <x-header class="x-header" :left-options="{backText: ''}">详情
      <!-- <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
        <badge class="message-badge" :text="messageBadge"></badge>
        <i class="iconfont icon-xiaoxi"></i>
      </router-link>-->
    </x-header>
      <div class="content-box">
        <div class="design-list">
          <flexbox class="flexbox" @click.native="toDetail(designItem.userid)">
            <flexbox-item :span="1.7">
              <img
                class="avatar"
                :src="designItem.users_logos||'static/img/default-avatar.png'"
                alt=""
              >
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
              v-if="designItem.userid != (userInfo?userInfo.id:'')"
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
              <swiper height="calc(300 *2 / 7.5 * 1vw)" class="swiper" loop :list="designImgList"></swiper>
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
                <span
                  :class="designItem.score == 1 ? 'liked' : ''"
                  @click.stop="bading(designItem)"
                  class="design-item-comment"
                >
                  <i class="iconfont icon-chaping"></i>
                  {{designItem.badsnums}}
                </span>
                <span class="design-item-menu">
                  <i @click.stop="showMenu(designItem)" class="iconfont icon-gengduo"></i>
                </span>
              </div>
            </flexbox-item>
          </flexbox>
          <div class="avatar-list">
            <flexbox>
              <flexbox-item class="avatar-item-box" :span="9">
                <img
                  class="avatar-item"
                  v-for="(avatarItem,index) in avatarList.userlist"
                  :key="index"
                  :src="avatarItem.logos || 'static/img/default-avatar.png'"
                  alt=""
                >
                <span v-if="avatarList.length == 6">{{avatarList.totals}}</span>
              </flexbox-item>
              <flexbox-item :span="3">
                <x-button class="avatar-btn" mini @click.native="togglePopup('reward')">赞赏</x-button>
              </flexbox-item>
            </flexbox>
          </div>
          <div v-if="!commentCount" style="text-align: center;color: #ccc;">暂时还没有人评论呢</div>
          <div v-if="commentCount" class="comment-title">{{commentCount}}条评论</div>
          <div
            v-if="commentCount"
            class="comments-box"
            v-for="(commentItem,index) in commentList"
            :key="index"
          >
            <flexbox class="flexbox">
              <flexbox-item :span="1.7">
                <img
                  class="avatar"
                  :src="commentItem.users_logos||'static/img/default-avatar.png'"
                  alt=""
                >
              </flexbox-item>
              <flexbox-item :span="7.3">
                <div>
                  <div class="username">{{commentItem.nicknames}}</div>
                  <div class="direc">{{commentItem.times}}</div>
                </div>
              </flexbox-item>
              <flexbox-item class="x-button-box" :span="3">
                <span class="design-item-comment" :class="commentItem.praised == 1 ? 'liked' : ''">
                  <i
                    @click="commentLiking(commentItem)"
                    class="iconfont icon-dianzan"
                    :class="commentItem.praised == 1 ? 'liked' : ''"
                  ></i>
                  {{commentItem.praisesnums}}
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
    </scroller>
    <div class="comment-box">
      <x-input class="comment-input" v-model="comment" placeholder="你的评论可以一针见血"></x-input>
      <x-button @click.native="commentsCommit" class="comment-commit" mini>提交</x-button>
    </div>
    <div>
      <popup
        v-model="popup.popupState"
        height="calc(270 *2 / 7.5 * 1vw)"
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
            <x-button @click.native="payCommit" class="pay-commit">立即支付</x-button>
          </div>
        </div>
      </popup>
    </div>
    <!-- 举报 -->
    <popup class="menu-popup" v-model="menuBoxShow">
      <div @click.stop="toogleReportPopup">举报</div>
      <div @click.stop="showMenu">取消</div>
    </popup>
    <popup
      v-model="showReportPopup"
      height="calc(330 *2 / 7.5 * 1vw)"
      style="background-color:#fff;border-radius:calc(20 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw) 0 0;"
    >
      <div class="reward-box">
        <div class="reward-title-box">
          <span>举报</span>
          <i @click="toogleReportPopup()" class="iconfont icon-danchuangguanbi"></i>
        </div>
        <card class="card report-box">
          <div slot="content">
            <div
              class="report-item"
              v-for="(cell,index) in reportCellArr"
              :key="index"
              @click="selectReport(cell)"
            >
              <cell :title="cell.title">
                <i slot="icon" class="iconfont" :class="cell.lefticonclass"></i>
                <i slot="default" class="iconfont" :class="cell.righticonclass"></i>
              </cell>
            </div>
          </div>
        </card>
      </div>
      <div>
        <x-button @click.native="reportCommit" class="report-commit">确定</x-button>
      </div>
    </popup>
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
      //页面显示
      pageShow: false,
      //发布条目id
      disnId: "",
      //设计师信息
      designItem: null,
      //评论列表
      commentList: null,
      pageNum: 1,
      //赞赏头像列表
      avatarList: null,
      //评论数字
      commentCount: 0,
      //发布图片列表
      designImgList: [],
      //当前用户信息
      userInfo: null,
      //消息数量
      messageBadge: "80",
      //输入评论内容
      comment: "",
      //支付方式列表
      cellArr: [
        // {
        //   title: "微信",
        //   lefticonclass: "icon-weixin",
        //   righticonclass: "icon-xuanzhong"
        // },
        {
          title: "支付宝",
          lefticonclass: "icon-zhifubao",
          righticonclass: "icon-weixuanzhong"
        }
      ],
      //打赏
      popup: {
        popupState: false,
        type: "reward"
      },
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      selectPayMethod: "",
      //确认打赏金额
      confirmReward: "",
      //更多菜单显示
      menuBoxShow: false,
      //举报内容弹框显示
      showReportPopup: false,
      //举报内容
      reportCellArr: [
        {
          title: "淫秽色情",
          lefticonclass: "",
          righticonclass: "icon-weixuanzhong"
        },
        {
          title: "违法信息",
          lefticonclass: "",
          righticonclass: "icon-weixuanzhong"
        },
        {
          title: "营销广告",
          lefticonclass: "",
          righticonclass: "icon-weixuanzhong"
        },
        {
          title: "恶意攻击谩骂",
          lefticonclass: "",
          righticonclass: "icon-weixuanzhong"
        }
      ]
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
    this.disnId = disnId;
    let userInfo = localStorage.getItem("userInfo");
    let detailsUrl;
    let commentListUrl;
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      detailsUrl = `/materials/details?sources_id=${disnId}&loginid=${
        this.userInfo.id
      }`;
      commentListUrl = `/materials/commentslists?loginid=${
        this.userInfo.id
      }&sources_id=${disnId}&pages=${this.pageNum}&rowsmaxs=10`;
    } else {
      detailsUrl = `/materials/details?sources_id=${disnId}`;
      commentListUrl = `/materials/commentslists?sources_id=${disnId}&pages=${this.pageNum}&rowsmaxs=10`;
    }
    this.designItem = await util.getData({
      url: detailsUrl,
      method: "get"
    });
    this.designItem.images.forEach((item, index) => {
      this.designImgList.push({
        img: item.thumbs
      });
    });
    //获取评论列表
    this.commentList = await util.getData({
      url: commentListUrl,
      method: "get"
    });
    this.pageNum++;
    //获取点赞头像列表
    this.avatarList  = await util.getData({
      url: `/materials/praisepayers?loginid=${this.designItem.userid}`,
      method: "get"
    });
    //获取评论总数字
    this.commentCount = await util.getData({
      url: `/materials/commenttotals?sources_id=${disnId}`,
      method: "get"
    });
    //处理数据
    this.designItem.sex = this.designItem.gender == 1 ? "boy" : "girl";
    this.$vux.loading.hide();
    this.pageShow = true;
  },
  mounted: function() {},
  methods: {
    //切换随手拍条目中的菜单显示
    showMenu(designItem) {
      this.menuBoxShow = !this.menuBoxShow;
      this.currentDesignItem = designItem;
    },
    //举报
    toogleReportPopup() {
      this.menuBoxShow = false;
      this.showReportPopup = !this.showReportPopup;
    },
    //选择举报条目
    selectReport(report) {
      this.confirmContent = report.title;
      this.reportCellArr.forEach((item, index) => {
        item.righticonclass = "icon-weixuanzhong";
      });
      report.righticonclass = "icon-xuanzhong";
    },
    //提交举报内容
    async reportCommit() {
      if (this.confirmContent) {
        this.$vux.loading.show({
          text: "Loading"
        });
        let data = await util.request({
          url: `/materials/reports`,
          method: "post",
          param: {
            loginid: this.userInfo.id,
            users_mains_id: this.currentDesignItem.userid,
            reasons: this.confirmContent,
            types: 2,
            targets_id: this.disnId
          }
        });
        if (data.return_code == "success") {
          this.$vux.toast.show({
            text: data.return_data
          });
          this.showReportPopup = false;
          this.confirmContent = "";
        } else {
          this.$vux.alert.show({
            title: "提示",
            content: data.return_data
          });
        }
        this.$vux.loading.hide();
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请选择举报内容"
        });
      }
    },
    //图片预览
    show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    },
    //关注
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
        if (users.score == 1) {
          this.$vux.alert.show({
            title: "提示",
            content: "已经给过差评了"
          });
        } else if (users.score == 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "不能重复点赞"
          });
        } else {
          let data = await util.request({
            url: `/materials/scores`,
            method: "post",
            param: {
              users_mains_id: users.userid,
              loginid: this.userInfo.id,
              types: 1,
              scores: 5,
              targets_id: this.disnId
            }
          });
          if (data.return_code == "success") {
            this.$vux.toast.show({
              text: data.return_data
            });
            users.score = 5;
            users.praisesnums++;
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
    //点烂
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
              targets_id: this.disnId
            }
          });
          if (data.return_code == "success") {
            this.$vux.toast.show({
              text: data.return_data
            });
            users.score = 1;
            users.badsnums++;
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
    //评论
    async commentsCommit() {
      if (!this.userInfo) {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
        return false;
      }
      if (!this.comment) {
        this.$vux.alert.show({
          title: "提示",
          content: "评论内容不能为空"
        });
        return false;
      }
      let data = await util.request({
        url: `/materials/comments`,
        method: "post",
        param: {
          users_mains_id: this.designItem.userid,
          loginid: this.userInfo.id,
          sources_id: this.disnId,
          comments: this.comment
        }
      });
      if (data.return_code == "success") {
        this.comment = '';
        this.commentCount++;
        this.$vux.toast.show({
          text: data.return_data
        });
        //获取评论列表
        this.commentList = await util.getData({
          url: `/materials/commentslists?sources_id=${this.disnId}&loginid=${
            this.userInfo.id
          }`,
          method: "get"
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: data.return_data
        });
      }
    },
    //评论点赞
    async commentLiking(comment) {
      if (this.userInfo) {
        if (comment.praised == 1) {
          this.$vux.alert.show({
            title: "提示",
            content: "不能重复点赞"
          });
        } else {
          let data = await util.request({
            url: `/materials/scores`,
            method: "post",
            param: {
              users_mains_id: comment.userid,
              loginid: this.userInfo.id,
              types: 2,
              scores: 5,
              targets_id: comment.id
            }
          });
          if (data.return_code == "success") {
            this.$vux.toast.show({
              text: data.return_data
            });
            comment.praised = 1;
            comment.praisesnums++;
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
    //打赏
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
      this.selectPayMethod = cell.title;
      this.cellArr.forEach((item, index) => {
        item.righticonclass = "icon-weixuanzhong";
      });
      cell.righticonclass = "icon-xuanzhong";
    },
    //立即支付
    async payCommit() {
      if (this.userInfo) {
        if (!this.selectPayMethod) {
          this.$vux.alert.show({
            title: "提示",
            content: "请选择付款方式"
          });
        } else if (this.selectPayMethod == "支付宝") {
          let data = await util.getData({
            url: `/materials/praisepays`,
            method: "post",
            param: {
              loginid: this.userInfo.id,
              users_mains_id: this.designItem.userid,
              moneys: this.confirmReward
            }
          });
          const orderstring = data; // 后台生成的字符串
          window.Alipay.pay(
            orderstring,
            res => {
              this.$vux.toast.show({
                text: "打赏成功"
              });
            },
            e => {
              console.error(e);
            }
          );
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
    onInfinite(done) {
      if(this.pageNum == 1) {
        done();
        return false;
      }
      setTimeout(async () => {
        let detailsUrl,commentListUrl;
        if (this.userInfo) {
          detailsUrl = `/materials/details?sources_id=${this.disnId}&loginid=${
            this.userInfo.id
          }`;
          commentListUrl = `/materials/commentslists?loginid=${
            this.userInfo.id
          }&sources_id=${this.disnId}&pages=${this.pageNum}&rowsmaxs=10`;
        } else {
          detailsUrl = `/materials/details?sources_id=${this.disnId}`;
          commentListUrl = `/materials/commentslists?sources_id=${this.disnId}&pages=${this.pageNum}&rowsmaxs=10`;
        }
        let commentList = await util.getData({
          url: commentListUrl,
          method: "get"
        });
        if(commentList == '') {
          this.$refs.scroller.finishInfinite(2);
          return false;
        }
        this.commentList = this.commentList.concat(commentList);
        this.pageNum++,
        done();
      }, 1000);
    },
    toDetail(userId) {
      this.$router.push({
        path: '/page/user/MyRelease',
        name: 'MyRelease',
        params: {
          id: userId,
          type: 'other'
        }
      });
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
    // padding-bottom: calc(49 * 2 / 7.5 * 1vw);
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
    display: flex;
    align-items: center;
    font-size: calc(15 * 2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    border: 1px solid rgb(252, 97, 66);
    width: calc(60 * 2 / 7.5 * 1vw);
    height: calc(30 * 2 / 7.5 * 1vw);
    padding: 0;
    margin: 0;
  }
  .no-follow {
    color: rgb(525, 97, 66);
    background-color: #fff;
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
    word-wrap: break-word;
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
    .design-item-praise {
      display: flex;
    align-items: center;
    justify-content: center;
    }
    .design-item-comment {
      display: flex;
    align-items: center;
    justify-content: center;
      margin-right: calc(55 * 2 / 7.5 * 1vw);
    }
    .iconfont {
      font-size: calc(18 * 2 / 7.5 * 1vw);
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
  .liked .icon-dianzan::before,
  .liked .icon-chaping::before {
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
  .comments-box .username,
  .comment-title {
    color: rgb(153, 153, 153);
  }
  .comments-box {
    background-image: linear-gradient(
        0deg,
        rgb(237, 237, 237) 0%,
        #fff calc(1 * 2 / 7.5 * 1vw),
        transparent calc(1 * 2 / 7.5 * 1vw),
        transparent 100%
      ),
      linear-gradient(
        90deg,
        #fff 0%,
        #fff calc(20 * 2 / 7.5 * 1vw),
        transparent calc(20 * 2 / 7.5 * 1vw),
        transparent 100%
      );
  }
  .icon-dianzan {
    margin-right: -calc(8 * 2 / 7.5 * 1vw);
    font-size: calc(19 * 2 / 7.5 * 1vw);
  }
  .design-item-comment,
  .design-item-comment .iconfont {
    color: rgb(185, 185, 185);
  }

  .comment-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(49 * 2 / 7.5 * 1vw);
    background-color: #fff;
    padding: calc(8 * 2 / 7.5 * 1vw);
    border-top: 1px solid rgb(241, 241, 241);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    box-shadow: 0 0 calc(10 * 2 / 7.5 * 1vw) rgba(0, 0, 0, 0.2);
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
  .username .iconfont {
    margin-left: calc(5 * 2 / 7.5 * 1vw);
    width: calc(15 * 2 / 7.5 * 1vw);
    height: calc(15 * 2 / 7.5 * 1vw);
    font-size: calc(17 * 2 / 7.5 * 1vw);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
    width: 90vw;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5vw;
    background-color: rgb(252, 97, 66);
    color: #fff;
  }

  //更多菜单窗口
  .menu-popup {
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
  //举报弹窗
  .report-box {
    margin-top: 0 !important;
    padding-left: calc(30 * 2 / 7.5 * 1vw);
    .report-item {
      padding-right: calc(10 * 2 / 7.5 * 1vw);
      background-image: linear-gradient(
        0deg,
        rgb(212, 212, 212) 0%,
        #fff calc(1 * 2 / 7.5 * 1vw),
        #fff calc(52 * 2 / 7.5 * 1vw)
      );
      .weui-cell {
        height: calc(52 * 2 / 7.5 * 1vw);
        box-sizing: border-box;
      }
    }
  }
  .report-commit {
    width: 90vw;
    background-color: rgb(252, 97, 66);
    color: #fff;
    margin: auto;
    margin-top: calc(15 * 2 / 7.5 * 1vw);
  }
  ._v-content {
    padding-bottom: calc(49 * 2 / 7.5 * 1vw);
  }
}
</style>
