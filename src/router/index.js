import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main,
			children: [
				{
					path: '',
					name: 'Home',
					component: Home
				}
			]
		}
	]
});

export default router;
