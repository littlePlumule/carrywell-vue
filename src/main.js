import { createApp } from 'vue'
import './assets/scss/style.scss'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)

app.use(router)

const REDIRECT_KEY = 'redirect'
const redirectPath = sessionStorage.getItem(REDIRECT_KEY)

router.isReady().then(async () => {
  if (redirectPath) {
    sessionStorage.removeItem(REDIRECT_KEY)

    const base = import.meta.env.BASE_URL || '/'
    const relativePath = redirectPath.startsWith(base)
      ? redirectPath.slice(base.length - 1)
      : redirectPath

    const matchedRoutes = router.resolve(relativePath).matched

    if (matchedRoutes.length > 0) {
      await router.replace(relativePath)
    } else {
      await router.replace({ name: 'NotFound' })
    }
  }

  app.mount('#app')
})
