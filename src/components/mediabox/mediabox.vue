<template>
  <router-link :to="toUrl" class="weui-media-box" :class="classObject">
    <div class="weui-media-box__hd">
      <weui-mediabox-thumb v-if="!!imgSrc" :src="imgSrc"></weui-mediabox-thumb>
      <slot name="header"></slot>
    </div>
    <div class="weui-media-box__bd">
      <weui-mediabox-title v-if="!!title">{{title}}</weui-mediabox-title>
      <weui-mediabox-desc v-if="!!description">{{description}}</weui-mediabox-desc>
      <slot name="body"></slot>
    </div>
  </router-link>
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
    toUrl: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
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
      return this.isSmall ? 'weui-media-box_small-appmsg' : 'weui-media-box_appmsg'
    }
  },
  components: {
    'weui-mediabox-thumb': MediaBoxThumb,
    'weui-mediabox-title': MediaBoxTitle,
    'weui-mediabox-desc': MediaBoxDesc
  }
}
</script>