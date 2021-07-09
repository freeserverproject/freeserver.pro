export default [
	{
		path: '/',
		name: 'Main',
		component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
			}
		]
	}, {
		path: '/',
		name: 'Article',
		component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue'),
		children: [
			{
				path: 'privacy-policy',
				name: 'PrivacyPolicy',
				component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../articles/PrivacyPolicy.vue')
			}, {
				path: 'join-us',
				name: 'JoinUs',
				component: () => import(/* webpackChunkName: "JoinUs" */ '../articles/JoinUs.vue')
			}, {
				path: 'tos',
				name: 'TOS',
				component: () => import(/* webpackChunkName: "TOS" */ '../articles/TOS.vue')
			}, {
				path: 'faq',
				name: 'FAQ',
				redirect: () => {
					window.location.href = 'https://wiki.freeserver.pro/';
				}
			}, {

				path: 'top',
				name: 'TOP',
				alias: 'terms-of-pages',
				component: () => import(/* webpackChunkName: "TOP" */ '../articles/TOP.vue')
			}
		]
	}
]
