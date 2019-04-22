<template>
  <div class="SetUserInfo">
    <x-header class="x-header" :left-options="{backText: ''}">
      <span slot="right" @click="commit">保存</span>
      设置个人资料
    </x-header>
    <div class="content">
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">头像</div>
        </flexbox-item>
        <flexbox-item>
          <div class="avatar" @click="editAvatar">
            <img :src="userInfo.logos" alt="">
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox">
        <flexbox-item :span="3">
          <div class="flex-demo">昵称</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-input class="x-input" v-model="userInfo.nicknames" placeholder="请输入昵称"></x-input>
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
              v-model="selectSex"
              value-text-align="left"
              placeholder="请选择性别"
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
            <datetime
              v-model="userInfo.birthdays"
              :min-year="minYear"
              :max-year="maxYear"
              placeholder="请选择出生日期"
            ></datetime>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox direc">
        <flexbox-item :span="3">
          <div class="flex-demo">个性签名</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-textarea
              class="x-textarea"
              :rows="2"
              :max="30"
              v-model="userInfo.remarks"
              placeholder="点击输入(最多30个字)"
            ></x-textarea>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <popup class="popup" v-model="popupState">
      <div @click="takePhoto">拍摄</div>
      <div @click="selectAlbum">相册</div>
    </popup>
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
  XTextarea,
  Popup
} from "vux";
import { openAlbum, takePicture } from "../../cordovaplugin";
import util from "../../util";

export default {
  data() {
    return {
      minYear: '1900',
      maxYear: (new Date()).getFullYear(),
      selectSex: ["男"],
      userInfo: {
        nicknames: "",
        birthdays: "",
        remarks: ""
      },
      popupState: false
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
    XTextarea,
    Popup
  },
  created: function() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //头像
    if (!this.userInfo.logos) {
      this.userInfo.logos = "static/img/default-avatar.png";
    }
    //昵称
    if (!this.userInfo.nicknames) {
      this.userInfo.nicknames = "";
    }
    //性别
    if (this.userInfo.gender == 0) {
      this.selectSex = ["女"];
    } else {
      this.selectSex = ["男"];
    }
    //生日
    if (this.userInfo.birthdays == "0000-00-00") {
      this.userInfo.birthdays = "";
    }
    //签名
    if (!this.userInfo.remarks) {
      this.userInfo.remarks = "";
    }
  },
  methods: {
    //拍照
    async takePhoto() {
      let photo = await takePicture();
      if (photo) {
        this.userInfo.logos = await util.convertImg(photo, 100, 100);
      }
      this.popupState = false;
    },
    //相册
    async selectAlbum() {
      let photo = await openAlbum(1);
      if (photo) {
        this.userInfo.logos = await util.convertImg(photo, 100, 100);
      }
      this.popupState = false;
    },
    //头像选择
    editAvatar() {
      this.popupState = true;
    },
    //提交
    async commit() {
      let data = await util.request({
        url: `/users/updates`,
        method: "post",
        param: {
          loginid: this.userInfo.id,
          nicknames: this.userInfo.nicknames,
          genders: this.selectSex[0] == "男" ? 1 : 2,
          logos: this.userInfo.logos,
          birthdays: this.userInfo.birthdays,
          remarks: this.userInfo.remarks
        }
      });
      if (data.return_code == "success") {
        this.$vux.toast.show({
          text: data.return_data,
          type: "text",
          onHide: () => {
            this.$router.push({
              path: "/page/UserIndex"
            });
          }
        });
        let updateUsers = await util.getData({
          url: `/users/usersinfos?loginid=${this.userInfo.id}`,
          method: "get"
        });
        localStorage.setItem('userInfo', JSON.stringify(updateUsers.usersinfos));
      } else {
        this.$vux.alert.show({
          title: "提示",
          content: data.return_data
        });
      }
    }
  }
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
    height: calc(10 * 2 / 7.5 * 1vw);
    background-color: rgb(239, 239, 244);
  }
}
.content {
  padding-left: 5vw;
  background-color: rgb(255, 255, 255);
  .direc {
    align-items: flex-start;
    line-height: calc(20 * 2 / 7.5 * 1vw);
  }
}
.content .flexbox {
  padding: calc(15 * 2 / 7.5 * 1vw) 0;
  padding-right: 5vw;
  box-sizing: border-box;
  border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  .avatar {
    display: flex;
    align-items: center;
    img {
      width: calc(40 * 2 / 7.5 * 1vw);
      height: calc(40 * 2 / 7.5 * 1vw);
      border-radius: 50%;
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
.vux-cell-placeholder {
  color: #777 !important;
}

//选择获取图片方式
.popup {
  text-align: center;
  font-size: calc(15 * 2 / 7.5 * 1vw);
  background-color: rgba(0, 0, 0, 0);
  color: rgb(252, 97, 66);
  padding-bottom: calc(20 * 2 / 7.5 * 1vw);
  div {
    background-color: #fff;
    width: 90vw;
    height: calc(44 * 2 / 7.5 * 1vw);
    line-height: calc(44 * 2 / 7.5 * 1vw);
    margin: auto;
    margin-top: calc(10 * 2 / 7.5 * 1vw);
    border-radius: calc(5 * 2 / 7.5 * 1vw);
  }
}
</style>
