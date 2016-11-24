<template>
  <transition name="fade">
    <div v-if="show" class="weui-toast__wrap">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon_toast" :class="[`${loadingType ? 'weui-loading' : 'weui-icon-success-no-circle'}`]"></i>
        <p v-if="bodyContent" class="weui-toast__content">{{bodyContent}}</p>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    bodyContent: {
      type: String
    },
    loadingType: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s linear 0s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>