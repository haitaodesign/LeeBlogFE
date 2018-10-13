import Vuex from 'vuex'

import root from './root/index'
import modules from './modules'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    ...root,
    modules
  })
  return store
}
