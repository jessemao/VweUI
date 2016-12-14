<template>
  <div class="weui-form-preview__item">
    <label class="weui-form-preview__label">{{label}}</label>
    <span class="weui-form-preview__value">{{content}}</span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>