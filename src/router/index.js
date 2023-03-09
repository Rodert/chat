import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/App.vue'
import ChatWindow from '@/components/ChatWindow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'ChatWindow',
    component: ChatWindow
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
