<template>
  <div class="weui-msg">
    <div v-if="icon" class="weui-msg__icon-area">
      <i class="weui-icon_msg" :class="[`weui-icon-${icon}`]"></i>
    </div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title" v-if="title">{{title}}</h2>
      <p class="weui-msg__desc">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="weui-msg__opr-area">
      <slot name="operation"></slot>
    </div>
    <div class="weui-msg__extra-area">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

