<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress" :style="widthStyle"></div>
    </div>
    <a class="weui-progress__opr">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    widthStyle () {
      return {
        width: `${this.progress}%`
      }
    }
  }
}
</script>