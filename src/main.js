import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'; // 👈 Importa o Tailwind aqui
import router from './router/index.js' // 👈 Importa o router

createApp(App)
    .use(router) // <<--- ESSENCIAL    
    .mount('#app')
