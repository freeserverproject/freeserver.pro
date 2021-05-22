import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HashMatchLink from '@/components/HashMatchLink.vue';

const app = createApp(App);

app.component('hash-match-link', HashMatchLink);

app
    .use(router)
    .mount('#app');
