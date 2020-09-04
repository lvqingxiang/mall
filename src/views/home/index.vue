<template>
  <div>
    <navbar></navbar>
    <swipe :loop="true">
      <swipeItem v-for="item in imgs" :key="item">
        <img :src="item" class="image" />
      </swipeItem>
    </swipe>
    <grid class="grid-container">
      <gridItem icon="icon-dress" text="服饰"></gridItem>
      <gridItem icon="icon-coffee" text="餐饮"></gridItem>
      <gridItem icon="icon-sports" text="运动"></gridItem>
      <gridItem icon="icon-global_light" text="全球"></gridItem>
    </grid>
  </div>
</template>

<script>
import { navbar, grid, gridItem, swipe, swipeItem } from 'components/output'
export default {
  components: {
    navbar,
    grid,
    gridItem,
    swipe,
    swipeItem
  },
  data() {
    return {
      imgs: [
        require('assets/img/swipe1.jpeg'),
        require('assets/img/swipe2.jpeg'),
        require('assets/img/swipe3.jpeg')
      ]
    }
  }
}
</script>

<style scoped>
.grid-container {
  margin: 10px 0;
}
.grid-container,
.grid-container div {
  background-color: #f5f5f5;
}
.image {
  width: calc(100% - 16px);
  height: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  /* position: absolute; */
  /* border: 1px solid #eeeeee; */
}
</style>
