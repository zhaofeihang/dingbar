<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
    <tabbar v-if="showTabbar">
      <tabbar-item :selected="$route.path=='/'" link="/">
        <i slot="icon" class="iconfont icon-suipai"></i>
        <span slot="label">随手拍</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" @click="releaseShow" class="iconfont icon-tianjiafabu"></i>
      </tabbar-item>
      <tabbar-item :selected="$route.path=='/page/UserIndex'" link="/page/UserIndex">
        <i slot="icon" class="iconfont icon-wode"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <popup v-model="releaseShowState" height="190px" is-transparent>
      <div class="release-view">
        <span>
          <i slot="icon" class="iconfont icon-xiangji"></i>
          拍照
        </span>
        <span>
          <i slot="icon" class="iconfont icon-xiangce"></i>
          相册
        </span>
      </div>
    </popup>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Popup } from "vux";
export default {
  name: "app",
  data() {
    return {
      transitionName: "vux-pop-in",
      showTabbar: true,
      releaseShowState: false
    };
  },
  created: function() {
    switch (this.$route.path) {
        case "/":
          this.showTabbar = true;
          break;
        case "/page/UserIndex":
          this.showTabbar = true;
          break;

        default:
          this.showTabbar = false;
          break;
      }
  },
  computed: {},
  methods: {
    releaseShow() {
      this.releaseShowState = true;
    }
  },
  watch: {
    $route(to, from) {
      switch (to.path) {
        case "/":
          this.showTabbar = true;
          break;
        case "/page/UserIndex":
          this.showTabbar = true;
          break;

        default:
          this.showTabbar = false;
          break;
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = "vux-pop-in";
      } else {
        this.transitionName = "vux-pop-out";
      }
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Popup
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
body .containBox {
  background-color: rgb(255, 255, 255);
}
.x-header .vux-header-title {
  font-weight: 550 !important;
}
.message-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -10px;
  .icon-xiaoxi::before {
    font-size: 18px;
  }
  .message-badge {
    position: absolute;
    right: 8px;
    top: 8px;
    transform: translate(90%,-90%);
  }
}
#app .vux-header .vux-header-left .left-arrow:before {
  width: 8px;
  height: 8px;
  border-width: 2px 0 0 2px;
  top: 10px;
}
#app .iconfont,
.weui-tabbar__label {
  color: rgb(51, 51, 51);
}
.weui-tabbar {
  position: fixed !important;
  background-color: rgba(255, 255, 255, 1) !important;
  z-index: 100 !important;
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

.release-view {
  color: #fff;
  font-size: 13px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont {
      font-size: 33px;
      width: 80px;
      height: 80px;
      background-color: #fff;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    .iconfont::before {
      color: rgb(252, 97, 66);
    }
  }
}
//loading窗口
.weui-toast {
  top: 50%;
  transform: translate(-50%,-50%); 
}
</style>
