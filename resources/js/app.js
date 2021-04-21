import 'vite/dynamic-import-polyfill';

import '../css/app.css';

import './bootstrap';

import { createApp, defineAsyncComponent } from 'vue';

const app = createApp({});

app.component('example-component', defineAsyncComponent(() => import('./components/ExampleComponent.vue')));

app.mount('#app');
