import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue';

const router = createRouter({
	history: createWebHashHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;

		const position = {
			behavior: 'smooth'
		};

		if (to.hash && document.querySelector(to.hash)) position.el = to.hash;
		else {
			position.top = 0;
			position.left = 0;
		}
		return position;
	},
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
		}, {
			path: '/',
			name: 'Article',
			component: Article,
			children: [
				{
					path: 'privacy-policy',
					name: 'PrivacyPolicy',
					component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../articles/PrivacyPolicy.vue')
				}
			]
		}
	]
});

export default router;
