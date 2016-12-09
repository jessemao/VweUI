<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <slot name="header"></slot>
    </div>
    <div class="weui-form-preview__bd">
      <slot name="body"></slot>
    </div>
    <div class="weui-form-preview__ft">
      <weui-preview-button v-if="secondaryButton && !!secondaryButton.text" :type="secondaryButton.type" @click="secondaryButton.callback">{{secondaryButton.text}}</weui-preview-button>
      <weui-preview-button v-if="primaryButton &&!!primaryButton.text" :type="primaryButton.type" @click="primaryButton.callback">{{primaryButton.text}}</weui-preview-button>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import PreviewButton from './preview_button'
export default {
  props: {
    primaryButton: {
      type: Object,
      default: function () {
        return {
          text: '操作',
          callback: function () {}
        }
      }
    },
    secondaryButton: {
      type: Object
    }
  },
  components: {
    'weui-preview-button': PreviewButton
  }
}
</script>