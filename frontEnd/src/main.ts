//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import a from "./pages/Index.vue"
import b from "./pages/information.vue"

const routes = [
  { path: '/', component: a },
  { path: '/information', component: b },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})


createApp(App).use(router).mount('#app')
