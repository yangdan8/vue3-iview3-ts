import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionAPI from '@vue/composition-api';

createApp(App).use(store).use(router).use(VueCompositionAPI).mount('#app');
