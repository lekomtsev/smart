import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ListAds from '../views/Dashboard/ListAds.vue';
// Ads
import Orders from '../views/Ads/Orders.vue';
import Ad from '../views/Ads/Ad.vue';
import NewAd from '../views/Ads/NewAd.vue';
import List from '../views/Ads/List.vue';
import TestComp from '../views/Ads/TestComp.vue';
import SingleNews from '../views/MainNews/SingleNews.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/news/:id',
    name: 'SingleNews',
    component: SingleNews,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard/index.vue'),
    children: [
      {
        path: 'profile',
        name: 'DashboardProfile',
        component: ListAds,
        meta: {
          layout: 'dashboard',
        },
      },
    ],
    meta: {
      layout: 'dashboard',
    },
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: Ad,
    children: [
      {
        path: 'profile',
        name: 'adProfile',
        component: TestComp,
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: {
      layout: 'auth',
    },
  },
  {
    path: '*',
    redirect: '/', // или redirect на 404
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
