<template>
  <div class="weui-search-bar__wrap">
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': isFocusing || !!value}">
      <form class="weui-search-bar__form" @submit.prevent="onSubmit">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search"
            id="weui-search-bar__input"
            ref="input"
            class="weui-search-bar__input"
            :placeholder="placeholder"
            v-model="value"
            @focus="onFocus"
            @blur="onBlur"
            required
          />
          <a class="weui-icon-clear" @click="clearInput"></a>
        </div>
        <label for="weui-search-bar__input" class="weui-search-bar__label">
          <i class="weui-icon-search"></i>
          <span v-if="!!placeholder">{{placeholder}}</span>
        </label>
      </form>
      <a class="weui-search-bar__cancel-btn"
        v-if="!!cancelText && isFocusing"
        @click="cancelInput"
      >
        {{cancelText}}
      </a>
    </div>
    <div v-if="!!value && !!searchSuggestion && searchSuggestion.length > 0" class="weui-cells searchbar-result">
      <div v-for="item in searchSuggestion" @click="suggestionClick(item)" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd weui-cell_primary">
          <p>{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    searchSuggestion: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      value: '',
      isFocusing: false
    }
  },
  watch: {
    value: function () {
      this.$emit('change', this.value)
    }
  },
  methods: {
    onSubmit: function () {
      this.$emit('submit', this.value)
    },
    onFocus: function () {
      this.isFocusing = true
    },
    onBlur: function () {
      if (!this.value) {
        this.isFocusing = false
      }
    },
    suggestionClick: function (value) {
      this.$emit('submit', value)
    },
    clearInput: function () {
      this.value = ''
      this.$refs.input.focus()
    },
    cancelInput: function () {
      this.value = ''
      this.isFocusing = false
    }
  }
}
</script>