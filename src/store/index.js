import { createStore } from 'vuex'
import user from './modules/user'
import product from './modules/product'
import datalist from './modules/datalist'
import { auth } from "./modules/auth.module"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user, product, datalist, auth
  }
})
