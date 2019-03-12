<template>
  <div class="MyRelease" v-if="showState">
    <x-header class="x-header" :left-options="{backText: ''}">我的发布</x-header>
    <div class="user">
      <x-img class="bgImg" :default-src="userInfo.imgList[0].src"></x-img>
      <div class="user-detail">
        <router-link to>
          <x-img class="avatar" :default-src="userInfo.usersinfos.logos"></x-img>
          <div class="username">
            {{userInfo.usersinfos.nicknames}}
            <i class="iconfont icon-nvsheng"></i>
          </div>
          <div class="signature">{{userInfo.usersinfos.remarks}}</div>
        </router-link>
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
          <grid-item class="grid-item" v-for="(item, index) in userInfo.imgList" :key="index">
            <img class="previewer-demo-img" :src="item.src">
            <span>
              <i class="iconfont icon-shuliangbiaoqian"></i>
              <span>{{item.imgCount}}</span>
            </span>
          </grid-item>
        </grid>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg, Card, Grid, GridItem } from "vux";
import util from "../../util";

export default {
  data() {
    return {
      userInfo: {},
      showState: false
    };
  },
  components: {
    XHeader,
    Card,
    XImg,
    Grid,
    GridItem
  },
  created: async function() {
    let type = this.$route.query.type;
    let userInfo = localStorage.getItem("userInfo");
    if (type == "current") {
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
        data.usersinfos.remarks = data.usersinfos.remarks || "暂无签名";
        this.userInfo = data;
        /*
         ** 发布信息
         */
        this.userInfo.imgList = [];
        let imgList = await util.getData({
          url: `/users/mypublishes?loginid=${this.userId}`,
          method: "get"
        });
        imgList.forEach((item,index) => {
          this.userInfo.imgList.push({
            src: item.thumbs,
            imgCount: item.image_total,
            id: item.id
          });
        });
        this.showState = true;
        this.$vux.loading.hide();
      }
    }
  },
  methods: {}
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
    height: calc(160 *2 / 7.5 * 1vw);
    object-fit: cover;
    filter: brightness(60%);
  }
  .user-detail {
    margin-top: -calc(50 *2 / 7.5 * 1vw);
  }
  .username {
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: calc(15 *2 / 7.5 * 1vw);
    font-weight: 550;
    margin-top: calc(5 *2 / 7.5 * 1vw);
  }
  .signature {
    text-align: center;
    color: rgb(169, 169, 169);
    font-size: calc(11 *2 / 7.5 * 1vw);
  }
  .icon-nvsheng {
    width: calc(15 *2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 *2 / 7.5 * 1vw);
  }
  .avatar {
    width: calc(65 *2 / 7.5 * 1vw);
    height: calc(65 *2 / 7.5 * 1vw);
    margin-left: 50vw;
    transform: translateX(-50%);
    margin-top: calc(10 *2 / 7.5 * 1vw);
    border: calc(3 *2 / 7.5 * 1vw) solid #fff;
    border-radius: 50%;
  }

  .weui-panel {
    border-radius: calc(10 *2 / 7.5 * 1vw);
  }
  .weui-panel::before,
  .weui-panel::after {
    display: none;
  }
  .card {
    font-size: calc(14 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: calc(15 *2 / 7.5 * 1vw) 0;
  }
  .card-padding {
    padding: calc(15 *2 / 7.5 * 1vw);
  }
  .card-demo-flex > a {
    flex: 1;
    text-align: center;
    font-size: calc(12 *2 / 7.5 * 1vw);
    line-height: calc(25 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(169, 169, 169);
  }
  .card-demo-flex span {
    font-size: calc(13 *2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
  }
  .grid {
    padding: calc(6 *2 / 7.5 * 1vw) calc(3 *2 / 7.5 * 1vw);
  }
  .grid-item {
    padding: 0 calc(3 *2 / 7.5 * 1vw);
    position: relative;
    .icon-shuliangbiaoqian {
      font-size: calc(22 *2 / 7.5 * 1vw);
    }
    > span {
      position: absolute;
      top: 0;
      right: calc(8 *2 / 7.5 * 1vw);
      display: inline-block;
      width: calc(18 *2 / 7.5 * 1vw);
      height: calc(22 *2 / 7.5 * 1vw);
      .icon-shuliangbiaoqian,
      span {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-shuliangbiaoqian {
        color: rgb(252, 97, 66) !important;
      }
      span {
        bottom: 10%;
        color: #fff;
        font-size: calc(12 *2 / 7.5 * 1vw);
        transform: scale(0.6);
      }
    }
  }
  .weui-grids:before {
    display: none;
  }
  .previewer-demo-img {
    width: 100%;
  }
}
</style>
