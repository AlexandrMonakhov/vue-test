export default {
  state: {
    draft: [],
    bottles: [],
    manufacturerDraft: [],
    manufacturerBottles: [],
    alchoDraftArr: [],
    alchoBottlesArr: [],
    alchoDraft: '',
    alchoBottles: '',
    manufacturerDraftName: '',
    manufacturerBottlesName: '',
    priceDraftArr: [],
    priceBottlesArr: [],
    priceDraft: '',
    priceBottles: ''
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
    setAlchoDraftArr(state, payload) {
      state.alchoDraftArr = payload
    },
    setAlchoBottlesArr(state, payload) {
      state.alchoBottlesArr = payload
    },
    setAlchoDraft(state, payload) {
      state.alchoDraft = payload
    },
    setAlchoBottles(state, payload) {
      state.alchoBottles = payload
    },
    setManufacturerBottlesName(state, payload) {
      state.manufacturerBottlesName = payload
    },
    setManufacturerDraftName(state, payload) {
      state.manufacturerDraftName = payload
    },
    setPriceDraftArr(state, payload) {
      state.priceDraftArr = payload
    },
    setPriceBottlesArr(state, payload) {
      state.priceBottlesArr = payload
    },
    setPriceBottles(state, payload) {
      state.priceBottles = payload
    },
    setPriceDraft(state, payload) {
      state.priceDraft = payload
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
      commit('setAlchoDraftArr', payload)
    },
    setAlchoBottlesArr({ commit }, payload) {
      commit('setAlchoBottlesArr', payload)
    },
    setAlchoDraft({ commit }, payload) {
      commit('setAlchoDraft', payload)
    },
    setAlchoBottles({ commit }, payload) {
      commit('setAlchoBottles', payload)
    },
    setManufacturerBottlesName({ commit }, payload) {
      commit('setManufacturerBottlesName', payload)
    },
    setManufacturerDraftName({ commit }, payload) {
      commit('setManufacturerDraftName', payload)
    },
    setPriceBottlesArr({ commit }, payload) {
      commit('setPriceBottlesArr', payload)
    },
    setPriceDraftArr({ commit }, payload) {
      commit('setPriceDraftArr', payload)
    },
    setPriceBottles({ commit }, payload) {
      commit('setPriceBottles', payload)
    },
    setPriceDraft({ commit }, payload) {
      commit('setPriceDraft', payload)
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
    },
    getManufBottlesName(state) {
      return state.manufacturerBottlesName
    },
    getManufDraftName(state) {
      return state.manufacturerBottlesName
    },
    getPriceBottlesArr(state) {
      return state.priceBottlesArr
    },
    getPriceDraftArr(state) {
      return state.priceDraftArr
    },
    getPriceBottles(state) {
      return state.priceBottles
    },
    getPriceDraft(state) {
      return state.priceDraft
    }
  }
}
