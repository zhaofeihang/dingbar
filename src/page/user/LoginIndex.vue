<template>
  <div class="LoginIndex">
    <swiper
      class="swiper"
      :height="baseList.pageHeight"
      :show-dots="false"
      :interval="5000"
      :duration="3000"
      :auto="true"
      loop
      :list="baseList.list"
    ></swiper>
    <div class="content-box">
      <x-header class="x-header" :left-options="{backText: '',showBack: false}">
        <span slot="right">
          <router-link class="to-index" to="/">随便逛逛</router-link>
        </span>
      </x-header>
      <div class="logo-box">
        <x-img class="logo-img" default-src="src/assets/img/icon/logo-text.png"></x-img>
        <span class="logo-desc">美好生活研究院</span>
      </div>
      <div class="login-register-btns">
        <x-button is-link class="register" link="/page/user/Register">注册</x-button>
        <div>已经有账号了？</div>
        <x-button is-link class="login" link="/page/user/MobileNumLogin">登录</x-button>
      </div>
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
        <span>用户服务协议</span>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Swiper, XImg, XButton } from "vux";

export default {
  data() {
    return {
      baseList: {
        pageHeight: document.documentElement.clientHeight + "px",
        list: [
          {
            img: "src/assets/img/test/img.png"
          },
          {
            img: "src/assets/img/test/img.png"
          },
          {
            img: "src/assets/img/test/img.png"
          }
        ]
      }
    };
  },
  components: {
    XHeader,
    Swiper,
    XImg,
    XButton
  },
  created: function() {}
};
</script>

<style lang="less">
.LoginIndex {
  .x-header {
    width: 100%;
    position: fixed;
    z-index: 100;
  }
  .content-box {
    width: 100vw;
    height: 100vh;
  }
  .to-index {
    color: rgb(169, 169, 169) !important;
  }
  .swiper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    filter: brightness(40%);
    z-index: -1;
  }
  .logo-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: calc(15 *2 / 7.5 * 1vw);
    padding-top: calc(90 *2 / 7.5 * 1vw);
    .logo-img {
      width: calc(130 *2 / 7.5 * 1vw);
      height: calc(77 *2 / 7.5 * 1vw);
      margin-bottom: calc(20 *2 / 7.5 * 1vw);
    }
  }
  .login-register-btns {
    padding: calc(65 *2 / 7.5 * 1vw) 0;
    .login,
    .register,
    div {
      display: block;
      width: calc(240 *2 / 7.5 * 1vw);
      height: calc(45 *2 / 7.5 * 1vw);
      line-height: calc(45 *2 / 7.5 * 1vw);
      margin: auto;
      text-align: center;
      font-size: calc(14 *2 / 7.5 * 1vw);
    }
    .register {
      background-color: #fff;
      color: rgb(51, 51, 51);
    }
    div {
      height: calc(12 *2 / 7.5 * 1vw);
      font-size: calc(12 *2 / 7.5 * 1vw);
      line-height: calc(12 *2 / 7.5 * 1vw);
      margin-top: calc(17 *2 / 7.5 * 1vw);
      margin-bottom: calc(7 *2 / 7.5 * 1vw);
      color: rgb(142, 142, 142);
    }
    .login {
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      border: calc(1 *2 / 7.5 * 1vw) solid #fff;
      box-sizing: border-box;
    }
  }
  .fast-login {
    text-align: center;
    margin-top: calc(10 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    font-size: calc(12 *2 / 7.5 * 1vw);
    .btns {
      margin-top: calc(15 *2 / 7.5 * 1vw);
      .iconfont {
        display: inline-block;
        width: calc(43 *2 / 7.5 * 1vw);
        height: calc(43 *2 / 7.5 * 1vw);
        line-height: calc(43 *2 / 7.5 * 1vw);
        border: calc(1 *2 / 7.5 * 1vw) solid #fff;
        border-radius: 50%;
        margin: 0 calc(20 *2 / 7.5 * 1vw);
      }
      .iconfont::before {
        color: #fff;
        font-size: calc(25 *2 / 7.5 * 1vw);
      }
    }
  }
  .statement-box {
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
    text-align: center;
    margin-top: calc(80 *2 / 7.5 * 1vw);
    span {
      color: #fff;
      font-size: calc(12 *2 / 7.5 * 1vw);
      font-weight: 550;
    }
  }
}
</style>
