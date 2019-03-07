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
          <div class="avatar">
            <img :src="userInfo.logos" alt>
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
              v-model="userInfo.sex"
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
            <datetime v-model="userInfo.birthdays" placeholder="请选择出生日期"></datetime>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="flexbox direc">
        <flexbox-item :span="3">
          <div class="flex-demo">个性签名</div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <x-textarea class="x-textarea" :rows="2" :max="30" v-model="userInfo.remarks" placeholder="点击输入(最多30个字)"></x-textarea>
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
        nicknames: "",
        sex: "",
        birthdays: "",
        remarks: ""
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
  created: function() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    //头像
    if(!this.userInfo.logos) {
      this.userInfo.logos = "src/assets/img/test/avatar.png";
    }
    //昵称
    if(!this.userInfo.nicknames) {
      this.userInfo.nicknames = "";
    }
    //性别
    if(!this.userInfo.gender) {
      this.userInfo.sex = "";
    }else if(this.userInfo.gender==1){
      this.userInfo.sex = "男";
    }else {
      this.userInfo.sex = "女";
    }
    //生日
    if(this.userInfo.birthdays == '0000-00-00') {
      this.userInfo.birthdays = "";
    }
    //签名
    if(!this.userInfo.remarks) {
      this.userInfo.remarks = "";
    }
  },
  methods: {
    async commit() {
      let data = await util.getData({
        url: `/users/updates`,
        method: "post",
        param: {
          loginid: this.userInfo.id,
          nicknames: this.userInfo.nicknames,
          genders: this.userInfo.sex == "男" ? 1 : 2,
          logos: this.userInfo.logos,
          birthdays: this.userInfo.birthdays,
          remarks: this.userInfo.remarks,
        }
      });
      this.$vux.toast.show({
        text: data,
        type: "text",
        onHide: () => {
          this.$router.push({
            path: '/page/UserIndex'
          });
        }
      });
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
.vux-cell-placeholder {
  color: #777 !important;
}
</style>
