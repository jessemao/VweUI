<template>
  <weui-cell :has-header="hasHeader" :has-footer="hasFooter" class="weui-cell_select" :class="selectPositionClass">
    <label slot="header" class="weui-label">{{label}}</label>
    <select slot="body" class="weui-select" :name="name" v-model="value">
      <option v-for="item in options" :value="item.value">{{item.text}}</option>
    </select>
  </weui-cell>
</template>
<script>
import Cell from '../cell'
export default {
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    },
    options: {
      type: Array
    },
    defaultSelection: {
      type: Number,
      default: 0
    },
    selectBefore: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    hasHeader: function () {
      return !!this.label
    },
    selectPositionClass: function () {
      if (this.selectBefore !== null) {
        return this.selectBefore ? 'weui-cell_select-before' : 'weui-cell_select-after'
      }
    }
  },
  data () {
    return {
      value: this.options[this.defaultSelection].value
    }
  },
  components: {
    'weui-cell': Cell
  }
}
</script>