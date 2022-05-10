import Vue from 'vue'
import Vuex from 'vuex'
import base from "./modules/base";
import global from './modules/global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base,
    global
  }
});