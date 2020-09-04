<template>
  <div class="grid-item">
    <slot>
      <i :class="'iconfont ' + icon"></i>
      <p>{{ text }}</p>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '文字'
    },
    columnNum: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style>
.grid-item {
  flex: 1;
  padding: 10px 5px;
  background-color: #fff;
}
.grid-item p {
  font-size: 12px;
}
.grid-item i {
  font-size: 1.5rem;
}
</style>
