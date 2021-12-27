import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(VueAxios, axios)
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.mount('#app')
