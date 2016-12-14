<template>
  <div class="weui-media-box" :class="classObject">
    <weui-mediabox-title v-if="!!title">{{title}}</weui-mediabox-title>
    <weui-mediabox-desc v-if="!!description">{{description}}</weui-mediabox-desc>
    <slot name="body"></slot>
  </div>
</template>
<script>
import MediaBoxThumb from './mediabox_thumb'
import MediaBoxTitle from './mediabox_title'
import MediaBoxDesc from './mediabox_desc'
export default {
  props: {
    type: {
      type: String,
      default: 'mix'
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    description: {
      type: String,
      default: '描述'
    }
  },
  computed: {
    classObject: function () {
      return this.isSmall ? 'weui-media-box_small-text' : 'weui-media-box_text'
    }
  },
  components: {
    'weui-mediabox-thumb': MediaBoxThumb,
    'weui-mediabox-title': MediaBoxTitle,
    'weui-mediabox-desc': MediaBoxDesc
  }
}
</script>