<template>
  <div class="page progress">
    <div class="page__header">
      <h1 class="header__title">Progress</h1>
      <p class="header__desc">进度条</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-progress :progress="0"></weui-progress>
      <br>
      <weui-progress :progress="50"></weui-progress>
      <br>
      <weui-progress :progress="75"></weui-progress>
    </div>
  </div>
</template>
<script>
import Progress from 'components/progress'
export default {
  components: {
    'weui-progress': Progress
  }
}
</script>