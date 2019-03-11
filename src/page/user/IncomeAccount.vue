<template>
  <div class="IncomeAccount">
    <x-header class="x-header" :left-options="{backText: ''}">收款账户</x-header>
    <div class="content-box">
      <card class="card">
        <div slot="content">
          <cell
            v-for="(cell,index) in cellArr"
            :key="index"
            :title="cell.title"
            :link="cell.pageUrl"
          >
            <i slot="icon" class="iconfont" :class="cell.iconclass"></i>
          </cell>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { XHeader, Card, Cell } from "vux";

export default {
  data() {
    return {
      cellArr: [
        {
          title: "微信",
          iconclass: "icon-weixin",
          pageUrl: "/page/MyRelease"
        },
        {
          title: "支付宝",
          iconclass: "icon-zhifubao",
          pageUrl: "/page/MyFollow"
        }
      ]
    };
  },
  components: {
    XHeader,
    Card,
    Cell
  },
  created: function() {}
};
</script>

<style lang="less">
.IncomeAccount {
  .x-header {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .card {
    border-radius: calc(10 *2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    margin: calc(15 *2 / 7.5 * 1vw) 0 !important;
    font-size: calc(14 *2 / 7.5 * 1vw);
    color: rgb(51, 51, 51);
  }
  .iconfont {
    font-size: calc(25 *2 / 7.5 * 1vw);
  }
  .icon-weixin {
    color: rgb(37, 155, 36) !important;
  }
  .icon-zhifubao {
    color: rgb(16, 149, 218) !important;
  }
}
</style>
