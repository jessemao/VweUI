<template>
  <router-link :to="toUrl" class="weui-cell weui-cell_link">
    <cell-header v-if="hasHeader">
      <slot name="header"></slot>
    </cell-header>
    <cell-body>
      <slot name="body"></slot>
    </cell-body>
    <cell-footer v-if="hasFooter">
      <slot name="footer"></slot>
    </cell-footer>
  </router-link>
</template>

<script>
import {cellBody, cellHeader, cellFooter} from '../cell'

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
    toUrl: {
      type: String,
      default: 'javascript:void(0);'
    }
  },
  components: {
    'cell-header': cellHeader,
    'cell-body': cellBody,
    'cell-footer': cellFooter
  }
}
</script>