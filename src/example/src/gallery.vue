<template>
  <div class="page gallery">
    <div class="page__header">
      <h1 class="header__title">Gallery</h1>
      <p class="header__desc">Uploader一般与Gallery一同使用</p>
    </div>
    <weui-gallery :show-gallery="showGallery" :enlarge-image="enlargeImage" @click="onClickGallery"></weui-gallery>
  </div>
</template>
<script>
import Gallery from 'components/gallery'
export default {
  data () {
    return {
      showGallery: true,
      enlargeImage: '/static/images/pic_160.png'
    }
  },
  methods: {
    onClickGallery: function () {
      // uncomment this to see how to close gallery.
      // this.showGallery = false
    }
  },
  components: {
    'weui-gallery': Gallery
  }
}
</script>