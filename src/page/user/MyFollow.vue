<template>
  <div class="MyFollow">
    <scroller :on-infinite="onInfinite" ref="scroller" noDataText="我是有底线的..." :class="myFollowList.length<10 ? 'hide-scroller':''">
    <x-header class="x-header" :left-options="{backText: ''}">我的关注</x-header>
    <div class="MyFollowList">
      <flexbox class="flexbox" v-for="(myFollow,index) in myFollowList" :key="index" @click.native="toDetail(myFollow[0].id)">
        <flexbox-item :span="2">
          <img class="avatar" :src="myFollow[0].logos || 'static/img/default-avatar.png'" alt="">
        </flexbox-item>
        <flexbox-item :span="7">
          <div>
            <div class="username">
              {{myFollow[0].nicknames}}
              <i v-if="myFollow[0].sex == 'girl'" class="iconfont icon-nvsheng"></i>
              <i v-else class="iconfont icon-nansheng"></i>
            </div>
            <div class="direc">{{myFollow[0].remarks || '当前大咖有点儿懒。。。'}}</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <x-button
            class="x-button"
            mini
            :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
            @click.native.stop="follow(myFollow[0],index)"
          >已关注</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, XButton, Flexbox, FlexboxItem } from "vux";
import util from '../../util';

export default {
  data() {
    return {
      userInfo: null,
      myFollowList: [],
      pageNum: 1
    };
  },
  components: {
    XHeader,
    XButton,
    Flexbox,
    FlexboxItem
  },
  created: async function() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      this.$vux.loading.show({
        text: 'loading...'
      });
      let data = await util.getData({
        url: `/users/myfollows?loginid=${this.userInfo.id}&pages=${this.pageNum}&rowsmax=10`,
        method: "get"
      });
      this.myFollowList = data;
      this.myFollowList.forEach((items) => {
        items.forEach((item) => {
          item.gender == 1 ? item.sex = 'boy' : item.sex = 'girl';
        });
      });
      this.pageNum++;
      this.$vux.loading.hide();
    }
  },
  methods: {
    toDetail(userId) {
      this.$router.push({
        path: '/page/user/MyRelease',
        name: 'MyRelease',
        params: {
          id: userId,
          type: 'other'
        }
      });
    },
    //关注
    async follow(users,index) {
      let types = 0;
      if (this.userInfo) {
        let data = await util.request({
          url: `/materials/usersfollows`,
          method: "post",
          param: {
            users_mains_id: users.id,
            loginid: this.userInfo.id,
            types: types
          }
        });
        if (data.return_code == "success") {
          this.myFollowList.splice(index,1);
        }
        this.$vux.toast.show({
          text: data.return_data
        });
      } else {
        this.$vux.confirm.show({
          title: "提示",
          content: "请先登录",
          onConfirm: () => {
            this.$router.push({
              path: "/page/user/LoginIndex"
            });
          }
        });
      }
    },
    onInfinite(done) {
      if(this.pageNum == 1) {
        done();
        return false;
      }
      setTimeout(async () => {
        let data = await util.getData({
          url: `/users/myfollows?loginid=${this.userInfo.id}&pages=${
            this.pageNum
          }&rowsmax=10`,
          method: "get"
        });
        if (data == "") {
          this.$refs.scroller.finishInfinite(2);
          return false;
        }
        this.myFollowList = this.myFollowList.concat(data);
        this.myFollowList.forEach(items => {
          items.forEach(item => {
            item.gender == 1 ? (item.sex = "boy") : (item.sex = "girl");
          });
        });
        this.pageNum++;
        done();
      }, 1000);
    }
  }
};
</script>

<style lang="less">
.MyFollow {
  .x-header,
  .flexbox {
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .flexbox {
    width: 100%;
    padding: 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: calc(40 * 2 / 7.5 * 1vw);
    height: calc(40 * 2 / 7.5 * 1vw);
    border-radius: 50%;
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 * 2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 * 2 / 7.5 * 1vw);
  }
  .icon-nansheng {
    color: rgb(75, 157, 255) !important;
  }
  .direc,
  .username {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: calc(12 * 2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: calc(15 * 2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: calc(60 * 2 / 7.5 * 1vw);
    height: calc(30 * 2 / 7.5 * 1vw);
    padding: 0;
    margin: 0;
  }
  .no-follow {
    color: rgb(525, 97, 66);
    background-color: #fff;
  }
  .no-follow::after {
    border-color: rgb(525, 97, 66);
  }
  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>




