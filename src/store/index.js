import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import provider from './provider';

export default new Vuex.Store({
  state: {
    selectedStart: null,
    selectedDest: null,
  },
  getters: {
    valid: state => state.selectedDest && state.selectedStart, 
  },
  mutations: {
    updateSelectedStart: (state, start) => {
      state.selectedStart = start;
    },
    updateSelectedDest: (state, dest) => {
      state.selectedDest = dest;
    },
  },
  actions: {
  },
  modules: {
    provider,
  }
})
