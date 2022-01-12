import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Нүүр',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/apps',
    name: 'Модулиуд',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "news" */ '../components/AppList.vue')
  },
  {
    path: '/news',
    name: 'Мэдээ',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "news" */ '../components/News.vue')
  },
  {
    path: '/login',
    name: 'Нэвтрэх',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/sales',
    name: 'Борлуулалт',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "sales" */ '../components/Sales.vue')
  },
  {
    path: '/purchases',
    name: 'Нийлүүлэлт',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "purchases" */ '../components/Purchases.vue')
  },
  {
    path: '/products',
    name: 'Бүтээгдхүүн',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "products" */ '../components/Products.vue')
  },
  {
    path: '/stocks',
    name: 'Хөрөнгө',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "stocks" */ '../components/Stocks.vue')
  },
  {
    path: '/accounts',
    name: 'Санхүү',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "accounts" */ '../components/Accounts.vue')
  },
  {
    path: '/configs',
    name: 'Тохиргоо',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "configs" */ '../components/Configs.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
