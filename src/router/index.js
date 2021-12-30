import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Нүүр',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/sales',
    name: 'Борлуулалт',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "sales" */ '../views/Sales.vue')
  },
  {
    path: '/purchases',
    name: 'Нийлүүлэлт',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "purchases" */ '../views/Purchases.vue')
  },
  {
    path: '/products',
    name: 'Бүтээгдхүүн',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/stocks',
    name: 'Хөрөнгө',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "stocks" */ '../views/Stocks.vue')
  },
  {
    path: '/accounts',
    name: 'Санхүү',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "accounts" */ '../views/Accounts.vue')
  },
  {
    path: '/configs',
    name: 'Тохиргоо',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "configs" */ '../views/Configs.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
