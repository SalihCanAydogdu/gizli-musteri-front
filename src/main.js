import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Bootstrap CSS dosyasını ekle
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS dosyasını ekle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
