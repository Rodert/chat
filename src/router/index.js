// import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/App.vue'
// import ChatWindow from '@/components/ChatWindow.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/chat',
//     name: 'ChatWindow',
//     component: ChatWindow
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router


import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HelloWorldView from '../views/HelloWorldView.vue'

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorldView
  }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  const toPath = to.path;
  const fromPath = from.path;
  console.log(fromPath)
  console.log(toPath)
  next()
});

router.onError((err) => {
  console.log(err)
})


export default router

