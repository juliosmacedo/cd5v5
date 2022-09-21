import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import { createWPWidget } from '~/modules'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.scss'

createWPWidget()

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(Notifications)
app.mount('#app')
