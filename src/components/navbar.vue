<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div v-for="(value, key) in tabs"
        class="weui-navbar__item"
        :class="{'weui-bar__item_on': active === key}"
        @click="onClick(key)"
      >
        {{value}}
      </div>
    </div>
    <div class="weui-tab__panel">
      {{panelContent}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: [Object, Array],
      default: {
        0: 'Tab1',
        1: 'Tab2',
        3: 'Tab3'
      }
    },
    active: {
      type: [String, Number],
      default: '0'
    },
    pageContent: {
      type: String
    }
  },
  methods: {
    onClick: function (key) {
      this.$emit('change', key)
    }
  }
}
</script>