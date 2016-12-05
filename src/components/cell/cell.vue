<template>
  <div class="weui-cell" :class="dynamicClass">
    <cell-header v-if="hasHeader">
      <slot name="header"></slot>
    </cell-header>
    <cell-body>
      <slot name="body"></slot>
    </cell-body>
    <cell-footer v-if="hasFooter || hasWarning">
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
    hasHeader: {
      type: Boolean,
      default: true
    },
    hasFooter: {
      type: Boolean,
      default: false
    },
    hasWarning: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dynamicClass: function () {
      return {
        'weui-cell_warn': this.hasWarning
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