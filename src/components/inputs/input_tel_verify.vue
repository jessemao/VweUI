<template>
  <weui-cell :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter" class="weui-cell_vcode">
    <label slot="header" class="weui-label">{{label}}</label>
    <input slot="body" :name="name" class="weui-input" type="tel" :placeholder="placeholder" :pattern="pattern" v-model="value" />
    <button slot="footer" class="weui-vcode-btn">{{buttonText}}</button>
  </weui-cell>
</template>

<script>
import Cell from '../cell'
export default {
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    buttonText: {
      type: String,
      default: '获取验证码'
    },
    hasFooter: {
      type: Boolean,
      default: true
    },
    pattern: {
      type: String,
      default: '[0-9]*'
    }
  },
  data () {
    return {
      value: null
    }
  },
  watch: {
    value: function () {
      this.$emit('change', this.value)
    }
  },
  components: {
    'weui-cell': Cell
  }
}
</script>

<style>
button.weui-vcode-btn {
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  outline: 0;
}
</style>