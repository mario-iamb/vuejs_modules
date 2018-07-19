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

<style lang="scss">

body, html {
  margin:0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul.nav {
  width: 100%;
  list-style-type: none;
  padding: 10px 0;
  margin: 0;
  background: lightblue;

  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: grey;
      font-size: 14px;
      text-decoration: none;
    }
  }
}

</style>
