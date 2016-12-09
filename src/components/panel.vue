<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">
      <slot name="header"></slot>
    </div>
    <div class="weui-panel__bd">
      <slot name="body"></slot>
    </div>
    <div v-if="hasFooter" class="weui-panel__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasFooter: {
      type: Boolean,
      default: true
    }
  }
}
</script>