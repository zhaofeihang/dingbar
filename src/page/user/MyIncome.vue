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
              <div class="vux-1px-r">
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
    border-bottom: 1px solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .card {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 15px 0 !important;
  }
  .icon-shourujine {
    display: block;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
    width: max-content;
    font-size: 30px;
    color: rgb(252, 97, 66) !important;
  }
  .amount {
    text-align: center;
    font-size: 22px;
    line-height: 22px;
  }
  .amount-text {
    display: block;
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    color: rgb(139, 139, 139);
    border: 1px solid rgb(229, 229, 229);
    border-radius: 13px;
    margin: 15px auto;
  }

  .weui-cell {
    padding: 20px;
  }

  .card-demo-flex {
    display: flex;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
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
    margin-bottom: 15px;
  }

  .take-away {
    display: block;
    width: 100%;
    height: 44px;
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .take-away::after {
    border: none;
  }
}
</style>
