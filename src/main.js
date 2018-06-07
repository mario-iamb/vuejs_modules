// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// import main App component

// import Test from './components/Test'
// import Users from './components/Users'
// import Resource from './components/Resource'
// import Dashboard from './components/Dashboard'

import vueResource from 'vue-resource'
Vue.use(vueResource) //allows to GET data from external URL

//Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {path:'/',component: Test},
//     {path:'/users', component: Users},
//     {path:'/resource', component: Resource},
//     {path:'/dashboard', component: Dashboard}
//   ]
// });

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: { App }
})