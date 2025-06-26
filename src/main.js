import { createApp } from 'vue'
import './assets/scss/style.scss'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)

const REDIRECT_KEY = 'redirect'
const redirectPath = sessionStorage.getItem(REDIRECT_KEY)
if (redirectPath) {
  sessionStorage.removeItem(REDIRECT_KEY)
  const relativePath = redirectPath.replace(location.origin, '')
  router.replace(relativePath)
}

app.use(router).mount('#app')
