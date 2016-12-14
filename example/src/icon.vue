<template>
  <div class="page icon">
    <div class="page__header">
      <h1 class="header__title">Icon</h1>
      <p class="header__desc">图标</p>
    </div>
    <div class="page__body">
      <div class="icon-box">
        <weui-icon name="success" type="message"></weui-icon>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">成功</h3>
          <p class="icon-box__desc">用于表示操作顺利达成</p>
        </div>
      </div>
      <div class="icon-box">
        <weui-icon name="info" type="message"></weui-icon>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">提示</h3>
          <p class="icon-box__desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</p>
        </div>
      </div>
      <div class="icon-box">
        <weui-icon name="warn" type="message" :primary="true"></weui-icon>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">普通警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
        </div>
      </div>
      <div class="icon-box">
        <weui-icon name="warn" type="message"></weui-icon>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">强烈警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
        </div>
      </div>
      <div class="icon-box">
        <weui-icon name="waiting" type="message"></weui-icon>
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">等待</h3>
          <p class="icon-box__desc">用于表示等待</p>
        </div>
      </div>
      <div class="icon_sp_area">
        <weui-icon name="success"></weui-icon>
        <weui-icon name="success-no-circle"></weui-icon>
        <weui-icon name="circle"></weui-icon>
        <weui-icon name="warn"></weui-icon>
        <weui-icon name="download"></weui-icon>
        <weui-icon name="info-circle"></weui-icon>
        <weui-icon name="cancel"></weui-icon>
        <weui-icon name="search"></weui-icon>
      </div>
    </div>
  </div>
</template>
<script>
import {Icon} from 'vweui'
export default {
  components: {
    'weui-icon': Icon
  }
}
</script>
<style>
  .icon .page__body {
    padding: 0 40px;
    text-align: left;
  }

  .icon-box {
    margin-bottom: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .icon-box i {
    margin-right: 18px;
  }

  .icon-box__title {
    font-weight: 400;
  }

  .icon-box__desc {
    margin-top: 6px;
    font-size: 12px;
    color: #888;
  }
</style>