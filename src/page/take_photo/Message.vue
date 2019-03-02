<template>
  <div class="Message">
    <x-header class="x-header" :left-options="{backText: ''}">消息</x-header>
    <div class="design-list" v-for="(designItem,index) in designList" :key="index">
      <flexbox class="flexbox">
        <flexbox-item :span="1.7">
          <img class="avatar" :src="designItem.avatar" alt>
        </flexbox-item>
        <flexbox-item :span="7.3">
          <div>
            <div class="username">{{designItem.username}}</div>
            <div class="direc">{{designItem.direc}}</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <span class="message">
            {{designItem.message}}
          </span>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
        designList: [
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          direc: "2019-02-21 11:10:52",
          message: '打赏10元'
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          direc: "2019-02-21 11:10:52",
          message: '打赏10元'
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          direc: "2019-02-21 11:10:52",
          message: '打赏10元'
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          direc: "2019-02-21 11:10:52",
          message: '打赏10元'
        },
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          direc: "2019-02-21 11:10:52",
          message: '打赏10元'
        },
      ]
    };
  },
  created: function() {},
  methods: {},
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style lang="less">
.Message {
  .x-header {
    background-color: rgb(249, 249, 249);
  }
  .design-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 15px;
    padding-left: 20px;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(229, 229, 229);
    padding-bottom: 15px;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: 40px;
    height: 40px;
  }
  .direc,
  .username {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: 15px;
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .message {
      color: rgb(525, 97, 66);
  }
}
</style>
