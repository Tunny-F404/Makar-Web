import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 在应用挂载之前处理查询参数
const query = new URLSearchParams(window.location.search)
const path = query.get('path')

// 如果有路径参数，则进行路由导航
if (path) {
  router.push(path)
}
