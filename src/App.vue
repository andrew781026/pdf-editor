<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Board from './components/Board.vue'
import Fabric from './components/Fabric.vue'
</script>

<template>
  <div class="flex flex-col">
    <Board/>
    <Fabric/>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #274f2a;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  font-family: '微軟正黑體', '蘋果儷黑體', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; 這行會造成 cytoscape 內的 canvas 位置顯示異常 */
  color: #2c3e50;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}
</style>
