<template>
  <div class="MobileNumLogin">
    <x-header class="x-header" :left-options="{backText: ''}">
      <span class="to-register" slot="right">注册</span>
    </x-header>
    <div class="content-box">
      <h1 class="title">手机号登录</h1>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
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
.MobileNumLogin {
  .to-register {
    font-size: 15px;
    color: rgb(142,142,142);
  }
  .content-box {
    padding: 0 10vw;
  }
  .title {
    height: 135px;
    line-height: 135px;
  }
}
</style>
