<template>
  <div class="weui-cells weui-cells_checkbox">
    <label v-for="(value, index) in data" class="weui-cell weui-check__label" :key="index" :for="value.id">
      <div class="weui-cell__hd">
        <input type="checkbox" class="weui-check" :name="value.name" :id="value.id" v-model="checked" :value="value.value">
        <i class="weui-icon-checked"></i>
      </div>
      <div class="weui-cell__bd">
        <p>{{value.value}}</p>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: Array
    }
  },
  data () {
    return {
      checked: this.defaultValue
    }
  },
  watch: {
    checked: function () {
      this.$emit('change', this.checked)
    }
  }
}
</script>