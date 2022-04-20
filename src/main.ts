import { createApp } from 'vue';
import App from './App.vue';
import router from './router/';
import HashMatchLink from './components/HashMatchLink.vue';

const app = createApp(App);

app
    .use(router)
    .component('HashMatchLink', HashMatchLink)
    .mount('#app');
