import { SET_ARTICLELIST, SET_CONTENT } from './mutation-types'
import model from '@model'
export default {
  namespaced: true,
  state: {
    list: [],
    content: ''
  },
  getters: {},
  mutations: {
    [SET_ARTICLELIST] (state, payload) {
      state.list = payload
    },
    [SET_CONTENT] (state, payload) {
      state.content = payload
    }
  },
  actions: {
    async getArticleList ({commit}) {
      const { code, data } = await model.getArticleList()
      if (code === 0) {
        commit('SET_ARTICLELIST', data)
      }
    },
    async getArticleById ({commit}, payload) {
      const { code, data } = await model.getArticleById(payload)
      if (code === 0) {
        commit('SET_CONTENT', data)
      }
    }
  }
}
