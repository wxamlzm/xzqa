import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Button.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Header.vue')
  },
  {
    path: '/field',
    name: 'Field',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Field.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Login.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Nav.vue')
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Tabbar.vue')
  },
// 测试多页面跳转
  {
    path: '/wode',
    name: 'Wode',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Wode.vue')
  },
  {
    path: '/gouwuche',
    name: 'Gouwuche',
    component: () => import(/* webpackChunkName: "about" */ '../views/testing/Gouwuche.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
