<template>
  <transition name="dialog-fade">
    <div v-if="show">
      <div class="weui-mask"></div>
      <div class="weui-dialog" :class="{'weui-skin_android': isAndroid}">
        <div v-if="titleExist" class="weui-dialog__hd">
          <strong class="weui-dialog__title">
            {{title}}
          </strong>
        </div>
        <div class="weui-dialog__bd">
          {{bodyContent}}
        </div>
        <div class="weui-dialog__ft">
          <a v-if="secondaryExist" class="weui-dialog__btn weui-dialog__btn_default" @click="onClick('secondary-button-click', secondaryButton.key)">{{secondaryButton.value}}</a>
          <a class="weui-dialog__btn weui-dialog__btn_primary" @click="onClick('primary-button-click', primaryButton.key)">{{primaryButton.value}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isAndroid: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String
    },
    bodyContent: {
      type: String,
      required: true,
      default: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    },
    secondaryButton: {
      type: Object
    },
    primaryButton: {
      type: Object,
      required: true,
      default: {
        key: 'primary',
        value: '主操作'
      }
    },
    hideDialog: {
      type: Function,
      required: true
    }
  },
  computed: {
    titleExist: function () {
      return !(typeof this.title === 'undefined' || this.title === null)
    },
    secondaryExist: function () {
      return !(typeof this.secondaryButton === 'undefined' || this.secondaryButton === null)
    }
  },
  methods: {
    onClick: function (eventType, key) {
      this.$emit(eventType, key)
      this.hideDialog()
    }
  }
}
</script>

<style>
.dialog-fade-enter-active, .dialog-fade-leave-active {
  transition: opacity 0.2s linear 0s;
}
.dialog-fade-enter, .dialog-fade-leave-active {
  opacity: 0;
}
</style>