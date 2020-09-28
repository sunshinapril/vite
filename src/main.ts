import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/reset.css'
import router from './router';
import store from './store';
import inject from './plugins/inject';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App).use(router).use(store).use(Antd).use(inject).mount('#app');
