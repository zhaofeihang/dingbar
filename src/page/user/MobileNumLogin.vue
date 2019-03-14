<template>
  <div class="MobileNumLogin">
    <x-header class="x-header" :left-options="{backText: ''}">
      <span class="to-register" slot="right">
        <router-link to="/page/user/Register">注册</router-link>
      </span>
    </x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">手机号登录</h1>
        <x-input v-model="mobile" class="mobile" title="手机" placeholder="请输入手机号"></x-input>
        <x-input v-model="pwd" type="password" class="pwd" title="密码" placeholder="请输入登录密码"></x-input>
        <div class="forget-pwd">
          <router-link to="/page/user/MobileInfoLogin">短信登录</router-link>
          <router-link to="/page/user/ForgetPwd">忘记密码？</router-link>
        </div>
        <x-button class="login-commit" @click.native="loginCommit">立即登录</x-button>
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
import { mapMutations } from "vuex";
import util from "../../util";

export default {
  data() {
    return {
      mobile: "",
      pwd: ""
    };
  },
  computed: {},
  components: {
    XHeader,
    XButton,
    Group,
    XInput
  },
  created: function() {},
  methods: {
    ...mapMutations({
      updateUserInfo: "updateUserInfo"
    }),
    async loginCommit() {
      let mobile = this.mobile;
      let pwd = this.pwd;
      if (
        mobile.match(
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        ) &&
        pwd
      ) {
        let data = await util.request({
          url: `/users/login`,
          method: "post",
          param: {
            login_username: mobile,
            login_type: 0,
            login_password: pwd
          }
        });
        if (data.return_code == "success") {
          let userInfo = data.return_data;
          this.$vux.toast.show({
            text: "登录成功",
            onHide: () => {
              this.$router.go(-1);
            }
          });
          this.updateUserInfo(userInfo);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
        } else {
          this.$vux.alert.show({
            title: "提示",
            content: "登录失败，请稍后重试"
          });
        }
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "手机号或密码有误"
        });
      }
    }
  }
};
</script>

<style lang="less">
.MobileNumLogin {
  .to-register a {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    color: rgb(142, 142, 142) !important;
  }
  .content-box {
    padding: 0 10vw;
  }
  .login-title {
    height: calc(135 * 2 / 7.5 * 1vw);
    line-height: calc(135 * 2 / 7.5 * 1vw);
  }
  .vux-no-group-title {
    margin-top: 0;
  }
  .mobile,
  .pwd {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    padding: calc(15 * 2 / 7.5 * 1vw) 0;
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .weui-label {
    font-weight: 550;
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }
  .forget-pwd {
    font-size: calc(13 * 2 / 7.5 * 1vw);
    margin-top: calc(15 * 2 / 7.5 * 1vw);
    display: flex;
    justify-content: space-between;
    a {
      color: rgb(51, 51, 51) !important;
    }
  }
  .login-commit {
    margin-top: calc(25 * 2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }

  .fast-login {
    text-align: center;
    margin-top: calc(75 * 2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    font-size: calc(12 * 2 / 7.5 * 1vw);
    .btns {
      margin-top: calc(15 * 2 / 7.5 * 1vw);
      .iconfont {
        display: inline-block;
        width: calc(43 * 2 / 7.5 * 1vw);
        height: calc(43 * 2 / 7.5 * 1vw);
        line-height: calc(43 * 2 / 7.5 * 1vw);
        border: calc(1 * 2 / 7.5 * 1vw) solid rgb(226, 226, 226);
        border-radius: 50%;
        margin: 0 calc(20 * 2 / 7.5 * 1vw);
      }
      .iconfont::before {
        color: rgb(235, 85, 85);
        font-size: calc(25 * 2 / 7.5 * 1vw);
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
    font-size: calc(12 * 2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    text-align: center;
    margin-top: calc(85 * 2 / 7.5 * 1vw);
    span {
      color: rgb(252, 97, 66);
      font-size: calc(12 * 2 / 7.5 * 1vw);
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
