<template>
  <weui-cell :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter">
    <label slot="header" class="weui-label">{{label}}</label>
    <input slot="body" :name="name" class="weui-input" type="text" :placeholder="placeholder" v-model="value"/>
  </weui-cell>
</template>

<script>
import Cell from '../cell'
export default {
  props: {
    hasHeader: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
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