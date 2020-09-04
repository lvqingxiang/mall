<template>
  <div class="navbar flex-center-around">
    <div class="left flex-center-center" v-if="true">
      <i class="iconfont icon-discoverfill"></i>
    </div>
    <div class="center"><search /></div>
    <div class="right flex-center-center" v-if="true">
      <i class="iconfont icon-cascades"></i>
    </div>
  </div>
</template>

<script>
import search from './search.vue'
export default {
  props: {
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    }
  },
  components: {
    search
  }
}
</script>

<style scoped>
.navbar {
  height: 40px;
  padding: 8px;
  background-color: #fff;
}
.flex-center-around {
  display: flex;
  align-items: space-around;
  justify-content: center;
}
.flex-center-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  width: 12%;
}
.center {
  width: 100%;
}
.right {
  width: 12%;
}
</style>
