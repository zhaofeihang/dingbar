<template>
  <div class="MyCollect">
    <x-header class="x-header" :left-options="{backText: ''}">我的收藏</x-header>
    <div class="img-list">
      <grid class="grid" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item class="grid-item" v-for="(item, index) in imgList" :key="index">
          <img class="previewer-demo-img" :src="item.src" @click="show(index)">
        </grid-item>
      </grid>
      <div v-transfer-dom>
        <previewer :list="imgList" ref="previewer" :options="options"></previewer>
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
      imgList: [
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        },
        {
          msrc: "static/img/img.png",
          src: "static/img/img.png"
        }
      ],
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          let rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      }
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
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo) {
      let data = await util.getData1({
        url: `/users/mycollects?loginid=${userInfo.id}`,
        method: 'get',
      })
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
    padding: calc(6 *2 / 7.5 * 1vw) calc(3 *2 / 7.5 * 1vw);
  }
  .grid-item {
    padding: 0 calc(3 *2 / 7.5 * 1vw);
  }
  .weui-grids:before {
    display: none;
  }
  .previewer-demo-img {
    width: 100%;
  }
}
</style>
