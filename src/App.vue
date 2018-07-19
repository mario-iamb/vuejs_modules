<template>
  <div id="app">
    
    <!-- <test msg="Passing component properties"></test>
    <hello></hello> -->

    <ul class="nav">
      <li><router-link to="/">Home [Test]</router-link></li>
      <li><router-link to="/Hello">Hello</router-link></li>
      <li><router-link to="/Resource">Resource</router-link></li>
      <li><router-link to="/Users">Users</router-link></li>
      <li><router-link to="/Dashboard">Dashboard</router-link></li>
    </ul>

    <router-view></router-view>
    
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Test from './components/Test'
  // import Users from './components/Users'
  // import Resource from './components/Resource'
  // import Dashboard from './components/Dashboard'

  export default {
    name: 'app',
    components: {
      Hello, Test
    }
    
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

ul.nav {
  list-style-type: none;
  padding: 0;
}

ul.nav li {
  display: inline-block;
  margin: 0 10px;
}

ul.nav li a {
  color: #42b983;
}

</style>
