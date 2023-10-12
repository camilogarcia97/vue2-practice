// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Tu estado inicial aquí
    numeroDePruebaVuex: 0,
  },
  mutations: {
    // Tus mutaciones aquí
    /* Para usar los metodos creados aca se de usar
     de la siguiente manera $store.commit.('nombreDelMetodo')  */
    aumentarGlobal(state){
        state.numeroDePruebaVuex = state.numeroDePruebaVuex + 111;
    }
  },
  actions: {
    // Tus acciones aquí
  },
  getters: {
    // Tus getters aquí
  },
});
