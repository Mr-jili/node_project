import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    //关于
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    //新手入门
    {
      path: '/getstart',
      name: 'getstart',
      component: () => import('./views/Getstart.vue')
    },
    //api
    {
      path: '/api',
      name: 'api',
      component: () => import('./views/Api.vue')
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    //登陆
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    }
  ]
})
