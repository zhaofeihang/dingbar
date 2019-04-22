<template>
  <div class="IncomeRecord">
    <scroller :on-infinite="onInfinite" ref="scroller" noDataText="我是有底线的..." :class="incomeRecordList.length<10 ? 'hide-scroller':''">
    <x-header class="x-header" :left-options="{backText: ''}">收入记录</x-header>
    <div class="IncomeRecord">
      <flexbox class="flexbox" v-for="(incomeRecord,index) in incomeRecordList" :key="index">
        <flexbox-item :span="1.3">
          <i class="iconfont" :class="incomeRecord.iconType"></i>
        </flexbox-item>
        <flexbox-item :span="7.7">
          <div>
            <div class="text">{{incomeRecord.text}}</div>
            <div class="time">{{incomeRecord.times}}</div>
          </div>
        </flexbox-item>
        <flexbox-item class="x-button-box" :span="3">
          <span>{{'+' + incomeRecord.moneys}}</span>
        </flexbox-item>
      </flexbox>
    </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from "vux";
import util from '../../util';

export default {
  data() {
    return {
      userInfo: null,
      incomeRecordList: [
      ],
      pageNum: 1
    };
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  },
  created: async function() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      this.$vux.loading.show({
        text: 'loading...'
      });
      let data = await util.getData({
        url: `/users/myaccountsdetails?loginid=${this.userInfo.id}&pages=${this.pageNum}&rowsmax=10`,
        method: "get"
      });
      this.incomeRecordList = data;
      this.pageNum++;
      this.incomeRecordList.forEach((item,index) => {
        if(item.pays_types == 'alipay') {
          item.iconType = "icon-zhifubao";
          item.text = '支付宝支付';
        }else {
          item.iconType = "icon-weixin";
          item.text = '微信支付';
        }
      });
      this.$vux.loading.hide();
    }
  },
  methods: {
    onInfinite(done) {
      if(this.pageNum == 1) {
        done();
        return false;
      }
      setTimeout(async () => {
        let data = await util.getData({
          url: `/users/myaccountsdetails?loginid=${this.userInfo.id}&pages=${
            this.pageNum
          }&rowsmax=10`,
          method: "get"
        });
        if (data == "") {
          this.$refs.scroller.finishInfinite(2);
          return false;
        }
        this.incomeRecordList = this.incomeRecordList.concat(data);
        this.incomeRecordList.forEach((item,index) => {
          if(item.pays_types == 'alipay') {
            item.iconType = "icon-zhifubao";
            item.text = '支付宝支付';
          }else {
            item.iconType = "icon-weixin";
            item.text = '微信支付';
          }
        });
        this.pageNum++;
        done();
      }, 1000);
    }
  }
};
</script>

<style lang="less">
.IncomeRecord {
  .content-box {
    padding: 0 5vw;
  }
  .x-header,
  .flexbox {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
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
    width: calc(25 *2 / 7.5 * 1vw);
    height: calc(25 *2 / 7.5 * 1vw);
    font-size: calc(25 *2 / 7.5 * 1vw);
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
    font-size: calc(12 *2 / 7.5 * 1vw);
    color: rgb(169, 169, 169);
  }
  .text {
    font-size: calc(15 *2 / 7.5 * 1vw);
    font-weight: 550;
    color: rgb(51, 51, 51);
  }

  .x-button-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
