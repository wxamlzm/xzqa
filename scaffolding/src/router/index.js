import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // test页面
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  },
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
    path: '/header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "header" */ '../views/testing/Header.vue')
  },
  {
    path: '/field',
    name: 'Field',
    component: () => import(/* webpackChunkName: "field" */ '../views/testing/Field.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/testing/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/testing/Login.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import(/* webpackChunkName: "nav" */ '../views/testing/Nav.vue')
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: () => import(/* webpackChunkName: "tabbar" */ '../views/testing/Tabbar.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
