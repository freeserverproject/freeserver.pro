import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash && document.querySelector(to.hash)) {
      return {
        behavior: 'smooth',
        top: 90,
        el: to.hash
      }
    }

    return {
      behavior: 'smooth',
      top: 0,
      left: 0
    };
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

router.afterEach(to => {
  const title = to.meta.title ? `${to.meta.title} | FREESERVER` : 'FREESERVER';
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.title = title;
});

export default router;
