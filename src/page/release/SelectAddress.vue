<template>
  <div class="SelectAddress">
    <x-header class="x-header" :left-options="{backText: ''}">选择地理位置</x-header>
    <group title="附近位置">
      <card class="card">
        <div slot="content">
          <div v-for="(cell,index) in cellArr" :key="index" @click="selectAddress(cell)">
            <cell :title="cell.name">
              <span slot="inline-desc">{{cell.address}}</span>
              <i slot="default" class="iconfont" :class="cell.righticonclass+' '+cell.selectClass"></i>
            </cell>
          </div>
        </div>
      </card>
    </group>
    <div class="commit-btn-box">
      <x-button class="commit-btn">下一步</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Group, Card, Cell,XButton } from "vux";

export default {
  data() {
    return {
      cellArr: [
        {
          name: "绿亮科创园",
          address: "上海市虹梅南路2588号",
          righticonclass: "icon-weixuanzhong",
          selectClass: "icon-xuanzhong"
        },
        {
          name: "绿亮科创园",
          address: "上海市虹梅南路2588号",
          righticonclass: "icon-weixuanzhong",
          selectClass: ""
        },
        {
          name: "绿亮科创园",
          address: "上海市虹梅南路2588号",
          righticonclass: "icon-weixuanzhong",
          selectClass: ""
        },
        {
          name: "绿亮科创园",
          address: "上海市虹梅南路2588号",
          righticonclass: "icon-weixuanzhong",
          selectClass: ""
        }
      ]
    };
  },
  created: function() {},
  methods: {
    selectAddress(cell) {
      this.cellArr.forEach((el, index) => {
        el.selectClass = "";
      });
      cell.selectClass = "icon-xuanzhong";
    }
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Card,
    Cell,
    Group,
    XButton
  }
};
</script>

<style lang="less">
.SelectAddress {
  .weui-panel:before {
    display: none;
  }
  .weui-cell {
    padding-left: 0;
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(237, 237, 237);
  }
  .vux-card-content {
    padding-left: 5vw;
    box-sizing: border-box;
  }
  .vux-label {
    font-size: calc(14 *2 / 7.5 * 1vw);
  }
  .vux-label-desc {
    font-size: calc(11 *2 / 7.5 * 1vw);
    color: rgb(142, 142, 142);
  }
  .iconfont {
    font-size: calc(20 *2 / 7.5 * 1vw);
    color: rgb(197, 197, 197) !important;
  }
  .icon-xuanzhong {
    color: rgb(252, 97, 66) !important;
  }
  .commit-btn-box {
    padding: 0 calc(15 *2 / 7.5 * 1vw);
    box-sizing: border-box;
    position: fixed;
    bottom: calc(15 *2 / 7.5 * 1vw);
    left: 0;
    right: 0;
    margin: auto;
    .commit-btn {
      background-color: rgb(252,97,66);
      color: #fff;
    }
  }
}
</style>
