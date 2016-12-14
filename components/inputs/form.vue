<template>
  <div class="weui-cells" :class="{'weui-cells_form': isForm}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    isForm: {
      type: Boolean,
      default: true
    }
  }
}
</script>