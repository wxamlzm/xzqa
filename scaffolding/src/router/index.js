import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // test页面
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    children: [
      {
        path: 'demo1',
        component: () => import(/* webpackChunkName: "Demo1" */ '@/components/testing/Demo1.vue')
      },
      {
        path: 'demo2',
        component: () => import(/* webpackChunkName: "Demo2" */ '@/components/testing/Demo2.vue')
      },
      {
        path: 'demo3',
        component: () => import(/* webpackChunkName: "Demo3" */ '@/components/testing/Demo3.vue')
      },
      {
        path: 'demo4',
        component: () => import(/* webpackChunkName: "Demo4" */ '@/components/testing/Demo4.vue')
      },
      {
        path: 'demo5',
        component: () => import(/* webpackChunkName: "Demo5" */ '@/components/testing/Demo5.vue')
      },
      {
        path: 'demo6',
        component: () => import(/* webpackChunkName: "Demo6" */ '@/components/testing/Demo6.vue')
      },
      {
        path: 'demo7',
        component: () => import(/* webpackChunkName: "Demo7" */ '@/components/testing/Demo7.vue')
      }
    ]
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
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: "Login"*/ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/*webpackChunkName: "register"*/ '../views/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
