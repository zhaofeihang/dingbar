// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import  { AlertPlugin } from 'vux'
import  { ToastPlugin } from 'vux'
import  { LoadingPlugin } from 'vux'

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
  render: h => h(App)
}).$mount('#app-box')

// document.addEventListener('deviceready', function() {
//   new Vue({
//     router,
//     render: h => h(App)
//   }).$mount('#app-box')
//   window.navigator.splashscreen.hide()
// }, false);
