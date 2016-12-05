<template>
  <weui-cell :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter">
    <label slot="header" class="weui-label">{{label}}</label>
    <input slot="body" class="weui-input" type="number" :pattern="pattern" :name="name" :placeholder="placeholder" v-model="value" />
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
    pattern: {
      type: String,
      default: '[0-9]*'
    },
    hasWarning: {
      type: Boolean,
      default: false
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