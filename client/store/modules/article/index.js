import { SET_ARTICLELIST } from './mutation-types'
import model from '@model'
export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {},
  mutations: {
    [SET_ARTICLELIST] (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getArticleList ({commit}) {
      const { code, data } = await model.getArticleList()
      if (code === 0) {
        commit('SET_ARTICLELIST', data)
      }
    }
  }
}
