<template>
  <div class="BandUserInfo">
    <x-header class="x-header" :left-options="{backText: ''}"></x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">完善信息</h1>
        <x-input v-model="mobile" class="mobile" title="手机" placeholder="请输入手机号"></x-input>
        <x-input v-model="mobile_code" class="mobile" title="验证" placeholder="请输入验证码">
          <span class="get-verification-code" v-if="state" slot="right">{{time}}秒后重新获取</span>
          <span @click="getSign" class="get-verification-code-btn" v-else slot="right">获取验证码</span>
        </x-input>
        <x-input v-model="pwd" :type="password" class="pwd" title="密码" placeholder="请设置登录密码">
          <i slot="right" @click="pwdToggle" v-show="pwdShowState" class="iconfont icon-mimakejian"></i>
          <i
            slot="right"
            @click="pwdToggle"
            v-show="!pwdShowState"
            class="iconfont icon-mimabukejian"
          ></i>
        </x-input>
        <x-button class="login-commit" @click.native="commit">提交</x-button>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, XInput } from "vux";
import util from "../../util";

export default {
  data() {
    return {
      pwdShowState: false,
      password: "password",
      mobile: "",
      time: 60,
      state: false,
      pwd: "",
      mobile_code: "",
      timer: null
    };
  },
  components: {
    XHeader,
    XButton,
    Group,
    XInput
  },
  created: function() {
    if(this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    async getSign() {
      fetch(
        `http://www.shedouwang.com/api/ajax/sendssms/?regs-${this.mobile}.html`
      )
        .then(response => response.json())
        .then(result => {
          if (result.return_code == "success") {
            let data = result.return_data;
            this.$vux.toast.show({
              text: data,
              type: "text"
            });
            if (data != "1分钟内不能重复获取验证码" && data) {
              this.state = true;
              this.timer = setInterval(() => {
                if (this.time <= 0) {
                  clearInterval(this.timer);
                  this.state = false;
                  this.time = 60;
                }
                --this.time;
              }, 1000);
            } else {
              this.state = false;
            }
          } else {
            this.$vux.alert.show({
              title: "提示",
              content: result.return_data
            });
          }
        })
        .catch(error => {
          this.$vux.alert.show({
              title: "提示",
              content: error
            });
        });
    },
    pwdToggle() {
      this.pwdShowState = !this.pwdShowState;
    },
    //提交
    async commit() {
      let wechatUserinfo = this.$route.params.wechatUserinfo;
      let mobile = this.mobile;
      let pwd = this.pwd;
      let mobile_code = this.mobile_code;
      if (
        mobile.match(
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        ) &&
        pwd
      ) {
        let data = await util.getData({
          url: `/oauth/bands`,
          method: "post",
          param: {
            openid: wechatUserinfo.openid,
            nickname: wechatUserinfo.nickname,
            sex: wechatUserinfo.sex,
            language: wechatUserinfo.language,
            headimgurl: wechatUserinfo.headimgurl,
            unionid: wechatUserinfo.unionid,
            mobile: mobile,
            password: pwd,
            mobile_code: mobile_code
          }
        });
        localStorage.setItem('userInfo',JSON.stringify(data));
        this.$vux.toast.show({
          text: '提交成功',
          onHide: () => {
            this.$router.push({
                path: '/'
              });
          }
        });
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: "请输入正确的手机号或密码"
        });
      }
    }
  },
  watch: {
    pwdShowState(pwdShowState) {
      if (pwdShowState) {
        this.password = "text";
      } else {
        this.password = "password";
      }
    }
  }
};
</script>

<style lang="less">
.BandUserInfo {
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
  .vux-no-group-title {
    margin-top: 0;
  }
  .mobile,
  .pwd {
    font-size: calc(15 *2 / 7.5 * 1vw);
    padding: calc(15 *2 / 7.5 * 1vw) 0;
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(237, 237, 237);
    .iconfont::before {
      color: rgb(197, 197, 197);
    }
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }
  .login-commit {
    margin-top: calc(55 *2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }

  .fast-login {
    text-align: center;
    margin-top: calc(75 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    font-size: calc(12 *2 / 7.5 * 1vw);
    .btns {
      margin-top: calc(15 *2 / 7.5 * 1vw);
      .iconfont {
        display: inline-block;
        width: calc(43 *2 / 7.5 * 1vw);
        height: calc(43 *2 / 7.5 * 1vw);
        line-height: calc(43 *2 / 7.5 * 1vw);
        border: calc(1 *2 / 7.5 * 1vw) solid rgb(226, 226, 226);
        border-radius: 50%;
        margin: 0 calc(20 *2 / 7.5 * 1vw);
      }
      .iconfont::before {
        color: rgb(235, 85, 85);
        font-size: calc(25 *2 / 7.5 * 1vw);
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
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    text-align: center;
    margin-top: calc(85 *2 / 7.5 * 1vw);
    span {
      color: rgb(252, 97, 66);
      font-size: calc(12 *2 / 7.5 * 1vw);
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

  .get-verification-code {
    font-size: calc(11 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
  }
  .get-verification-code-btn {
    font-size: calc(13 *2 / 7.5 * 1vw);
    color: rgb(252, 97, 66);
  }
}
</style>
