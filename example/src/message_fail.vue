<template>
  <weui-message icon="warn" title="操作失败">
    <span slot="content">内容详情，可根据实际需要安排</span>
    <weui-button-area slot="operation">
      <weui-button type="primary">确定</weui-button>
      <weui-button type="default">取消</weui-button>
    </weui-button-area>
    <a href slot="extra">查看详情</a>
  </weui-message>
</template>

<script>
import {ButtonArea, Button, Message} from 'vweui'

export default {
  components: {
    'weui-message': Message,
    'weui-button': Button,
    'weui-button-area': ButtonArea
  }
}
</script>