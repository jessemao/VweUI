<template>
  <div class="page">
    <div class="page__header">
      <h1 class="header__title">Vue-WeUI</h1>
      <p class="header__desc">Vue.js for WeUI</p>
    </div>
    <div class="page__body">
      <grid v-bind:data="gridData"></grid>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Grid from 'components/grid'
export default {
  data () {
    return {
      gridData: [
        {
          text: 'ActionSheet',
          url: 'actionsheet',
          image: '/static/images/icon_nav_actionSheet.png'
        },
        {
          text: 'Button',
          url: 'button',
          image: '/static/images/icon_nav_button.png'
        },
        {
          text: 'Cell',
          url: 'cell',
          image: '/static/images/icon_nav_cell.png'
        },
        {
          text: 'Dialog',
          url: 'dialog',
          image: '/static/images/icon_nav_dialog.png'
        },
        {
          text: 'Article',
          url: 'article',
          image: '/static/images/icon_nav_article.png'
        },
        {
          text: 'Message',
          url: 'message',
          image: '/static/images/icon_nav_msg.png'
        },
        {
          text: 'Progress',
          url: 'progress',
          image: '/static/images/icon_nav_progress.png'
        },
        {
          text: 'Toast',
          url: 'toast',
          image: '/static/images/icon_nav_toast.png'
        },
        {
          text: 'Form',
          url: 'form',
          image: '/static/images/icon_nav_form.png'
        }
      ]
    }
  },
  components: {
    Grid
  }
}
</script>

<style>

</style>