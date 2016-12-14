<template>
  <div class="page uploader">
    <div class="page__header">
      <h1 class="header__title">Uploader</h1>
      <p class="header__desc">Uploader一般与Gallery一同使用</p>
    </div>
    <weui-uploader title="图片上传" :count="count" :maxLength="maxLength" :images="images" @change="handleChange">
    </weui-uploader>
  </div>
</template>
<script>
import {Uploader} from 'vweui'
export default {
  data () {
    return {
      count: 0,
      maxLength: 9,
      images: [
        {
          imageUrl: '/static/images/pic_160.png'
        },
        {
          imageUrl: '/static/images/pic_160.png'
        },
        {
          imageUrl: '/static/images/pic_160.png'
        },
        {
          imageUrl: '/static/images/pic_160.png'
        },
        {
          imageUrl: '/static/images/pic_160.png',
          warning: true
        },
        {
          imageUrl: '/static/images/pic_160.png',
          progress: '50%'
        }
      ]
    }
  },
  watch: {
    images: function () {
      this.count = this.images.length
    }
  },
  methods: {
    handleChange: function (event) {

    }
  },
  components: {
    'weui-uploader': Uploader
  }
}
</script>