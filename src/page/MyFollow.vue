<template>
  <div class="MyFollow">
    <x-header class="x-header" :left-options="{backText: ''}">我的关注</x-header>
    <div class="MyFollowList">
      <flexbox class="flexbox">
        <flexbox-item :span="2">
          <img class="avatar" src="src/assets/img/test/avatar.png" alt>
        </flexbox-item>
        <flexbox-item :span="7">
          <div>
            <div class="username">
              把我还给自己
              <i class="iconfont icon-nvsheng"></i>
            </div>
            <div class="direc">为天地立心,为生民立命,为往圣继绝学,为万世开太平！</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <x-button class="x-button" mini :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']">已关注</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {};
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
    border-bottom: 1px solid rgb(229, 229, 229);
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
    width: 40px;
    height: 40px;
  }
  .username {
    font-size: 15px;
  }
  .icon-nvsheng {
    width: 15px;
    color: rgb(255, 108, 152) !important;
    margin-left: -10px;
  }
  .direc {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: rgb(169, 169, 169);
  }
  .x-button {
    width: 60px;
    height: 30px;
    padding: 0;
  }
}
</style>
