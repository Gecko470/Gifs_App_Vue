import Vue from 'vue'
import Vuex from 'vuex'
import ListMod from '@/modules/ListMod'
import modHistorial from "@/modules/ModHistorial";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['modHistorial']
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ListMod, modHistorial
  },
  plugins: [vuexLocal.plugin]
})
