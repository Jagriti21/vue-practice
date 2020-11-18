import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Register from "./components/Register"
import Home from "./components/Home"
import Login from "./components/Login"
import Vuelidate from 'vuelidate';
import AccountDetails from './components/AccountDetails'
import UpdateDetails from './components/UpdateDetails'

Vue.use(VueRouter)
Vue.use(Vuelidate)

const spaRoutes = new VueRouter({
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AccountDetails',
      name: 'AccountDetails',
      component: AccountDetails
    },
    {
      path: '/UpdateDetails/:username',
      name: 'UpdateDetails',
      component: UpdateDetails
    }
  ],
  mode:'history'
})

new Vue({
  router: spaRoutes,
  render: h => h(App),
}).$mount('#app')