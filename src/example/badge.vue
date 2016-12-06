<template>
  <div class="page badge">
    <div class="page__header">
      <h1 class="header__title">Badge</h1>
      <p class="header__desc">徽章</p>
    </div>
    <div class="page__body">
      <weui-form-title>新消息提示跟摘要信息后，统一在列表右侧</weui-form-title>
      <weui-form>
        <weui-cell :can-access="true" :has-footer="true">
          <span slot="body">单行列表</span>
          <span slot="footer" style="font-size: 0">
            <span style="vertical-align:middle; font-size: 17px;">详细信息</span>
            <weui-badge :is-dot="true" style="margin-left: 5px;margin-right: 5px;"></weui-badge>
          </span>
        </weui-cell>
      </div>

      <weui-form-title>未读数红点跟在主题信息后，统一在列表左侧</weui-form-title>
      <weui-form :is-form="false">
        <weui-cell>
          <div slot="header" style="position: relative;margin-right: 10px;">
            <img src="/static/images/pic_160.png" style="width: 50px;display: block" />
            <weui-badge style="position: absolute;top: -.4em;right: -.4em;">8</weui-badge>
          </div>
          <div slot="body">
            <p>联系人名称</p>
            <p style="font-size: 13px;color: #888888;">摘要信息</p>
          </div>
        </weui-cell>
        <weui-cell :can-access="true">
          <div slot="body">
            <span style="vertical-align: middle">单行列表</span>
            <weui-badge style="margin-left: 5px;">8</weui-badge>
          </div>
          <div slot="footer"></div>
        </weui-cell>
        <weui-cell :can-access="true">
          <div slot="body">
            <span style="vertical-align: middle">单行列表</span>
            <weui-badge style="margin-left: 5px;">8</weui-badge>
          </div>
          <div slot="footer">详细信息</div>
        </weui-cell>
        <weui-cell :can-access="true">
          <div slot="body">
            <span style="vertical-align: middle">单行列表</span>
            <weui-badge style="margin-left: 5px;">New</weui-badge>
          </div>
          <div slot="footer"></div>
        </weui-cell>
      </weui-form>
    </div>
  </div>
</template>
<script>
import {Form, FormTitle} from 'components/inputs'
import {Cell} from 'components/cell'
import Badge from 'components/badge'
export default {
  components: {
    'weui-form': Form,
    'weui-form-title': FormTitle,
    'weui-cell': Cell,
    'weui-badge': Badge
  }
}
</script>