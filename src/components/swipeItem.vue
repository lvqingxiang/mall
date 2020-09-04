<template>
  <div class="swipe-item" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.swipe-item {
  /* position: absolute; */
  width: 100vw;
  background-size: cover;
  flex-shrink: 0; /* 不允许压缩 */
}
</style>
