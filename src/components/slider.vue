<template>
  <div class="weui-slider-box">
    <div class="weui-slider">
      <div id="sliderInner" class="weui-slider__inner">
        <div id="sliderTrack" :style="trackStyle" class="weui-slider__track"></div>
        <div @touchstart="onTouchStart" @touchmove="onTouchMove" id="sliderHandler" :style="handlerStyle" class="weui-slider__handler"></div>
      </div>
    </div>
    <div id="sliderValue" class="weui-slider-box__value">{{value}}</div>
  </div>
</template>
<script>
export default {
  props: {
    defaultValue: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      value: this.defaultValue,
      totalLen: null,
      startLeft: null,
      startX: null
    }
  },
  computed: {
    trackStyle () {
      return {
        width: `${this.value}%`
      }
    },
    handlerStyle () {
      return {
        left: `${this.value}%`
      }
    }
  },
  mounted () {
    var innerSlider = document.getElementById('sliderInner')
    this.totalLen = innerSlider.offsetWidth
  },
  methods: {
    onTouchStart: function (e) {
      this.valueUpdated = true
      let sliderHandler = document.getElementById('sliderHandler')
      this.startLeft = parseInt(window.getComputedStyle(sliderHandler).left)
      this.startX = e.changedTouches[0].clientX
      this.$emit('touchstart', e)
    },
    onTouchMove: function (e) {
      let dist = this.startLeft + e.changedTouches[0].clientX - this.startX
      dist = dist < 0 ? 0 : dist > this.totalLen ? this.totalLen : dist
      this.value = parseInt(dist / this.totalLen * 100)
      e.target.value = this.value
      e.preventDefault()
      this.$emit('touchmove', e)
    }
  }
}
</script>