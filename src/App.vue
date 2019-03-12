<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
    <tabbar class="tabbar" v-if="showTabbar">
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
    <popup v-model="releaseShowState" height="calc(190 *2 / 7.5 * 1vw)" is-transparent>
      <div class="release-view">
        <span @click="takephoto">
          <i slot="icon" class="iconfont icon-xiangji"></i>
          拍照
        </span>
        <span @click="selectImg">
          <i slot="icon" class="iconfont icon-xiangce"></i>
          相册
        </span>
      </div>
    </popup>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Popup } from "vux";
import { openAlbum, takePicture } from "../static/cordovaplugin.js";
export default {
  name: "app",
  data() {
    return {
      photos: [],
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
    },
    async takephoto() {
      let photo = await takePicture();
      this.photos.push(photo);
      this.$router.push({
        path: '/page/release/ReleaseImgEdit',
        name: 'ReleaseImgEdit',
        params: {
          photos: this.photos
        }
      });
      this.releaseShowState = false;
    },
    async selectImg() {
      let photos = await openAlbum();
      this.$router.push({
        path: '/page/release/ReleaseImgEdit',
        name: 'ReleaseImgEdit',
        params: {
          photos: this.photos.concat(photos)
        }
      });
      this.releaseShowState = false;
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
  width: calc(18 *2 / 7.5 * 1vw);
  height: calc(18 *2 / 7.5 * 1vw);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -calc(10 *2 / 7.5 * 1vw);
  .icon-xiaoxi::before {
    font-size: calc(18 *2 / 7.5 * 1vw);
  }
  .message-badge {
    position: absolute;
    right: calc(8 *2 / 7.5 * 1vw);
    top: calc(8 *2 / 7.5 * 1vw);
    transform: translate(90%, -90%);
  }
}
#app .vux-header .vux-header-left .left-arrow:before {
  width: calc(8 *2 / 7.5 * 1vw);
  height: calc(8 *2 / 7.5 * 1vw);
  border-width: calc(2 *2 / 7.5 * 1vw) 0 0 calc(2 *2 / 7.5 * 1vw);
  top: calc(10 *2 / 7.5 * 1vw);
}
#app .iconfont,
.weui-tabbar__label {
  color: rgb(51, 51, 51);
}
.weui-tabbar {
  position: fixed !important;
  background-color: rgba(255, 255, 255, 0) !important;
  z-index: 100 !important;
  .weui-bar__item_on .iconfont,
  .weui-bar__item_on .weui-tabbar__label {
    color: rgb(252, 97, 66) !important;
  }
  .iconfont {
    font-size: calc(18 *2 / 7.5 * 1vw);
    line-height: calc(18 *2 / 7.5 * 1vw);
  }
  .weui-tabbar__icon {
    width: auto;
    height: auto;
  }
  .icon-tianjiafabu {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(50 *2 / 7.5 * 1vw);
    height: calc(50 *2 / 7.5 * 1vw);
    font-size: calc(52 *2 / 7.5 * 1vw);
    margin-top: calc(-13 *2 / 7.5 * 1vw);
    border-radius: 50%;
    overflow: hidden;
  }

  .icon-tianjiafabu::before {
    margin: auto;
  }
}
.weui-tabbar:before {
  display: none;
}
.tabbar {
  height: calc(49 *2 / 7.5 * 1vw);
  padding-top: calc(16 *2 / 7.5 * 1vw);
  background-image: linear-gradient(
      0deg,
      #fff 0%,
      #fff calc(47 *2 / 7.5 * 1vw),
      transparent calc(49 *2 / 7.5 * 1vw),
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 50%,
      #fff 0%,
      #fff calc(30 *2 / 7.5 * 1vw),
      rgb(212,212,212) calc(32 *2 / 7.5 * 1vw),
      transparent calc(32 *2 / 7.5 * 1vw)
    ),
    linear-gradient(
      0deg,
      #fff 0%,
      #fff calc(47 *2 / 7.5 * 1vw),
      rgb(212,212,212) calc(49 *2 / 7.5 * 1vw),
      rgb(212,212,212) calc(49 *2 / 7.5 * 1vw),
      transparent calc(49 *2 / 7.5 * 1vw),
      transparent 100%
    );
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
  font-size: calc(13 *2 / 7.5 * 1vw);
  padding: 0 calc(40 *2 / 7.5 * 1vw);
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont {
      font-size: calc(33 *2 / 7.5 * 1vw);
      width: calc(80 *2 / 7.5 * 1vw);
      height: calc(80 *2 / 7.5 * 1vw);
      background-color: #fff;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: calc(10 *2 / 7.5 * 1vw);
    }
    .iconfont::before {
      color: rgb(252, 97, 66);
    }
  }
}
//loading窗口
.weui-toast {
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
