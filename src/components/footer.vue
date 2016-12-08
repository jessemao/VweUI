<template>
  <div class="weui-footer" :class="{'weui-footer_fixed-bottom': fixedBottom}">
    <p v-if="!!links && links.length > 0" class="weui-footer__links">
      <a v-for="link in links" :href="link.url" class="weui-footer__link">{{link.text}}</a>
    </p>
    <p class="weui-footer__text">
      <slot></slot>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      default: null
    },
    fixedBottom: {
      type: Boolean,
      default: true
    }
  }
}
</script>