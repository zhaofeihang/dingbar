<template>
  <div class="SelectLabel">
    <x-header class="x-header" :left-options="{backText: ''}">选择标签</x-header>
    <group title="热门标签">
      <grid class="grid" :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
        <grid-item class="grid-item" v-for="(topic,index) in topicList" :key="index">
          <span
            @click="selectedTopic(topic)"
            class="label"
            :class="topic.selectClass"
          >{{topic.text}}</span>
        </grid-item>
      </grid>
    </group>
    <group title="全部标签">
      <grid class="grid" :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
        <grid-item class="grid-item" v-for="(label,index) in allLabelList" :key="index">
          <span @click="selectLabel(label)" class="label" :class="label.selectClass">{{label.text}}</span>
        </grid-item>
      </grid>
    </group>
    <div class="commit-btn-box">
      <x-button @click.native="release" class="commit-btn">发布</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, Grid, GridItem, XButton } from "vux";
import util from "../../util";

export default {
  data() {
    return {
      topicList: [],
      allLabelList: [],
      selectLabelList: [],
      selectTopic: "",
      photos: ""
    };
  },
  created: async function() {
    //话题列表
    let topicList = await util.getData({
      url: "/materials/topicslists",
      method: "post"
    });
    topicList.forEach((item, index) => {
      this.topicList.push({
        text: item.tits,
        id: item.id,
        selectClass: ""
      });
    });
    //全部标签
    let allLabelList = await util.getData({
      url: "/materials/labelslists",
      method: "post"
    });
    allLabelList.forEach((item, index) => {
      this.allLabelList.push({
        text: item.tits,
        id: item.id,
        selectClass: ""
      });
    });

    //图片转换成base64格式
    let photos = sessionStorage.getItem("photos");
    
    if (photos) {
      photos = JSON.parse(photos);
      photos.forEach(async (item, index) => {
        this.photos += "||" + (await util.convertImg(item, 675, 934));
      });
    }
  },
  methods: {
    selectLabel(label) {
      if (label.selectClass == "selected") {
        this.selectLabelList.splice(this.selectLabelList.indexOf(label.id), 1);
      } else {
        if (this.selectLabelList.length >= 5) {
          this.$vux.alert.show({
            title: "提示",
            content: "标签最多选择5个"
          });
          return false;
        }
        this.selectLabelList.push(label.id + '');
      }
      label.selectClass = label.selectClass == "selected" ? "" : "selected";
    },
    selectedTopic(topic) {
      if (topic.selectClass == "selected") {
        this.selectTopic = topic.selectClass = "";
      } else {
        this.topicList.forEach((item, index) => {
          item.selectClass = "";
        });
        topic.selectClass = "selected";
        this.selectTopic = topic.id;
      }
    },
    async release() {
      let userInfo = localStorage.getItem("userInfo");
      let imgDesc = sessionStorage.getItem("imgDesc");
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
      }
      this.$vux.loading.show({
        text: '努力上传中...'
      })
      let data = await util.request({
        url: "/materials/adds",
        method: "post",
        param: {
          loginid: userInfo.id + '',
          descriptions: imgDesc + '',
          updata: this.photos.slice(2),
          labels_id: this.selectLabelList,
          topics_id: this.selectTopic+''
        }
      });
      this.$vux.loading.hide();
      if(data.return_code == 'success') {
        sessionStorage.removeItem('photos');
        sessionStorage.removeItem('imgDesc');
        this.$vux.toast.show({
          text: data.return_data,
          type: "text",
          onHide: () => {
            this.$router.push({
              path: "/"
            });
          }
        });
      }else {
        this.$vux.alert.show({
          title: '提示',
          content: data.return_data
        });
      }
    }
  },
  components: {
    XHeader,
    Group,
    Grid,
    GridItem,
    XButton
  }
};
</script>

<style lang="less">
.SelectLabel {
  .weui-grids::before,
  .weui-grids::after,
  .weui-cells::before,
  .weui-cells::after,
  .weui-grid::after {
    display: none;
  }
  .lebel {
    display: block;
    width: max-content;
    margin: auto;
  }
  .label {
    display: block;
    width: calc(100 * 2 / 7.5 * 1vw);
    height: calc(32 * 2 / 7.5 * 1vw);
    line-height: calc(32 * 2 / 7.5 * 1vw);
    text-align: center;
    font-size: calc(14 * 2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
    background-color: rgb(242, 242, 242);
    border-radius: calc(5 * 2 / 7.5 * 1vw);
  }
  .selected {
    background-color: rgb(252, 97, 66) !important;
    color: #fff !important;
  }
  .grid {
    padding: calc(6 * 2 / 7.5 * 1vw) calc(3 * 2 / 7.5 * 1vw);
  }
  .grid-item {
    display: block;
    width: max-content;
    margin: auto;
    margin-bottom: calc(15 * 2 / 7.5 * 1vw);
    // padding: 0 calc(3 * 2 / 7.5 * 1vw);
    padding-top: 0;
    padding-bottom: 0;
  }
  .weui-grids:before {
    display: none;
  }
  .commit-btn-box {
    padding: 0 calc(15 * 2 / 7.5 * 1vw);
    box-sizing: border-box;
    position: fixed;
    bottom: calc(15 * 2 / 7.5 * 1vw);
    left: 0;
    right: 0;
    margin: auto;
    .commit-btn {
      background-color: rgb(252, 97, 66);
      color: #fff;
    }
  }
}
</style>
