<template>
  <div class="DesignDetail">
    <x-header class="x-header" :left-options="{backText: ''}">
      详情
      <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
          <badge class="message-badge" text="8"></badge>
          <i class="iconfont icon-xiaoxi"></i>
      </router-link>
    </x-header>
    <div class="content-box">
      <div
        class="design-list"
        v-for="(designItem,designItemIndex) in designList"
        :key="designItemIndex"
      >
        <flexbox class="flexbox">
          <flexbox-item :span="1.7">
            <img class="avatar" :src="designItem.avatar" alt>
          </flexbox-item>
          <flexbox-item :span="7.3">
            <div>
              <div class="username">
                {{designItem.username}}
                <i
                  v-if="designItem.sex == 'girl'"
                  class="iconfont icon-nvsheng"
                ></i>
                <i v-else class="iconfont icon-nansheng"></i>
              </div>
              <div class="direc">{{designItem.direc}}</div>
            </div>
          </flexbox-item>
          <flexbox-item class="x-button-box" :span="3">
            <x-button
              v-if="designItem.follow"
              class="x-button"
              mini
              :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
            >已关注</x-button>
            <x-button v-else class="x-button no-follow" mini>关注</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item class="desc">有念念不忘的美好，有爱而不得的疼痛。有念念不忘的美好，有爱而不得的疼痛。</flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item>
            <swiper height="300px" class="swiper" loop :list="designItem.designImgList"></swiper>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
            <div class="design-item-menus">
              <span class="design-item-praise">
                <i class="iconfont icon-dianzan"></i>
                {{designItem.praise}}
              </span>
              <span class="design-item-comment">
                <i class="iconfont icon-chaping"></i>
                {{designItem.badComment}}
              </span>
              <span class="design-item-menu">
                <i class="iconfont icon-gengduo"></i>
              </span>
            </div>
          </flexbox-item>
        </flexbox>
        <div class="avatar-list">
          <flexbox>
            <flexbox-item class="avatar-item-box" :span="9">
              <img
                class="avatar-item"
                v-for="(avatarItem,index) in designItem.avatarList"
                :key="index"
                :src="avatarItem.img"
                alt
              >
              <span>{{designItem.avatarList.length}}</span>
            </flexbox-item>
            <flexbox-item :span="3">
              <x-button class="avatar-btn" mini>赞赏</x-button>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="comment-title">{{designItem.commentList.length}}条评论</div>
        <div class="comment-box" v-for="(commentItem,index) in designItem.commentList" :key="index">
          <flexbox class="flexbox">
            <flexbox-item :span="1.7">
              <img class="avatar" :src="commentItem.avatar" alt>
            </flexbox-item>
            <flexbox-item :span="7.3">
              <div>
                <div class="username">{{commentItem.username}}</div>
                <div class="direc">{{commentItem.direc}}</div>
              </div>
            </flexbox-item>
            <flexbox-item class="x-button-box" :span="3">
              <span class="design-item-comment">
                <i class="iconfont icon-dianzan"></i>
                {{commentItem.praise}}
              </span>
            </flexbox-item>
          </flexbox>
          <flexbox class="design-item-box">
            <flexbox-item :span="1.7"></flexbox-item>
            <flexbox-item :span="10.3" class="desc">{{commentItem.content}}</flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  Swiper,
  XButton,
  Flexbox,
  FlexboxItem,
  XImg,
  Badge
} from "vux";

export default {
  data() {
    return {
      designList: [
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          praise: 70152,
          badComment: 1845,
          designImgList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ],
          avatarList: [
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            },
            {
              img: "src/assets/img/test/img.png"
            }
          ],
          commentList: [
            {
              avatar: "src/assets/img/test/avatar.png",
              username: "齐衡小公爷",
              sex: "boy",
              direc: "2019-02-21 11:10:52",
              praise: 70152,
              content:
                "有念念不忘的美好，有爱而不得的疼痛。有念念不忘的美好，有爱而不得的疼痛。"
            },
            {
              avatar: "src/assets/img/test/avatar.png",
              username: "齐衡小公爷",
              sex: "boy",
              direc: "2019-02-21 11:10:52",
              praise: 70152,
              content:
                "有念念不忘的美好，有爱而不得的疼痛。有念念不忘的美好，有爱而不得的疼痛。"
            }
          ]
        }
      ]
    };
  },
  created: function() {},
  methods: {
    show(index, list) {
      this.previewList.index = index;
      this.previewList.list = list;
    }
  },
  components: {
    XHeader,
    Swiper,
    XButton,
    Flexbox,
    FlexboxItem,
    XImg,
    Badge
  }
};
</script>

<style lang="less">
.DesignDetail {
  .x-header {
    background-color: rgb(249, 249, 249);
  }
  .design-list {
    border-bottom: 1px solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    padding: 15px 5vw 5px 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: 40px;
    height: 40px;
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: 15px;
    color: rgb(255, 108, 152) !important;
    margin-left: -10px;
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
    font-size: 12px;
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: 15px;
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: 60px;
    height: 30px;
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

  .desc {
    padding: 0 5vw;
    box-sizing: border-box;
    margin-bottom: 5px;
  }

  .design-item-box {
    box-sizing: border-box;
    font-size: 16px;
  }
  .design-item-menus,
  .design-item-menus .iconfont::before {
    color: rgb(185, 185, 185);
  }
  .design-item-menus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    padding: 0 5vw;
    .design-item-comment {
      margin-right: 55px;
    }
  }

  .vux-indicator {
    bottom: 0 !important;
    a:first-child {
      margin-left: 0;
    }
  }
  .vux-icon-dot {
    background-color: rgb(153, 137, 134);
  }
  .vux-icon-dot.active {
    width: 15px !important;
    background-color: #fff !important;
  }
  //赞赏
  .avatar-list {
    .avatar-item-box {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .avatar-item,
    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      margin-left: 5px;
    }
    span {
      color: rgb(192, 192, 192);
      background-color: rgb(242, 242, 242);
      text-align: center;
    }
    .avatar-btn {
      display: block;
      border: 1px solid rgb(252, 97, 66);
      background-color: #fff;
      color: rgb(252, 97, 66);
      margin: auto;
      margin-right: 0;
    }
  }
  //评论
  .comment-title {
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  .comment-title,
  .avatar-list {
    padding: 10px 5vw;
  }
  .comment-box .username,
  .comment-title {
    color: rgb(153, 153, 153);
  }
  .icon-dianzan {
    margin-right: -8px;
    font-size: 19px;
  }
  .design-item-comment,
  .design-item-comment .iconfont {
    color: rgb(185, 185, 185) !important;
  }
}
</style>
