import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DetailPage from '@/views/DetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'DetailPage',
    component: DetailPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
