// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import store from './store'//引入store

import  { AlertPlugin,ToastPlugin,LoadingPlugin,ConfirmPlugin } from 'vux'

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin, {position: 'center'})
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

// document.addEventListener('deviceready', function() {
//   new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app-box')
//   window.navigator.splashscreen.hide()
// }, false);
