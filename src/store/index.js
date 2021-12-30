import { createStore } from 'vuex'
import user from './modules/user'
import product from './modules/product'
import datalist from './modules/datalist'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user, product, datalist
  }
})
