<template>
  <weui-cell :has-warning="hasWarning" :has-header="hasHeader" :has-footer="hasFooter">
    <textarea slot="body" :name="name" class="weui-textarea" :placeholder="placeholder" :rows="rowCount" v-model="value"></textarea>
    <div slot="body" class="weui-textarea-counter">
      <span>{{currentLength}}</span>/{{maxLength}}
    </div>
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
    rowCount: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String
    },
    maxLength: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      value: null,
      currentLength: 0
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