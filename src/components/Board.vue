<template>
  <div class="root">
    <div class="btn-wrap">
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
      <button @click="add">新增圈圈</button>
    </div>
    <div class="board" ref="board">

    </div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape';

export default {
  name: "Board",
  mounted() {

    this.cy = cytoscape({
      container: this.$refs.board,
      minZoom: 0,
      zoom: 100,
      maxZoom: 200,
      elements: [
        {
          group: 'nodes',
          data: {name: 'Test', weight: 75, type: 'circle', width: 30, height: 30},
          position: {x: 100, y: 100}
        }
      ],
      layout: {
        name: 'preset'
      },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(name)',
            "shape": "data(type)",
            'width': "data(width)",
            'height': "data(height)",
            'font-size': 12,
          }
        }
      ]
    })
  },
  data() {

    return {
      cy: null,
      counter: 1,
    }
  },
  methods: {
    add() {
      const counter = ++this.counter;

      this.cy.add({
        group: 'nodes',
        data: {name: 'Test', weight: 75, type: 'circle', width: 30, height: 30},
        position: {x: 200 + 30 * counter, y: 200 + 30 * counter}
      });
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
  background-color: rgb(73, 241, 87);
}

.btn-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.board {
  height: 500px;
  width: 1000px;
  padding: 0;
  border: 1px solid #333;
}
</style>
