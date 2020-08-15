import Vue from "vue";
import Vuex from "vuex";
import api from "../service/api";
import { server } from "../service/constants";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: ""
  },
  getters: {
    isLogin(state) {
      return state.isLogged;
    },
    username(state) {
      return "คุณ " + state.username;
    }
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogged = true;
    },
    SET_USERNAME(state, value) {
      state.username = value;
    },
    SET_LOGGED_OUT(state) {
      state.isLogged = false;
    }
  },
  actions: {
    restoreLogin({ commit }) {
      if (api.isLoggedIn() == true) {
        let username = localStorage.getItem(server.USERNAME);
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      }
    },
    async doLogin({ commit, dispatch }, { username, password }) {
      let result = await api.login({ username, password });
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {}
});
