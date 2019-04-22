<template>
  <div class="TakePhoto" v-if="pageShow">
      <!-- 头部 -->
      <x-header class="x-header" :left-options="{showBack: false}">随手拍
        <!-- <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
        <badge class="message-badge" :text="messageBadge"></badge>
        <i class="iconfont icon-xiaoxi"></i>
        </router-link>-->
      </x-header>
      <!-- 话题分类切换 -->
      <div class="tab-box">
        <div class="tab-title">热门话题</div>
        <div class="tab-list">
          <div style="width:max-content;">
            <span
            v-for="(tabItem,index) in tab.tabList"
            :key="index"
            @click="seleted(tabItem.id)"
            :class="tab.id == tabItem.id?'active':''"
          >{{tabItem.tits}}</span>
          </div>
        </div>
      </div>
    <scroller
      :on-infinite="onInfinite"
      ref="scroller"
      noDataText="我是有底线的..."
      :class="designList.length<10 ? 'hide-scroller':''"
    >
      <!-- 页面内容 -->
      <div class="content-box">
        <!-- 轮播图 -->
        <swiper class="swiper" loop :list="baseList"></swiper>
        <!-- 设计师发表图片列表 -->
        <div
          class="design-list"
          v-for="(designItem,designItemIndex) in designList"
          :key="designItemIndex"
          @click="toDetail(designItem,'detail')"
        >
          <!-- 设计师详情 -->
          <flexbox class="flexbox">
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
                <div class="direc">{{designItem.dates}}</div>
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
            <flexbox-item :span="1.7"></flexbox-item>
            <flexbox-item :span="10.3">{{designItem.descriptions}}</flexbox-item>
          </flexbox>
          <!-- 图片列表 -->
          <flexbox class="design-item-box">
            <flexbox-item :span="1.7"></flexbox-item>
            <flexbox-item :span="10.3" class="design-item" :class="designItem.class">
              <img
                class="design-item-img"
                v-for="(designImg,designImgIndex) in designItem.images"
                :key="designImgIndex"
                :src="designImg.thumbs"
                @click.stop="show(designImgIndex,designItem)"
              >
            </flexbox-item>
          </flexbox>
          <flexbox>
            <flexbox-item :span="1.7"></flexbox-item>
            <flexbox-item :span="10.3">
              <div class="design-item-menus">
                <span
                  @click.stop="liking(designItem)"
                  class="design-item-praise"
                  :class="designItem.praised == 1 ? 'liked' : ''"
                >
                  <i class="iconfont icon-dianzan"></i>
                  {{designItem.praisesnums}}
                </span>
                <span class="design-item-comment">
                  <i @click.stop="toDetail(designItem,'comment')" class="iconfont icon-pinglun"></i>
                  {{designItem.commentsnums}}
                </span>
                <span class="design-item-menu">
                  <i @click.stop="showMenu(designItem)" class="iconfont icon-gengduo"></i>
                </span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </scroller>
    <!-- 图片预览 -->
    <transition name="fade">
      <div class="preview" v-if="previewList.list.length">
        <div class="preview-swiper-box">
          <swiper
            dots-class="test"
            dots-position="center"
            loop
            height="70vh"
            class="previewSwiper"
            :list="previewList.list"
            v-model="previewList.index"
          ></swiper>
          <span
            @click="imgCollect(previewList.list[previewList.index],previewList.userId)"
            class="preview-icon shoucang"
          >
            <i
              class="iconfont icon-shoucang"
              :class="previewList.list[previewList.index].collected == 1 ? 'collected' : ''"
            ></i>
          </span>
          <span class="preview-icon xiazai">
            <i @click="downs(previewList.list[previewList.index])" class="iconfont icon-xiazai"></i>
          </span>
          <span class="preview-icon shang" @click="togglePopup('reward')">
            <i class="iconfont icon-shang"></i>
          </span>
          <span class="preview-icon fenxiang">
            <i
              @click="selectShare(previewList.list[previewList.index])"
              class="iconfont icon-fenxiang"
            ></i>
          </span>
          <span @click="previewClose" class="preview-icon guanbi">
            <i class="iconfont icon-guanbi"></i>
          </span>
        </div>
      </div>
    </transition>
    <!-- 打赏 -->
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
    <popup class="menu-popup" v-model="sharePopup">
      <div @click.stop="share('friend')">分享给微信好友</div>
      <div @click.stop="share('friends')">分享给微信朋友圈</div>
      <div @click.stop="sharePopup=false">取消</div>
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
  Popup,
  XInput,
  Card,
  Cell,
  Badge
} from "vux";
import util from "../util";
import { saveImg } from "../cordovaplugin";

