<template>
  <div class="page navbar">
    <weui-navbar :tabs="tabs" :active="activeTab" @change="handleChange">
      <div class="page__header">
        <h1 class="header__title">NavBar</h1>
        <p class="header__desc">顶端NavBar</p>
      </div>
    </weui-navbar>
  </div>
</template>

<script>
import NavBar from 'components/navbar'

export default {
  data () {
    return {
      tabs: {
        0: '选项一',
        1: '选项二',
        2: '选项三'
      },
      activeTab: '0'
    }
  },
  methods: {
    handleChange: function (key) {
      this.activeTab = key
    }
  },
  components: {
    'weui-navbar': NavBar
  }
}
</script>