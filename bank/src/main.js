import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Register from "./components/Register"
import Home from "./components/Home"
import Login from "./components/Login"

Vue.use(VueRouter)

const spaRoutes = new VueRouter({
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path:'/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ],
  mode:'history'
})

new Vue({
  router: spaRoutes,
  render: h => h(App),
}).$mount('#app')