import 'vite/dynamic-import-polyfill';

import '../css/app.css';

import './bootstrap';

import App from './components/App.vue'

import { createApp } from 'vue';

createApp(App).mount('#app');
