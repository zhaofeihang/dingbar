<template>
  <div class="MyCollect">
    <x-header class="x-header" :left-options="{backText: ''}">{{title}}</x-header>
    <div class="img-list">
      <grid class="grid" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item class="grid-item" v-for="(item, index) in imgList" :key="index">
          <img class="previewer-demo-img" :src="item.src" @click="show(index)">
        </grid-item>
      </grid>
      <div v-transfer-dom>
        <previewer :list="imgList" ref="previewer"></previewer>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg, Grid, GridItem, Previewer, TransferDom } from "vux";
import util from "../../util";

export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      title: '我的收藏',
      imgList: []
    };
  },
  components: {
    XHeader,
    XImg,
    Grid,
    GridItem,
    Previewer
  },
  created: async function() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let params = this.$route.params;

    if (userInfo) {
      this.$vux.loading.show({
        text: "loading..."
      });
      if (params.id) {
        this.title = '发布信息';
        let data = await util.getData({
          url: `/materials/details?loginid=${userInfo.id}&sources_id=${
            params.id
          }`,
          method: "get"
        });
        this.imgList = data.images;
        this.imgList.forEach(item => {
          item.src = item.msrc = item.updatas;
        });
      } else {
        let data = await util.getData({
          url: `/users/mycollects?loginid=${userInfo.id}`,
          method: "get"
        });
        this.imgList = data;
        this.imgList.forEach(item => {
          item.src = item.msrc = item.thumbs;
        });
      }
      this.$vux.loading.hide();
    }
  },
  methods: {
    show(index) {
      this.$refs.previewer.show(index);
    }
  }
};
</script>

<style lang="less">
.MyCollect {
  .grid {
    padding: calc(6 * 2 / 7.5 * 1vw) calc(3 * 2 / 7.5 * 1vw);
  }
  .grid-item {
    padding: 0 calc(3 * 2 / 7.5 * 1vw);
    img {
      height: calc(164 * 2 / 7.5 * 1vw);
      object-fit: cover;
    }
  }
  .weui-grids:before {
    display: none;
  }
  .previewer-demo-img {
    width: 100%;
  }
}
</style>
