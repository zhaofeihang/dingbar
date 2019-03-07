<template>
  <div class="MobileNumLogin">
    <x-header class="x-header" :left-options="{backText: ''}">
      <span class="to-register" slot="right">
        <router-link to="/page/user/Register">注册</router-link>
      </span>
    </x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">忘记密码</h1>
        <x-input v-model="mobile" class="mobile" title="手机" placeholder="请输入手机号"></x-input>
        <x-input v-model="pwd" class="pwd" title="密码" placeholder="请输入新密码"></x-input>
        <x-button class="login-commit" @click.native="commit">确认</x-button>
        <div class="fast-login">
          <div class="title">其他方式登录</div>
          <div class="btns">
            <i class="iconfont icon-xinlang"></i>
            <i class="iconfont icon-weixin1"></i>
            <i class="iconfont icon-QQ"></i>
          </div>
        </div>
        <div class="statement-box">
          登录或注册即同意舍豆
          <span>《用户服务协议》</span>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, XInput } from "vux";

export default {
  data() {
    return {
      mobile: "",
      pwd: ""
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
    commit() {
      let mobile = this.mobile;
      let pwd = this.pwd;
      if (
        mobile.match(
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        ) &&
        pwd
      ) {
        this.$router.push({
          path: `/page/user/MobileInfoVerification`,
          query: {
            type: 'resetPwd',
            mobile: mobile,
            pwd: pwd
          }
        });
        
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  }
};
</script>

<style lang="less">
.MobileNumLogin {
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
  .vux-no-group-title {
    margin-top: 0;
  }
  .mobile,
  .pwd {
    font-size: 15px;
    padding: 15px 0;
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  .weui-label {
    font-weight: 550;
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }
  .login-commit {
    margin-top: 55px;
    background-color: rgb(252, 97, 66);
    color: #fff;
  }

  .fast-login {
    text-align: center;
    margin-top: 75px;
    color: rgb(142, 142, 142);
    font-size: 12px;
    .btns {
      margin-top: 15px;
      .iconfont {
        display: inline-block;
        width: 43px;
        height: 43px;
        line-height: 43px;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 50%;
        margin: 0 20px;
      }
      .iconfont::before {
        color: rgb(235, 85, 85);
        font-size: 25px;
      }
      .icon-weixin1::before {
        color: rgb(70, 187, 43);
      }
      .icon-QQ::before {
        color: rgb(32, 161, 215);
      }
    }
  }
  .statement-box {
    font-size: 12px;
    color: rgb(142, 142, 142);
    text-align: center;
    margin-top: 85px;
    span {
      color: rgb(252, 97, 66);
      font-size: 12px;
      font-weight: 550;
    }
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
