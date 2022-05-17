import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'



Vue.use(VueRouter)


//routes 参数命名不能变
const routes = [
  {
    path: '/',  
    name: 'Main',
    component: Main,
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: Home
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: User
      // },
      // {
      //   path: '/mall',
      //   name:  'mall',
      //   component: Mall
      // },
      // {
      //   path: '/page1',
      //   name:  'page1',
      //   component: PageOne
      // },
      // {
      //   path: '/page2',
      //   name:  'page2',
      //   component: PageTwo
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

