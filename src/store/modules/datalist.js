import axios from "axios"

export default {
  state: {
    records: []
  },
  mutations: {
    updateRecords(state, records) {
      state.records = records
    }
  },
  actions: {
    async getRecords(ctx) {
      // Бичлэг татах
      const result = axios.get()
      const records = await result.json()
      ctx.commit('updateRecords', records)
    }
  },
  getters: {
    getData(state) {
      return state.records
    }
  }
}