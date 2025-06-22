import { createApp } from 'vue'
import './assets/scss/style.scss'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)

app.use(router).mount('#app')
