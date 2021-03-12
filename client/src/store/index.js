import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Settings from "./modules/Settings"
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: { Settings },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
})

export default store