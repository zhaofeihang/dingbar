<template>
  <div class="MobileInfoLogin">
    <x-header class="x-header" :left-options="{backText: ''}"></x-header>
    <div class="content-box">
      <group>
        <h1 slot="title" class="login-title">填写验证码</h1>
        <div class="text">短信验证码已发送至&nbsp;&nbsp;{{mobile}}</div>
        <x-input v-model="sign" class="mobile" title="验证" placeholder="请输入验证码">
          <span class="get-verification-code" v-if="state" slot="right">{{time}}秒后重新获取</span>
          <span @click="getSign" class="get-verification-code-btn" v-else slot="right">重新获取</span>
        </x-input>
        <x-button
          v-if="$route.query.type == 'register'"
          @click.native="register"
          class="login-commit"
        >注册</x-button>
        <x-button v-if="$route.query.type == 'login'" @click.native="login" class="login-commit">登录</x-button>
        <x-button
          v-if="$route.query.type == 'resetPwd'"
          @click.native="resetPwd"
          class="login-commit"
        >提交</x-button>
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
      time: 60,
      state: true,
      mobile: "",
      sign: ""
    };
  },
  components: {
    XHeader,
    XButton,
    Group,
    XInput
  },
  created: function() {},
  mounted: async function() {
    this.mobile = this.$route.query.mobile;
    if (this.mobile) {
      this.getSign();
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
              let timer = setInterval(() => {
                if (this.time <= 0) {
                  clearInterval(timer);
                  this.state = false;
                  this.time = 60;
                }
                --this.time;
              }, 1000);
            } else {
              this.state = true;
            }
          } else {
            this.$vux.alert.show({
              title: "提示",
              content: result.return_data
            });
          }
        })
        .catch(error => {
          reject(error);
        });
    },
    async login() {
      let data = await util.getData({
        url: `/users/login?login_username=${
          this.$route.query.mobile
        }&login_type=1&mobile_code=${this.sign}`,
        method: "get"
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      this.$vux.toast.show({
        text: "登录成功",
        type: "text",
        onHide: () => {
          this.$router.push({
            path: "/page/UserIndex"
          });
        }
      });
    },
    async register() {
      let data = await util.getData({
        url: `/users/register`,
        method: "post",
        param: {
          mobile: this.$route.query.mobile,
          password: this.$route.query.pwd
        }
      });
      this.$vux.toast.show({
        text: data,
        type: "text",
        onHide: () => {
          this.$router.push({
            path: '/page/user/MobileNumLogin'
          });
        }
      });
    },
    async resetPwd() {
      let data = await util.getData({
        url: `/users/setpassword`,
        method: "post",
        param: {
          mobile: this.$route.query.mobile,
          password: this.$route.query.pwd,
          sign: this.sign
        }
      });
      this.$vux.toast.show({
        text: data,
        type: "text",
        onHide: () => {
          this.$router.push({
            path: "/page/user/LoginIndex"
          });
        }
      });
    }
  }
};
</script>

<style lang="less">
.MobileInfoLogin {
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
  .text,
  .weui-label {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    font-weight: 550;
  }
  .text {
    padding: calc(15 * 2 / 7.5 * 1vw) 0;
  }
  .mobile {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    padding: calc(15 * 2 / 7.5 * 1vw) 0;
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .login-commit {
    margin-top: calc(55 * 2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .weui-cell::before,
  .weui-cells::before,
  .weui-cells::after {
    display: none;
  }
  .get-verification-code {
    font-size: calc(11 * 2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
  }
  .get-verification-code-btn {
    font-size: calc(13 * 2 / 7.5 * 1vw);
    color: rgb(252, 97, 66);
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
