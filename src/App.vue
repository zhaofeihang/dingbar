<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
    <tabbar v-if="showTabbar">
      <tabbar-item selected link="/">
        <i slot="icon" class="iconfont icon-suipai"></i>
        <span slot="label">随手拍</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="iconfont icon-tianjiafabu"></i>
      </tabbar-item>
      <tabbar-item link="/page/UserIndex">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  name: "app",
  data() {
    return {
      transitionName: "vux-pop-in"
    };
  },
  created: function() {
    
  },
  computed: {
    showTabbar() {
      if (this.$route.path.match(/\/page/) || this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "vux-pop-in";
      } else {
        this.transitionName = "vux-pop-out";
      }
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
body {
  background-color: rgb(249, 249, 249);
}
.x-header .vux-header-title{
  font-weight: 550 !important;
}
#app .iconfont,
.weui-tabbar__label {
  color: rgb(51, 51, 51);
}
.weui-tabbar {
  position: fixed !important;
  background-color: rgba(0, 0, 0, 0) !important;
  .weui-bar__item_on .iconfont,
  .weui-bar__item_on .weui-tabbar__label {
    color: rgb(252, 97, 66) !important;
  }
  .iconfont {
    font-size: 18px;
    line-height: 18px;
  }
  .weui-tabbar__icon {
    width: auto;
    height: auto;
  }
  .icon-tianjiafabu {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    background-color: rgb(249, 249, 249);
    font-size: 46px;
    border-top: 1px solid rgb(212, 212, 212);
    border-radius: 50%;
    margin-top: -18px;
  }

  .icon-tianjiafabu::before {
    margin: auto;
  }
}
.weui-tabbar:before {
  border-top-color: rgb(212, 212, 212) !important;
}

//页面切换动画
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.router-view {
  width: 100%;
  position: absolute;
  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -moz-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -ms-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -o-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
