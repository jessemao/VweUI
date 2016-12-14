<template>
  <ul class="weui-media-box__info">
    <li v-for="info in infos" class="weui-media-box__info__meta" :class="{'weui-media-box__info__meta_extra': info.isExtra}">{{info.text}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    infos: {
      type: Array,
      default: []
    }
  }
}
</script>