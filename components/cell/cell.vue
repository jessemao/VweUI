<template>
  <div class="weui-cell" :class="classObject">
    <div class="weui-cell__hd">
      <slot name="header"></slot>
    </div>
    <div class="weui-cell__bd">
      <slot name="body"></slot>
    </div>
    <div class="weui-cell__ft">
      <i v-if="hasWarning" class="weui-icon-warn"></i>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    canAccess: {
      type: Boolean,
      default: false
    },
    hasWarning: {
      type: Boolean,
      default: false
    },
    toUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject: function () {
      return {
        'weui-cell_access': this.canAccess,
        'weui-cell_warn': this.hasWarning
      }
    }
  }
}
</script>