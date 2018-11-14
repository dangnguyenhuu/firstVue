// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'


Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAXZ4b3Ux5yUO27jo-Z1hCMHobC8ZRECb8",
  authDomain: "firstangular-adccc.firebaseapp.com",
  databaseURL: "https://firstangular-adccc.firebaseio.com",
  projectId: "firstangular-adccc",
  storageBucket: "firstangular-adccc.appspot.com",
  messagingSenderId: "289211327626"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
