<template>
  <div class="SelectLabel">
    <x-header class="x-header" :left-options="{backText: ''}">选择标签</x-header>
    <group title="热门标签">
      <grid class="grid" :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
        <grid-item class="grid-item" v-for="(label,index) in hotLabelList" :key="index">
          <span @click="selectLabel(label)" class="label" :class="label.selectClass">{{label.text}}</span>
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
      <x-button class="commit-btn">发布</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, Grid, GridItem,XButton } from "vux";

export default {
  data() {
    return {
      hotLabelList: [
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        }
      ],
      allLabelList: [
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        },
        {
          text: "#缘分天空",
          selectClass: ""
        }
      ]
    };
  },
  created: function() {},
  methods: {
    selectLabel(label) {
      label.selectClass = label.selectClass == "selected" ? "" : "selected";
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
    width: calc(100 *2 / 7.5 * 1vw);
    height: calc(32 *2 / 7.5 * 1vw);
    line-height: calc(32 *2 / 7.5 * 1vw);
    text-align: center;
    font-size: calc(14 *2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
    background-color: rgb(242, 242, 242);
    border-radius: calc(5 *2 / 7.5 * 1vw);
    margin: auto;
    margin-bottom: calc(15 *2 / 7.5 * 1vw);
  }
  .selected {
    background-color: rgb(252, 97, 66) !important;
    color: #fff !important;
  }
  .grid {
    padding: calc(6 *2 / 7.5 * 1vw) calc(3 *2 / 7.5 * 1vw);
  }
  .grid-item {
    padding: 0 calc(3 *2 / 7.5 * 1vw);
  }
  .weui-grids:before {
    display: none;
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
