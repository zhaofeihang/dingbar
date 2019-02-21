<template>
  <div class="UserIndex">
    <x-header class="x-header" :left-options="{showBack: false}">
      我的
      <i slot="right" class="iconfont icon-shezhi" @click="toSetPage"></i>
    </x-header>
    <router-link to="/page/SetUserInfo">
      <x-img class="avatar" default-src="src/assets/img/test/avatar.png"></x-img>
      <div class="username">
        把我还给自己
        <i class="iconfont icon-nvsheng"></i>
      </div>
      <div class="signature">再敬往事一杯酒，再美也不要回头</div>
    </router-link>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <router-link to="/page/MyRelease">
          <span>1130</span>
          <br>发布
        </router-link>
        <router-link to="/page/MyFollow">
          <span>15</span>
          <br>关注
        </router-link>
        <router-link to="/page/MyFan">
          <span>0</span>
          <br>粉丝
        </router-link>
        <router-link to="">
          <span>88</span>
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

export default {
  data() {
    return {
      cellArr: [
        {
          title: "我的发布",
          iconclass: "icon-fabu",
          pageUrl: "/page/MyRelease"
        },
        {
          title: "我的关注",
          iconclass: "icon-guanzhu",
          pageUrl: "/page/MyFollow"
        },
        {
          title: "我的收藏",
          iconclass: "icon-shoucang",
          pageUrl: "/page/MyCollect"
        },
        { title: "我的粉丝", iconclass: "icon-fensi", pageUrl: "/page/MyFan" },
        {
          title: "我的收入",
          iconclass: "icon-shouru",
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
  methods: {
    toSetPage: function() {
      this.$router.push("/page/MySet");
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
    margin: auto;
    margin-top: 10px;
  }

  .weui-panel {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .card {
    font-size: 14px;
    font-weight: 550;
    color: rgb(51, 51, 51);
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
