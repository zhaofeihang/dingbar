<template>
  <div class="MobileInfoLogin">
    <x-header class="x-header" :left-options="{backText: ''}">
    </x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">填写验证码</h1>
        <div class="text">短信验证码已发送至&nbsp;&nbsp;{{mobile}}</div>
        <x-input class="mobile" title="验证码" placeholder="请输入验证码">
          <span class="get-verification-code" v-if="state" slot="right">50秒后重新获取</span>
          <span class="get-verification-code-btn" v-else slot="right">重新获取</span>
        </x-input>
        <x-button class="login-commit" link="/page/user/MobileInfoVerification">注册</x-button>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, XInput } from "vux";

export default {
  data() {
    return {
      state: false,
      mobile: '137 6176 5795'
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
  }
};
</script>

<style lang="less">
.MobileInfoLogin {
  .to-register a {
    font-size: 15px;
    color: rgb(142, 142, 142) !important;
  }
  .content-box {
    padding: 0 10vw;
  }
  .login-title {
    height: 135px;
    line-height: 135px;
  }
  .text,.weui-label {
    font-size: 15px;
    font-weight: 550;
  }
  .text {
    padding: 15px 0;
  }
  .mobile {
    font-size: 15px;
    padding: 15px 0;
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  .login-commit {
    margin-top: 55px;
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }
  .get-verification-code {
    font-size: 11px;
    color: rgb(142,142,142);
  }
  .get-verification-code-btn {
    font-size: 13px;
    color: rgb(252,97,66);
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
