<template>
  <div class="page preview">
    <div class="page__header">
      <h1 class="header__title">Preview</h1>
      <p class="header__desc">表单预览</p>
    </div>
    <div class="page__body">
      <weui-preview>
        <weui-preview-item slot="header" label="付款金额" content="¥2400.00"></weui-preview-item>
        <weui-preview-item v-for="item in items" slot="body" :label="item.label" :content="item.content"></weui-preview-item>
      </weui-preview>
      <weui-preview :secondaryButton="secondaryButton">
        <weui-preview-item slot="header" label="付款金额" content="¥2400.00"></weui-preview-item>
        <weui-preview-item v-for="item in items" slot="body" :label="item.label" :content="item.content"></weui-preview-item>
      </weui-preview>
    </div>
  </div>
</template>
<script>
import {Preview, PreviewItem, Button} from 'vweui'
export default {
  data () {
    return {
      items: [
        {
          label: '商品',
          content: '电动打蛋机'
        },
        {
          label: '标题标题',
          content: '名字名字名字'
        },
        {
          label: '标题标题',
          content: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }
      ],
      secondaryButton: {
        text: '辅助操作',
        callback: function () {},
        type: 'default'
      }
    }
  },
  components: {
    'weui-preview': Preview,
    'weui-preview-item': PreviewItem,
    'weui-button': Button
  }
}
</script>