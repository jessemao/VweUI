<template>
  <div>
    <weui-gallery :show-gallery="showGallery" :enlarge-image="enlargeImage" @click="onClickGallery"></weui-gallery>
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
import Gallery from './gallery'
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
      this.enlargeImage = item.imageUrl
      this.showGallery = true
    },
    onClickGallery: function () {
      this.showGallery = false
    }
  },
  components: {
    'weui-form': Form,
    'weui-cell': Cell,
    'weui-gallery': Gallery
  }
}
</script>