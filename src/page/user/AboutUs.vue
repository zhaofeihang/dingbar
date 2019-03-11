<template>
  <div class="AboutUs">
    <x-header class="x-header" :left-options="{backText: ''}">关于舍豆</x-header>
    <div class="content-box">
      <div class="logo-box">
        <x-img class="logo" default-src="src/assets/img/icon/logo.png"></x-img>
        <h3 class="logo-title">舍豆</h3>
      </div>
      <div
        class="desc"
      >舍豆的介绍文字说明，有念念不忘的美好，有 爱而不得的疼痛，有生离死别的遗憾，有一再错过 的宿命，也有喧嚣之后的回归.舍豆的介绍文字说明，有念念不忘的美好，有 爱而不得的疼痛，有生离死别的遗憾，有一再错过 的宿命，也有喧嚣之后的回归</div>
      <card class="card">
        <div slot="content">
          <cell v-for="(cell,index) in cellArr" :key="index" :title="cell.title" :value="cell.value"></cell>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg, Card, Cell } from "vux";

export default {
  data() {
    return {
      cellArr: [
        {
          title: "新浪微博",
          value: "@舍豆"
        },
        {
          title: "网页端",
          value: "www.shedouwang.com"
        }
      ]
    };
  },
  components: {
    XHeader,
    XImg,
    Card,
    Cell
  },
  created: function() {}
};
</script>

<style lang="less">
.AboutUs {
  .x-header {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .logo-box {
    margin-top: calc(40 *2 / 7.5 * 1vw);
  }
  .logo {
    display: block;
    width: calc(70 *2 / 7.5 * 1vw);
    height: calc(70 *2 / 7.5 * 1vw);
    margin: auto;
  }
  .logo-title {
    text-align: center;
    font-size: calc(16 *2 / 7.5 * 1vw);
    line-height: calc(16 *2 / 7.5 * 1vw);
    margin-top: calc(10 *2 / 7.5 * 1vw);
  }
  .desc {
    padding: calc(15 *2 / 7.5 * 1vw) calc(20 *2 / 7.5 * 1vw);
    box-sizing: border-box;
    border-radius: calc(10 *2 / 7.5 * 1vw);
    text-indent: 2em;
    font-size: calc(13 *2 / 7.5 * 1vw);
    line-height: calc(23 *2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
    box-shadow: 0 0 calc(10 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    margin-top: calc(25 *2 / 7.5 * 1vw);
  }

  .card {
    border-radius: calc(10 *2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    margin: calc(15 *2 / 7.5 * 1vw) 0 !important;
  }
  .weui-cell {
    padding: calc(20 *2 / 7.5 * 1vw);
  }
}
</style>
