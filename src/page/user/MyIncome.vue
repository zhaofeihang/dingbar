<template>
  <div class="MyIncome" v-if="pageShow">
    <x-header class="x-header" :left-options="{backText: ''}">我的收入</x-header>
    <div class="content-box">
      <card class="card">
        <div slot="content">
          <div>
            <i class="iconfont icon-shourujine"></i>
          </div>
          <h1 class="amount">{{myIncome.moneys}}</h1>
          <div>
            <span class="amount-text">可提现金额(元)</span>
          </div>
          <card class="desc">
            <div slot="content" class="card-demo-flex card-demo-content01">
              <div class="vux-calc(1 *2 / 7.5 * 1vw)-r">
                <span>本月收入 {{myIncome.lastmonth_moneys_totals}}</span>
              </div>
              <div>
                <span>历史总收入 {{myIncome.moneys_totals}}</span>
              </div>
            </div>
          </card>
        </div>
      </card>
      <x-button @click.native="showWithDraw=true" class="take-away">立即提现</x-button>
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
    <x-dialog v-model="showWithDraw" class="dialog-demo">
      <div class="dialog-box">
        <group class="withdraw-box">
          <div class="withdraw-title" slot="title">
            <span>填写支付宝账户信息</span>
            <i @click="showWithDraw=false" class="iconfont icon-danchuangguanbi"></i>
          </div>
          <x-input type="text" v-model="withDrawInfo.accounts" placeholder="请输入支付宝账号"></x-input>
          <x-input type="text" v-model="withDrawInfo.realnames" placeholder="请输入支付宝用户名"></x-input>
          <x-input type="number" v-model="withDrawInfo.moneys" placeholder="请输入提现金额"></x-input>
        </group>
        <div class="state-text">{{stateText}}</div>
        <x-button @click.native.stop="withDrawCommit" class="withdraw-commit">提交</x-button>
        <div class="point">温馨提示:目前只支持支付宝提现</div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import {
  XHeader,
  Card,
  XButton,
  Cell,
  XDialog,
  TransferDom,
  XInput,
  Group
} from "vux";
import util from "../../util";

export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      showWithDraw: false,
      pageShow: false,
      userInfo: null,
      myIncome: null,
      stateText: "",
      withDrawInfo: {
        accounts: "",
        realnames: "",
        moneys: ""
      },
      cellArr: [
        // {
        //   title: "收款账户",
        //   iconclass: "icon-shoukuanzhanghu",
        //   pageUrl: "/page/IncomeAccount"
        // },
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
    Cell,
    XDialog,
    XInput,
    Group
  },
  created: async function() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      this.$vux.loading.show({
        text: "loading..."
      });
      let data = await util.getData({
        url: `/users/myincomedetails?loginid=${this.userInfo.id}`,
        method: "get"
      });
      this.myIncome = data;
      this.$vux.loading.hide();
      this.pageShow = true;
    }
  },
  methods: {
    async withDrawCommit() {
      if (!this.withDrawInfo.accounts) {
        this.stateText = "收款账号不能为空";
      } else if (!this.withDrawInfo.realnames) {
        this.stateText = "收款用户名不能为空";
      } else if (!this.withDrawInfo.moneys) {
        this.stateText = "提现金额不能为空";
      } else {
        if (Number(this.withDrawInfo.moneys) > Number(this.myIncome.moneys)) {
          this.stateText = "余额不足";
        } else {
          let data = await util.request({
            url: `/users/applywithdraws`,
            method: "post",
            param: {
              loginid: this.userInfo.id,
              mobile: this.userInfo.admins,
              accounts: this.withDrawInfo.accounts,
              realnames: this.withDrawInfo.realnames,
              moneys: this.withDrawInfo.moneys
            }
          });
          if (data.return_code == "success") {
            this.$vux.toast.show({
              text: data.return_data,
              onHide: () => {
                this.myIncome.moneys -= this.withDrawInfo.moneys;
                this.showWithDraw = false;
              }
            });
          } else {
            this.$vux.toast.show({
              title: "提示",
              content: data.return_data
            });
          }
        }
      }
      if (this.stateText) {
        setTimeout(() => {
          this.stateText = "";
        }, 2000);
      }
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
.MyIncome {
  .x-header {
    border-bottom: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .card {
    border-radius: calc(10 * 2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 * 2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    margin: calc(15 * 2 / 7.5 * 1vw) 0 !important;
  }
  .icon-shourujine {
    display: block;
    height: calc(30 * 2 / 7.5 * 1vw);
    line-height: calc(30 * 2 / 7.5 * 1vw);
    margin: calc(15 * 2 / 7.5 * 1vw) auto;
    width: max-content;
    font-size: calc(30 * 2 / 7.5 * 1vw);
    color: rgb(252, 97, 66) !important;
  }
  .amount {
    text-align: center;
    font-size: calc(22 * 2 / 7.5 * 1vw);
    line-height: calc(22 * 2 / 7.5 * 1vw);
  }
  .amount-text {
    display: block;
    width: calc(100 * 2 / 7.5 * 1vw);
    height: calc(25 * 2 / 7.5 * 1vw);
    line-height: calc(25 * 2 / 7.5 * 1vw);
    font-size: calc(12 * 2 / 7.5 * 1vw);
    text-align: center;
    color: rgb(139, 139, 139);
    border: calc(1 * 2 / 7.5 * 1vw) solid rgb(229, 229, 229);
    border-radius: calc(13 * 2 / 7.5 * 1vw);
    margin: calc(15 * 2 / 7.5 * 1vw) auto;
  }

  .vux-card-content .weui-cell {
    padding: calc(20 * 2 / 7.5 * 1vw);
  }

  .card-demo-flex {
    display: flex;
  }
  .card-padding {
    padding: calc(15 * 2 / 7.5 * 1vw);
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: calc(12 * 2 / 7.5 * 1vw);
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
    margin-bottom: calc(15 * 2 / 7.5 * 1vw);
  }

  .take-away {
    display: block;
    width: 100%;
    height: calc(44 * 2 / 7.5 * 1vw);
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .take-away::after {
    border: none;
  }
}
//提现弹窗
.dialog-box {
  padding: calc(20 * 2 / 7.5 * 1vw);
  .withdraw-box {
    position: relative;
    .withdraw-title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 550;
    }
    .icon-danchuangguanbi {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .weui-cells {
    margin-top: calc(20 * 2 / 7.5 * 1vw);
  }
  .withdraw-commit {
    background-color: rgb(252, 97, 66);
    color: #fff;
  }
  .state-text {
    height: calc(20 * 2 / 7.5 * 1vw);
    line-height: calc(20 * 2 / 7.5 * 1vw);
    font-size: calc(10 * 2 / 7.5 * 1vw);
    color: rgb(252, 97, 66);
    text-align: right;
  }
  .point {
    margin-top: calc(20 * 2 / 7.5 * 1vw);
    color: rgb(139, 139, 139);
    font-size: calc(10 * 2 / 7.5 * 1vw);
  }
}
</style>
