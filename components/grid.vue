<template>
  <div class="weui-grids">
    <router-link v-for="link in data" class="weui-grid" v-bind:to="link.url">
      <div class="weui-grid__icon">
        <img v-bind:src="link.image" alt="" />
      </div>
      <p class="weui-grid__label">{{link.text}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>