<template>
  <div class="page searchbar">
    <div class="page__header">
      <h1 class="header__title">Search Bar</h1>
      <p class="header__desc">Search Bar</p>
    </div>
    <weui-searchbar :search-suggestion="searchSuggestion" @submit="handleSubmit" @change="handleChange">
    </weui-searchbar>
  </div>
</template>

<script>
import {SearchBar} from 'vweui'

export default {
  data () {
    return {
      searchSuggestion: []
    }
  },
  methods: {
    handleSubmit: function (value) {
      console.log('send request to search for ', value)
    },
    handleChange: function (value) {
      this.searchSuggestion = ['实时搜索文本', '实时搜索文本', '实时搜索文本', '实时搜索文本']
      console.log('update auto word suggestion on client side with key ', value)
    }
  },
  components: {
    'weui-searchbar': SearchBar
  }
}
</script>