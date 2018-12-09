// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import AppDate from '@/components/AppDate'
import store from '@/store'
import {firebaseConfig} from './firebase-config'
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
