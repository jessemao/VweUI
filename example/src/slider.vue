<template>
  <div class="page slider">
    <div class="page__header">
      <h1 class="header__title">Slider</h1>
      <p class="header__desc">滑块</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-slider :value="value" @touchstart="handleTouchStart" @touchmove="handleTouchMove"></weui-slider>
    </div>
  </div>
</template>
<script>
import {Slider} from 'vweui'
export default {
  data () {
    return {
      value: 0
    }
  },
  methods: {
    handleTouchStart (e) {
    },
    handleTouchMove (e) {
    }
  },
  components: {
    'weui-slider': Slider
  }
}
</script>