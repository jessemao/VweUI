<template>
  <div class="page badge">
    <div class="page__header">
      <h1 class="header__title">Footer</h1>
      <p class="header__desc">页脚</p>
    </div>
    <weui-footer :fixedBottom="false">
      Copyright &copy; 2008-2016 weui.io
    </weui-footer>
    <weui-footer :links="linkArray" :fixedBottom="false">
      Copyright &copy; 2008-2016 weui.io
    </weui-footer>
    <weui-footer :links="linkArray1" :fixedBottom="false">
      Copyright &copy; 2008-2016 weui.io
    </weui-footer>
    <weui-footer :links="linkArray2">
      Copyright &copy; 2008-2016 weui.io
    </weui-footer>
  </div>
</template>

<script>
import {Footer} from 'vweui'
export default {
  data () {
    return {
      linkArray: [{
        url: '',
        text: '底部链接'
      }],
      linkArray1: [
        {
          url: '',
          text: '底部链接'
        },
        {
          url: '',
          text: '底部链接'
        }
      ],
      linkArray2: [
        {
          url: '/',
          text: '首页'
        }
      ]
    }
  },
  components: {
    'weui-footer': Footer
  }
}
</script>