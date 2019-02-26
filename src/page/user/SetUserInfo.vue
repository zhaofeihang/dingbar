<template>
  <div class="SetUserInfo">
    <x-header class="x-header" :left-options="{backText: ''}">
      <span slot="right">保存</span>
      设置个人资料
    </x-header>
    <div class="content">
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">头像</div>
        </flexbox-item>
        <flexbox-item>
          <div class="avatar">
            <img src="src/assets/img/test/avatar.png" alt>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">昵称</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-input class="x-input" v-model="userInfo.nickname"></x-input>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">性别</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <popup-picker
              class="popup-picker"
              :data="[['男','女']]"
              v-model="userInfo.sex"
              value-text-align="left"
            ></popup-picker>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">出生日期</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <datetime v-model="userInfo.birthday"></datetime>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox direc">
        <flexbox-item :span="3">
          <div class="flex-demo">个性签名</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-textarea class="x-textarea" :rows="2" :max="30" v-model="userInfo.direc" placeholder="点击输入(最多30个字)"></x-textarea>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  Flexbox,
  FlexboxItem,
  Group,
  XInput,
  PopupPicker,
  Datetime,
  XAddress,
  XTextarea
} from "vux";

export default {
  data() {
    return {
      userInfo: {
        nickname: "把我还给自己",
        sex: ["女"],
        birthday: "2019-02-21",
        direc: "为天地立心,为生民立命,为往圣继绝学,为万世开太平！"
      }
    };
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Group,
    XInput,
    PopupPicker,
    Datetime,
    XAddress,
    XTextarea
  },
  created: function() {},
  methods: {}
};
</script>

<style lang="less">
.SetUserInfo {
  .x-header {
    background-color: rgb(255, 255, 255);
  }
  .x-header::after {
    content: "";
    display: block;
    height: 10px;
    background-color: rgb(239, 239, 244);
  }
}
.content {
  padding-left: 5vw;
  background-color: rgb(255, 255, 255);
  .direc {
    align-items: flex-start;
    line-height: 20px;
  }
}
.content .flexbox {
  padding: 15px 0;
  padding-right: 5vw;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(229, 229, 229);
  .avatar {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .weui-cell {
    padding: 0;
  }
  .weui-cell__ft {
    text-align: left;
    color: rgb(34, 34, 34);
  }
}
.flex-demo {
  color: rgb(139, 139, 139);
}
.content .weui-cell::before {
  display: none;
}
</style>
