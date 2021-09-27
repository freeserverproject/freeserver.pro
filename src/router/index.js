import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;

		const position = {
			behavior: 'smooth',
			top: 90
		};

		if (to.hash && document.querySelector(to.hash)) position.el = to.hash;
		else {
			position.top = 0;
			position.left = 0;
		}
		return position;
	},
	routes
});

router.beforeEach((to, from, next) => {
	const hash = to.path.match(/\/?%23(.*)$/);
	if (hash && hash[1] && !to.hash) {
		next({
			path: to.path.replace(new RegExp(`${hash[0]}$`), ''),
			hash: `#${hash[1]}`
		});
	} else {
		next();
	}
});

export default router;
