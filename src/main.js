import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import  * as firebaseui from 'firebaseui'

// Component list
import Home from  './Index.vue'
import Login from './components/auth/Login.vue'
import Profile from './components/auth/Profile.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(firebase)
Vue.use(firebaseui)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
];
const router = new VueRouter(
  { 
    routes,
    mode: 'history'
   }
);
const firebaseConfig = {
  apiKey: "AIzaSyApLacqvNfrGowj2Fz4rejZ08x4PDTD-Eo",
  authDomain: "metold-97f86.firebaseapp.com",
  databaseURL: "https://metold-97f86.firebaseio.com",
  projectId: "metold-97f86",
  storageBucket: "metold-97f86.appspot.com",
  messagingSenderId: "951727539390"
}
firebase.initializeApp(firebaseConfig);


// Render App
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
