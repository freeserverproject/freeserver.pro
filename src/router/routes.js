export default [
	{
		path: '/',
		name: 'Main',
		component: () => import(/* webpackChunkName: "Main" */ '../views/Main.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
				meta: {
					title: 'ホーム'
				}
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
				component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../articles/PrivacyPolicy.vue'),
				meta: {
					title: 'プライバシーポリシー'
				}
			}, {
				path: 'join-us',
				name: 'JoinUs',
				component: () => import(/* webpackChunkName: "JoinUs" */ '../articles/JoinUs.vue'),
				meta: {
					title: 'Join US',
				}
			}, {
				path: 'tos',
				name: 'TOS',
				component: () => import(/* webpackChunkName: "TOS" */ '../articles/TOS.vue'),
				meta: {
					title: 'サービス利用規約'
				}
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
				component: () => import(/* webpackChunkName: "TOP" */ '../articles/TOP.vue'),
				meta: {
					title: 'Webページ利用規約'
				}
			}
		]
	}, {
		name: 'notFound',
		path: '/:pathMatch(.*)*',
		component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
	}
]
