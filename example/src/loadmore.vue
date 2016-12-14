<template>
  <div class="page icon">
    <div class="page__header">
      <h1 class="header__title">Loadmore</h1>
      <p class="header__desc">加载更多</p>
    </div>
    <div class="page__body">
      <weui-loadmore>正在加载</weui-loadmore>
      <weui-loadmore :showLoading="false" :showLine="true">暂无数据</weui-loadmore>
      <weui-loadmore :showLoading="false" :showLine="true" :showDot="true"></weui-loadmore>
    </div>
  </div>
</template>
<script>
import {Loadmore} from 'vweui'
export default {
  components: {
    'weui-loadmore': Loadmore
  }
}
</script>