import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import provider from './provider';

export default new Vuex.Store({
  state: {
    selectedStart: null,
    selectedDest: null,
    navResult: null,
  },
  getters: {
    valid: state => state.selectedDest && state.selectedStart, 
    ready: state => state.selectedDest && state.selectedStart && state.navResult, 
    start: state => state.provider.start[state.selectedStart],
    dest: state => state.provider.dest[state.selectedDest],
    navResult: state => state.navResult,
  },
  mutations: {
    updateSelectedStart: (state, start) => {
      state.selectedStart = start;
    },
    updateSelectedDest: (state, dest) => {
      state.selectedDest = dest;
    },
    updateNavResult: (state, result) => {
      state.navResult = result;
    }
  },
  actions: {
  },
  modules: {
    provider,
  }
})
