import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = { //要设置的全局访问的state对象
  //要设置的初始属性值
  userInfo: {}
};
const getters = { //实时监听state值的变化(最新状态)
  userInfo(state) { //方法名随意,主要是来承载变化的userInfo的值
    return state.userInfo
  },
};
const mutations = {
  updateUserInfo(state, userInfo) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.userInfo = userInfo;
  },
};
const actions = {
  updateUserInfo(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('userInfo');
  },
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
