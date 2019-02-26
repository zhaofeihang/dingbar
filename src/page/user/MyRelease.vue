<template>
  <div class="MyRelease">
    <x-header class="x-header" :left-options="{backText: ''}">我的发布</x-header>
    <div class="user">
      <x-img class="bgImg" default-src="src/assets/img/test/img.png"></x-img>
      <div class="user-detail">
        <router-link to>
          <x-img class="avatar" default-src="src/assets/img/test/avatar.png"></x-img>
          <div class="username">
            {{userDetail.username}}
            <i class="iconfont icon-nvsheng"></i>
          </div>
          <div class="signature">{{userDetail.signature}}</div>
        </router-link>
        <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <router-link to>
              <span>{{userDetail.release}}</span>
              <br>发布
            </router-link>
            <router-link to>
              <span>{{userDetail.follow}}</span>
              <br>关注
            </router-link>
            <router-link to>
              <span>{{userDetail.fan}}</span>
              <br>粉丝
            </router-link>
            <router-link to>
              <span>{{userDetail.praise}}</span>
              <br>获赞
            </router-link>
          </div>
        </card>
      </div>
      <!-- <div class="img-list">
        <grid class="grid" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item class="grid-item" v-for="(img,index) in imgList" :key="index">
            <x-img :default-src="img"></x-img>
          </grid-item>
        </grid>
      </div>-->
      <div>
        <grid class="grid" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item class="grid-item" v-for="(item, index) in imgList" :key="index">
            <img class="previewer-demo-img" :src="item.src" @click="show(index)">
          </grid-item>
        </grid>
        <div v-transfer-dom>
          <previewer :list="imgList" ref="previewer" :options="options"></previewer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  XImg,
  Card,
  Grid,
  GridItem,
  Previewer,
  TransferDom
} from "vux";

export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      userDetail: {
        avatar: "src/assets/test.avatar.png",
        username: "把我还给自己",
        signature: "再敬往事一杯酒，再美也不要回头",
        release: 100,
        follow: 1000,
        fan: 100,
        praise: 10
      },
      imgList: [
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        },
        {
          msrc: "src/assets/img/test/img.png",
          src: "src/assets/img/test/img.png"
        }
      ],
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          let rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      }
    };
  },
  components: {
    XHeader,
    Card,
    XImg,
    Grid,
    GridItem,
    Previewer
  },
  created: function() {},
  methods: {
    show(index) {
      this.$refs.previewer.show(index);
    }
  }
};
</script>

<style lang="less">
.MyRelease {
  .x-header {
    width: 100%;
    position: absolute;
    z-index: 1000;
    .left-arrow::before {
      border-color: #fff !important;
    }
    .vux-header-title {
      color: #fff;
    }
  }
  .bgImg {
    width: 100%;
    height: 160px;
    object-fit: cover;
    filter: brightness(60%);
  }
  .user-detail {
    margin-top: -50px;
  }
  .username {
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 15px;
    font-weight: 550;
    margin-top: 5px;
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
    width: 65px;
    height: 65px;
    margin-left: 50vw;
    transform: translateX(-50%);
    margin-top: 10px;
    border: 3px solid #fff;
    border-radius: 50%;
  }

  .weui-panel {
    border-radius: 10px;
  }
  .weui-panel::before,
  .weui-panel::after {
    display: none;
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
  .grid {
    padding: 6px 3px;
  }
  .grid-item {
    padding: 0 3px;
  }
  .weui-grids:before {
    display: none;
  }
  .previewer-demo-img {
    width: 100%;
  }
}
</style>
