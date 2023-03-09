import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // 挂载路由实例
  .mount('#app')