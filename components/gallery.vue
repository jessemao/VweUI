<template>
  <transition name="mask-fade">
    <div v-if="showGallery" class="weui-gallery" :class="{'weui-gallery--show': showGallery}" @click="onClickGallery">
      <span class="weui-gallery__img" :style="{'backgroundImage': 'url(' + enlargeImage +')'}"></span>
      <div class="weui-gallery__opr">
        <a class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    showGallery: {
      type: Boolean,
      default: false
    },
    enlargeImage: {
      type: String
    }
  },
  methods: {
    onClickGallery: function () {
      this.$emit('click')
    }
  }
}
</script>
<style>
.mask-fade-enter-active, .mask-fade-leave-active {
  transition: opacity 0.1s linear 0s;
}
.mask-fade-enter, .mask-fade-leave-active {
  opacity: 0;
}

.weui-gallery.weui-gallery--show {
  opacity: 1;
  display: block;
}
</style>