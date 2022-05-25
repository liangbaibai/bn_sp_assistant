import Vue from 'vue'
import Vuex from 'vuex'
import base from "./modules/base";
import global from './modules/global';
import tabMenu from './modules/tabMenu';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base,
    global,
    tabMenu
  }
});