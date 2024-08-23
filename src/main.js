import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // `router`のインポート

createApp(App)
  .use(router)  // `router`をVueインスタンスに追加
  .mount('#app')
