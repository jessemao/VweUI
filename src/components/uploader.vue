<template>
  <div>
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
    <weui-form>
      <weui-cell>
        <div slot="body" class="weui-uploader">
          <div class="weui-uploader__hd">
            <p class="weui-uploader__title">{{title}}</p>
            <div v-if="count >= 0 && maxLength >= 0" class="weui-uploader__info">{{count}}/{{maxLength}}</div>
          </div>
          <div class="weui-uploader__bd">
            <ul class="weui-uploader__files">
              <li v-for="item in images" class="weui-uploader__file" :class="{'weui-uploader__file_status': !!item.progress || item.warning}"
                :style="{'backgroundImage': 'url(' + item.imageUrl + ')'}" @click="onClick(item)">
                <div v-if="!!item.progress || item.warning" class="weui-uploader__file-content">
                  <i v-if="item.warning" class="weui-icon-warn"></i>
                  <span v-if="!!item.progress">{{item.progress}}</span>
                </div>
              </li>
            </ul>
            <div class="weui-uploader__input-box">
              <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*"
                multiple @change="onChange" />
            </div>
          </div>
        </div>
      </weui-cell>
    </weui-form>
  </div>
</template>
<script>
import {Form} from './inputs'
import Cell from './cell'
export default {
  props: {
    title: {
      type: String
    },
    maxLength: {
      type: Number,
      default: 0
    },
    images: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      enlargeImage: null,
      showGallery: false,
      count: this.images.length
    }
  },
  methods: {
    onChange: function (event) {
      this.$emit('change', event)
    },
    onClick: function (item, event) {
      console.log('click', item.imageUrl)
      this.enlargeImage = item.imageUrl
      this.showGallery = true
    },
    onClickGallery: function () {
      this.showGallery = false
    }
  },
  components: {
    'weui-form': Form,
    'weui-cell': Cell
  }
}
</script>

<style>
.mask-fade-enter-active, .mask-fade-leave-active {
  transition: opacity 0.2s linear 0s;
}
.mask-fade-enter, .mask-fade-leave-active {
  opacity: 0;
}

.weui-gallery.weui-gallery--show {
  opacity: 1;
  display: block;
}
</style>