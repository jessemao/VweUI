<template>
  <div class="weui-cell" :class="dynamicClass">
    <cell-header>
      <slot name="header"></slot>
    </cell-header>
    <cell-body>
      <slot name="body"></slot>
    </cell-body>
    <cell-footer>
      <i v-if="hasWarning" class="weui-icon-warn"></i>
      <slot name="footer"></slot>
    </cell-footer>
  </div>
</template>

<script>
import cellBody from './cell_body'
import cellHeader from './cell_header'
import cellFooter from './cell_footer'

export default {
  props: {
    hasWarning: {
      type: Boolean,
      default: false
    },
    canAccess: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dynamicClass: function () {
      return {
        'weui-cell_warn': this.hasWarning,
        'weui-cell_access': this.canAccess
      }
    }
  },
  components: {
    'cell-header': cellHeader,
    'cell-body': cellBody,
    'cell-footer': cellFooter
  }
}
</script>