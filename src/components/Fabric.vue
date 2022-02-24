<template>
  <div class="root">
    <div class="btn-wrap">
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
    </div>
    <canvas class="fabric" ref="canvas" height="400" width="1000"></canvas>
  </div>
</template>

<script>
import {fabric} from 'fabric';

export default {
  name: "Fabric",
  mounted() {

    this.canvas = new fabric.Canvas(this.$refs.canvas);
  },
  data() {

    return {
      canvas: null,
      counter: 1,
    }
  },
  methods: {
    add() {

      const rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
        fill: 'red'
      });

      this.canvas.add(rect);
    }
  }
}
</script>

<style scoped>
button {
  font-size: 1rem;
}

.root {
  display: flex;
  background-color: rgb(89, 162, 230);
  margin-top: 20px;
}

.btn-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fabric {
  border: 3px solid #333;
  width: 500px;
  height: 500px;
  background-color: #fff;
}
</style>
