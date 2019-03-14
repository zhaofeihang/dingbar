<template>
  <div class="MySet">
    <x-header class="x-header" :left-options="{backText: ''}">设置</x-header>
    <div class="content-box">
      <card class="card">
        <div slot="content">
          <cell
            v-for="(cell,index) in cellArr1"
            :key="index"
            :title="cell.title"
            :link="cell.pageUrl"
            :value="cell.value||''"
          >
            <i slot="icon" class="iconfont" :class="cell.iconclass"></i>
          </cell>
        </div>
      </card>
      <card class="card">
        <div slot="content">
          <cell
            v-for="(cell,index) in cellArr2"
            :key="index"
            :title="cell.title"
            :link="cell.pageUrl"
            @click.native="cell.title == '联系我们' ? callPhone(13817492716) : ''"
          >
            <i slot="icon" class="iconfont" :class="cell.iconclass"></i>
          </cell>
        </div>
      </card>
      <x-button @click.native="logout" class="log-out">退出登录</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, Card, XButton, Cell } from "vux";

export default {
  data() {
    return {
      cellArr1: [
        // {
        //   title: "清理缓存",
        //   iconclass: "icon-qinglihuancun",
        //   pageUrl: "",
        //   value: '12.83MB'
        // },
        {
          title: "意见反馈",
          iconclass: "icon-yijianfankui",
          pageUrl: "/page/ReportOpinion"
        }
      ],
      cellArr2: [
        {
          title: "服务协议",
          iconclass: "icon-fuwuxieyi",
          pageUrl: "/page/ServicePact"
        },
        {
          title: "关于我们",
          iconclass: "icon-guanyuwomen",
          pageUrl: "/page/AboutUs"
        },
        {
          title: "联系我们",
          iconclass: "icon-lianxiwomen",
          pageUrl: ""
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
  created: function() {

  },
  mounted: async function() {
    
  },
  methods: {
    logout(){
      localStorage.removeItem('userInfo');
      this.$router.push({
        path: '/page/UserIndex'
      });
    },
    // 调用拨号功能
    callPhone (phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
    }
  }
};
</script>

<style lang="less">
.MySet {
  .x-header {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 0 5vw;
  }
  .weui-cell {
    padding: calc(20 *2 / 7.5 * 1vw);
  }
  .card {
    border-radius: calc(10 *2 / 7.5 * 1vw);
    box-shadow: 0 0 calc(10 *2 / 7.5 * 1vw) rgba(0, 0, 0, 0.1);
    margin: calc(15 *2 / 7.5 * 1vw) 0 !important;
  }
  .log-out {
    margin-top: calc(30 *2 / 7.5 * 1vw);
    color: rgb(252, 97, 66);
    background-color: #fff;
    overflow: initial;
  }
  .log-out::before,
  .log-out::after {
    display: block;
    border-color: rgb(252, 97, 66);
  }
}
</style>
