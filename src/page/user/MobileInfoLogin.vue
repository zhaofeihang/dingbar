<template>
  <div class="MobileInfoLogin">
    <x-header class="x-header" :left-options="{backText: ''}"></x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">短信登录</h1>
        <x-input v-model="mobile" class="mobile" title="手机" placeholder="请输入手机号"></x-input>
        <x-button class="login-commit" @click.native="commit">下一步</x-button>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, XInput } from "vux";

export default {
  data() {
    return {
      mobile: ""
    };
  },
  components: {
    XHeader,
    XButton,
    Group,
    XInput
  },
  created: function() {},
  methods: {
    //提交
    commit() {
      let mobile = this.mobile;
      if (
        mobile.match(
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        )
      ) {
        this.$router.push({
          path: `/page/user/MobileInfoVerification`,
          query: {
            type: "login",
            mobile: mobile
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号码"
        });
      }
    }
  }
};
</script>

<style lang="less">
.MobileInfoLogin {
  .to-register a {
    font-size: calc(15 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142) !important;
  }
  .content-box {
    padding: 0 10vw;
  }
  .login-title {
    height: calc(135 *2 / 7.5 * 1vw);
    line-height: calc(135 *2 / 7.5 * 1vw);
  }
  .mobile {
    font-size: calc(15 *2 / 7.5 * 1vw);
    padding: calc(15 *2 / 7.5 * 1vw) 0;
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .login-commit {
    margin-top: calc(105 *2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .weui-label {
    font-weight: 550;
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: rgb(192, 192, 192);
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgb(192, 192, 192);
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgb(192, 192, 192);
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(192, 192, 192);
  }
}
</style>
