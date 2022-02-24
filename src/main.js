import {createApp} from 'vue';
import App from './App.vue';

// [Kuro] Vue 2.x 至 3.0 快速升級指南 : 參考 https://book.vue.tw/appendix/migration.html
const app = createApp(App)

app.mount('#app');
