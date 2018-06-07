<template>
  <div id="app">
    <h2>Hello App</h2>
    <!-- <test msg="Passing component properties"></test> -->
    <!-- <hello></hello> -->
    <!-- <users></users> -->
    <!-- <resource></resource> -->
    <router-view></router-view>
  </div>
</template>

<script>
  // import Hello from './components/Hello'
  // import Test from './components/Test'
  // import Users from './components/Users'
  // import Resource from './components/Resource'
  // import Dashboard from './components/Dashboard'

  export default {
    name: 'app'
    // components: {
    //   Test, Hello, Users, Resource, Dashboard
    // }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
