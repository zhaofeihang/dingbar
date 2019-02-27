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
    font-size: 15px;
    padding-top: 90px;
    .logo-img {
      width: 130px;
      height: 77px;
      margin-bottom: 20px;
    }
  }
  .login-register-btns {
    padding: 65px 0;
    .login,
    .register,
    div {
      display: block;
      width: 240px;
      height: 45px;
      line-height: 45px;
      margin: auto;
      text-align: center;
      font-size: 14px;
    }
    .register {
      background-color: #fff;
      color: rgb(51, 51, 51);
    }
    div {
      height: 12px;
      font-size: 12px;
      line-height: 12px;
      margin-top: 17px;
      margin-bottom: 7px;
      color: rgb(142, 142, 142);
    }
    .login {
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
    }
  }
  .fast-login {
    text-align: center;
    margin-top: 10px;
    color: rgb(142, 142, 142);
    font-size: 12px;
    .btns {
      margin-top: 15px;
      .iconfont {
        display: inline-block;
        width: 43px;
        height: 43px;
        line-height: 43px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin: 0 20px;
      }
      .iconfont::before {
        color: #fff;
        font-size: 25px;
      }
    }
  }
  .statement-box {
    font-size: 12px;
    color: rgb(142, 142, 142);
    text-align: center;
    margin-top: 80px;
    span {
      color: #fff;
      font-size: 12px;
      font-weight: 550;
    }
  }
}
</style>
