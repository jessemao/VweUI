<template>
  <span class="weui-badge" :class="dynamicClass"><slot></slot></span>
</template>
<script>
export default {
  props: {
    isDot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dynamicClass: function () {
      return {
        'weui-badge_dot': this.isDot
      }
    }
  }
}
</script>