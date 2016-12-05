<template>
  <weui-cell class="weui-cell_switch" :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter">
    <span slot="body">{{label}}</span>
    <label v-if="isEdge" slot="footer" for="switchCP" class="weui-switch-cp">
      <input id="switchCP" :name="name" class="weui-switch-cp__input" type="checkbox" v-model="value" />
      <div class="weui-switch-cp__box"></div>
    </label>
    <input v-else slot="footer" :name="name" class="weui-switch" type="checkbox" v-model="value" />
  </weui-cell>
</template>

<script>
import Cell from '../cell'
export default {
  props: {
    label: {
      type: String
    },
    hasHeader: {
      type: Boolean,
      default: false
    },
    hasFooter: {
      type: Boolean,
      default: true
    },
    isEdge: {
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