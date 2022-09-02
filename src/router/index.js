import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/MainHome')
  },
  {
    path: '/shop/:id',
    name: 'shopPart',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/shopPart')
  },
  {
    path: '/login',
    name: 'LoginPart',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginPart'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/register',
    name: 'RegisterPart',
    component: () => import(/* webpackChunkName: "register" */  '../views/register/RegisterPart'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === 'LoginPart' || name === 'RegisterPart');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'LoginPart' })
})

export default router
