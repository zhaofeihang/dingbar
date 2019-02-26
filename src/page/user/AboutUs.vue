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
    border-bottom: 1px solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .logo-box {
    margin-top: 40px;
  }
  .logo {
    display: block;
    width: 70px;
    height: 70px;
    margin: auto;
  }
  .logo-title {
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    margin-top: 10px;
  }
  .desc {
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    text-indent: 2em;
    font-size: 13px;
    line-height: 23px;
    color: rgb(51, 51, 51);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 25px;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 15px 0 !important;
  }
  .weui-cell {
    padding: 20px;
  }
}
</style>
