// Place where the Vue application is initialized

  
import Vue from 'vue'    // Vue is the main class of the framework
import App from './App'  // App is the root component of out application
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