import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from  './Index.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(firebase)

const routes = [
  { path: '/', component: Home },
];
const router = new VueRouter(
  { 
    routes,
    mode: 'history'
   }
);
const firebaseConfig = {
  apiKey: "AIzaSyBH-doxxkRr3GPy5Pf1D9nozvzgvh2c1SI",
  authDomain: "metold-97f86.firebaseapp.com",
  databaseURL: "https://metold-97f86.firebaseio.com",
  projectId: "metold-97f86",
  storageBucket: "metold-97f86.appspot.com",
  messagingSenderId: "951727539390"
}
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
