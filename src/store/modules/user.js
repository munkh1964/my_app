export default {
  actions: {
  },
  mutations: {
  },
  state: {
    isAuth: false,
    userGroup: 'Admin'
  },
  getters: {
    userGroup(state) {
      return state.userGroup
    },
    isAuth(state) {
      return state.isAuth
    }
  }
}