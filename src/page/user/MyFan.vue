<template>
  <div class="MyFollow">
    <x-header class="x-header" :left-options="{backText: ''}">我的粉丝</x-header>
    <div class="MyFollowList">
      <flexbox class="flexbox" v-for="(myFollow,index) in myFollowList" :key="index">
        <flexbox-item :span="2">
          <img class="avatar" :src="myFollow.avatar" alt>
        </flexbox-item>
        <flexbox-item :span="7">
          <div>
            <div class="username">
              {{myFollow.username}}
              <i v-if="myFollow.sex == 'girl'" class="iconfont icon-nvsheng"></i>
              <i v-else class="iconfont icon-nansheng"></i>
            </div>
            <div class="direc">{{myFollow.direc}}</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <x-button
            v-if="myFollow.follow"
            class="x-button"
            mini
            :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
          >已关注</x-button>
          <x-button v-else class="x-button no-follow" mini>关注</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
      myFollowList: [
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！",
          follow: true
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！",
          follow: false
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！",
          follow: true
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "girl",
          direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！",
          follow: true
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "把我还给自己",
          sex: "boy",
          direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！",
          follow: true
        }
      ]
    };
  },
  components: {
    XHeader,
    XButton,
    Flexbox,
    FlexboxItem
  },
  created: function() {}
};
</script>

<style lang="less">
.MyFollow {
  .x-header,
  .flexbox {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .flexbox {
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: calc(40 *2 / 7.5 * 1vw);
    height: calc(40 *2 / 7.5 * 1vw);
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 *2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 *2 / 7.5 * 1vw);
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
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: calc(15 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: calc(60 *2 / 7.5 * 1vw);
    height: calc(30 *2 / 7.5 * 1vw);
    padding: 0;
    margin: 0;
  }
  .no-follow {
    color: rgb(525, 97, 66);
  }
  .no-follow::after {
    border-color: rgb(525, 97, 66);
  }
  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
