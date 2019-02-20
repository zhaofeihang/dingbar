<template>
  <div>
    <x-header class="x-header" :left-options="{showBack: true}">发布</x-header>
    发布
    <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="../assets/img/icon/paizhao.png" alt="">
        <span slot="label">随手拍</span>
      </tabbar-item>
      <!-- <tabbar-item link="/page/HotChat">
        <img slot="icon" src="../assets/img/icon/remen.png" alt="">
        <span slot="label">热聊</span>
      </tabbar-item> -->
      <tabbar-item selected link="/page/Release">
        <img slot="icon" src="../assets/img/icon/fabu.png" alt="">
        <span slot="label">发布</span>
      </tabbar-item>
      <tabbar-item link="/page/UserIndex">
        <img slot="icon" src="../assets/img/icon/wode.png" alt="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader,Tabbar,TabbarItem } from 'vux'

export default {
  data () {
    return {
    }
  },
  components: {
    XHeader,Tabbar,TabbarItem
  },
  created: function() {
  }
}
</script>

<style>

</style>
