<template>
  <div class="UserIndex" v-if="userInfo">
    <x-header class="x-header" :left-options="{showBack: false}">
      我的
      <i slot="right" class="iconfont icon-shezhi" @click="toSetPage"></i>
    </x-header>
    <div @click="to">
      <x-img class="avatar" :default-src="userInfo.usersinfos.logos"></x-img>
      <div class="username">
        {{userInfo.usersinfos.nicknames}}
        <i
          v-if="userInfo.usersinfos.gender == 1"
          class="iconfont icon-nansheng"
        ></i>
        <i v-else class="iconfont icon-nvsheng"></i>
      </div>
      <div class="signature">{{userInfo.usersinfos.remarks}}</div>
    </div>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <router-link to>
          <span>{{userInfo.my_post_total}}</span>
          <br>发布
        </router-link>
        <router-link to>
          <span>{{userInfo.my_follow_total}}</span>
          <br>关注
        </router-link>
        <router-link to>
          <span>{{userInfo.my_fans_total}}</span>
          <br>粉丝
        </router-link>
        <router-link to>
          <span>{{userInfo.my_praise_total}}</span>
          <br>获赞
        </router-link>
      </div>
    </card>
    <card class="card">
      <div slot="content">
        <cell
          v-for="(cell,index) in cellArr"
          :key="index"
          :title="cell.title"
          @click.native="toPageUrl(cell)"
        >
          <i slot="icon" class="iconfont" :class="cell.iconclass"></i>
        </cell>
      </div>
    </card>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, XImg, Card, Cell } from "vux";
import util from "../util";

export default {
  data() {
    return {
      userId: "",
      userInfo: null,
      loginState: false,
      cellArr: [
        {
          title: "我的发布",
          iconclass: "icon-fabu",
          name: 'MyRelease',
          pageUrl: "/page/MyRelease",
          params: {
            type: 'current'
          }
        },
        {
          title: "我的关注",
          iconclass: "icon-guanzhu",
          name: 'MyFollow',
          pageUrl: "/page/MyFollow"
        },
        {
          title: "我的收藏",
          iconclass: "icon-shoucangxianxing",
          name: 'MyCollect',
          pageUrl: "/page/MyCollect"
        },
        {
          title: "我的粉丝",
          iconclass: "icon-fensi",
          name: 'MyFan',
          pageUrl: "/page/MyFan"
        },
        {
          title: "我的收入",
          iconclass: "icon-shouru",
          name: 'MyIncome',
          pageUrl: "/page/MyIncome"
        }
      ]
    };
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    XImg,
    Card,
    Cell
  },
  created: function() {},
  mounted: async function() {
    try {
      this.userId = JSON.parse(localStorage.getItem("userInfo")).id;
    } catch (data) {
      this.userId = false;
    }
    if (this.userId) {
      this.$vux.loading.show({
        text: "Loading"
      });
      let data = await util.getData({
        url: `/users/usersinfos?loginid=${this.userId}`,
        method: "get"
      });
      data.usersinfos.logos =
        data.usersinfos.logos || "static/img/default-avatar.png";
      data.usersinfos.remarks =
        data.usersinfos.remarks || "当前大咖有点儿懒。。。";
      this.userInfo = data;
      this.loginState = true;
      this.$vux.loading.hide();
    } else {
      this.loginState = false;
      this.userInfo = {
        my_fans_total: 0,
        my_follow_total: 0,
        my_post_total: 0,
        my_praise_total: 0,
        usersinfos: {
          gender: "-1",
          logos: "static/img/default-avatar.png",
          nicknames: "未登录",
          remarks: null
        }
      };
    }
  },
  methods: {
    toSetPage: function() {
      this.$router.push("/page/MySet");
    },
    to() {
      if (this.userId) {
        this.$router.push("/page/user/SetUserInfo");
      } else {
        this.$router.push("/page/user/LoginIndex");
      }
    },
    toPageUrl(cell) {
      if (!this.loginState) {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
      } else {
        this.$router.push({
          path: cell.pageUrl,
          name: cell.name,
          params: cell.params
        });
      }
    }
  }
};
</script>

<style lang="less">
.UserIndex {
  padding: 0 5vw;
  box-sizing: border-box;
  .vux-header .vux-header-right {
    right: 0;
  }
  .icon-shezhi {
    font-size: calc(18 * 2 / 7.5 * 1vw);
    display: inline-block;
    width: calc(18 * 2 / 7.5 * 1vw);
  }
  .username {
    padding-left: calc(20 * 2 / 7.5 * 1vw);
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: calc(15 * 2 / 7.5 * 1vw);
    font-weight: 550;
  }
  .signature {
    text-align: center;
    color: rgb(169, 169, 169);
    font-size: calc(11 * 2 / 7.5 * 1vw);
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 * 2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: calc(-10 * 2 / 7.5 * 1vw);
  }
  .icon-nansheng {
    color: rgb(75, 157, 255) !important;
  }
  .avatar {
    display: block;
    width: calc(65 * 2 / 7.5 * 1vw);
    height: calc(65 * 2 / 7.5 * 1vw);
    border-radius: 50%;
    margin: auto;
    margin-top: calc(10 * 2 / 7.5 * 1vw);
  }

  .weui-cell {
    padding: calc(20 * 2 / 7.5 * 1vw);
  }
  .weui-panel {
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 * 2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
  }
  .card {
    font-size: calc(14 * 2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
    margin-bottom: calc(65 * 2 / 7.5 * 1vw);
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: calc(15 * 2 / 7.5 * 1vw) 0;
  }
  .card-padding {
    padding: calc(15 * 2 / 7.5 * 1vw);
  }
  .card-demo-flex > a {
    flex: 1;
    text-align: center;
    font-size: calc(12 * 2 / 7.5 * 1vw);
    line-height: calc(25 * 2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(169, 169, 169);
  }
  .card-demo-flex span {
    font-size: calc(13 * 2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
  }
}
</style>
