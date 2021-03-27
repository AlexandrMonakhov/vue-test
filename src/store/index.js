import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: [],
    selected: 'draft'
  },
  mutations: {
  },
  actions: {

  },
  getters: {
    getSelected(state) {
      return state.selected
    }
  }
})
