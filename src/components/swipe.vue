<template>
  <div class="swipe">
    <div
      :style="{
        width: length * 100 + 'vw',
        transform: 'translateX(-' + curIndex * 100 + 'vw)'
      }"
      ref="swipe"
      class="swipe_track"
    >
      <slot></slot>
    </div>
    <div class="bottom center">
      <div
        v-for="(count, index) in length"
        :key="index"
        :class="{ active: index === curIndex }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: [],
      curIndex: 0,
      length: 0
    }
  },
  mounted() {
    this.list = [...this.$refs.swipe.children]
    this.length = this.list.length
    if (this.loop) {
      this.interval()
    }
  },
  methods: {
    interval() {
      setInterval(() => {
        if (this.curIndex === this.length - 1) {
          this.curIndex = 0
        } else {
          this.curIndex += 1
        }
      }, this.autoplay)
    }
  }
}
</script>

<style scoped>
.swipe {
  width: 100vw;
  height: 140px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom {
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  padding: 2px 0;
}
.bottom div {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: 5px;
  display: inline-block;
}
.active {
  background-color: red !important;
  border: 1px solid red;
}
.swipe_track {
  height: 100%;
  display: flex;
  transition-duration: 500ms;
}
</style>
