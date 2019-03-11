<template>
  <div class="MyIncome">
    <x-header class="x-header" :left-options="{backText: ''}">我的收入</x-header>
    <div class="content-box">
      <card class="card">
        <div slot="content">
          <div>
            <i class="iconfont icon-shourujine"></i>
          </div>
          <h1 class="amount">543.00</h1>
          <div>
            <span class="amount-text">可提现金额(元)</span>
          </div>
          <card class="desc">
            <div slot="content" class="card-demo-flex card-demo-content01">
              <div class="vux-calc(1 *2 / 7.5 * 1vw)-r">
                <span>本月收入 162.00</span>
              </div>
              <div>
                <span>历史总收入 8852.00</span>
              </div>
            </div>
          </card>
        </div>
      </card>
      <x-button class="take-away">立即提现</x-button>
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
import { XHeader, Card, XButton, Cell } from "vux";

export default {
  data() {
    return {
      cellArr: [
        {
          title: "收款账户",
          iconclass: "icon-shoukuanzhanghu",
          pageUrl: "/page/IncomeAccount"
        },
        {
          title: "收入记录",
          iconclass: "icon-shourujilu",
          pageUrl: "/page/IncomeRecord"
        },
        {
          title: "免责声明",
          iconclass: "icon-zerenshengming",
          pageUrl: "/page/ServicePact"
        }
      ]
    };
  },
  components: {
    XHeader,
    Card,
    XButton,
    Cell
  },
  created: function() {}
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
.MyIncome {
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
  }
  .icon-shourujine {
    display: block;
    height: calc(30 *2 / 7.5 * 1vw);
    line-height: calc(30 *2 / 7.5 * 1vw);
    margin: calc(15 *2 / 7.5 * 1vw) auto;
    width: max-content;
    font-size: calc(30 *2 / 7.5 * 1vw);
    color: rgb(252, 97, 66) !important;
  }
  .amount {
    text-align: center;
    font-size: calc(22 *2 / 7.5 * 1vw);
    line-height: calc(22 *2 / 7.5 * 1vw);
  }
  .amount-text {
    display: block;
    width: calc(100 *2 / 7.5 * 1vw);
    height: calc(25 *2 / 7.5 * 1vw);
    line-height: calc(25 *2 / 7.5 * 1vw);
    font-size: calc(12 *2 / 7.5 * 1vw);
    text-align: center;
    color: rgb(139, 139, 139);
    border: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
    border-radius: calc(13 *2 / 7.5 * 1vw);
    margin: calc(15 *2 / 7.5 * 1vw) auto;
  }

  .weui-cell {
    padding: calc(20 *2 / 7.5 * 1vw);
  }

  .card-demo-flex {
    display: flex;
  }
  .card-padding {
    padding: calc(15 *2 / 7.5 * 1vw);
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: calc(12 *2 / 7.5 * 1vw);
  }
  .card-demo-flex span {
    color: rgb(139, 139, 139);
  }
  .weui-panel::before,
  .weui-panel::after {
    display: none;
  }
  .desc {
    margin-top: 0;
    margin-bottom: calc(15 *2 / 7.5 * 1vw);
  }

  .take-away {
    display: block;
    width: 100%;
    height: calc(44 *2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .take-away::after {
    border: none;
  }
}
</style>
