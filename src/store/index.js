import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth';
import Users from './users';
import Counter from './counter';

Vue.use(Vuex);

const modules = {
  Auth,
  Users,
  Counter, // TODO: нужно будет удалить этот элемент
};

const store = new Vuex.Store({
  modules,
});

export default store;
