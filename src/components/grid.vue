<template>
  <div :class="['grid', 'grid--' + direction]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  padding: 10px 0;
  background-color: #fff;
}
.grid--vertical {
  align-items: center;
  justify-content: space-between;
}
.grid--horizontal {
  flex-direction: column;
}
</style>
