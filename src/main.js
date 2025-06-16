import { createApp } from 'vue'
import './style/common.css'
import App from './App.vue'
import header from './components/header.vue'

createApp(App)
    .component('header-component', header)
    .mount('#app')