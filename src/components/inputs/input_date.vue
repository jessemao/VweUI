<template>
  <weui-cell :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter">
    <label slot="header" class="weui-label">{{label}}</label>
    <input v-if="type === 'date'" slot="body" class="weui-input" :name="name" type="date" v-model="value"/>
    <input v-else slot="body" :name="name" class="weui-input" type="datetime-local" v-model="value"/>
  </weui-cell>
</template>

<script>
import Cell from '../cell'
export default {
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'date'
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