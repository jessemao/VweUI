<template>
  <div class="page button">
    <div class="page__header">
      <h1 class="header__title">Button</h1>
      <p class="header__desc">按钮</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-button>页面主操作 Normal</weui-button>
      <weui-button :disabled="true">页面主操作 Disabled</weui-button>
      <weui-button type="default">页面次要操作 Normal</weui-button>
      <weui-button type="default" :disabled="true">页面次要操作 Disabled</weui-button>
      <weui-button type="warn">警告类操作 Normal</weui-button>
      <weui-button type="warn" :disabled="true">警告类操作 Disabled</weui-button>
      <div class="button-sp-area">
        <weui-button :plain="true" type="default">按钮</weui-button>
        <weui-button :plain="true" type="default" :disabled="true">按钮</weui-button>
        <weui-button :plain="true">按钮</weui-button>
        <weui-button :plain="true" :disabled="true">按钮</weui-button>
        <weui-button :plain="true" :mini="true">按钮</weui-button>
        <weui-button type="default" :mini="true">按钮</weui-button>
        <weui-button type="warn" :mini="true">按钮</weui-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Button} from 'vweui'
export default {
  components: {
    'weui-button': Button
  }
}
</script>