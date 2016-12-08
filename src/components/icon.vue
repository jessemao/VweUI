<template>
  <i :class="[nameClass, typeClass]"></i>
</template>

<script>
export default {
  props: {
    /**
     * 图标名称，可能的取值有
     * success, success_circle, success_no_circle,
     * info, waiting, waiting_circle, circle,
     * warn, download, info_circle, cancel
     */
    name: {
      type: String,
      required: true
    },
    /**
     * 图标类型
     * default: 默认小图标（默认）
     * message: 用于消息页的大图标
     * safe: 轮廓为盾牌的大图标
     */
    type: {
      type: String,
      required: false,
      default: 'default'
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nameClass () {
      return `weui-icon${this.type === 'safe' ? '_safe' : ''}-${this.name}`
    },
    typeClass () {
      switch (this.type) {
        case 'message':
          return this.primary ? 'weui-icon_msg-primary' : 'weui-icon_msg'
        case 'safe':
          return this.primary ? 'weui-icon_safe-primary' : 'weui-icon_safe'
        default:
          return false
      }
    }
  }
}
</script>