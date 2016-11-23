<template>
  <a class="weui-btn" :class="[typeClass, disableClass, miniClass]" @click="onClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass () {
      if (this.plain) {
        return `weui-btn_plain-${this.type}`
      } else {
        return `weui-btn_${this.type}`
      }
    },
    disableClass () {
      if (this.disabled) {
        if (this.plain) {
          return 'weui-btn_plain-disabled'
        } else {
          return 'weui-btn_disabled'
        }
      } else {
        return ''
      }
    },
    miniClass () {
      if (this.mini) {
        return 'weui-btn_mini'
      } else {
        return ''
      }
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click')
    }
  }
}
</script>