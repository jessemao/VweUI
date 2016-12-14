<template>
  <div class="actionsheet__wrap" :class="{'weui-skin_android': isAndroid}">
    <transition name="mask-fade">
      <div v-if="show"
        :class="[`weui-mask${transparent ? '_transparent' : ''}`]"
        :style="maskStyle"
        @click="hideActionSheet">
      </div>
    </transition>
    <div
      class="weui-actionsheet"
      :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div v-for="(text, key) in menus" class="weui-actionsheet__cell" @click="onClick('on-menu-click', key)">
          {{text}}
        </div>
      </div>
      <div v-if="actionExist" class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" @click="onClick('on-action-click', action.key)">
          {{action.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    menus: {
      type: Object
    },
    action: {
      type: Object
    },
    transparent: {
      type: Boolean,
      default: false
    },
    hideActionSheet: {
      type: Function,
      required: true
    },
    isAndroid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    actionExist: function () {
      return !(typeof this.action === 'undefined' || this.action === null)
    }
  },
  methods: {
    onClick: function (eventType, key) {
      this.$emit(eventType, key)
      if (eventType === 'on-action-click') {
        this.hideActionSheet()
      }
    }
  }
}
</script>

<style>
.mask-fade-enter-active, .mask-fade-leave-active {
  transition: opacity 0.2s linear 0s;
}
.mask-fade-enter, .mask-fade-leave-active {
  opacity: 0;
}

.weui-skin_android .weui-actionsheet.weui-actionsheet_toggle {
  opacity: 1;
  transition: opacity .2s linear 0s;
  visibility: visible;
}

.weui-skin_android .weui-actionsheet {
  opacity: 0;
  visibility: hidden;
}
</style>