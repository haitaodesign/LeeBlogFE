import { SET_ARTICLELIST, SET_CONTENT, SET_UPDATEAT, SET_CREATEAT } from './mutation-types'
import model from '@model'
export default {
  namespaced: true,
  state: {
    list: [],
    content: '',
    updateAt: '',
    createAt: ''
  },
  getters: {},
  mutations: {
    [SET_ARTICLELIST] (state, payload) {
      state.list = payload
    },
    [SET_CONTENT] (state, payload) {
      state.content = payload
    },
    [SET_UPDATEAT] (state, payload) {
      state.updateAt = payload
    },
    [SET_CREATEAT] (state, payload) {
      state.createAt = payload
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
        const { content, createAt } = data
        commit('SET_CONTENT', content)
        commit('SET_UPDATEAT', data.update_at)
        commit('SET_CREATEAT', createAt)
      }
    }
  }
}
