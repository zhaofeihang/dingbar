<template>
  <div class="DesignDetail">
    <x-header class="x-header" :left-options="{backText: ''}">详情
      <router-link to="/page/take_photo/Message" slot="right" class="message-icon">
        <badge class="message-badge" :text="messageBadge"></badge>
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
            <img class="avatar" :src="designItem.users_logos" alt>
          </flexbox-item>
          <flexbox-item :span="7.3">
            <div>
              <div class="username">
                {{designItem.nicknames}}
                <i
                  v-if="designItem.sex == 'girl'"
                  class="iconfont icon-nvsheng"
                ></i>
                <i v-else class="iconfont icon-nansheng"></i>
              </div>
              <div class="direc">{{designItem.time}}</div>
            </div>
          </flexbox-item>
          <flexbox-item class="x-button-box" :span="3">
            <x-button
              v-if="designItem.followed"
              class="x-button"
              mini
              :gradients="['rgb(525,97,66)', 'rgb(525,97,66)']"
            >已关注</x-button>
            <x-button v-else class="x-button no-follow" mini>关注</x-button>
          </flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item class="desc">{{designItem.descriptions}}</flexbox-item>
        </flexbox>
        <flexbox class="design-item-box">
          <flexbox-item>
            <swiper height="calc(300 *2 / 7.5 * 1vw)" class="swiper" loop :list="designItem.designImgList"></swiper>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
            <div class="design-item-menus">
              <span class="design-item-praise">
                <i class="iconfont icon-dianzan"></i>
                {{designItem.praisesnums}}
              </span>
              <span class="design-item-comment">
                <i class="iconfont icon-chaping"></i>
                {{designItem.commentsnums}}
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
                :src="avatarItem.users_logos"
                alt
              >
              <span v-if="designItem.avatarList.length>6">{{designItem.avatarList.length - 6}}</span>
            </flexbox-item>
            <flexbox-item :span="3">
              <x-button class="avatar-btn" mini>赞赏</x-button>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="comment-title">{{designItem.commentCount}}条评论</div>
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
            <flexbox-item :span="10.3" class="desc">{{commentItem.comments}}</flexbox-item>
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
import util from "../../util"

export default {
  data() {
    return {
      messageBadge: "80",
      designList: [
        {
          avatar: "src/assets/img/test/avatar.png",
          username: "齐衡小公爷",
          sex: "boy",
          direc: "2019-02-21 11:10:52",
          follow: true,
          praise: 70152,
          badComment: 1845,
          designImgList: [],
          commentCount: 0,
          avatarList: [
            {
              img: "static/img/img.png"
            },
            {
              img: "static/img/img.png"
            },
            {
              img: "static/img/img.png"
            },
            {
              img: "static/img/img.png"
            },
            {
              img: "static/img/img.png"
            },
            {
              img: "static/img/img.png"
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
  created: async function() {
    this.$vux.loading.show({
        text: "Loading"
      });
    /**
     * 获取设计师详情
     */
    let disnId = this.$route.query.id;
    this.designList[0] = await util.getData({
      url: `/materials/details?sources_id=${disnId}`,
      method: "get",
    })
    this.designList[0].designImgList = [];
    this.designList[0].images.forEach((item,index) => {
      this.designList[0].designImgList.push({
        img: item.thumbs
      });
    });
    //获取评论列表
    this.designList[0].commentList = await util.getData({
      url: `/materials/commentslists?sources_id=${disnId}&pages=1&rowsmaxs=10`,
      method: "get",
    })
    //获取点赞头像列表
    this.designList[0].avatarList = await util.getData({
      url: `/materials/praiserslists?sources_id=${disnId}`,
      method: "get",
    })
    //获取评论总数字
    this.designList[0].commentCount = await util.getData({
      url: `/materials/commenttotals?sources_id=${disnId}`,
      method: "get",
    })
    //处理数据
    this.designList.forEach((item,index) => {
      item.sex = item.gender == 1 ? "boy" : "girl";
      item.images.forEach((img,index) => {
        item.designImgList.push({
          img: img.thumbs
        });
      });
    });
    this.$vux.loading.hide();
  },
  mounted: function() {
    
  },
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
  .icon-xiaoxi {
    font-size: calc(25 *2 / 7.5 * 1vw);
  }
  .design-list {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .design-list:last-child {
    border-bottom: none;
  }
  .flexbox {
    width: 100%;
    padding: calc(15 *2 / 7.5 * 1vw) 5vw calc(5 *2 / 7.5 * 1vw) 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .avatar {
    display: block;
    width: calc(40 *2 / 7.5 * 1vw);
    height: calc(40 *2 / 7.5 * 1vw);
  }
  .icon-nvsheng,
  .icon-nansheng {
    width: calc(15 *2 / 7.5 * 1vw);
    color: rgb(255, 108, 152) !important;
    margin-left: -calc(10 *2 / 7.5 * 1vw);
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
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .username {
    font-size: calc(15 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }
  .x-button {
    width: calc(60 *2 / 7.5 * 1vw);
    height: calc(30 *2 / 7.5 * 1vw);
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
    margin-bottom: calc(5 *2 / 7.5 * 1vw);
  }

  .design-item-box {
    box-sizing: border-box;
    font-size: calc(16 *2 / 7.5 * 1vw);
  }
  .design-item-menus,
  .design-item-menus .iconfont::before {
    color: rgb(185, 185, 185);
  }
  .design-item-menus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: calc(15 *2 / 7.5 * 1vw) 0;
    padding: 0 5vw;
    .design-item-comment {
      margin-right: calc(55 *2 / 7.5 * 1vw);
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
    width: calc(15 *2 / 7.5 * 1vw) !important;
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
      width: calc(25 *2 / 7.5 * 1vw);
      height: calc(25 *2 / 7.5 * 1vw);
      line-height: calc(25 *2 / 7.5 * 1vw);
      border-radius: 50%;
      margin-left: calc(5 *2 / 7.5 * 1vw);
    }
    span {
      color: rgb(192, 192, 192);
      background-color: rgb(242, 242, 242);
      text-align: center;
    }
    .avatar-btn {
      display: block;
      border: calc(1 *2 / 7.5 * 1vw) solid rgb(252, 97, 66);
      background-color: #fff;
      color: rgb(252, 97, 66);
      margin: auto;
      margin-right: 0;
    }
  }
  //评论
  .comment-title {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .comment-title,
  .avatar-list {
    padding: calc(10 *2 / 7.5 * 1vw) 5vw;
  }
  .comment-box .username,
  .comment-title {
    color: rgb(153, 153, 153);
  }
  .icon-dianzan {
    margin-right: -calc(8 *2 / 7.5 * 1vw);
    font-size: calc(19 *2 / 7.5 * 1vw);
  }
  .design-item-comment,
  .design-item-comment .iconfont {
    color: rgb(185, 185, 185) !important;
  }
}
</style>
