<template>
  <div class="weui-loadmore" :class="classObject">
    <i v-if="showLoading" class="weui-loading"></i>
    <span class="weui-loadmore__tips">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    showLine: {
      type: Boolean,
      default: false
    },
    showDot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject: function () {
      return {
        'weui-loadmore_line': this.showLine,
        'weui-loadmore_dot': this.showDot
      }
    }
  }
}
</script>