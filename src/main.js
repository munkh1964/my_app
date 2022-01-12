import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { FontAwesomeIcon } from './plugins/font-awesome'

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.component('fa', FontAwesomeIcon)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'