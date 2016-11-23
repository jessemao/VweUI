<template>
  <div class="actionsheet__wrap">
    <div 
      :class="[`weui-mask${transparent ? '_transparent' : ''}`]" 
      :style="{display: show ? 'block' : 'none'}" 
      @click="hideActionSheet">
    </div>
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
          {{action.text}}
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