export default {
  data() {
    return {
      //页面显示
      pageShow: false,
      //消息数量
      messageBadge: "80",
      //打赏弹框
      popup: {
        popupState: false,
        type: "reward"
      },
      //打赏金额
      rewards: {
        list: [0.01, 0.1, 0.5, 1, 5, 10],
        seleted: -1
      },
      //打赏选择支付方式
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
      ],
      previewList: {
        list: [],
        index: 0,
        userId: ""
      },
      tab: {
        tabList: [{ id: "0", tits: "全部" }],
        id: 0
      },
      //轮播图
      baseList: [],
      //设计师列表
      designList: [],
      //举报弹框的当前设计师
      currentDesignItem: null,
      //预览弹框的当前设计师
      currentPreviewDesignItem: null,
      //当前登录用户信息
      userInfo: null,
      pageNum: 1,
      sharePopup: false
    };
  },
  created: function() {},
  mounted: async function() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
    this.$vux.loading.show({
      text: "Loading"
    });
    /*
     ** 话题列表
     */
    let tabList = await util.getData({
      url: "/materials/topicslists",
      method: "post"
    });
    this.tab.tabList = this.tab.tabList.concat(tabList);
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
    let designListUrl;
    if (this.userInfo) {
      designListUrl = `/materials/postslists?loginid=${
        this.userInfo.id
      }&topics_id=${this.tab.id}&pages=${this.pageNum}&rowsmax=10`;
    } else {
      designListUrl = `/materials/postslists?topics_id=${this.tab.id}&pages=${
        this.pageNum
      }&rowsmax=10`;
    }
    this.designList = await util.getData({
      url: designListUrl,
      method: "get"
    });
    this.pageNum++;
    //处理随手拍列表数据
    this.designList.forEach((item, index) => {
      //提取预览图片集
      item.previewList = [];
      item.images.forEach(img => {
        item.previewList.push({
          id: img.id,
          img: img.updatas,
          collected: img.collected || 0
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
    this.pageShow = true;
  },
  methods: {
    //话题目录切换
    async seleted(id) {
      this.tab.id = id;
      this.pageNum = 1;
      this.$vux.loading.show({
        text: "Loading"
      });
      /*
     ** 随手拍列表
     */
      let designListUrl;
      if (this.userInfo) {
        designListUrl = `/materials/postslists?loginid=${
          this.userInfo.id
        }&topics_id=${this.tab.id}&pages=${this.pageNum}&rowsmax=10`;
      } else {
        designListUrl = `/materials/postslists?topics_id=${this.tab.id}&pages=${
          this.pageNum
        }&rowsmax=10`;
      }
      this.designList = await util.getData({
        url: designListUrl,
        method: "get"
      });
      this.pageNum++;
      //处理随手拍列表数据
      this.designList.forEach((item, index) => {
        //提取预览图片集
        item.previewList = [];
        item.images.forEach(img => {
          item.previewList.push({
            id: img.id,
            img: img.updatas,
            collected: img.collected || 0
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
    async imgCollect(imgs, userId) {
      if (this.userInfo) {
        if (imgs.collected == 1) {
          this.$vux.alert.show({
            title: "提示",
            content: "不能重复收藏"
          });
          return false;
        }
        let data = await util.request({
          url: `/materials/collects`,
          method: "post",
          param: {
            loginid: this.userInfo.id,
            users_mains_id: userId,
            targets_id: imgs.id,
            types: 1
          }
        });
        if (data.return_code == "success") {
          this.$vux.toast.show({
            text: "收藏成功"
          });
          imgs.collected = 1;
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
            targets_id: this.currentDesignItem.sources_id
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
    //显示图片预览弹框
    show(index, designItem) {
      this.previewList.index = index;
      this.previewList.list = designItem.previewList;
      this.previewList.userId = designItem.userid;
      this.currentPreviewDesignItem = designItem;
    },
    //关闭图片预览弹框
    previewClose() {
      this.previewList.list = [];
    },
    //跳转随手拍详情页面
    toDetail(designItem, type) {
      this.$router.push({
        path: "/page/take_photo/DesignDetail",
        query: { id: designItem.sources_id, type: type }
      });
    },
    //切换底部弹框显示隐藏
    togglePopup(type) {
      this.popup.type = type;
      this.popup.popupState = !this.popup.popupState;
    },
    //选择打赏金额
    rewardSelected(index) {
      this.confirmReward = this.rewards.list[index];
      this.rewards.seleted = index;
      this.toPay();
    },
    //确认金额
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
              users_mains_id: this.currentPreviewDesignItem.userid,
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
          this.designList.forEach((item, index) => {
            if (users.userid == item.userid) {
              item.followed = users.followed;
            }
          });
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
        if (users.praised == 1) {
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
          users.praised = 1;
          users.praisesnums++;
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
    onInfinite(done) {
      if (this.pageNum == 1) {
        done();
        return false;
      }
      setTimeout(async () => {
        let designListUrl;
        if (this.userInfo) {
          designListUrl = `/materials/postslists?topics_id=${
            this.tab.id
          }&pages=${this.pageNum}&rowsmax=10`;
        } else {
          designListUrl = `/materials/postslists?topics_id=${
            this.tab.id
          }&pages=${this.pageNum}&rowsmax=10`;
        }
        let designList = await util.getData({
          url: designListUrl,
          method: "get"
        });
        if (designList == "") {
          this.$refs.scroller.finishInfinite(2);
          return false;
        }
        this.designList = this.designList.concat(designList);
        this.pageNum++;
        //处理随手拍列表数据
      this.designList.forEach((item, index) => {
        //提取预览图片集
        item.previewList = [];
        item.images.forEach(img => {
          item.previewList.push({
            id: img.id,
            img: img.updatas,
            collected: img.collected || 0
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
        done();
      }, 1000);
    },
    //图片下载
    async downs(imgs) {
      let data = await util.convertImg(imgs.img, 675, 934);
      saveImg(data)
        .then(path => {
          if (path) {
            this.$vux.toast.show({
              text: "保存成功"
            });
          }
        })
        .catch(error => {
          this.$vux.alert.show({
            title: "提示",
            content: error
          });
        });
    },
    selectShare(imgs) {
      this.shareImg = imgs.img;
      this.sharePopup = true;
    },
    //分享
    share(type) {
      window.Wechat.share({
        message: {
          title: '随手拍',
          description: '随手拍',
          thumb: this.shareImg,
          media: {
            type: window.Wechat.Type.IMAGE,
            image: this.shareImg
          }
        },
        scene: type == 'friends' ? window.Wechat.Scene.TIMELINE : window.Wechat.Scene.SESSION   // share to Timeline
      }, (data) => {
        this.sharePopup = false;
        // todo when success
      }, reason => {
        this.$vux.alert.show({
          title: '提示',
          content: reason
        });
        // todo when error or cancel
      });
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
    padding: 0 5vw;
  }
  .tab-box {
    display: flex;
    align-items: center;
    width: 95vw;
    height: calc(40 * 2 / 7.5 * 1vw);
    line-height: calc(40 * 2 / 7.5 * 1vw);
    font-size: calc(15 * 2 / 7.5 * 1vw);
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid #eee;
    margin-left: 5vw;
    .tab-list {
      flex: 1;
      color: rgb(185, 185, 185);
      white-space: nowrap;
      overflow-x: scroll;
    }
    span,
    .tab-title {
      display: inline-block;
      width: max-content;
      white-space: nowrap;
      height: 100%;
      margin: 0 calc(10 * 2 / 7.5 * 1vw);
    }
    span:first-child {
      margin-left: calc(20 * 2 / 7.5 * 1vw);
    }
    .tab-title {
      font-size: calc(17 * 2 / 7.5 * 1vw);
      font-weight: 550;
      margin: 0;
    }
    .active {
      color: rgb(252, 97, 66);
      border-bottom: calc(3 * 2 / 7.5 * 1vw) solid rgb(252, 97, 66);
    }
  }
  .swiper {
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    margin: calc(10 * 2 / 7.5 * 1vw) 0;
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
    padding-top: calc(15 * 2 / 7.5 * 1vw);
    padding-bottom: calc(12 * 2 / 7.5 * 1vw);
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
  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }
  .weui-btn + .weui-btn {
    margin-top: 0;
  }

  .design-item-box {
    box-sizing: border-box;
    font-size: calc(16 * 2 / 7.5 * 1vw);
  }
  //设计师上传的图片列表
  .design-item {
    margin: calc(10 * 2 / 7.5 * 1vw) 0;
    width: 100%;
  }
  .one-img {
    height: calc(190 * 2 / 7.5 * 1vw);
    overflow: hidden;
    .design-item-img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
    }
  }
  .two-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(190 * 2 / 7.5 * 1vw);
    .design-item-img {
      display: block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      height: 100%;
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(2) {
      width: calc(93 * 2 / 7.5 * 1vw);
    }
  }
  .three-img {
    height: calc(190 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      width: calc(190 * 2 / 7.5 * 1vw);
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      height: calc(93 * 2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      height: calc(93 * 2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(3) {
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(190 * 2 / 7.5 * 1vw);
      right: 0;
      top: 0;
    }
  }
  .four-img {
    height: calc(190 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(4) {
      width: calc(190 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
      right: 0;
      bottom: 0;
    }
  }
  .five-img {
    height: calc(190 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
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
    height: calc(289 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
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
      width: calc(190 * 2 / 7.5 * 1vw);
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      width: calc(190 * 2 / 7.5 * 1vw);
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(6) {
      right: 0;
      bottom: 0;
    }
  }
  .seven-img {
    height: calc(289 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
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
      width: calc(190 * 2 / 7.5 * 1vw);
      right: 0;
      bottom: 0;
    }
  }
  .eight-img {
    height: calc(289 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
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
      width: calc(190 * 2 / 7.5 * 1vw);
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
    height: calc(387 * 2 / 7.5 * 1vw);
    overflow: hidden;
    position: relative;
    .design-item-img {
      display: inline-block;
      border-radius: calc(5 * 2 / 7.5 * 1vw);
      object-fit: cover;
      position: absolute;
      width: calc(93 * 2 / 7.5 * 1vw);
      height: calc(93 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(1) {
      width: calc(190 * 2 / 7.5 * 1vw);
      left: 0;
      top: 0;
    }
    .design-item-img:nth-child(2) {
      right: 0;
      top: 0;
    }
    .design-item-img:nth-child(3) {
      left: 0;
      top: calc(98 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(4) {
      height: calc(190 * 2 / 7.5 * 1vw);
      top: calc(98 * 2 / 7.5 * 1vw);
      left: 0;
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(5) {
      top: calc(98 * 2 / 7.5 * 1vw);
      right: 0;
      margin: auto;
    }
    .design-item-img:nth-child(6) {
      left: 0;
      bottom: calc(98 * 2 / 7.5 * 1vw);
    }
    .design-item-img:nth-child(7) {
      right: 0;
      bottom: calc(98 * 2 / 7.5 * 1vw);
      margin: auto;
    }
    .design-item-img:nth-child(8) {
      left: 0;
      bottom: 0;
    }
    .design-item-img:nth-child(9) {
      width: calc(190 * 2 / 7.5 * 1vw);
      right: 0;
      bottom: 0;
    }
  }
  .liked,
  .liked .icon-dianzan::before {
    color: rgb(252, 97, 66) !important;
  }
  .design-item-menus,
  .design-item-menus .iconfont::before {
    color: rgb(185, 185, 185);
  }
  .design-item-menus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(15 * 2 / 7.5 * 1vw);
    .design-item-comment {
      margin-right: calc(55 * 2 / 7.5 * 1vw);
    }
    .iconfont {
      font-size: calc(18 * 2 / 7.5 * 1vw);
      width: calc(18 * 2 / 7.5 * 1vw);
      margin-right: calc(-5 * 2 / 7.5 * 1vw);
    }
  }
  //预览图片
  .preview {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 500;
    .preview-icon {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 0 calc(5 * 2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .iconfont {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
    .guanbi {
      width: calc(29 * 2 / 7.5 * 1vw);
      height: calc(29 * 2 / 7.5 * 1vw);
      left: 0;
      right: 0;
      bottom: calc(-49 * 2 / 7.5 * 1vw);
      margin: auto;
      .icon-guanbi::before {
        font-size: calc(29 * 2 / 7.5 * 1vw);
        color: #fff;
      }
    }
    .shoucang {
      width: calc(44 * 2 / 7.5 * 1vw);
      height: calc(44 * 2 / 7.5 * 1vw);
      background-color: #fff;
      top: calc(20 * 2 / 7.5 * 1vw);
      right: calc(20 * 2 / 7.5 * 1vw);
      .icon-shoucang::before {
        font-size: calc(18 * 2 / 7.5 * 1vw);
        color: rgb(197, 197, 197);
      }
    }
    .collected::before {
      color: rgb(252, 97, 66) !important;
    }
    .xiazai {
      width: calc(44 * 2 / 7.5 * 1vw);
      height: calc(44 * 2 / 7.5 * 1vw);
      background-color: #fff;
      left: calc(40 * 2 / 7.5 * 1vw);
      bottom: calc(30 * 2 / 7.5 * 1vw);
      .icon-xiazai::before {
        font-size: calc(18 * 2 / 7.5 * 1vw);
        color: rgb(252, 97, 66);
      }
    }
    .shang {
      width: calc(60 * 2 / 7.5 * 1vw);
      height: calc(60 * 2 / 7.5 * 1vw);
      background-color: #fff;
      left: 0;
      right: 0;
      bottom: calc(20 * 2 / 7.5 * 1vw);
      margin: auto;
      .icon-shang {
        width: calc(35 * 2 / 7.5 * 1vw);
        height: calc(35 * 2 / 7.5 * 1vw);
        border-radius: 50%;
        background-color: rgb(252, 97, 66);
      }
      .icon-shang::before {
        font-size: calc(16 * 2 / 7.5 * 1vw);
        color: #fff;
      }
    }
    .fenxiang {
      width: calc(44 * 2 / 7.5 * 1vw);
      height: calc(44 * 2 / 7.5 * 1vw);
      background-color: #fff;
      right: calc(40 * 2 / 7.5 * 1vw);
      bottom: calc(27 * 2 / 7.5 * 1vw);
      .icon-fenxiang::before {
        font-size: calc(17 * 2 / 7.5 * 1vw);
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
    width: calc(15 * 2 / 7.5 * 1vw) !important;
    background-color: #fff !important;
  }
  .previewSwiper {
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    .vux-img {
      background-size: contain !important;
    }
  }
  //进入离开切换
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  //赞赏
  .reward-box {
    height: 100%;
    display: flex;
    flex-direction: column;
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
    flex: 1;
    position: relative;
    padding: 0 5vw;
    box-sizing: border-box;
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
  ._v-container[data-v-ecaca2b0] {
    top: 87px;
  }
}
</style>
