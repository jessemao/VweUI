<template>
  <a class="weui-form-preview__btn" :class="[typeClass]" @click="onClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    typeClass () {
      return `weui-form-preview__btn_${this.type}`
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>