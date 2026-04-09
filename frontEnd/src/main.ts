//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import siteIndex from "./pages/Index.vue"
import siteInformation from "./pages/information.vue"
import siteAddon from "./pages/addon.vue"
import siteAddonNew from "./pages/addonNew.vue"

const routes = [
  { path: '/', component: siteIndex },
  { path: '/information', component: siteInformation },
  { path: '/addon', component: siteAddon },
  { path: '/addonNew', component: siteAddonNew },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})


createApp(App).use(router).mount('#app')
