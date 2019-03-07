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
        <cell v-for="(cell,index) in cellArr" :key="index" :title="cell.title" :link="cell.pageUrl">
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
      cellArr: [
        {
          title: "我的发布",
          iconclass: "icon-fabu",
          pageUrl: "/page/MyRelease?type=current"
        },
        {
          title: "我的关注",
          iconclass: "icon-guanzhu",
          pageUrl: "/page/MyFollow?type=current"
        },
        {
          title: "我的收藏",
          iconclass: "icon-shoucangxianxing",
          pageUrl: "/page/MyCollect?type=current"
        },
        { title: "我的粉丝", iconclass: "icon-fensi", pageUrl: "/page/MyFan?type=current" },
        {
          title: "我的收入",
          iconclass: "icon-shouru",
          pageUrl: "/page/MyIncome?type=current"
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
    }catch(data) {
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
        data.usersinfos.logos || "src/assets/img/default-avatar.png";
      data.usersinfos.remarks = data.usersinfos.remarks || "暂无签名";
      this.userInfo = data;
      this.$vux.loading.hide();
    }else {
      this.userInfo = {
        my_fans_total: 0,
        my_follow_total: 0,
        my_post_total: 0,
        my_praise_total: 0,
        usersinfos: {
          gender: "-1",
          logos: "src/assets/img/default-avatar.png",
          nicknames: "未登录",
          remarks: null
        }
      }
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
    font-size: 18px;
    display: inline-block;
    width: 18px;
  }
  .username {
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 15px;
    font-weight: 550;
  }
  .signature {
    text-align: center;
    color: rgb(169, 169, 169);
    font-size: 11px;
  }
  .icon-nvsheng {
    width: 15px;
    color: rgb(255, 108, 152) !important;
    margin-left: -10px;
  }
  .avatar {
    display: block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin: auto;
    margin-top: 10px;
  }

  .weui-cell {
    padding: 20px;
  }
  .weui-panel {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .card {
    font-size: 14px;
    font-weight: 550;
    color: rgb(51, 51, 51);
    margin-bottom: 65px;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 15px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > a {
    flex: 1;
    text-align: center;
    font-size: 12px;
    line-height: 25px;
    font-weight: 550;
    color: rgb(169, 169, 169);
  }
  .card-demo-flex span {
    font-size: 13px;
    color: rgb(51, 51, 51);
  }
}
</style>
