export default {
  state: {
    draft: [],
    bottles: [],
    manufacturerDraft: [],
    manufacturerBottles: [],
    alchoDraftArr: [],
    alchoBottlesArr: [],
    alchoDraft: '0.0',
    alchoBottles: '1.5'
  },
  mutations: {
    setDraft(state, payload) {
      state.draft = payload
    },
    setBottles(state, payload) {
      state.bottles = payload
    },
    setManufacturerDraft(state, payload) {
      state.manufacturerDraft = payload
    },
    setManufacturerBottles(state, payload) {
      state.manufacturerBottles = payload
    },
    setAlchoDraft(state, payload) {
      state.alchoDraftArr = payload
    },
    setAlchoBottles(state, payload) {
      state.alchoBottlesArr = payload
    }

  },
  actions: {
    setDraft({ commit }, payload) {
      commit('setDraft', payload)
    },
    setBottles({ commit }, payload) {
      commit('setBottles', payload)
    },
    setManufacturerDraft({ commit }, payload) {
      commit('setManufacturerDraft', payload)
    },
    setManufacturerBottles({ commit }, payload) {
      commit('setManufacturerBottles', payload)
    },
    setAlchoDraftArr({ commit }, payload) {
      commit('setAlchoDraft', payload)
    },
    setAlchoBottlesArr({ commit }, payload) {
      commit('setAlchoBottles', payload)
    }
  },
  getters: {
    getDraft(state) {
      return state.draft
    },
    getBottles(state) {
      return state.bottles
    },
    getManufacturerDraft(state) {
      return state.manufacturerDraft
    },
    getManufacturerBottles(state) {
      return state.manufacturerBottles
    },
    getAlchoDraftArr(state) {
      return state.alchoDraftArr
    },
    getAlchoBottlesArr(state) {
      return state.alchoBottlesArr
    },
    getAlchoDraft(state) {
      return state.alchoDraft
    },
    getAlchoBottles(state) {
      return state.alchoBottles
    }
  }
}