import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth';
import Users from './users';
import Counter from './counter';
import News from './news';

Vue.use(Vuex);

const modules = {
  Auth,
  Users,
  Counter, // TODO: нужно будет удалить этот элемент
  News,
};

const store = new Vuex.Store({
  modules,
});

export default store;
