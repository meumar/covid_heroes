import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import axios from 'axios'
import firebase from 'firebaser/app'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

const firebaseConfig = {
  apiKey: "AIzaSyAfpp8AyhtOm1RFClKNMIqn7QTuhzSnT6Q",
  authDomain: "life-guards.firebaseapp.com",
  databaseURL: "https://life-guards.firebaseio.com",
  projectId: "life-guards",
  storageBucket: "life-guards.appspot.com",
  messagingSenderId: "285313705361",
  appId: "1:285313705361:web:f35e3c85a3e32da8596630",
  measurementId: "G-K4MMBCGHWZ"
};

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
