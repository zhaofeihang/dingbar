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
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  .vux-card-content {
    padding-left: 5vw;
    box-sizing: border-box;
  }
  .vux-label {
    font-size: 14px;
  }
  .vux-label-desc {
    font-size: 11px;
    color: rgb(142, 142, 142);
  }
  .iconfont {
    font-size: 20px;
    color: rgb(197, 197, 197) !important;
  }
  .icon-xuanzhong {
    color: rgb(252, 97, 66) !important;
  }
  .commit-btn-box {
    padding: 0 15px;
    box-sizing: border-box;
    position: fixed;
    bottom: 15px;
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
