<template>
  <div class="containBox">
    <x-header class="x-header" :left-options="{showBack: false}">我的
      <i slot="right" class="iconfont icon-shezhi" @click="toSetPage"></i>
    </x-header>
    <x-img class="avatar" default-src="src/assets/img/test/avatar.png"></x-img>
    <div class="username">
      把我还给自己
      <i class="iconfont icon-nvsheng"></i>
    </div>
    <div class="signature">再敬往事一杯酒，再美也不要回头</div>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem, XImg } from "vux";

export default {
  data() {
    return {};
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    XImg
  },
  created: function() {},
  methods: {
    toSetPage: function() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="less">
.containBox {
  padding: 0 5vw;
  box-sizing: border-box;
  .vux-header .vux-header-right {
    right: 0;
  }
}
.icon-shezhi {
  font-size: 18px;
  display: inline-block;
  width: 18px;
}
.username {
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
}
</style>
