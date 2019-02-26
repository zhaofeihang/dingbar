<template>
  <div>
    <x-header class="x-header" :left-options="{backText: ''}"></x-header>
  </div>
</template>

<script>
import { XHeader, XButton, Flexbox, FlexboxItem } from "vux";

export default {
  data() {
    return {
    };
  },
  components: {
    XHeader,
    XButton,
    Flexbox,
    FlexboxItem
  },
  created: function() {}
};
</script>

<style lang="less">
.MyFollow {
}
</style>
