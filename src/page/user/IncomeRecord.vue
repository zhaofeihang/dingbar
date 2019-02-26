<template>
  <div class="IncomeRecord">
    <x-header class="x-header" :left-options="{backText: ''}">收入记录</x-header>
    <div class="IncomeRecord">
      <flexbox class="flexbox" v-for="(incomeRecord,index) in incomeRecordList" :key="index">
        <flexbox-item :span="1.3">
          <i class="iconfont" :class="incomeRecord.iconType"></i>
        </flexbox-item>
        <flexbox-item :span="7.7">
          <div>
            <div class="text">{{incomeRecord.text}}</div>
            <div class="time">{{incomeRecord.time}}</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <span>{{incomeRecord.amount}}</span>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
      incomeRecordList: [
        {
          iconType: "icon-weixin",
          text: "微信支付",
          time: "2019-2-22 15:40",
          amount: "+2.00"
        },
        {
          iconType: "icon-weixin",
          text: "微信支付",
          time: "2019-2-22 15:40",
          amount: "+2.00"
        },
        {
          iconType: "icon-zhifubao",
          text: "支付宝支付",
          time: "2019-2-22 15:40",
          amount: "+2.00"
        },
        {
          iconType: "icon-weixin",
          text: "微信支付",
          time: "2019-2-22 15:40",
          amount: "+2.00"
        },
        {
          iconType: "icon-zhifubao",
          text: "支付宝支付",
          time: "2019-2-22 15:40",
          amount: "-20.00"
        },
        {
          iconType: "icon-zhifubao",
          text: "支付宝支付",
          time: "2019-2-22 15:40",
          amount: "-20.00"
        },
        {
          iconType: "icon-weixin",
          text: "微信支付",
          time: "2019-2-22 15:40",
          amount: "+2.00"
        }
      ]
    };
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  },
  created: function() {}
};
</script>

<style lang="less">
.IncomeRecord {
  .content-box {
    padding: 0 5vw;
  }
  .x-header,
  .flexbox {
    border-bottom: 1px solid rgb(229, 229, 229);
  }
  .flexbox {
    width: 100%;
    padding: 3vw 5vw;
    box-sizing: border-box;
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .iconfont {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    font-size: 25px;
    overflow: hidden;
  }
  .icon-weixin {
    color: rgb(37,155,36) !important;
  }
  .icon-zhifubao {
    color: rgb(16,149,218) !important;
  }

  .time,
  .text {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: rgb(169, 169, 169);
  }
  .text {
    font-size: 15px;
    font-weight: 550;
    color: rgb(51, 51, 51);
  }

  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
