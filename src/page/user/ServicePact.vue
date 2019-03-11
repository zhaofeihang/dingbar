<template>
  <div class="ServicePact">
    <x-header class="x-header" :left-options="{backText: ''}">《舍豆用户服务协议》</x-header>
    <div class="content-box">
      <section>
        <h1>132</h1>
        <p>465</p>
      </section>
      <section>
        <h1>123</h1>
        <p>465</p>
      </section>
    </div>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from "vux";

export default {
  data() {
    return {};
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  created: function() {}
};
</script>

<style lang="less">
.ServicePact {
  .x-header {
    border-bottom: calc(1 *2 / 7.5 * 1vw) solid rgb(229, 229, 229);
  }
  .content-box {
    padding: 5vw;
  }
}
</style>
