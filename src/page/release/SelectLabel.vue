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
      <x-button class="commit-btn">下一步</x-button>
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
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: rgb(51, 51, 51);
    background-color: rgb(242, 242, 242);
    border-radius: 5px;
    margin: auto;
    margin-bottom: 15px;
  }
  .selected {
    background-color: rgb(252, 97, 66) !important;
    color: #fff !important;
  }
  .grid {
    padding: 6px 3px;
  }
  .grid-item {
    padding: 0 3px;
  }
  .weui-grids:before {
    display: none;
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
